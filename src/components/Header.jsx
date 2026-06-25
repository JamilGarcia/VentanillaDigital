import React, { useEffect, useState } from 'react';
import { Sun, Moon, Landmark } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  useEffect(() => {
    // Check initial system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo-container" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <Landmark size={32} color="var(--primary-color)" />
          <div className="logo-text">
            <h2>Gobierno de Honduras</h2>
            <span>Soberanía Digital</span>
          </div>
        </Link>
        
        <nav className="main-nav">
          <Link to="/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Inicio</Link>
          <Link to="/catalog" className={`nav-link ${currentPage === 'catalog' ? 'active' : ''}`}>Trámites</Link>
          <Link to="/institutions" className={`nav-link ${currentPage === 'institutions' ? 'active' : ''}`}>Instituciones</Link>
          <Link to="/servicios" className={`nav-link ${currentPage === 'servicios' ? 'active' : ''}`}>Servicios</Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn-primary login-btn">Iniciar Sesión</button>
        </nav>
      </div>
    </header>
  );
}
