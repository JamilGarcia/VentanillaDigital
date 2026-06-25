import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, CreditCard, Building, ArrowUpRight } from 'lucide-react';
import { categorias, instituciones } from '../mockData';
import ModalidadBadge from '../components/ModalidadBadge';

export default function CatalogProposal3({
  searchTerm, setSearchTerm,
  selectedCategory, setSelectedCategory,
  selectedInst, setSelectedInst,
  filteredTramites,
  totalResults,
  searchParams, setSearchParams,
  clearFilters, hasFilters
}) {
  return (
    <div className="catalog-proposal-3">
      {/* Modern Glassmorphic Search Header */}
      <div className="bento-search-header">
        <div className="bento-search-box">
          <Search className="search-icon" size={24} color="var(--primary-color)" />
          <input 
            type="text" 
            placeholder="¿Qué trámite estás buscando?" 
            className="search-input bento-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="bento-filters">
          <select 
            className="bento-select"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              const newParams = new URLSearchParams(searchParams);
              if (e.target.value === 'all') newParams.delete('category');
              else newParams.set('category', e.target.value);
              setSearchParams(newParams);
            }}
          >
            <option value="all">Categorías</option>
            {categorias.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          <select 
            className="bento-select"
            value={selectedInst}
            onChange={(e) => {
              setSelectedInst(e.target.value);
              const newParams = new URLSearchParams(searchParams);
              if (e.target.value === 'all') newParams.delete('institution');
              else newParams.set('institution', e.target.value);
              setSearchParams(newParams);
            }}
          >
            <option value="all">Instituciones</option>
            {instituciones.map(i => (
              <option key={i.id} value={i.id}>{i.name}</option>
            ))}
          </select>
          {hasFilters && (
            <button className="btn-secondary bento-clear-btn" onClick={clearFilters} style={{ whiteSpace: 'nowrap', padding: '0.75rem 1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', background: 'transparent', color: 'var(--text-secondary-light)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
              Limpiar
            </button>
          )}
        </div>
      </div>

      <div className="bento-grid">
        {filteredTramites.length > 0 ? (
          filteredTramites.map((tramite, index) => {
            // Make some cards larger randomly or based on index to create a bento box feel
            const isLarge = index % 5 === 0;
            return (
              <div key={tramite.id} className={`bento-card ${isLarge ? 'bento-large' : ''}`}>
                <div className="bento-card-content">
                  <div className="bento-card-header">
                    <span className="bento-badge">
                      {categorias.find(c => c.id === tramite.categoriaId)?.name || 'Trámite'}
                    </span>
                    <Link to={`/tramites/${tramite.id}`} style={{textDecoration: 'none'}}>
                      <button className="bento-action-btn">
                        <ArrowUpRight size={20} />
                      </button>
                    </Link>
                  </div>
                  
                  <div className="bento-card-body">
                    <h3 className="bento-title">{tramite.titulo}</h3>
                    <p className="bento-desc">{tramite.descripcion}</p>
                  </div>
                  
                  <div className="bento-card-footer">
                    <ModalidadBadge modalidad={tramite.modalidad} />
                    <div className="bento-meta">
                      <Clock size={16} /> {tramite.tiempoEstimado}
                    </div>
                    <div className="bento-meta">
                      <CreditCard size={16} /> {tramite.costo}
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay detail */}
                <div className="bento-hover-overlay">
                  <h4>{instituciones.find(i => i.id === tramite.institucionId)?.name || 'Institución'}</h4>
                  <Link to={`/tramites/${tramite.id}`} style={{textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <button className="btn-primary" style={{marginTop: '1rem'}}>{tramite.modalidad === 'Presencial' ? 'Ver detalles' : 'Comenzar Ahora'}</button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results" style={{ gridColumn: '1 / -1' }}>
            <p>No se encontraron trámites con esos criterios de búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
