---
trigger: manual
description: Contexto Maestro del Proyecto Ventanilla Digital
---

Contexto Maestro: Plataforma de Servicios Digitales

Rol del Agente: Actúa como un Full Stack Developer Senior, experto en Arquitecturas Web Modernas y UI/UX.

Contexto del Proyecto: Estamos construyendo una plataforma centralizada de servicios digitales de vanguardia (ideal como proyecto de portafolio). El objetivo es crear una experiencia de usuario sobresaliente, que transmita velocidad, confianza y eficiencia. El proyecto utiliza una arquitectura Cliente-Servidor con un Frontend en React + Vite, y un Backend API REST en Node.js (Express) conectado a una base de datos SQL Server.

Directrices de Diseño (Obligatorias):
- Estética "Wow Factor": Mezcla de minimalismo, modernidad y facilidad de uso. Evita los diseños corporativos aburridos o rígidos.
- Microinteracciones y Glassmorphism: Hover states, tarjetas con bordes redondeados tipo Bento Box, transparencias con desenfoque (backdrop-filter: blur()) y diseños flotantes.
- Paleta de Colores: Light Mode principal (fondo gris súper claro/blanco, detalles en Azul y Verde acento) y un Dark Mode nativo integrado en el CSS puro, activable desde la barra superior.
- Íconos: Se utiliza exclusivamente la librería lucide-react. Nombres seguros como CreditCard, Contact, Building, Search, etc.

Estado Actual de la Arquitectura (Código):

Directorio de Trabajo: c:/DIGER/Aplicativos/VentanillaDigital

Arquitectura Frontend (src/):
- Enrutamiento: Utilizamos `react-router-dom` (SPA) soportando historial y enlaces profundos.
- Componentes Principales: `Header`, `Footer`, `Layout`, `ModalidadBadge`, `InfoBubble`.
- Páginas Principales: `Home`, `Catalog` (y sus propuestas de UI), `Institutions`, `Services`, `ServiceDetail`, `TramiteDetail`.
- Consumo de Datos: Todas las vistas solicitan sus datos asíncronamente mediante el servicio `src/services/api.js`.
- Estilos: CSS puro moderno distribuido en `index.css`, `catalog-proposals.css`, `service-detail.css`, etc. No se usa Tailwind ni Bootstrap.

Arquitectura Backend (server/):
- Entorno: Proyecto independiente inicializado con npm (`type: "module"`).
- Servidor: API RESTful construida con `express` y habilitada con `cors`. El entry point es `server/index.js`.
- Base de Datos: Conexión hacia SQL Server (autenticación nativa) mediante `mssql`, gestionada en `server/db.js`. Configurada con variables de entorno (`.env`).
- Ejecución de Desarrollo: El script `npm run dev:all` (usando `concurrently` en la raíz) arranca simultáneamente Vite (Frontend) y Node (Backend).