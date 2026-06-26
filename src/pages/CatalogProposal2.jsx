import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, CreditCard, Building, ArrowRight, BookOpen } from 'lucide-react';
import ModalidadBadge from '../components/ModalidadBadge';
import InfoBubble from '../components/InfoBubble';

export default function CatalogProposal2({
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
    <div className="catalog-proposal-2">
      <aside className="catalog-sidebar">
        <div className="sidebar-section">
          <h3>Buscar</h3>
          <div className="search-bar-container-compact">
            <Search className="search-icon" size={16} color="var(--text-secondary-light)" />
            <input 
              type="text" 
              placeholder="Ej. Pasaporte..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="sidebar-section">
          <h3><Filter size={16} /> Categorías</h3>
          <ul className="filter-list">
            <li 
              className={selectedCategory === 'all' ? 'active' : ''} 
              onClick={() => {
                setSelectedCategory('all');
                const newParams = new URLSearchParams(searchParams);
                newParams.delete('category');
                setSearchParams(newParams);
              }}
            >
              Todas
            </li>
            {categorias.map(c => (
              <li 
                key={c.id} 
                className={selectedCategory === c.id ? 'active' : ''}
                onClick={() => {
                  setSelectedCategory(c.id);
                  const newParams = new URLSearchParams(searchParams);
                  newParams.set('category', c.id);
                  setSearchParams(newParams);
                }}
              >
                {c.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h3><Building size={16} /> Instituciones</h3>
          <select 
            className="category-select sidebar-select"
            value={selectedInst}
            onChange={(e) => {
              setSelectedInst(e.target.value);
              const newParams = new URLSearchParams(searchParams);
              if (e.target.value === 'all') newParams.delete('institution');
              else newParams.set('institution', e.target.value);
              setSearchParams(newParams);
            }}
          >
            <option value="all">Todas</option>
            {instituciones.map(i => (
              <option key={i.id} value={i.id}>{i.name}</option>
            ))}
          </select>
        </div>

        {hasFilters && (
          <div className="sidebar-section" style={{ marginTop: '1rem' }}>
            <button className="btn-secondary full-width" onClick={clearFilters} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              Limpiar filtros
            </button>
          </div>
        )}
      </aside>

      <div className="catalog-content-compact">
        <div className="compact-header">
          <h2>{totalResults} Trámites encontrados</h2>
        </div>

        <div className="tramites-list-compact">
          {filteredTramites.length > 0 ? (
            filteredTramites.map(tramite => (
              <div key={tramite.id} className="tramite-row">
                <div className="tramite-row-icon">
                  <BookOpen size={24} color="var(--primary-color)" />
                </div>
                <div className="tramite-row-info">
                  <h3 className="tramite-row-title">{tramite.titulo}</h3>
                  <div className="tramite-row-meta">
                    <span className="badge badge-light">
                      <Building size={12} />
                      {instituciones.find(i => i.id === tramite.institucionId)?.name || 'Institución'}
                    </span>
                    <ModalidadBadge modalidad={tramite.modalidad} instName={instituciones.find(i => i.id === tramite.institucionId)?.name} pasos={tramite.pasos} />
                    <span className="meta-text" style={{ display: 'flex', alignItems: 'center' }}>
                      <Clock size={12}/> <span style={{ marginLeft: '4px' }}>{tramite.tiempoEstimado}</span>
                      <InfoBubble text="El tiempo es calculado asumiendo que todos los requisitos se entregan a tiempo y sin atrasos." />
                    </span>
                    <span className="meta-text"><CreditCard size={12}/> {tramite.costo}</span>
                  </div>
                </div>
                <div className="tramite-row-action">
                  <Link to={`/tramites/${tramite.id}`} style={{textDecoration: 'none'}}>
                    <button className="btn-icon-circular">
                      <ArrowRight size={18} />
                    </button>
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
      </div>
    </div>
  );
}
