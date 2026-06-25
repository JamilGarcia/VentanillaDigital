import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { tramites } from '../mockData';
import { LayoutGrid, List, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

import CatalogProposal1 from './CatalogProposal1';
import CatalogProposal2 from './CatalogProposal2';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extraemos los filtros iniciales de los search params
  const initialInst = searchParams.get('institution') || 'all';
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedInst, setSelectedInst] = useState(initialInst);
  
  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Estado para la propuesta seleccionada
  const [activeProposal, setActiveProposal] = useState(1);

  // Sincronizar estado cuando cambian los search params (por navegación, links, etc.)
  useEffect(() => {
    setSelectedInst(initialInst);
  }, [initialInst]);
  
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Reset a la página 1 cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedInst]);

  const filteredTramites = tramites.filter(t => {
    const matchesSearch = t.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || t.categoriaId === selectedCategory;
    const matchesInst = selectedInst === 'all' || t.institucionId === selectedInst;
    return matchesSearch && matchesCategory && matchesInst;
  });

  const totalPages = Math.max(1, Math.ceil(filteredTramites.length / itemsPerPage));
  const paginatedTramites = filteredTramites.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedInst('all');
    setSearchParams(new URLSearchParams());
    setCurrentPage(1);
  };

  const hasFilters = searchTerm !== '' || selectedCategory !== 'all' || selectedInst !== 'all';

  const proposalProps = {
    searchTerm, setSearchTerm,
    selectedCategory, setSelectedCategory,
    selectedInst, setSelectedInst,
    filteredTramites: paginatedTramites,
    totalResults: filteredTramites.length,
    searchParams, setSearchParams,
    clearFilters, hasFilters
  };

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h1>Catálogo de Trámites</h1>
        <p>Encuentra toda la información y requisitos para tus gestiones.</p>
      </div>

      {/* Selector de Vistas (Switcher) */}
      <div className="proposal-switcher-container" style={{ justifyContent: 'flex-end', marginBottom: '1rem', paddingRight: '2rem' }}>
        <div className="proposal-switcher" style={{ padding: '0.25rem', borderRadius: '8px' }}>
          <button 
            className={`proposal-btn ${activeProposal === 1 ? 'active' : ''}`}
            onClick={() => setActiveProposal(1)}
            title="Vista Cuadrícula"
            style={{ padding: '0.5rem', minWidth: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LayoutGrid size={20} />
          </button>
          <button 
            className={`proposal-btn ${activeProposal === 2 ? 'active' : ''}`}
            onClick={() => setActiveProposal(2)}
            title="Vista Lista"
            style={{ padding: '0.5rem', minWidth: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Renderizado condicional de las propuestas */}
      {activeProposal === 1 && <CatalogProposal1 {...proposalProps} />}
      {activeProposal === 2 && <CatalogProposal2 {...proposalProps} />}

      {/* Paginación Global */}
      {totalPages > 1 && (
        <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '3rem', marginBottom: '2rem' }}>
          <button 
            className="btn-secondary" 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '2rem' }}
          >
            <ChevronLeft size={18} /> Anterior
          </button>
          
          <div className="pagination-info" style={{ fontWeight: '600', color: 'var(--text-secondary-light)' }}>
            Página <span style={{ color: 'var(--primary-color)' }}>{currentPage}</span> de {totalPages}
          </div>

          <button 
            className="btn-secondary" 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '2rem' }}
          >
            Siguiente <ChevronRight size={18} />
          </button>
        </div>
      )}

    </div>
  );
}
