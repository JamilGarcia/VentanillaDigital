import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tramites, instituciones, categorias } from '../mockData';
import { ArrowLeft } from 'lucide-react';

import TramiteProposal3 from './TramiteProposal3';

export default function TramiteDetail() {
  const { id } = useParams();

  // Buscar el trámite actual
  const tramite = tramites.find(t => t.id === id);

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

  // Obtener la información de la institución y categoría
  const institucion = instituciones.find(i => i.id === tramite.institucionId);
  const categoria = categorias.find(c => c.id === tramite.categoriaId);

  // Obtener trámites relacionados
  const relacionados = (tramite.tramitesRelacionados || []).map(relId => {
    return tramites.find(t => t.id === relId);
  }).filter(Boolean); // Filtrar nulos por si acaso

  // Props compartidas para las propuestas
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
