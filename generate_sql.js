import fs from 'fs';
import { categorias, instituciones, tramites } from './src/mockData.js';

let sql = `-- Script completo de base de datos Ventanilla Digital
-- Generado automáticamente a partir de mockData.js

-- 0. BORRADO DE TABLAS (ORDEN INVERSO DE DEPENDENCIAS)
IF OBJECT_ID('tramite_relacionados', 'U') IS NOT NULL DROP TABLE tramite_relacionados;
IF OBJECT_ID('tramite_plantillas', 'U') IS NOT NULL DROP TABLE tramite_plantillas;
IF OBJECT_ID('tramite_lugares', 'U') IS NOT NULL DROP TABLE tramite_lugares;
IF OBJECT_ID('tramite_pasos', 'U') IS NOT NULL DROP TABLE tramite_pasos;
IF OBJECT_ID('tramite_requisitos', 'U') IS NOT NULL DROP TABLE tramite_requisitos;
IF OBJECT_ID('tramites', 'U') IS NOT NULL DROP TABLE tramites;
IF OBJECT_ID('instituciones', 'U') IS NOT NULL DROP TABLE instituciones;
IF OBJECT_ID('categorias', 'U') IS NOT NULL DROP TABLE categorias;

-- 1. CREACIÓN DE TABLAS

-- Tabla de Categorías
CREATE TABLE categorias (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(50)
);

-- Tabla de Instituciones
CREATE TABLE instituciones (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    type VARCHAR(100),
    total INT DEFAULT 0,
    online INT DEFAULT 0,
    presencial INT DEFAULT 0
);

-- Tabla de Trámites Principales
CREATE TABLE tramites (
    id VARCHAR(10) PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    categoria_id VARCHAR(10),
    institucion_id VARCHAR(10),
    tiempo_estimado VARCHAR(50),
    costo VARCHAR(50),
    modalidad VARCHAR(50),
    popular BIT DEFAULT 0,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    FOREIGN KEY (institucion_id) REFERENCES instituciones(id)
);

-- Tabla para Requisitos 
CREATE TABLE tramite_requisitos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    tramite_id VARCHAR(10),
    texto TEXT NOT NULL,
    ejemplo_url VARCHAR(255),
    FOREIGN KEY (tramite_id) REFERENCES tramites(id)
);

-- Tabla para Pasos
CREATE TABLE tramite_pasos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    tramite_id VARCHAR(10),
    orden INT,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    dependencia VARCHAR(150),
    modalidad VARCHAR(50),
    tiempo VARCHAR(50),
    requisito VARCHAR(255),
    FOREIGN KEY (tramite_id) REFERENCES tramites(id)
);

-- Tabla para Lugares (NUEVA)
CREATE TABLE tramite_lugares (
    id INT IDENTITY(1,1) PRIMARY KEY,
    tramite_id VARCHAR(10),
    nombre VARCHAR(150) NOT NULL,
    ciudad VARCHAR(100),
    direccion TEXT,
    horario VARCHAR(100),
    FOREIGN KEY (tramite_id) REFERENCES tramites(id)
);

-- Tabla para Plantillas (NUEVA)
CREATE TABLE tramite_plantillas (
    id INT IDENTITY(1,1) PRIMARY KEY,
    tramite_id VARCHAR(10),
    nombre VARCHAR(150) NOT NULL,
    formato VARCHAR(50),
    tamano VARCHAR(50),
    url VARCHAR(255),
    FOREIGN KEY (tramite_id) REFERENCES tramites(id)
);

-- Tabla para Trámites Relacionados (NUEVA)
CREATE TABLE tramite_relacionados (
    tramite_id VARCHAR(10),
    tramite_relacionado_id VARCHAR(10),
    PRIMARY KEY(tramite_id, tramite_relacionado_id),
    FOREIGN KEY (tramite_id) REFERENCES tramites(id),
    FOREIGN KEY (tramite_relacionado_id) REFERENCES tramites(id)
);

-- 2. INSERCIÓN DE DATOS

`;

