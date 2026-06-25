import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categorias, tramites } from '../mockData';
import { 
  HeartPulse, 
  GraduationCap, 
  CreditCard, 
  Contact, 
  Building2, 
  Home, 
  Car, 
  Leaf, 
  ArrowRight,
  ChevronRight,
  FileText,
  Layers
} from 'lucide-react';
import '../services.css';

// Icon mapper
const getIcon = (iconName, size = 24) => {
  const icons = {
    HeartPulse: <HeartPulse size={size} />,
    GraduationCap: <GraduationCap size={size} />,
    CreditCard: <CreditCard size={size} />,
    Contact: <Contact size={size} />,
    Building2: <Building2 size={size} />,
    Home: <Home size={size} />,
    Car: <Car size={size} />,
    Leaf: <Leaf size={size} />
  };
  return icons[iconName] || <ChevronRight size={size} />;
};

export default function Services() {
  const [activeProposal, setActiveProposal] = useState(1);

  const getCategoryDescription = (name) => {
    return `Explora todos los trámites y servicios disponibles en el área de ${name}. Encuentra lo que necesitas de forma rápida y segura.`;
  };

  const getStats = (categoryId) => {
    const tramitesCount = tramites.filter(t => t.categoriaId === categoryId).length;
    // Mocking topics based on tramites
    const temasCount = Math.max(1, Math.ceil(tramitesCount / 1.5));
    return { tramitesCount, temasCount };
  };

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Explora Servicios por Categoría</h1>
        <p>Encuentra todos los trámites organizados por áreas temáticas para facilitar tu búsqueda y acceso a servicios gubernamentales.</p>
      </div>

      <div className="proposal-selector">
        <button 
          className={`proposal-btn ${activeProposal === 1 ? 'active' : ''}`}
          onClick={() => setActiveProposal(1)}
        >
          Propuesta 1 (Bento)
        </button>
        <button 
          className={`proposal-btn ${activeProposal === 2 ? 'active' : ''}`}
          onClick={() => setActiveProposal(2)}
        >
          Propuesta 2 (Lista)
        </button>
        <button 
          className={`proposal-btn ${activeProposal === 3 ? 'active' : ''}`}
          onClick={() => setActiveProposal(3)}
        >
          Propuesta 3 (Tarjetas Flotantes)
        </button>
      </div>

      {/* Propuesta 1: Bento Box */}
      {activeProposal === 1 && (
        <div className="services-prop-1">
          {categorias.map(cat => {
            const { tramitesCount, temasCount } = getStats(cat.id);
            return (
              <Link to={`/servicios/${cat.id}`} key={cat.id} className="bento-card">
                <div className="bento-icon-wrapper">
                  {getIcon(cat.icon, 28)}
                </div>
                <h3>{cat.name}</h3>
                <div className="service-stats">
                  <div className="stat-item">
                    <Layers size={14} /> {temasCount} temas
                  </div>
                  <div className="stat-item">
                    <FileText size={14} /> {tramitesCount} trámites
                  </div>
                </div>
                <p>{getCategoryDescription(cat.name)}</p>
                <div className="bento-link">
                  Explorar Área <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Propuesta 2: Lista Expandible */}
      {activeProposal === 2 && (
        <div className="services-prop-2">
          {categorias.map(cat => {
            const { tramitesCount, temasCount } = getStats(cat.id);
            return (
              <Link to={`/servicios/${cat.id}`} key={cat.id} className="list-card">
                <div className="list-content">
                  <div className="list-icon">
                    {getIcon(cat.icon, 32)}
                  </div>
                  <div className="list-text">
                    <h3>{cat.name}</h3>
                    <p>{getCategoryDescription(cat.name)}</p>
                    <div className="list-stats">
                      <div className="stat-item">
                        <Layers size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} /> {temasCount} temas
                      </div>
                      <div className="stat-item">
                        <FileText size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} /> {tramitesCount} trámites
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-action">
                  Explorar <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Propuesta 3: Tarjetas Flotantes Neomórficas */}
      {activeProposal === 3 && (
        <div className="services-prop-3">
          {categorias.map(cat => {
            const { tramitesCount, temasCount } = getStats(cat.id);
            return (
              <Link to={`/servicios/${cat.id}`} key={cat.id} className="float-card">
                <div className="float-icon">
                  {getIcon(cat.icon, 36)}
                </div>
                <div className="float-text">
                  <h3>{cat.name}</h3>
                  <div className="float-stats">
                    <span><Layers size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} /> {temasCount} temas</span>
                    <span><FileText size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} /> {tramitesCount} trámites</span>
                  </div>
                </div>
                <div className="float-action">
                  Explorar Área <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
