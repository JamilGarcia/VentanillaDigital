import { Router } from 'express';
import { getCategorias } from '../controllers/categorias.controller.js';
import { getInstituciones } from '../controllers/instituciones.controller.js';
import { getTramites, getTramiteById } from '../controllers/tramites.controller.js';

const router = Router();

router.get('/categorias', getCategorias);
router.get('/instituciones', getInstituciones);
router.get('/tramites', getTramites);
router.get('/tramites/:id', getTramiteById);

export default router;
