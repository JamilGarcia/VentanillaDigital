import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTramites, getInstituciones, getCategorias } from '../services/api';
import { ArrowLeft, Loader2 } from 'lucide-react';

import TramiteProposal3 from './TramiteProposal3';

export default function TramiteDetail() {
  const { id } = useParams();

  const [tramite, setTramite] = useState(null);
  const [institucion, setInstitucion] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [relacionados, setRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tramites, instituciones, categorias] = await Promise.all([
          getTramites(),
          getInstituciones(),
          getCategorias()
        ]);

        const currentTramite = tramites.find(t => t.id === id);
        if (currentTramite) {
          setTramite(currentTramite);
          setInstitucion(instituciones.find(i => i.id === currentTramite.institucion_id || i.id === currentTramite.institucionId));
          setCategoria(categorias.find(c => c.id === currentTramite.categoria_id || c.id === currentTramite.categoriaId));
          
          // Trámites relacionados (si es que los hay en la estructura de la base de datos o como JSON)
          // Para este prototipo, podemos usar los IDs mockeados temporalmente si no están en DB.
          // Como la tabla actual no tiene tramitesRelacionados por defecto, dejaremos array vacío.
          // En una implementación completa se haría un JOIN a una tabla tramite_relacionados.
          setRelacionados([]); 
        }
      } catch (error) {
        console.error("Error al cargar detalle del trámite:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--primary-color)' }}>
        <Loader2 className="spinning" size={48} />
      </div>
    );
  }

  if (!tramite) {
    return (
      <div className="not-found">
        <h2>Trámite no encontrado</h2>
        <Link to="/catalog" className="btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  const proposalProps = {
    tramite,
    institucion,
    categoria,
    relacionados
  };

  return (
    <div className="tramite-detail-container">
      {/* Botón de regreso */}
      <Link to="/catalog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary-light)', textDecoration: 'none', marginBottom: '2rem', fontWeight: '500' }}>
        <ArrowLeft size={18} /> Volver al Catálogo
      </Link>

      <TramiteProposal3 {...proposalProps} />
    </div>
  );
}
