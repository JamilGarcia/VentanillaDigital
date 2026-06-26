import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Zap, ShieldCheck, Lock, Globe, Building, HeartPulse, GraduationCap, CreditCard, Contact, Building2, Home as HomeIcon, Car, Leaf, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCategorias, getTramites } from '../services/api';

const IconMap = {
  HeartPulse, GraduationCap, CreditCard, Contact, Building2, Home: HomeIcon, Car, Leaf
};

export default function Home() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [tramitesPopulares, setTramitesPopulares] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsData, tramitesData] = await Promise.all([
          getCategorias(),
          getTramites()
        ]);
        setCategorias(catsData);
        setTramitesPopulares(tramitesData.filter(t => t.popular).slice(0, 4));
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge-top">
            <span className="badge-pill">✨ Ventanilla Digital - 100% Honduras</span>
          </div>
          <h1 className="hero-title">Encuentra y realiza tu trámite, <br/><span className="text-highlight">en tiempo récord.</span></h1>
          <p className="hero-subtitle">
            El lugar oficial para gestionar tus procesos sin hacer filas. Más de 300 trámites del Estado de Honduras centralizados para ti, guiándote paso a paso de forma clara.
          </p>
          
          <div className="search-bar-container large">
            <Search className="search-icon" size={24} color="var(--text-secondary-light)" />
            <input 
              type="text" 
              placeholder="Ejemplo: pasaporte, licencia de conducir, antecedentes..." 
              className="search-input"
            />
            <button className="btn-primary btn-search" onClick={() => navigate('/catalog')}>Buscar</button>
          </div>

          <div className="hero-trust-badges">
            <span className="trust-badge"><ShieldCheck size={16} color="var(--secondary-color)" /> Datos oficiales del Estado</span>
            <span className="trust-badge"><Zap size={16} color="var(--primary-color)" /> El lugar más rápido y directo</span>
            <span className="trust-badge"><Lock size={16} color="var(--text-secondary-light)" /> 100% gratuito y seguro</span>
          </div>
        </div>
      </section>

      <section className="metrics-section">
        <div className="metrics-grid">
          <div className="metric-card digital">
            <Globe className="metric-icon" size={32} />
            <div className="metric-info">
              <h2>180</h2>
              <p>DIGITALES</p>
            </div>
            <p className="metric-desc">Hazlos todos desde la comodidad de tu casa, las 24 horas del día.</p>
          </div>
          <div className="metric-card presencial">
            <Building className="metric-icon" size={32} />
            <div className="metric-info">
              <h2>120</h2>
              <p>PRESENCIALES</p>
            </div>
            <p className="metric-desc">Agenda tu cita aquí y sáltate las enormes filas en oficina.</p>
          </div>
        </div>
      </section>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--primary-color)' }}>
          <Loader2 className="spinning" size={48} />
        </div>
      ) : (
        <>
          <section className="categories-section">
            <div className="section-header">
              <h2>Categorías Principales</h2>
              <button className="btn-link" onClick={() => navigate('/catalog')}>Ver todas <ChevronRight size={16}/></button>
            </div>
            <div className="categories-grid">
              {categorias.slice(0, 4).map(cat => {
                const IconComponent = IconMap[cat.icon];
                return (
                  <div key={cat.id} className="category-card" onClick={() => navigate('/catalog?category=' + cat.id)}>
                    <div className="category-icon-wrapper">
                      {IconComponent ? <IconComponent size={24} /> : <span className="icon-placeholder">{cat.name.charAt(0)}</span>}
                    </div>
                    <h3>{cat.name}</h3>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="popular-section">
            <h2>Trámites más solicitados</h2>
            <div className="tramites-grid">
              {tramitesPopulares.map(tramite => (
                <div key={tramite.id} className="tramite-card">
                  <div className="tramite-card-header">
                    <span className="badge-time">{tramite.tiempoEstimado}</span>
                  </div>
                  <h3 className="tramite-title">{tramite.titulo}</h3>
                  <p className="tramite-desc">{tramite.descripcion}</p>
                  <div className="tramite-footer">
                    <span className="tramite-cost">{tramite.costo}</span>
                    <button className="btn-outline">Ver requisitos</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
