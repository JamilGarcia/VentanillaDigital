import React from 'react';
import { Clock, CreditCard, Building, PlayCircle, CheckCircle2, ArrowUpRight, Workflow, MapPin, Image as ImageIcon, Download, Landmark, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModalidadBadge from '../components/ModalidadBadge';

export default function TramiteProposal3({ tramite, institucion, categoria, relacionados }) {
  return (
    <div className="proposal-3-layout">
      {/* Hero Section */}
      <div className="p3-hero">
        <div className="p3-hero-content">
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <span className="badge-pill" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', display: 'inline-block' }}>
              {categoria?.name || 'Trámite'}
            </span>
            <ModalidadBadge modalidad={tramite.modalidad} inverse={true} />
          </div>
          <h1 className="p3-hero-title">{tramite.titulo}</h1>
          <p className="p3-hero-desc">{tramite.descripcion}</p>
          
          <div className="p3-hero-stats">
            <div className="p3-stat-glass">
              <Clock size={24} color="white" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Tiempo</div>
                <div style={{ fontWeight: 600 }}>{tramite.tiempoEstimado}</div>
              </div>
            </div>
            <div className="p3-stat-glass">
              <CreditCard size={24} color="white" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Costo</div>
                <div style={{ fontWeight: 600 }}>{tramite.costo}</div>
              </div>
            </div>
          </div>

          {tramite.modalidad === 'Presencial' ? (
            <div style={{ marginTop: '2.5rem', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
              <button 
                disabled 
                style={{ 
                  padding: '1.2rem 3rem', 
                  fontSize: '1.2rem', 
                  borderRadius: '50px', 
                  display: 'inline-flex', 
                  gap: '0.8rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  color: 'rgba(255, 255, 255, 0.4)', 
                  cursor: 'not-allowed', 
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <PlayCircle size={24} /> Empezar Trámite
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', background: 'rgba(0,0,0,0.3)', padding: '0.4rem 1rem', borderRadius: '20px', backdropFilter: 'blur(5px)' }}>
                <Info size={16} />
                Este trámite se realiza de forma presencial
              </div>
            </div>
          ) : (
            <button className="btn-primary" style={{ marginTop: '2.5rem', padding: '1.2rem 3rem', fontSize: '1.2rem', borderRadius: '50px', display: 'inline-flex', gap: '0.8rem', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
              <PlayCircle size={24} /> Empezar Trámite
            </button>
          )}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="p3-bento-grid">
        
        {/* Requisitos (Ocupa 2 columnas en desktop) */}
        <div className="p3-bento-box p3-bento-large">
          <div className="p3-bento-header">
            <CheckCircle2 size={24} />
            <h2>Requisitos que necesitas</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {tramite.requisitos && tramite.requisitos.length > 0 ? (
              tramite.requisitos.map((req, index) => {
                const isObject = typeof req === 'object';
                const text = isObject ? req.texto : req;
                const sampleUrl = isObject ? req.ejemplo : null;
                return (
                  <div key={index} style={{ padding: '1rem', background: 'var(--bg-hover-light)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-main-light)', fontSize: '0.95rem' }}>{text}</span>
                    </div>
                    {sampleUrl && (
                      <a href={sampleUrl} target="_blank" rel="noreferrer" style={{ marginLeft: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--primary-color)', background: 'var(--bg-card-light)', padding: '0.4rem 0.8rem', borderRadius: '20px', textDecoration: 'none', width: 'fit-content', boxShadow: 'var(--shadow-sm)' }}>
                        <ImageIcon size={16} /> Ver Muestra
                      </a>
                    )}
                  </div>
                );
              })
            ) : (
              <p>No especificados.</p>
            )}
          </div>
        </div>

        {/* Institución */}
        <div className="p3-bento-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(to bottom, var(--bg-card-light), var(--bg-hover-light))' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', marginBottom: '1.5rem' }}>
            <Building size={40} color="var(--primary-color)" />
          </div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>{institucion?.name}</h3>
          <p style={{ margin: 0, color: 'var(--text-secondary-light)', fontSize: '0.9rem' }}>Institución Responsable</p>
        </div>

        {/* Pasos (Diagrama del Proceso) */}
        <div className="p3-bento-box p3-bento-large">
          <div className="p3-bento-header">
            <Workflow size={24} />
            <h2>¿Cómo es el proceso?</h2>
          </div>
          
          <div className="flowchart-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
            {tramite.pasos && tramite.pasos.length > 0 ? (
              tramite.pasos.map((paso, index) => (
                <React.Fragment key={index}>
                  {/* Flowchart Node Card */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'stretch', 
                    background: 'var(--bg-card-light)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '16px', 
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s ease',
                  }} className="flowchart-node">
                    
                    {/* Step Number Badge (Left Side) */}
                    <div style={{ 
                      background: 'var(--primary-color)', 
                      color: 'white', 
                      padding: '1.5rem', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      minWidth: '90px'
                    }}>
                      <span style={{ fontSize: '0.8rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Paso</span>
                      <span style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1' }}>{index + 1}</span>
                    </div>
                    
                    {/* Step Details */}
                    <div style={{ padding: '1.5rem', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <h3 style={{ margin: '0 0 0.4rem 0', color: 'var(--text-main-light)', fontSize: '1.25rem' }}>{paso.titulo}</h3>
                          <p style={{ margin: 0, color: 'var(--text-secondary-light)', lineHeight: '1.5' }}>{paso.descripcion}</p>
                        </div>
                        
                        {/* Tiempo (solo si existe) */}
                        {paso.tiempo && (
                          <div className="badge-pill" style={{ background: 'var(--bg-hover-light)', border: '1px solid var(--border-color)', color: 'var(--text-main-light)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '500' }}>
                            <Clock size={16} color="var(--primary-color)" /> {paso.tiempo}
                          </div>
                        )}
                      </div>
                      
                      {/* Metadata Section (Dependencia, Modalidad, Requisito) */}
                      {(paso.dependencia || paso.modalidad || paso.requisitos || paso.requisito) && (
                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: '1px dashed var(--border-color)' }}>
                          
                          {paso.dependencia && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0, 112, 243, 0.08)', padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-main-light)' }}>
                              <Landmark size={16} color="var(--primary-color)" />
                              <span><strong>Lugar:</strong> {paso.dependencia}</span>
                            </div>
                          )}
                          
                          {paso.modalidad && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0, 112, 243, 0.08)', padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-main-light)' }}>
                               <Workflow size={16} color="var(--primary-color)" />
                               <span><strong>Modalidad:</strong> {paso.modalidad}</span>
                            </div>
                          )}

                          {(paso.requisito || paso.requisitos) && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.9rem', color: '#047857' }}>
                              <CheckCircle2 size={16} />
                              <span><strong>Requisito:</strong> {paso.requisito || paso.requisitos}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Flowchart Arrow connecting to next step */}
                  {index < tramite.pasos.length - 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '0.8rem 0' }}>
                      <div style={{ 
                         width: '40px', 
                         height: '40px', 
                         borderRadius: '50%', 
                         background: 'var(--bg-hover-light)', 
                         border: '2px solid var(--border-color)', 
                         display: 'flex', 
                         alignItems: 'center', 
                         justifyContent: 'center',
                         color: 'var(--text-secondary-light)'
                      }}>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M12 5v14M19 12l-7 7-7-7"/>
                         </svg>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <p>No hay pasos especificados.</p>
            )}
          </div>
        </div>

        {/* Lugares de Atención */}
        {tramite.lugares && tramite.lugares.length > 0 && tramite.modalidad !== 'Virtual' && (
          <div className="p3-bento-box p3-bento-large">
            <div className="p3-bento-header">
              <MapPin size={24} />
              <h2>¿Dónde realizar el trámite?</h2>
            </div>
            
            <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {tramite.lugares.map((lugar, idx) => (
                <div key={idx} style={{ padding: '1.5rem', background: 'var(--bg-hover-light)', borderRadius: '16px' }}>
                  <h3 style={{ margin: '0 0 0.8rem 0', color: 'var(--text-main-light)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Building size={18} color="var(--primary-color)" /> {lugar.nombre}
                  </h3>
                  <div style={{ color: 'var(--text-secondary-light)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div><strong>Ciudad:</strong> {lugar.ciudad}</div>
                    <div><strong>Dirección:</strong> {lugar.direccion}</div>
                    <div><strong>Horario:</strong> {lugar.horario}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Plantillas y Formatos */}
        {tramite.plantillas && tramite.plantillas.length > 0 && (
          <div className="p3-bento-box" style={{ gridColumn: '1 / -1', background: 'linear-gradient(to right, var(--bg-hover-light), var(--bg-card-light))' }}>
            <div className="p3-bento-header">
              <Download size={24} />
              <h2>Plantillas y Formatos Oficiales</h2>
            </div>
            <p style={{ color: 'var(--text-secondary-light)', marginBottom: '1.5rem' }}>Descarga los documentos necesarios para este trámite.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {tramite.plantillas.map((plantilla, idx) => (
                <a key={idx} href={plantilla.url} target="_blank" rel="noreferrer" style={{ flex: '1 1 300px', padding: '1rem 1.5rem', background: 'var(--bg-main)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'inherit', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s ease' }} className="p3-template-card">
                  <div>
                    <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--text-main-light)' }}>{plantilla.nombre}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary-light)' }}>{plantilla.formato} • {plantilla.tamano}</span>
                  </div>
                  <div style={{ background: 'var(--bg-hover-light)', padding: '0.6rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <Download size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Trámites Relacionados */}
        {relacionados && relacionados.length > 0 && (
          <div className="p3-bento-box" style={{ gridColumn: '1 / -1' }}>
            <div className="p3-bento-header">
              <ArrowUpRight size={24} />
              <h2>Siguientes Pasos Frecuentes</h2>
            </div>
            <p style={{ color: 'var(--text-secondary-light)', marginBottom: '2rem' }}>
              Usuarios que completan este trámite suelen continuar con:
            </p>
            
            <div className="p3-related-scroll">
              {relacionados.map(rel => (
                <Link to={`/tramites/${rel.id}`} key={rel.id} className="p3-related-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="badge-pill" style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>
                      Recomendado
                    </span>
                    <ArrowUpRight size={20} className="p3-rel-arrow" />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{rel.titulo}</h3>
                  <p className="text-secondary-light" style={{ margin: 0, fontSize: '0.9rem' }}>
                    {rel.tiempoEstimado} • {rel.costo}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
