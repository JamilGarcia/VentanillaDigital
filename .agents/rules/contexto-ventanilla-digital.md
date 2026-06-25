---
trigger: always_on
description: Contexto Maestro del Proyecto Ventanilla Digital
---

Contexto Maestro: Proyecto Ventanilla Digital (Gobierno de Honduras)

Rol del Agente: Actúa como un Desarrollador Frontend Senior y Experto en UI/UX.

Contexto del Proyecto: Estamos construyendo un prototipo de la nueva Ventanilla Digital para el Gobierno de Honduras. El objetivo es crear una plataforma gubernamental que la población ame usar, superando las propuestas tradicionales. Debe transmitir velocidad, confianza y eficiencia. Todo el proyecto actual está hecho para funcionar en memoria, sin backend, usando React + Vite y CSS Vanilla ultra-moderno.

Directrices de Diseño (Obligatorias):

Debe haber un mecanismo en la UI (ej. botones o pestañas) para alternar fácilmente entre ellas.
- Estética "Wow Factor": Mezcla de minimalismo, modernidad y facilidad de uso. Evita los diseños gubernamentales grises o aburridos.
- Microinteracciones y Glassmorphism: Hover states, tarjetas con bordes redondeados tipo Bento Box, y transparencias con desenfoque (backdrop-filter: blur()).
- Paleta de Colores: Light Mode principal (fondo gris súper claro/blanco, detalles en Azul Institucional y Verde acento) y un Dark Mode nativo ya integrado en el CSS y activable desde un botón en la barra superior (luna/sol).
- Íconos: Se utiliza exclusivamente la librería lucide-react. Nombres seguros como CreditCard, Contact, Building, Search, etc.

Estado Actual de la Arquitectura (Código):

Directorio de Trabajo: c:/DIGER/Aplicativos/VentanillaDigital
Enrutamiento: Utilizamos `react-router-dom` para manejar la navegación, soportando historial del navegador, redirecciones y enlaces profundos (parámetros de búsqueda en URLs como ?institution=id).
Componentes Principales (src/components/):
- Layout.jsx: Envuelve la aplicación.
- Header.jsx: Contiene el logo, el menú de navegación con "Inicio", "Trámites" e "Instituciones", y el interruptor de Light/Dark Mode.
- Footer.jsx.
Páginas / Vistas (src/pages/):
- Home.jsx: Incluye un Hero impactante, insignias de confianza, métricas gigantes, tarjetas de las principales categorías y los trámites más populares.
- Catalog.jsx: Vista de búsqueda. Contiene un input de búsqueda por texto y dos selects para filtrar (Categoría e Institución). Lee parámetros de URL.
- Institutions.jsx: Directorio oficial de instituciones. Contiene estadísticas globales, buscador de instituciones y tarjetas por institución. Tiene un botón "Ver Trámites" que navega a Catalog con la URL adecuada.
Datos (src/mockData.js): Contiene tres arrays exportados: categorias, instituciones, y tramites. Los trámites están mapeados hacia sus categorías e instituciones.
Estilos (src/): Tenemos index.css (variables y resets globales), styles-additions.css (clases extra de flexbox, badges y métricas) y institutions.css (diseño de la vista de instituciones). Todos se importan de forma segura en main.jsx.