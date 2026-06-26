---
trigger: manual
description: Esquema de Base de Datos de Ventanilla Digital
---

# Esquema de Base de Datos (SQL Server)

Este documento describe la estructura actual de la base de datos `VentanillaDigital` utilizada en el proyecto. Sirve como contexto para entender cómo se relacionan los datos y cómo consumirlos o modificarlos.

## Tablas Principales

### 1. `categorias`
Agrupa los trámites en diferentes sectores (ej. Salud, Educación).
- `id` (VARCHAR(10), PRIMARY KEY): Identificador único (ej. '1', '2').
- `name` (VARCHAR(100)): Nombre de la categoría.
- `icon` (VARCHAR(50)): Nombre del ícono de la librería `lucide-react` (ej. 'HeartPulse').

### 2. `instituciones`
Entidades estatales responsables de los trámites.
- `id` (VARCHAR(10), PRIMARY KEY): Identificador único (ej. 'i1').
- `name` (VARCHAR(150)): Nombre completo de la institución.
- `type` (VARCHAR(100)): Tipo de institución.
- `total` (INT): Cantidad total de trámites.
- `online` (INT): Cantidad de trámites virtuales.
- `presencial` (INT): Cantidad de trámites presenciales.

### 3. `tramites`
Tabla central que almacena la información general de cada servicio o trámite.
- `id` (VARCHAR(10), PRIMARY KEY): Identificador único (ej. 't1').
- `titulo` (VARCHAR(150)): Nombre del trámite.
- `descripcion` (TEXT): Breve explicación del propósito del trámite.
- `categoria_id` (VARCHAR(10), FOREIGN KEY): Referencia a `categorias.id`.
- `institucion_id` (VARCHAR(10), FOREIGN KEY): Referencia a `instituciones.id`.
- `tiempo_estimado` (VARCHAR(50)): Tiempo que tarda el trámite (ej. '5 días hábiles').
- `costo` (VARCHAR(50)): Valor del trámite (ej. 'L. 1,000.00' o 'Gratuito').
- `modalidad` (VARCHAR(50)): 'Virtual', 'Presencial' o 'Híbrido'.
- `popular` (BIT): Booleano (`1` o `0`) que destaca el trámite en la página principal.

## Tablas de Detalles (Relacionadas a Trámites)

### 4. `tramite_requisitos`
Lista de documentos o condiciones que el usuario debe cumplir antes de realizar el trámite.
- `id` (INT IDENTITY, PRIMARY KEY): ID autoincremental.
- `tramite_id` (VARCHAR(10), FOREIGN KEY): Referencia a `tramites.id`.
- `texto` (TEXT): Descripción del requisito.
- `ejemplo_url` (VARCHAR(255), NULL): URL a una imagen de muestra del documento.

### 5. `tramite_pasos`
Flujo secuencial de acciones que el usuario debe realizar para completar el trámite.
- `id` (INT IDENTITY, PRIMARY KEY): ID autoincremental.
- `tramite_id` (VARCHAR(10), FOREIGN KEY): Referencia a `tramites.id`.
- `orden` (INT): Número del paso (1, 2, 3...) para ordenar el flujo.
- `titulo` (VARCHAR(150)): Acción principal.
- `descripcion` (TEXT): Detalles del paso.
- `dependencia` (VARCHAR(150), NULL): Lugar físico o digital donde se realiza.
- `modalidad` (VARCHAR(50), NULL): 'Virtual' o 'Presencial' específicamente para este paso.

## Consideraciones de Arquitectura Actuales

1. **Agrupación en el Backend:** 
   El endpoint `GET /api/tramites` de nuestro backend (Node.js) hace queries a las tablas `tramites`, `tramite_requisitos` y `tramite_pasos`, y las mapea en memoria para devolver un JSON anidado al Frontend.
2. **Booleanos en SQL Server:** 
   La columna `popular` es de tipo `BIT`. Al procesarse en Node.js, se mapea manualmente a `true` o `false`.