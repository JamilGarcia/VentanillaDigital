import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, CreditCard, Building } from 'lucide-react';
import ModalidadBadge from '../components/ModalidadBadge';
import InfoBubble from '../components/InfoBubble';

export default function CatalogProposal1({
  searchTerm, setSearchTerm,
  selectedCategory, setSelectedCategory,
  selectedInst, setSelectedInst,
  filteredTramites,
  totalResults,
  searchParams, setSearchParams,
  clearFilters, hasFilters,
  categorias, instituciones
}) {
  return (
    <>
      <div className="catalog-controls">
        <div className="search-bar-container">
          <Search className="search-icon" size={20} color="var(--text-secondary-light)" />
          <input 
            type="text" 
            placeholder="Buscar trámite..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filters-container" style={{ display: 'flex', gap: '1rem', flex: '1', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: 0 }}>
            <Filter size={18} color="var(--text-secondary-light)" style={{ flexShrink: 0 }} />
            <select 
              className="category-select"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                const newParams = new URLSearchParams(searchParams);
                if (e.target.value === 'all') newParams.delete('category');
                else newParams.set('category', e.target.value);
                setSearchParams(newParams);
              }}
              style={{ width: '100%' }}
            >
              <option value="all">Todas las categorías</option>
              {categorias.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--border-light)', flexShrink: 0 }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: 0 }}>
            <Building size={18} color="var(--text-secondary-light)" style={{ flexShrink: 0 }} />
            <select 
              className="category-select"
              value={selectedInst}
              onChange={(e) => {
                setSelectedInst(e.target.value);
                const newParams = new URLSearchParams(searchParams);
                if (e.target.value === 'all') newParams.delete('institution');
                else newParams.set('institution', e.target.value);
                setSearchParams(newParams);
              }}
              style={{ width: '100%' }}
            >
              <option value="all">Todas las instituciones</option>
              {instituciones.map(i => (
                <option key={i.id} value={i.id}>{i.name}</option>
              ))}
            </select>
          </div>
          {hasFilters && (
            <button className="btn-secondary" onClick={clearFilters} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      <div className="tramites-grid">
        {filteredTramites.length > 0 ? (
          filteredTramites.map(tramite => (
            <div key={tramite.id} className="tramite-card">
              <h3 className="tramite-title">{tramite.titulo}</h3>
              <p className="tramite-desc">{tramite.descripcion}</p>
              
              <div className="tramite-meta">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{tramite.tiempoEstimado}</span>
                  <InfoBubble text="El tiempo es calculado asumiendo que todos los requisitos se entregan a tiempo y sin atrasos." />
                </div>
                <div className="meta-item">
                  <CreditCard size={16} />
                  <span>{tramite.costo}</span>
                </div>
                <div className="meta-item">
                  <Building size={16} />
                  <span>{instituciones.find(i => i.id === tramite.institucionId)?.name || 'Institución Gubernamental'}</span>
                </div>
                <div className="meta-item">
                  <ModalidadBadge modalidad={tramite.modalidad} instName={instituciones.find(i => i.id === tramite.institucionId)?.name} pasos={tramite.pasos} />
                </div>
              </div>

              <div className="tramite-actions">
                <Link to={`/tramites/${tramite.id}`} style={{textDecoration: 'none', width: '100%'}}>
                  <button className="btn-primary full-width">{tramite.modalidad === 'Presencial' ? 'Ver detalles' : 'Iniciar Trámite'}</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron trámites con esos criterios de búsqueda.</p>
          </div>
        )}
      </div>
    </>
  );
}
