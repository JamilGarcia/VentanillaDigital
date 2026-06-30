import { getConnection } from '../db.js';

export const getCategorias = async (req, res) => {
    try {
        const pool = await getConnection();
        // Optimización: Usar LEFT JOIN y COUNT para devolver el número de trámites directamente
        const result = await pool.request().query(`
            SELECT c.id, c.name, c.icon, COUNT(t.id) as tramitesCount 
            FROM categorias c
            LEFT JOIN tramites t ON c.id = t.categoria_id
            GROUP BY c.id, c.name, c.icon
        `);
        res.json(result.recordset);
    } catch (error) {
        console.error("Error en getCategorias:", error);
        res.status(500).json({ error: error.message });
    }
};
