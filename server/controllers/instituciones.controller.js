import { getConnection } from '../db.js';

export const getInstituciones = async (req, res) => {
    try {
        const pool = await getConnection();
        // Optimización: Solo traer los campos necesarios
        const result = await pool.request().query('SELECT id, name, type, total, online, presencial FROM instituciones');
        res.json(result.recordset);
    } catch (error) {
        console.error("Error en getInstituciones:", error);
        res.status(500).json({ error: error.message });
    }
};
