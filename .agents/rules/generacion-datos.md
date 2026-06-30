---
trigger: manual
---

# Generación de Datos de Prueba

Cuando se requiera agregar, modificar o generar nuevos datos de prueba para la base de datos de la aplicación Ventanilla Digital, se debe seguir este flujo:

1. Modificar el archivo `src/mockData.js` con la información JSON en el formato correspondiente. No agregues datos directamente en el script SQL de forma manual.
2. Ejecutar el script generador desde la raíz del proyecto usando Node.js:
   `node generate_sql.js`
3. Esto leerá `src/mockData.js` y sobrescribirá automáticamente el archivo `src/Scriptbs.txt` con la sintaxis de SQL Server correcta (incluyendo los DROP, CREATE e INSERT de todas las tablas y relaciones de manera segura).
4. Indicarle al usuario que copie o ejecute el contenido actualizado de `src/Scriptbs.txt` en su gestor de SQL Server.

Tablas manejadas por este script:
- categorias
- instituciones
- tramites
- tramite_requisitos
- tramite_pasos
- tramite_lugares
- tramite_plantillas
- tramite_relacionados