function escapeStr(str) {
    if (str === null || str === undefined) return 'NULL';
    return "'" + str.replace(/'/g, "''") + "'";
}

// Categorías
sql += '-- Inserción de Categorías\n';
categorias.forEach(c => {
    sql += `INSERT INTO categorias (id, name, icon) VALUES (${escapeStr(c.id)}, ${escapeStr(c.name)}, ${escapeStr(c.icon)});\n`;
});
sql += '\n';

// Instituciones
sql += '-- Inserción de Instituciones\n';
instituciones.forEach(i => {
    sql += `INSERT INTO instituciones (id, name, type, total, online, presencial) VALUES (${escapeStr(i.id)}, ${escapeStr(i.name)}, ${escapeStr(i.type)}, ${i.total}, ${i.online}, ${i.presencial});\n`;
});
sql += '\n';

// Trámites
sql += '-- Inserción de Trámites\n';
tramites.forEach(t => {
    sql += `INSERT INTO tramites (id, titulo, descripcion, categoria_id, institucion_id, tiempo_estimado, costo, modalidad, popular) VALUES (${escapeStr(t.id)}, ${escapeStr(t.titulo)}, ${escapeStr(t.descripcion)}, ${escapeStr(t.categoriaId)}, ${escapeStr(t.institucionId)}, ${escapeStr(t.tiempoEstimado)}, ${escapeStr(t.costo)}, ${escapeStr(t.modalidad)}, ${t.popular ? 1 : 0});\n`;
});
sql += '\n';

// Requisitos
sql += '-- Inserción de Requisitos\n';
tramites.forEach(t => {
    if (t.requisitos) {
        t.requisitos.forEach(r => {
            const isObj = typeof r === 'object';
            const texto = isObj ? r.texto : r;
            const ejemplo = isObj ? r.ejemplo : null;
            sql += `INSERT INTO tramite_requisitos (tramite_id, texto, ejemplo_url) VALUES (${escapeStr(t.id)}, ${escapeStr(texto)}, ${escapeStr(ejemplo)});\n`;
        });
    }
});
sql += '\n';

// Pasos
sql += '-- Inserción de Pasos\n';
tramites.forEach(t => {
    if (t.pasos) {
        t.pasos.forEach((p, idx) => {
            sql += `INSERT INTO tramite_pasos (tramite_id, orden, titulo, descripcion, dependencia, modalidad, tiempo, requisito) VALUES (${escapeStr(t.id)}, ${idx + 1}, ${escapeStr(p.titulo)}, ${escapeStr(p.descripcion)}, ${escapeStr(p.dependencia)}, ${escapeStr(p.modalidad)}, ${escapeStr(p.tiempo)}, ${escapeStr(p.requisitos || p.requisito)});\n`;
        });
    }
});
sql += '\n';

// Lugares
sql += '-- Inserción de Lugares\n';
tramites.forEach(t => {
    if (t.lugares) {
        t.lugares.forEach(l => {
            sql += `INSERT INTO tramite_lugares (tramite_id, nombre, ciudad, direccion, horario) VALUES (${escapeStr(t.id)}, ${escapeStr(l.nombre)}, ${escapeStr(l.ciudad)}, ${escapeStr(l.direccion)}, ${escapeStr(l.horario)});\n`;
        });
    }
});
sql += '\n';

// Plantillas
sql += '-- Inserción de Plantillas\n';
tramites.forEach(t => {
    if (t.plantillas) {
        t.plantillas.forEach(p => {
            sql += `INSERT INTO tramite_plantillas (tramite_id, nombre, formato, tamano, url) VALUES (${escapeStr(t.id)}, ${escapeStr(p.nombre)}, ${escapeStr(p.formato)}, ${escapeStr(p.tamano)}, ${escapeStr(p.url)});\n`;
        });
    }
});
sql += '\n';

// Relacionados
sql += '-- Inserción de Trámites Relacionados\n';
tramites.forEach(t => {
    if (t.tramitesRelacionados) {
        t.tramitesRelacionados.forEach(rel => {
            sql += `INSERT INTO tramite_relacionados (tramite_id, tramite_relacionado_id) VALUES (${escapeStr(t.id)}, ${escapeStr(rel)});\n`;
        });
    }
});
sql += '\n';

fs.writeFileSync('src/Scriptbs.txt', sql, 'utf8');
console.log('Script SQL generado exitosamente en src/Scriptbs.txt');
