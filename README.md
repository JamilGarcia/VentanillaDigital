# Ventanilla Digital - Gobierno de Honduras 🇭🇳

Este proyecto es un **prototipo** de la nueva **Ventanilla Digital** para el Gobierno de Honduras. 

El objetivo principal de esta aplicación es ofrecer una plataforma gubernamental moderna que la población disfrute usar, superando los portales tradicionales. Está diseñada para transmitir **velocidad, confianza y eficiencia**, integrando principios de diseño UI/UX avanzados (como microinteracciones, *glassmorphism* y estéticas de *bento box*).

Actualmente, el proyecto funciona **completamente en memoria** (sin conexión a un backend real), utilizando datos simulados (mock data) para demostrar todas las funcionalidades de la interfaz y los flujos de usuario.

## 🚀 Características Principales

*   **Diseño Moderno ("Wow Factor"):** Interfaz minimalista pero altamente pulida, abandonando la típica estética gubernamental monótona.
*   **Modo Claro / Oscuro (Light/Dark Mode):** Integrado de forma nativa usando CSS Vanilla, con un botón en la barra de navegación para alternar fácilmente, lo que mejora la accesibilidad y el confort visual.
*   **Búsqueda y Filtrado:** Exploración rápida de trámites por nombre, categoría o institución.
*   **Enrutamiento Fluido:** Uso de `react-router-dom` para una navegación tipo SPA (Single Page Application) veloz, soportando enlaces profundos con parámetros en la URL.
*   **Directorio de Instituciones:** Listado completo y tarjetas informativas por cada institución gubernamental.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con herramientas modernas del ecosistema de JavaScript:

*   **[React](https://react.dev/) (v18.2):** Biblioteca principal para construir la interfaz de usuario.
*   **[Vite](https://vitejs.dev/) (v5.0):** Herramienta de construcción (bundler) extremadamente rápida para el entorno de desarrollo.
*   **[React Router DOM](https://reactrouter.com/) (v7.18):** Manejo de las rutas y navegación de la aplicación.
*   **[Lucide React](https://lucide.dev/):** Biblioteca de iconos modernos y consistentes usados en toda la aplicación.
*   **CSS Vanilla:** No se usan frameworks de CSS (como Tailwind o Bootstrap). Todo el diseño, variables, animaciones y modos de color están hechos con CSS puro moderno, distribuidos en archivos como `index.css` y `styles-additions.css`.

## 📦 Dependencias

El proyecto usa las siguientes dependencias clave (ver `package.json` para las versiones exactas):

**Dependencies:**
- `react` / `react-dom`
- `react-router-dom`
- `lucide-react`

**DevDependencies:**
- `vite`
- `@vitejs/plugin-react`
- `@types/react` / `@types/react-dom`

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para correr el prototipo en tu computadora:

1. **Prerrequisitos:** Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. **Clonar/Abrir el proyecto:** Navega a la carpeta del proyecto (`c:\DIGER\Aplicativos\VentanillaDigital`).
3. **Instalar dependencias:** Ejecuta el siguiente comando en la terminal para descargar todo lo necesario:
   ```bash
   npm install
   ```
4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
5. **Abrir en el navegador:** La terminal te mostrará una dirección (usualmente `http://localhost:5173/`). Abre ese enlace en tu navegador para ver la aplicación funcionando.

## 📁 Estructura del Código

- `src/components/`: Componentes reutilizables de la interfaz (`Header`, `Footer`, `Layout`).
- `src/pages/`: Las diferentes vistas de la aplicación (`Home`, `Catalog`, `Institutions`, detalle de trámites).
- `src/mockData.js`: El "backend en memoria". Contiene la información simulada de categorías, instituciones y trámites.
- `src/*.css`: Archivos de hojas de estilo puro que dictan toda la estética de la plataforma.

---
*Prototipo en desarrollo continuo para mejorar los servicios digitales de la ciudadanía.*
