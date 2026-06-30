import { getConnection } from '../db.js';

export const getEstadisticas = async (req, res) => {
    try {
        const pool = await getConnection();
        
        const result = await pool.request().query(`
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN modalidad IN ('Virtual', 'Híbrido') THEN 1 ELSE 0 END) as digitales,
                SUM(CASE WHEN modalidad = 'Presencial' THEN 1 ELSE 0 END) as presenciales
            FROM tramites
        `);
        
        const stats = result.recordset[0] || { total: 0, digitales: 0, presenciales: 0 };
        res.json(stats);
    } catch (error) {
        console.error("Error en getEstadisticas:", error);
        res.status(500).json({ error: error.message });
    }
};
