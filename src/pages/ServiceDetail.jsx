import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategorias, getTramites } from '../services/api';
import { 
  HeartPulse, GraduationCap, CreditCard, Contact, 
  Building2, Home, Car, Leaf, ChevronRight,
  FolderOpen, ArrowRight, Loader2
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

export default function ServiceDetail() {
  const { id } = useParams();
  const [categoria, setCategoria] = useState(null);
  const [tramitesCategoria, setTramitesCategoria] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsData, tramsData] = await Promise.all([
          getCategorias(),
          getTramites({ categoriaId: id })
        ]);
        const found = catsData.find(c => c.id === id);
        setCategoria(found);
        if (found) {
          setTramitesCategoria(tramsData);
        }
      } catch (error) {
        console.error("Error al cargar categoría y trámites:", error);
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

  if (!categoria) {
    return (
      <div className="service-detail-page" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h2>Servicio no encontrado</h2>
        <Link to="/servicios" className="btn-primary">Volver a Servicios</Link>
      </div>
    );
  }



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

      {/* Propuesta 1: Carpetas Bento */}
      <div className="tema-prop-1">
        {tramitesCategoria.length > 0 ? (
          tramitesCategoria.map(tramite => (
            <Link to={`/tramites/${tramite.id}`} key={tramite.id} className="folder-card">
              <FolderOpen size={32} className="folder-icon" />
              <h3>{tramite.titulo}</h3>
              <p>{tramite.descripcion.substring(0, 100)}...</p>
              <div className="folder-footer">
                <span className="tramites-badge">{tramite.modalidad}</span>
                <span className="folder-action">Ver Trámite <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary-light)' }}>
            No hay trámites registrados para esta categoría aún.
          </p>
        )}
      </div>
    </div>
  );
}
