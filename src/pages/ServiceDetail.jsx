import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categorias } from '../mockData';
import { 
  HeartPulse, GraduationCap, CreditCard, Contact, 
  Building2, Home, Car, Leaf, ChevronRight,
  FolderOpen, ArrowRight, Layers, LayoutGrid, List
} from 'lucide-react';
import '../service-detail.css';

// Icon mapper for Category header
const getCategoryIcon = (iconName, size = 40) => {
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
  return icons[iconName] || <FolderOpen size={size} />;
};

// Generador dinámico de Temas "Mock" basados en el nombre de la categoría
const generateMockTemas = (categoryId, categoryName) => {
  const baseTemas = {
    '1': ['Afiliación y Beneficios', 'Citas Médicas', 'Incapacidades y Permisos'],
    '2': ['Becas y Ayudas', 'Certificaciones Académicas', 'Registro de Títulos'],
    '3': ['Declaración de Impuestos', 'Solvencias y Constancias', 'Registro Tributario (RTN)'],
    '4': ['Pasaportes y Auténticas', 'Documento de Identidad (DNI)', 'Antecedentes Policiales', 'Certificados de Nacimiento'],
    '5': ['Constitución de Empresas', 'Permisos de Operación', 'Registro Mercantil'],
    '6': ['Catastro y Avalúos', 'Impuestos de Bienes Inmuebles', 'Registro de Propiedad'],
    '7': ['Permisos de Conducir', 'Matrícula Vehicular', 'Infracciones y Multas'],
    '8': ['Licencias Ambientales', 'Denuncias Ecológicas', 'Aprovechamiento Forestal']
  };

  const list = baseTemas[categoryId] || [`Tema General de ${categoryName}`, `Consultas de ${categoryName}`];
  
  return list.map((tema, index) => ({
    id: `tema-${categoryId}-${index}`,
    title: tema,
    description: `Descubre todos los trámites relacionados con ${tema.toLowerCase()}.`,
    tramitesCount: Math.floor(Math.random() * 8) + 2 // Mock count
  }));
};

export default function ServiceDetail() {
  const { id } = useParams();
  const [activeProposal, setActiveProposal] = useState(1);

  // Buscar la categoría por ID
  const categoria = categorias.find(c => c.id === id);

  if (!categoria) {
    return (
      <div className="service-detail-page" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h2>Servicio no encontrado</h2>
        <Link to="/servicios" className="btn-primary">Volver a Servicios</Link>
      </div>
    );
  }

  const temas = generateMockTemas(categoria.id, categoria.name);

  return (
    <div className="service-detail-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumb-link">Inicio</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <Link to="/servicios" className="breadcrumb-link">Servicios</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span>{categoria.name}</span>
      </div>

      {/* Header */}
      <div className="service-detail-header">
        <div className="service-detail-icon">
          {getCategoryIcon(categoria.icon)}
        </div>
        <div className="service-detail-header-text">
          <h1>{categoria.name}</h1>
          <p>Explora todos los temas y trámites organizados en esta área de servicio. Selecciona un tema para ver sus trámites específicos.</p>
        </div>
      </div>

      {/* Selector de Propuestas */}
      <div className="proposal-selector">
        <button 
          className={`proposal-btn ${activeProposal === 1 ? 'active' : ''}`}
          onClick={() => setActiveProposal(1)}
        >
          <LayoutGrid size={16} style={{ marginRight: 6, verticalAlign: 'text-bottom' }}/> 
          Propuesta 1 (Carpetas Bento)
        </button>
        <button 
          className={`proposal-btn ${activeProposal === 2 ? 'active' : ''}`}
          onClick={() => setActiveProposal(2)}
        >
          <List size={16} style={{ marginRight: 6, verticalAlign: 'text-bottom' }}/> 
          Propuesta 2 (Lista Bloques)
        </button>
        <button 
          className={`proposal-btn ${activeProposal === 3 ? 'active' : ''}`}
          onClick={() => setActiveProposal(3)}
        >
          <Layers size={16} style={{ marginRight: 6, verticalAlign: 'text-bottom' }}/> 
          Propuesta 3 (Tarjetas Glow)
        </button>
      </div>

      {/* Propuesta 1: Carpetas Bento */}
      {activeProposal === 1 && (
        <div className="tema-prop-1">
          {temas.map(tema => (
            <Link to={`/catalog?category=${categoria.id}`} key={tema.id} className="folder-card">
              <FolderOpen size={32} className="folder-icon" />
              <h3>{tema.title}</h3>
              <p>{tema.description}</p>
              <div className="folder-footer">
                <span className="tramites-badge">{tema.tramitesCount} Trámites</span>
                <span className="folder-action">Explorar <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Propuesta 2: Lista Moderna en Bloques */}
      {activeProposal === 2 && (
        <div className="tema-prop-2">
          {temas.map(tema => (
            <Link to={`/catalog?category=${categoria.id}`} key={tema.id} className="block-row">
              <div className="block-left">
                <div className="block-icon">
                  <Layers size={24} />
                </div>
                <div className="block-info">
                  <h3>{tema.title}</h3>
                  <p>{tema.description}</p>
                </div>
              </div>
              <div className="block-right">
                <span className="block-badge">{tema.tramitesCount} Trámites</span>
                <span className="block-action">Explorar Trámites <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Propuesta 3: Tarjetas Flotantes Glow */}
      {activeProposal === 3 && (
        <div className="tema-prop-3">
          {temas.map(tema => (
            <Link to={`/catalog?category=${categoria.id}`} key={tema.id} className="glow-card">
              <div className="glow-header">
                <div className="glow-icon">
                  <Layers size={28} />
                </div>
                <div className="glow-count">{tema.tramitesCount}</div>
              </div>
              <h3>{tema.title}</h3>
              <p>{tema.description}</p>
              <span className="glow-action">Ver trámites de este tema <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
