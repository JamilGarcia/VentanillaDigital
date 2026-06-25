import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Ventanilla Digital</h3>
          <p>Facilitando los servicios gubernamentales para todos los ciudadanos.</p>
        </div>
        <div className="footer-col">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Catálogo de Trámites</a></li>
            <li><a href="#">Ayuda y Soporte</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>soporte@gob.hn</p>
          <p>Tegucigalpa, Honduras</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gobierno de Honduras - Soberanía Digital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
