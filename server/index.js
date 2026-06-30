import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Montar rutas del API
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Backend API escuchando en http://localhost:${port}`);
});
