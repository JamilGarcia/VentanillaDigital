import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  user: process.env.DB_USER || 'ventanilla_user',
  password: process.env.DB_PASSWORD || 'Ventanilla123!',
  server: 'localhost', 
  port: 1433,
  database: process.env.DB_NAME || 'VentanillaDigital',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

let pool = null;

export const getConnection = async () => {
    try {
        if (pool) {
            return pool;
        }
        pool = await sql.connect(config);
        console.log("Conectado a SQL Server exitosamente.");
        return pool;
    } catch (err) {
        console.error("Error al conectar a SQL Server:", err);
        throw err;
    }
};
