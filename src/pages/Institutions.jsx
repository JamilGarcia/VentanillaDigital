import React, { useState, useEffect } from 'react';
import { Search, Building, Heart, ExternalLink, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getInstituciones } from '../services/api';

export default function Institutions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstituciones = async () => {
      try {
        const data = await getInstituciones();
        setInstituciones(data);
      } catch (error) {
        console.error("Error al cargar instituciones:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstituciones();
  }, []);

  const filteredInst = instituciones.filter(inst => 
    inst.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="institutions-page">
      <div className="institutions-header">
        <h1>Instituciones del Estado</h1>
        <p>Directorio oficial de entidades con servicios y trámites digitalizados.</p>
      </div>

      <div className="institutions-stats-banner">
        <div className="stat-item">
          <h2>{instituciones.length}</h2>
          <p>INSTITUCIONES</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>300</h2>
          <p>TRÁMITES TOTALES</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item highlighted">
          <h2>180</h2>
          <p>EN LÍNEA</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>120</h2>
          <p>PRESENCIALES</p>
        </div>
      </div>

      <div className="institutions-search-wrapper">
        <div className="search-bar-container large">
          <Search className="search-icon" size={24} color="var(--text-secondary-light)" />
          <input 
            type="text" 
            placeholder="Buscar institución por nombre..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--primary-color)' }}>
          <Loader2 className="spinning" size={48} />
        </div>
      ) : (
        <div className="institutions-grid">
          {filteredInst.map(inst => (
            <div key={inst.id} className="institution-card">
              <div className="inst-card-top">
                <div className="inst-icon-placeholder">
                  <Building size={24} color="var(--primary-color)"/>
                </div>
                <div className="inst-title-area">
                  <h3>{inst.name}</h3>
                  <span className="inst-badge">{inst.type}</span>
                </div>
              </div>
              
              <div className="inst-stats-row">
                <div className="inst-stat">
                  <h4>{inst.total}</h4>
                  <span>TOTAL</span>
                </div>
                <div className="inst-stat online">
                  <h4>{inst.online}</h4>
                  <span>EN LÍNEA</span>
                </div>
                <div className="inst-stat presencial">
                  <h4>{inst.presencial}</h4>
                  <span>PRESENCIAL</span>
                </div>
              </div>

              <div className="inst-actions">
                <button 
                  className="btn-primary" 
                  onClick={() => navigate(`/catalog?institution=${inst.id}`)}
                >
                  <ExternalLink size={16} style={{marginRight: '6px'}}/> Ver Trámites
                </button>
                <button className="btn-icon-outline">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
