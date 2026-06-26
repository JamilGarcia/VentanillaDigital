import express from 'express';
import cors from 'cors';
import { getConnection } from './db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Obtener todas las categorías
app.get('/api/categorias', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM categorias');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todas las instituciones
app.get('/api/instituciones', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM instituciones');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todos los trámites con sus requisitos y pasos
app.get('/api/tramites', async (req, res) => {
    try {
        const pool = await getConnection();
        const tramitesResult = await pool.request().query('SELECT * FROM tramites');
        const requisitosResult = await pool.request().query('SELECT * FROM tramite_requisitos');
        const pasosResult = await pool.request().query('SELECT * FROM tramite_pasos');
        const lugaresResult = await pool.request().query('SELECT * FROM tramite_lugares');
        const plantillasResult = await pool.request().query('SELECT * FROM tramite_plantillas');
        const relacionadosResult = await pool.request().query('SELECT * FROM tramite_relacionados');

        // Transformar la propiedad 'popular' y agrupar requisitos y pasos
        const tramites = tramitesResult.recordset.map(t => ({
            ...t,
            popular: t.popular === true || t.popular === 1,
            tiempoEstimado: t.tiempo_estimado,
            institucionId: t.institucion_id,
            categoriaId: t.categoria_id,
            requisitos: requisitosResult.recordset
                .filter(r => r.tramite_id === t.id)
                .map(r => ({
                    texto: r.texto,
                    ejemplo: r.ejemplo_url
                })),
            pasos: pasosResult.recordset
                .filter(p => p.tramite_id === t.id)
                .sort((a, b) => a.orden - b.orden)
                .map(p => ({
                    titulo: p.titulo,
                    descripcion: p.descripcion,
                    dependencia: p.dependencia,
                    modalidad: p.modalidad,
                    tiempo: p.tiempo,
                    requisito: p.requisito
                })),
            lugares: lugaresResult.recordset
                .filter(l => l.tramite_id === t.id)
                .map(l => ({
                    nombre: l.nombre,
                    ciudad: l.ciudad,
                    direccion: l.direccion,
                    horario: l.horario
                })),
            plantillas: plantillasResult.recordset
                .filter(pl => pl.tramite_id === t.id)
                .map(pl => ({
                    nombre: pl.nombre,
                    formato: pl.formato,
                    tamano: pl.tamano,
                    url: pl.url
                })),
            tramitesRelacionados: relacionadosResult.recordset
                .filter(tr => tr.tramite_id === t.id)
                .map(tr => tr.tramite_relacionado_id)
        }));
        res.json(tramites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Backend API escuchando en http://localhost:${port}`);
});
