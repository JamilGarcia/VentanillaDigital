import { getConnection } from '../db.js';

export const getCategorias = async (req, res) => {
    try {
        const pool = await getConnection();
        // Optimización: Solo traer los campos necesarios en lugar de SELECT *
        const result = await pool.request().query('SELECT id, name, icon FROM categorias');
        res.json(result.recordset);
    } catch (error) {
        console.error("Error en getCategorias:", error);
        res.status(500).json({ error: error.message });
    }
};
