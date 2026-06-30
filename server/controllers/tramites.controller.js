import { getConnection } from '../db.js';

export const getTramites = async (req, res) => {
    try {
        const pool = await getConnection();
        
        // 1. Obtener la información básica de todos los trámites
        const tramitesResult = await pool.request().query(`
            SELECT id, titulo, descripcion, categoria_id, institucion_id, 
                   tiempo_estimado, costo, modalidad, popular 
            FROM tramites
        `);
        
        // 2. Obtener SOLO la información mínima de pasos necesaria para el catálogo (para ModalidadBadge)
        const pasosResult = await pool.request().query(`
            SELECT tramite_id, titulo, modalidad 
            FROM tramite_pasos
        `);
        
        // Transformar la data para el listado del catálogo
        const tramites = tramitesResult.recordset.map(t => ({
            id: t.id,
            titulo: t.titulo,
            descripcion: t.descripcion,
            categoriaId: t.categoria_id, // camelCase para el frontend
            institucionId: t.institucion_id, // camelCase para el frontend
            tiempoEstimado: t.tiempo_estimado,
            costo: t.costo,
            modalidad: t.modalidad,
            popular: t.popular === true || t.popular === 1,
            // Solo incluimos pasos simplificados
            pasos: pasosResult.recordset
                .filter(p => p.tramite_id === t.id)
                .map(p => ({
                    titulo: p.titulo,
                    modalidad: p.modalidad
                }))
        }));
        
        res.json(tramites);
    } catch (error) {
        console.error("Error en getTramites:", error);
        res.status(500).json({ error: error.message });
    }
};

export const getTramiteById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        
        // Optimización: Usar parámetros para prevenir inyección SQL y consultar solo por un ID específico
        const tramiteQuery = pool.request().input('id', id);
        
        // 1. Obtener información general
        const tramiteResult = await tramiteQuery.query(`
            SELECT id, titulo, descripcion, categoria_id, institucion_id, 
                   tiempo_estimado, costo, modalidad, popular 
            FROM tramites 
            WHERE id = @id
        `);
        
        if (tramiteResult.recordset.length === 0) {
            return res.status(404).json({ message: 'Trámite no encontrado' });
        }
        
        const t = tramiteResult.recordset[0];
        
        // 2. Obtener detalles específicos
        const requisitosResult = await tramiteQuery.query(`
            SELECT texto, ejemplo_url 
            FROM tramite_requisitos 
            WHERE tramite_id = @id
        `);
        
        const pasosResult = await tramiteQuery.query(`
            SELECT orden, titulo, descripcion, dependencia, modalidad, tiempo, requisito 
            FROM tramite_pasos 
            WHERE tramite_id = @id 
            ORDER BY orden
        `);
        
        const lugaresResult = await tramiteQuery.query(`
            SELECT nombre, ciudad, direccion, horario 
            FROM tramite_lugares 
            WHERE tramite_id = @id
        `);
        
        const plantillasResult = await tramiteQuery.query(`
            SELECT nombre, formato, tamano, url 
            FROM tramite_plantillas 
            WHERE tramite_id = @id
        `);
        
        const relacionadosResult = await tramiteQuery.query(`
            SELECT tramite_relacionado_id 
            FROM tramite_relacionados 
            WHERE tramite_id = @id
        `);

        // Estructurar la respuesta
        const tramiteDetalle = {
            id: t.id,
            titulo: t.titulo,
            descripcion: t.descripcion,
            categoriaId: t.categoria_id,
            institucionId: t.institucion_id,
            tiempoEstimado: t.tiempo_estimado,
            costo: t.costo,
            modalidad: t.modalidad,
            popular: t.popular === true || t.popular === 1,
            requisitos: requisitosResult.recordset.map(r => ({
                texto: r.texto,
                ejemplo: r.ejemplo_url
            })),
            pasos: pasosResult.recordset.map(p => ({
                titulo: p.titulo,
                descripcion: p.descripcion,
                dependencia: p.dependencia,
                modalidad: p.modalidad,
                tiempo: p.tiempo,
                requisito: p.requisito
            })),
            lugares: lugaresResult.recordset.map(l => ({
                nombre: l.nombre,
                ciudad: l.ciudad,
                direccion: l.direccion,
                horario: l.horario
            })),
            plantillas: plantillasResult.recordset.map(pl => ({
                nombre: pl.nombre,
                formato: pl.formato,
                tamano: pl.tamano,
                url: pl.url
            })),
            tramitesRelacionados: relacionadosResult.recordset.map(tr => tr.tramite_relacionado_id)
        };
        
        res.json(tramiteDetalle);
    } catch (error) {
        console.error("Error en getTramiteById:", error);
        res.status(500).json({ error: error.message });
    }
};
