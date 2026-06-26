# Ventanilla Digital

Este proyecto es una **Plataforma de Servicios Digitales** moderna, rápida y escalable.

El objetivo principal de esta aplicación es ofrecer un portal centralizado que los usuarios disfruten usar, superando los portales tradicionales. Está diseñada para transmitir **velocidad, confianza y eficiencia**, integrando principios de diseño UI/UX avanzados (como microinteracciones, *glassmorphism* y estéticas de *bento box*).

Actualmente, el proyecto cuenta con una arquitectura de tipo **Cliente-Servidor**, utilizando **React** para el Frontend y una API RESTful en **Node.js** con **SQL Server** como motor de base de datos.

## 🚀 Características Principales

*   **Diseño Moderno ("Wow Factor"):** Interfaz minimalista pero altamente pulida, diseñada para una experiencia de usuario superior.
*   **Modo Claro / Oscuro (Light/Dark Mode):** Integrado de forma nativa usando CSS Vanilla, con un botón en la barra de navegación para alternar fácilmente, lo que mejora la accesibilidad y el confort visual.
*   **Búsqueda y Filtrado:** Exploración rápida de servicios y trámites por nombre, categoría o entidad responsable.
*   **Enrutamiento Fluido:** Uso de `react-router-dom` para una navegación tipo SPA (Single Page Application) veloz, soportando enlaces profundos con parámetros en la URL.
*   **Backend Integrado:** API robusta construida con Express.js que gestiona la conexión a una base de datos SQL Server y provee la información en tiempo real a la interfaz.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con herramientas modernas del ecosistema de JavaScript:

### Frontend
*   **[React](https://react.dev/) (v18.2):** Biblioteca principal para construir la interfaz de usuario.
*   **[Vite](https://vitejs.dev/) (v5.0):** Herramienta de construcción extremadamente rápida.
*   **[React Router DOM](https://reactrouter.com/) (v7.18):** Manejo de las rutas y navegación.
*   **[Lucide React](https://lucide.dev/):** Biblioteca de iconos modernos y consistentes.
*   **CSS Vanilla:** Todo el diseño, variables, animaciones y modos de color están hechos con CSS puro moderno, sin frameworks externos.

### Backend & Base de Datos
*   **[Node.js](https://nodejs.org/) & [Express](https://expressjs.com/):** Creación de la API RESTful.
*   **[Microsoft SQL Server](https://www.microsoft.com/sql-server):** Motor de base de datos relacional.
*   **mssql:** Driver para la conexión entre Node.js y la base de datos SQL.

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para correr la plataforma completa (Frontend + Backend) en tu computadora:

1. **Prerrequisitos:** 
   - [Node.js](https://nodejs.org/) instalado.
   - Una instancia de **SQL Server** (por ejemplo, SQL Server Express) corriendo localmente.

2. **Configurar la Base de Datos:**
   - Crea una base de datos llamada `VentanillaDigital`.
   - Asegúrate de tener un usuario de SQL Server creado (por defecto la aplicación buscará un usuario llamado `ventanilla_user` y contraseña `Ventanilla123!`, con permisos `db_owner` sobre la base de datos).

3. **Variables de Entorno:**
   - En la carpeta `server/`, verifica o modifica el archivo `.env` para que coincida con tus credenciales de base de datos:
     ```env
     DB_USER=ventanilla_user
     DB_PASSWORD=Ventanilla123!
     DB_SERVER=localhost\SQLEXPRESS
     DB_NAME=VentanillaDigital
     PORT=3001
     ```

4. **Instalar dependencias:**
   Ejecuta el siguiente comando en la raíz del proyecto para descargar todas las dependencias del frontend:
   ```bash
   npm install
   ```
   *Nota: Las dependencias del backend están en la carpeta `server/`.*

5. **Iniciar la aplicación (Frontend y Backend simultáneamente):**
   Gracias al paquete `concurrently`, puedes levantar ambos servidores con un solo comando desde la raíz del proyecto:
   ```bash
   npm run dev:all
   ```

6. **Abrir en el navegador:** 
   La terminal te indicará que el Frontend corre en `http://localhost:5173/` y la API del Backend en `http://localhost:3001`. Abre el enlace del Frontend en tu navegador para interactuar con la plataforma.

## 📁 Estructura del Código

- `src/components/`: Componentes reutilizables de la interfaz (`Header`, `Footer`, `Layout`).
- `src/pages/`: Las diferentes vistas de la aplicación (`Home`, `Catalog`, `Institutions`, detalle de trámites).
- `src/services/api.js`: Lógica del lado del cliente para realizar peticiones (Fetch API) hacia el backend.
- `src/*.css`: Archivos de hojas de estilo puro que dictan toda la estética de la plataforma.
- `server/`: Contiene todo el código del backend.
  - `server/index.js`: Archivo principal del servidor Express que expone las rutas de la API.
  - `server/db.js`: Archivo de configuración que gestiona el pool de conexiones hacia SQL Server.

---
*Diseñado y desarrollado para ser un portafolio destacable de interfaces y arquitecturas web modernas.*
