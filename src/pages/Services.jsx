import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategorias, getTramites } from '../services/api';
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
  Layers,
  Loader2
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
  const [categorias, setCategorias] = useState([]);
  const [tramites, setTramites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cats, trams] = await Promise.all([
          getCategorias(),
          getTramites()
        ]);
        setCategorias(cats);
        setTramites(trams);
      } catch (error) {
        console.error("Error al cargar datos de servicios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getCategoryDescription = (name) => {
    return `Explora todos los trámites y servicios disponibles en el área de ${name}. Encuentra lo que necesitas de forma rápida y segura.`;
  };

  const getStats = (categoryId) => {
    const tramitesCount = tramites.filter(t => t.categoria_id === categoryId || t.categoriaId === categoryId).length;
    // Mocking topics based on tramites
    const temasCount = Math.max(1, Math.ceil(tramitesCount / 1.5));
    return { tramitesCount, temasCount };
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--primary-color)' }}>
        <Loader2 className="spinning" size={48} />
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Explora Servicios por Categoría</h1>
        <p>Encuentra todos los trámites organizados por áreas temáticas para facilitar tu búsqueda y acceso a servicios gubernamentales.</p>
      </div>

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


    </div>
  );
}
