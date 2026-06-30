/**
 * ARCHIVO DE CONTEXTO Y GENERACIÓN DE DATOS (BD)
 * 
 * Este archivo contiene la información maestra para inicializar la base de datos de Ventanilla Digital.
 * La estructura aquí reflejada alimenta al script 'generate_sql.js' para crear todas las tablas
 * e insertar los registros de:
 * - Categorías e Instituciones.
 * - Trámites (con su info básica, modalidades y costos).
 * - Requisitos y Pasos de trámites.
 * - Lugares de atención presencial, Plantillas descargables y Trámites Relacionados.
 * 
 * Si se requiere agregar nueva data a la BD, se debe modificar este archivo y luego ejecutar:
 * `node generate_sql.js`
 */
export const categorias = [
    { id: '1', name: 'Salud y Seguridad Social', icon: 'HeartPulse' },
    { id: '2', name: 'Educación y Cultura', icon: 'GraduationCap' },
    { id: '3', name: 'Impuestos y Finanzas', icon: 'CreditCard' },
    { id: '4', name: 'Identidad y Ciudadanía', icon: 'Contact' },
    { id: '5', name: 'Empresas y Negocios', icon: 'Building2' },
    { id: '6', name: 'Vivienda y Propiedad', icon: 'Home' },
    { id: '7', name: 'Transporte y Vehículos', icon: 'Car' },
    { id: '8', name: 'Medio Ambiente', icon: 'Leaf' }
];

export const instituciones = [
    { id: 'i1', name: 'Instituto Nacional de Migración', type: 'Institución Gubernamental', total: 4, online: 3, presencial: 1 },
    { id: 'i2', name: 'Poder Judicial', type: 'Poder del Estado', total: 10, online: 8, presencial: 2 },
    { id: 'i3', name: 'Secretaría de Desarrollo Económico', type: 'Institución Gubernamental', total: 15, online: 15, presencial: 0 },
    { id: 'i4', name: 'Alcaldía Municipal del Distrito Central', type: 'Gobierno Local', total: 25, online: 10, presencial: 15 },
    { id: 'i5', name: 'Secretaría de Educación', type: 'Institución Gubernamental', total: 8, online: 4, presencial: 4 },
    { id: 'i6', name: 'Instituto Hondureño de Seguridad Social', type: 'Institución Descentralizada', total: 12, online: 12, presencial: 0 },
    { id: 'i7', name: 'Dirección Nacional de Vialidad y Transporte', type: 'Institución Gubernamental', total: 6, online: 3, presencial: 3 },
    { id: 'i8', name: 'Secretaría de Recursos Naturales y Ambiente', type: 'Institución Gubernamental', total: 5, online: 2, presencial: 3 }
];

export const tramites = [
    {
        id: 't1',
        titulo: 'Renovación de Pasaporte Electrónico',
        descripcion: 'El pasaporte electrónico hondureño es el documento oficial de viaje que identifica a los ciudadanos en el extranjero. Contiene un chip integrado con datos biométricos y biográficos, garantizando altos estándares de seguridad internacional. Este trámite permite la renovación por vencimiento, robo o extravío, asegurando que pueda viajar sin contratiempos.',
        categoriaId: '4',
        institucionId: 'i1',
        tiempoEstimado: '5 días hábiles',
        costo: 'L. 1,250.00 (5 años) / L. 1,875.00 (10 años)',
        modalidad: 'Híbrido',
        popular: true,
        requisitos: [
            { texto: 'Documento Nacional de Identificación (DNI) vigente en formato original y fotocopia.', ejemplo: 'https://images.unsplash.com/photo-1633265486064-086b219458ce?q=80&w=600&auto=format&fit=crop' },
            { texto: 'Recibo de pago original emitido por la institución bancaria autorizada (TGR-1).', ejemplo: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=600&auto=format&fit=crop' },
            { texto: 'Pasaporte anterior (indispensable si se trata de renovación por vencimiento).', ejemplo: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop' },
            'Constancia de denuncia interpuesta en la DPI (Únicamente en caso de robo o extravío).'
        ],
        pasos: [
            { titulo: 'Generación y Pago de Cita', descripcion: 'Compre su cita en las ventanillas de Banco Atlántida, Banpais o Ficohsa a nivel nacional, presentando su DNI original.', dependencia: 'Agencias Bancarias', modalidad: 'Presencial', tiempo: '10 min', requisito: 'DNI y Efectivo/Tarjeta' },
            { titulo: 'Programación de Cita en Línea', descripcion: 'Ingrese al portal del INM con el número de recibo bancario y seleccione la fecha/hora de atención según disponibilidad.', dependencia: 'Portal INM (Migración)', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Captura de Datos Biométricos', descripcion: 'Preséntese en las oficinas de migración 15 minutos antes de su cita para la captura de fotografía, huellas y firma electrónica.', dependencia: 'Área de Captura INM', modalidad: 'Presencial', tiempo: '30 min', requisito: 'Recibo y Pasaporte Anterior' },
            { titulo: 'Impresión y Entrega', descripcion: 'Espere en la sala de espera hasta que su pasaporte electrónico sea impreso y entregado en ventanilla.', dependencia: 'Ventanilla de Entrega INM', modalidad: 'Presencial', tiempo: '1 a 3 horas' }
        ],
        lugares: [
            { nombre: 'INM Centro Cívico Gubernamental', ciudad: 'Tegucigalpa', direccion: 'Bulevar Juan Pablo II, Edificio Torre 1, Primer Nivel.', horario: 'Lunes a Viernes: 7:00 AM - 5:00 PM' },
            { nombre: 'INM Oficina Regional Norte', ciudad: 'San Pedro Sula', direccion: 'Barrio El Centro, 1 y 2 Calle, 3 Avenida.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' },
            { nombre: 'INM La Ceiba', ciudad: 'La Ceiba', direccion: 'Edificio de Gobernación Departamental, Barrio El Centro.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' }
        ],
        plantillas: [
            { nombre: 'Guía de Programación de Cita (Manual Usuario)', formato: 'PDF', tamano: '1.2 MB', url: '#' },
            { nombre: 'Formulario de Autorización (Para Menores de Edad)', formato: 'PDF', tamano: '450 KB', url: '#' }
        ],
        tramitesRelacionados: ['t9', 't2']
    },
    {
        id: 't2',
        titulo: 'Emisión de Constancia de Antecedentes Penales',
        descripcion: 'La constancia de antecedentes penales es un documento oficial expedido por el Poder Judicial que certifica si un ciudadano tiene o no historial delictivo registrado en los juzgados y tribunales de la República. Es frecuentemente solicitada para aplicar a empleos formales, obtención de becas, solicitud de visas o matrimonio.',
        categoriaId: '4',
        institucionId: 'i2',
        tiempoEstimado: '24 a 48 horas',
        costo: 'L. 150.00 (Empleo) / L. 200.00 (Estudios/Visa)',
        modalidad: 'Virtual',
        popular: true,
        requisitos: [
            { texto: 'Copia clara del Documento Nacional de Identificación (DNI), derecho y revés.', ejemplo: 'https://images.unsplash.com/photo-1633265486064-086b219458ce?q=80&w=600&auto=format&fit=crop' },
            { texto: 'Recibo de pago cancelado en banco (Generado previamente en línea).', ejemplo: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=600&auto=format&fit=crop' },
            'En caso de menores (de 18 a 21 años), presentar copia de acta de nacimiento.'
        ],
        pasos: [
            { titulo: 'Generar Recibo de Pago', descripcion: 'Acceda al portal institucional y genere el recibo de pago indicando el uso de la constancia.', dependencia: 'Portal Poder Judicial', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Realizar el Pago', descripcion: 'Pague el importe exacto en cualquier sucursal de Banco Atlántida.', dependencia: 'Banco Atlántida', modalidad: 'Presencial', tiempo: '10 min', requisito: 'Recibo Impreso' },
            { titulo: 'Ingreso de Solicitud Online', descripcion: 'Complete el formulario en línea adjuntando la fotografía del DNI y del recibo bancario sellado.', dependencia: 'Unidad de Antecedentes', modalidad: 'Virtual', tiempo: '10 min' },
            { titulo: 'Validación y Descarga', descripcion: 'Recibirá una notificación por correo electrónico. Podrá descargar el documento PDF certificado con firma electrónica y código QR.', dependencia: 'Sistema Automático', modalidad: 'Virtual', tiempo: '24 horas' }
        ],
        lugares: [
            { nombre: 'Unidad de Antecedentes - Corte Suprema', ciudad: 'Tegucigalpa', direccion: 'Bulevar Kuwait, contiguo a la Secretaría de Relaciones Exteriores.', horario: 'Lunes a Viernes: 7:30 AM - 4:00 PM (Solo casos excepcionales)' }
        ],
        plantillas: [
            { nombre: 'Instructivo Paso a Paso', formato: 'PDF', tamano: '2.5 MB', url: '#' }
        ],
        tramitesRelacionados: ['t1', 't3', 't14']
    },
    {
        id: 't3',
        titulo: 'Constitución e Inscripción de Sociedad Mercantil',
        descripcion: 'Trámite integral para formalizar legalmente una empresa en el territorio nacional. A través del portal "Mi Empresa en Línea", los emprendedores pueden constituir Sociedades de Responsabilidad Limitada (S. de R.L.) u otras figuras mercantiles de manera acelerada, obteniendo automáticamente el Registro Tributario Nacional (RTN) y el Permiso de Operación provisional.',
        categoriaId: '5',
        institucionId: 'i3',
        tiempoEstimado: '10 a 15 días hábiles',
        costo: 'Variable (Aprox. L. 3,500 - L. 5,000 en timbres y registros)',
        modalidad: 'Virtual',
        popular: false,
        requisitos: [
            'DNI de todos los socios fundadores y comisario.',
            'Borrador del Acta Constitutiva o Estatutos Sociales elaborados por un Notario Público.',
            'Comprobante de depósito de capital inicial (Mínimo requerido según el tipo de sociedad).',
            'Recibo de servicios públicos que compruebe la dirección fiscal de la empresa.'
        ],
        pasos: [
            { titulo: 'Creación de Usuario', descripcion: 'Registro del Representante Legal en el portal "Mi Empresa en Línea".', dependencia: 'Portal Mi Empresa', modalidad: 'Virtual', tiempo: '15 min' },
            { titulo: 'Llenado de Formulario Único', descripcion: 'Ingreso de datos de la empresa: Razón social, finalidad, capital, socios y dirección fiscal.', dependencia: 'Ventanilla Única (CCIT)', modalidad: 'Virtual', tiempo: '1 hora' },
            { titulo: 'Firma y Carga de Escritura', descripcion: 'Subir la Escritura Pública escaneada y firmada por el Notario (Documento protocolizado).', dependencia: 'Registro Mercantil', modalidad: 'Virtual', tiempo: '10 min', requisito: 'Escritura Pública' },
            { titulo: 'Pago de Tasas Registrales', descripcion: 'Generación del recibo unificado y pago en línea de los derechos de inscripción registral.', dependencia: 'Sistema de Pagos', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Emisión de Certificados', descripcion: 'Tras la revisión legal, se emite electrónicamente la Matrícula de Comercio, RTN y Constancia de Inscripción.', dependencia: 'Registro Mercantil / SAR', modalidad: 'Virtual', tiempo: '10 días' }
        ],
        plantillas: [
            { nombre: 'Modelo de Escritura de Constitución (S. de R.L.)', formato: 'DOCX', tamano: '45 KB', url: '#' },
            { nombre: 'Clasificador de Actividades Económicas (CIIU)', formato: 'PDF', tamano: '3.1 MB', url: '#' }
        ],
        tramitesRelacionados: ['t10', 't13', 't6']
    },
    {
        id: 't4',
        titulo: 'Declaración y Pago de Bienes Inmuebles',
        descripcion: 'Cumplimiento de la obligación tributaria municipal correspondiente al Impuesto sobre Bienes Inmuebles. Este impuesto recae sobre el valor patrimonial de los terrenos y edificaciones, y los fondos recaudados se invierten en infraestructura y servicios de la ciudad. El sistema permite la consulta de saldos, generación de planes de pago y liquidación en línea.',
        categoriaId: '3',
        institucionId: 'i4',
        tiempoEstimado: 'Inmediato',
        costo: 'Según Avalúo Catastral (Varía anualmente)',
        modalidad: 'Virtual',
        popular: true,
        requisitos: [
            'Tener a mano la Clave Catastral de la propiedad (Código de 14 dígitos).',
            'No estar en estado de "Bloqueo por mora judicial" (Debe resolverse presencialmente).',
            'Tarjeta de crédito o débito si desea efectuar el pago electrónico.'
        ],
        pasos: [
            { titulo: 'Validación de Identidad', descripcion: 'Ingrese el DNI del propietario o el RTN en el portal de servicios tributarios.', dependencia: 'Portal Tributario AMDC', modalidad: 'Virtual', tiempo: '2 min' },
            { titulo: 'Consulta de Clave Catastral', descripcion: 'Seleccione la propiedad o ingrese la clave catastral para visualizar el estado de cuenta actualizado.', dependencia: 'Gerencia de Catastro', modalidad: 'Virtual', tiempo: '1 min', requisito: 'Clave Catastral' },
            { titulo: 'Selección de Modalidad de Pago', descripcion: 'Elija si desea pagar el año completo (con descuento por pronto pago) o seleccionar pago en cuotas.', dependencia: 'Tesorería Municipal', modalidad: 'Virtual', tiempo: '3 min' },
            { titulo: 'Procesamiento de Pago', descripcion: 'Introduzca los datos de su tarjeta para efectuar el débito, o imprima el recibo para pago en banco.', dependencia: 'Pasarela de Pago', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Recibo y Solvencia', descripcion: 'Descargue el comprobante de pago oficial y la Constancia de Solvencia Inmueble electrónica.', dependencia: 'Sistema Automático', modalidad: 'Virtual', tiempo: 'Inmediato' }
        ],
        plantillas: [
            { nombre: 'Reglamento de Zonificación y Avalúos', formato: 'PDF', tamano: '5.6 MB', url: '#' },
            { nombre: 'Solicitud de Re-evalúo Catastral', formato: 'PDF', tamano: '150 KB', url: '#' }
        ],
        tramitesRelacionados: ['t15', 't10']
    },
    {
        id: 't5',
        titulo: 'Aplicación al Programa de Becas Solidarias',
        descripcion: 'El Programa de Becas Solidarias busca apoyar a estudiantes de escasos recursos y con excelencia académica para que continúen y culminen sus estudios de Educación Superior en universidades públicas y privadas. Los beneficiarios reciben un estipendio mensual que ayuda a cubrir gastos de transporte, alimentación y material didáctico.',
        categoriaId: '2',
        institucionId: 'i5',
        tiempoEstimado: '45 a 60 días (Proceso completo)',
        costo: 'Totalmente Gratuito',
        modalidad: 'Virtual',
        popular: true,
        requisitos: [
            'Certificado de estudios del último periodo académico con índice no menor a 80%.',
            'Constancia de matrícula extendida por la Universidad correspondiente.',
            'DNI del estudiante (O partida de nacimiento y DNI de los padres si es menor).',
            'Fotografía tamaño carnet reciente.',
            'Recibo de servicios públicos del domicilio actual (Agua o Energía Eléctrica).'
        ],
        pasos: [
            { titulo: 'Creación de Perfil', descripcion: 'Regístrese en el portal de la Secretaría de Educación con su correo electrónico y DNI.', dependencia: 'Plataforma Educativa', modalidad: 'Virtual', tiempo: '10 min' },
            { titulo: 'Carga de Documentación', descripcion: 'Escanee y suba todos los requisitos documentales solicitados en formato PDF legible.', dependencia: 'Sistema de Recepción', modalidad: 'Virtual', tiempo: '20 min', requisito: 'Constancias Académicas' },
            { titulo: 'Llenado de Estudio Socioeconómico', descripcion: 'Complete el cuestionario detallado sobre la conformación de su hogar, ingresos y vivienda.', dependencia: 'Trabajo Social', modalidad: 'Virtual', tiempo: '45 min' },
            { titulo: 'Evaluación y Entrevista', descripcion: 'El comité revisará la información. Podría ser contactado para una breve entrevista telefónica.', dependencia: 'Comité de Becas', modalidad: 'Virtual', tiempo: '15-30 días' },
            { titulo: 'Publicación de Resultados', descripcion: 'Consulte el estado de su solicitud. Si es aprobado, deberá firmar el acta de compromiso.', dependencia: 'Secretaría General', modalidad: 'Presencial', tiempo: '1 día' }
        ],
        lugares: [
            { nombre: 'Secretaría de Educación - Dirección de Programas', ciudad: 'Tegucigalpa', direccion: 'Centro Cívico Gubernamental, Torre 1, Piso 5.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' }
        ],
        plantillas: [
            { nombre: 'Formato de Declaración de Ingresos No Formales', formato: 'PDF', tamano: '350 KB', url: '#' },
            { nombre: 'Guía del Becario', formato: 'PDF', tamano: '2.1 MB', url: '#' }
        ],
        tramitesRelacionados: ['t11', 't2']
    },
    {
        id: 't6',
        titulo: 'Afiliación e Inscripción de Beneficiarios al Seguro Social (IHSS)',
        descripcion: 'Garantice la cobertura médica, protección contra riesgos laborales y acceso a pensiones mediante la afiliación formal al Instituto Hondureño de Seguridad Social. Este trámite permite que un trabajador directo (ya ingresado en planilla patronal) solicite su carnet, o bien, inscriba a sus dependientes (esposa/o e hijos menores) para que gocen de los beneficios médicos.',
        categoriaId: '1',
        institucionId: 'i6',
        tiempoEstimado: '1 a 3 días',
        costo: 'Gratuito',
        modalidad: 'Híbrido',
        popular: true,
        requisitos: [
            'Documento Nacional de Identificación (DNI) del trabajador en original y copia.',
            { texto: 'Constancia de trabajo reciente (No mayor a 30 días de emisión), firmada y sellada por RRHH.', ejemplo: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop' },
            'Para afiliar esposa/o: Acta de matrimonio original emitida por el RNP.',
            'Para afiliar hijos: Certificado de nacimiento original de cada menor.'
        ],
        pasos: [
            { titulo: 'Revisión en el Portal', descripcion: 'Consulte en línea si su patrono ya realizó el reporte de ingreso (alta) a la base de datos del IHSS.', dependencia: 'Portal IHSS', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Asistencia a la Agencia', descripcion: 'Preséntese en las oficinas de afiliación con los documentos originales requeridos.', dependencia: 'Área de Afiliación', modalidad: 'Presencial', tiempo: '45 min', requisito: 'Constancia de Trabajo' },
            { titulo: 'Ingreso de Beneficiarios', descripcion: 'Entregue las actas de matrimonio/nacimiento al agente para vincular a su núcleo familiar.', dependencia: 'Ventanilla de Dependientes', modalidad: 'Presencial', tiempo: '15 min' },
            { titulo: 'Emisión de Carnet Electrónico', descripcion: 'Se tomará fotografía y huella dactilar. Recibirá su carnet de afiliado de manera inmediata.', dependencia: 'Emisión de Carnets', modalidad: 'Presencial', tiempo: '10 min' }
        ],
        lugares: [
            { nombre: 'Hospital de Especialidades IHSS (La Granja)', ciudad: 'Tegucigalpa', direccion: 'Barrio La Granja, contiguo a Juzgados Laborales.', horario: 'Lunes a Viernes: 7:00 AM - 4:00 PM' },
            { nombre: 'Hospital Regional del Norte', ciudad: 'San Pedro Sula', direccion: 'Boulevard del Norte, entrada a Colonia FESITRANH.', horario: 'Lunes a Viernes: 7:00 AM - 4:00 PM' }
        ],
        plantillas: [
            { nombre: 'Formulario de Inscripción Patronal/Trabajador (D-1)', formato: 'PDF', tamano: '800 KB', url: '#' },
            { nombre: 'Cuadro de Beneficios y Coberturas Médicas', formato: 'PDF', tamano: '1.5 MB', url: '#' }
        ],
        tramitesRelacionados: ['t14', 't9']
    },
    {
        id: 't7',
        titulo: 'Renovación de Licencia de Conducir',
        descripcion: 'La licencia de conducir es el documento oficial que avala la aptitud y capacidad de un individuo para operar vehículos automotores. La renovación debe realizarse antes de su vencimiento. El proceso actual es híbrido, lo que agiliza significativamente el trámite al permitir pagar y enviar documentos en línea, reduciendo el tiempo de presencia física.',
        categoriaId: '7',
        institucionId: 'i7',
        tiempoEstimado: '1 a 2 horas (Dependiendo de la cita médica)',
        costo: 'L. 600.00 (Liviana - 5 años) / L. 1,000.00 (Pesada)',
        modalidad: 'Híbrido',
        popular: true,
        requisitos: [
            { texto: 'Certificados médicos vigentes (Examen Físico, Visual y Psicológico) extendidos por la Cruz Roja u hospitales certificados.', ejemplo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
            'Recibo de pago original del banco (Según categoría y años de vigencia).',
            'Licencia de conducir vencida o próxima a vencer.',
            'DNI vigente original y fotocopia.'
        ],
        pasos: [
            { titulo: 'Realizar Exámenes Médicos', descripcion: 'Acuda a la Cruz Roja Hondureña o clínicas autorizadas para someterse a la evaluación integral.', dependencia: 'Cruz Roja / Clínicas', modalidad: 'Presencial', tiempo: '45 min' },
            { titulo: 'Pago en Institución Bancaria', descripcion: 'Pague el derecho de renovación de licencia indicando el tipo (Liviana, Pesada, Motocicleta) y la duración.', dependencia: 'Bancos Autorizados', modalidad: 'Presencial', tiempo: '10 min' },
            { titulo: 'Solicitud en el Sistema', descripcion: 'A través de la App de Tránsito o la Web, ingrese su perfil, suba las fotografías de sus recibos y agende cita.', dependencia: 'Plataforma DNVT', modalidad: 'Virtual', tiempo: '15 min', requisito: 'Documentos Escaneados' },
            { titulo: 'Validación Presencial e Impresión', descripcion: 'Asista a la DNVT el día de su cita para una rápida validación facial e impresión física de la licencia.', dependencia: 'Tránsito (DNVT)', modalidad: 'Presencial', tiempo: '20 min' }
        ],
        lugares: [
            { nombre: 'Centro de Capacitación y Evaluación DNVT', ciudad: 'Tegucigalpa', direccion: 'Aldea Las Casitas, frente a Complejo de la Policía Militar.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM / Sábados: 8:00 AM - 12:00 MD' },
            { nombre: 'Jefatura Metropolitana de Tránsito', ciudad: 'San Pedro Sula', direccion: 'Boulevard del Sur, contiguo a Monumento a la Madre.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' }
        ],
        plantillas: [
            { nombre: 'Tabla de Costos por Categoría y Vigencia', formato: 'PDF', tamano: '400 KB', url: '#' },
            { nombre: 'Formato para Renovación a Ciudadanos en el Extranjero', formato: 'PDF', tamano: '750 KB', url: '#' }
        ],
        tramitesRelacionados: ['t12', 't2']
    },
    {
        id: 't8',
        titulo: 'Emisión de Licencia Ambiental',
        descripcion: 'La Licencia Ambiental es un instrumento preventivo y de control expedido por la SERNA, obligatorio para cualquier proyecto, instalación o actividad (pública o privada) que pueda causar riesgo o daño ambiental, o alteración en los recursos naturales. El trámite clasifica los proyectos en Categorías (1, 2, 3 y 4) dependiendo del grado de impacto potencial.',
        categoriaId: '8',
        institucionId: 'i8',
        tiempoEstimado: '45 a 120 días (Según la categoría del proyecto)',
        costo: 'L. 5,000.00 hasta L. 150,000.00 (Acorde a la inversión)',
        modalidad: 'Presencial',
        popular: false,
        requisitos: [
            { texto: 'Estudio de Impacto Ambiental (EsIA) elaborado por un prestador de servicios ambientales certificado (Solo para cat. 3 y 4).', ejemplo: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=600&auto=format&fit=crop' },
            'Resumen Ejecutivo del Proyecto y Planos de Localización con coordenadas UTM.',
            'Constancia de Compatibilidad de Uso de Suelo emitida por la Alcaldía Municipal.',
            'RTN de la Empresa y Escritura de Constitución.',
            'Publicación de Aviso en el diario de mayor circulación (Consulta Pública).'
        ],
        pasos: [
            { titulo: 'Ingreso del Expediente', descripcion: 'Presentación física del formulario SINEA, el estudio técnico completo y los mapas de soporte en ventanilla.', dependencia: 'Ventanilla SINEA (SERNA)', modalidad: 'Presencial', tiempo: '1 a 2 horas', requisito: 'Expediente Físico y Digital' },
            { titulo: 'Evaluación Técnica DECA', descripcion: 'Los ingenieros ambientales evalúan los riesgos de contaminación de suelo, agua, aire y flora/fauna.', dependencia: 'Dirección de Evaluación y Control (DECA)', modalidad: 'Interno', tiempo: '15-40 días' },
            { titulo: 'Inspección de Campo Conjunta', descripcion: 'Visita presencial de técnicos de la SERNA y representantes del proyecto al polígono de construcción/operación.', dependencia: 'Unidad de Supervisión', modalidad: 'Presencial', tiempo: '1 día (Variable)' },
            { titulo: 'Dictamen y Contrato de Medidas', descripcion: 'Firma del Contrato de Medidas de Mitigación (obligaciones ambientales a cumplir durante la operación).', dependencia: 'Secretaría General SERNA', modalidad: 'Presencial', tiempo: '10 días' },
            { titulo: 'Entrega de Licencia', descripcion: 'Emisión de la resolución final y entrega del pergamino de la Licencia Ambiental.', dependencia: 'Despacho Ministerial', modalidad: 'Presencial', tiempo: '5 días' }
        ],
        lugares: [
            { nombre: 'Secretaría de Recursos Naturales (MiAmbiente)', ciudad: 'Tegucigalpa', direccion: '100 metros al sur del Estadio Nacional, Edificio Principal.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' }
        ],
        plantillas: [
            { nombre: 'Formulario SINEA Oficial (F-01)', formato: 'XLSX', tamano: '1.2 MB', url: '#' },
            { nombre: 'Términos de Referencia Generales para EsIA', formato: 'PDF', tamano: '3.5 MB', url: '#' },
            { nombre: 'Tabla de Categorización de Proyectos', formato: 'PDF', tamano: '5.2 MB', url: '#' }
        ],
        tramitesRelacionados: ['t10', 't3']
    },
    {
        id: 't9',
        titulo: 'Inscripción de Nacimiento (RNP)',
        descripcion: 'Acto formal y legal mediante el cual se registra la existencia de una nueva persona natural, otorgándole un nombre, nacionalidad y filiación. Este trámite es un derecho humano fundamental y debe realizarse, preferiblemente, en los primeros 6 meses tras el alumbramiento para evitar el proceso de "Inscripción Tardía".',
        categoriaId: '4',
        institucionId: 'i4',
        tiempoEstimado: '30 a 45 minutos',
        costo: 'Gratuito (Derecho Constitucional)',
        modalidad: 'Presencial',
        popular: true,
        requisitos: [
            { texto: 'Reporte de Nacimiento original emitido por el hospital o centro de salud, firmado y sellado por el médico.', ejemplo: 'https://images.unsplash.com/photo-1555252117-426573f3b609?q=80&w=600&auto=format&fit=crop' },
            'Documentos Nacionales de Identificación (DNI) originales de ambos padres.',
            'Si los padres están casados legalmente, presentar Acta de Matrimonio.',
            'Presencia física obligatoria de al menos uno de los padres (Si no están casados, el padre debe presentarse para el reconocimiento).'
        ],
        pasos: [
            { titulo: 'Recepción y Verificación', descripcion: 'Entregar la constancia del hospital y los DNI al Registrador Civil, quien verificará los datos de filiación en el sistema.', dependencia: 'Ventanilla de Registros RNP', modalidad: 'Presencial', tiempo: '10 min', requisito: 'Constancia Médica' },
            { titulo: 'Digitación del Acta', descripcion: 'El funcionario transcribe los datos del recién nacido, fecha, lugar, y asigna el Tomo, Folio y el nuevo número de identidad.', dependencia: 'Registrador Civil', modalidad: 'Interno', tiempo: '15 min' },
            { titulo: 'Lectura y Firma del Acta', descripcion: 'Los padres leen el documento impreso en el libro matriz para confirmar que no existan errores ortográficos. Posteriormente, estampan su firma y huella.', dependencia: 'Libros de Registro RNP', modalidad: 'Presencial', tiempo: '10 min' },
            { titulo: 'Emisión de Certificado', descripcion: 'Se le entrega a los padres el primer Certificado (Acta) de Nacimiento original de manera gratuita.', dependencia: 'Emisión de Certificados', modalidad: 'Presencial', tiempo: '5 min' }
        ],
        lugares: [
            { nombre: 'Registro Nacional de las Personas (Sede Central)', ciudad: 'Tegucigalpa', direccion: 'Bulevar Centroamérica, Edificio IPM.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' },
            { nombre: 'Auxiliatura RNP Hospital Materno Infantil', ciudad: 'Tegucigalpa', direccion: 'Interior del Hospital Escuela, Área de Maternidad.', horario: 'Lunes a Domingo: 7:00 AM - 7:00 PM' },
            { nombre: 'RNP Oficina Regional San Pedro Sula', ciudad: 'San Pedro Sula', direccion: 'Colonia Los Castaños, Boulevard del Norte.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' }
        ],
        plantillas: [
            { nombre: 'Guía para Trámite de Reconocimiento Voluntario', formato: 'PDF', tamano: '400 KB', url: '#' },
            { nombre: 'Información sobre Inscripción Tardía (> 6 meses)', formato: 'PDF', tamano: '850 KB', url: '#' }
        ],
        tramitesRelacionados: ['t1', 't6']
    },
    {
        id: 't10',
        titulo: 'Permiso de Operación de Negocios (Alcaldía)',
        descripcion: 'El Permiso de Operación es el documento que emite el gobierno local (Alcaldía) que autoriza el funcionamiento de un establecimiento comercial, industrial o de servicios dentro del término municipal. Debe renovarse en el mes de enero de cada año. El trámite valida que el negocio cumpla con normativas de zonificación, seguridad y salubridad.',
        categoriaId: '5',
        institucionId: 'i4',
        tiempoEstimado: '10 a 20 días hábiles',
        costo: 'Depende de los Ingresos Brutos declarados o proyectados',
        modalidad: 'Virtual',
        popular: true,
        requisitos: [
            'Declaración Jurada de Ingresos Brutos del año anterior (O proyección si es nuevo).',
            'Copia de la Escritura Pública de Constitución e Inscripción en el Registro Mercantil.',
            'Constancia de Solvencia Municipal vigente de la Empresa y Representante Legal.',
            'Copia del Contrato de Arrendamiento del local comercial o título de propiedad.',
            'Permiso o Constancia del Cuerpo de Bomberos de Honduras.'
        ],
        pasos: [
            { titulo: 'Ingreso al Sistema Tributario', descripcion: 'Acceder al portal AER (Atención Electrónica de Rentas) y seleccionar la opción "Permiso de Operación / Declaración Jurada".', dependencia: 'Portal AER - AMDC', modalidad: 'Virtual', tiempo: '10 min' },
            { titulo: 'Llenado de Declaración Jurada', descripcion: 'Ingresar los montos de ingresos brutos obtenidos en el ejercicio fiscal anterior. El sistema calculará el impuesto a pagar.', dependencia: 'Sistema Tributario', modalidad: 'Virtual', tiempo: '20 min', requisito: 'Estados Financieros' },
            { titulo: 'Pago de Impuestos y Tasas', descripcion: 'Generar el estado de cuenta y efectuar el pago en la pasarela bancaria o sucursal. Incluye tasa de bomberos, recolección de basura e impuesto de industria y comercio.', dependencia: 'Bancos / Tesorería', modalidad: 'Híbrido', tiempo: '15 min' },
            { titulo: 'Validaciones de Seguridad y Salud', descripcion: 'Para restaurantes o fábricas, se solicitará evidencia de inspección sanitaria. La Alcaldía verificará compatibilidad de uso de suelo.', dependencia: 'Control de Salud y Ambiente', modalidad: 'Interno', tiempo: '7 a 15 días' },
            { titulo: 'Descarga del Permiso Electrónico', descripcion: 'Una vez auditado el pago y aprobados los permisos, podrá descargar el Permiso de Operación con firma digital y código QR, que debe exhibirse en el local.', dependencia: 'Control de Ingresos', modalidad: 'Virtual', tiempo: 'Inmediato' }
        ],
        plantillas: [
            { nombre: 'Formulario de Declaración Jurada de Ingresos (F-02)', formato: 'PDF', tamano: '1.1 MB', url: '#' },
            { nombre: 'Requisitos para Inspección de Bomberos', formato: 'PDF', tamano: '500 KB', url: '#' },
            { nombre: 'Calendario de Vencimientos Tributarios', formato: 'PDF', tamano: '2.5 MB', url: '#' }
        ],
        tramitesRelacionados: ['t3', 't4', 't15', 't13']
    },
    {
        id: 't11',
        titulo: 'Auténtica de Documentos de Educación Secundaria',
        descripcion: 'Trámite indispensable para certificar la validez y originalidad de los documentos académicos emitidos por institutos de nivel medio (públicos o privados). La Auténtica es el paso previo requerido antes de presentar el certificado de estudios o diploma en universidades nacionales, colegios profesionales, o enviarlos a la Secretaría de Relaciones Exteriores (Cancillería) para apostillado internacional.',
        categoriaId: '2',
        institucionId: 'i5',
        tiempoEstimado: '3 a 5 días hábiles',
        costo: 'L. 50.00 por documento',
        modalidad: 'Presencial',
        popular: false,
        requisitos: [
            'Certificación de Estudios original, debidamente firmada por el Director y Secretario del Instituto.',
            'Título de Educación Media original (si aplica).',
            'Recibo de la Tasa General de la República (TGR-1) pagado a favor de la Secretaría de Educación.',
            'Fotocopia del DNI del estudiante.'
        ],
        pasos: [
            { titulo: 'Validación en la Dirección Departamental', descripcion: 'Si el instituto es privado, el documento debe llevar primero el visto bueno de la Dirección Departamental correspondiente.', dependencia: 'Dirección Departamental', modalidad: 'Presencial', tiempo: '1 a 2 días' },
            { titulo: 'Pago de Tasa TGR', descripcion: 'Genere y pague el recibo TGR-1 (Rubro Auténticas) en cualquier agencia bancaria.', dependencia: 'Bancos / SEFIN', modalidad: 'Presencial', tiempo: '15 min' },
            { titulo: 'Entrega de Documentos', descripcion: 'Presente los documentos originales y el recibo TGR en la ventanilla de Archivo y Auténticas de la Secretaría de Educación.', dependencia: 'Archivo y Auténticas', modalidad: 'Presencial', tiempo: '20 min', requisito: 'Documentos Originales' },
            { titulo: 'Verificación de Firmas', descripcion: 'El personal coteja las firmas de los directores con su base de datos para asegurar que no hay falsificación.', dependencia: 'Secretaría General', modalidad: 'Interno', tiempo: '2 a 3 días' },
            { titulo: 'Devolución de Documentos Autenticados', descripcion: 'Retire sus documentos, los cuales ahora tendrán un sello de auténtica y firma de la autoridad ministerial en el reverso.', dependencia: 'Ventanilla de Entrega', modalidad: 'Presencial', tiempo: '10 min' }
        ],
        lugares: [
            { nombre: 'Secretaría de Educación - Ventanilla de Auténticas', ciudad: 'Tegucigalpa', direccion: 'Centro Cívico Gubernamental, Torre 1, Piso 1.', horario: 'Lunes a Viernes: 8:00 AM - 3:00 PM' }
        ],
        plantillas: [
            { nombre: 'Guía de Generación de Recibo TGR para Educación', formato: 'PDF', tamano: '1.8 MB', url: '#' },
            { nombre: 'Directorio de Direcciones Departamentales', formato: 'PDF', tamano: '800 KB', url: '#' }
        ],
        tramitesRelacionados: ['t5']
    },
    {
        id: 't12',
        titulo: 'Traspaso de Vehículo Automotor',
        descripcion: 'Procedimiento registral que formaliza el cambio de titularidad de un vehículo. Actualiza el historial del automotor en la base de datos del Instituto de la Propiedad (IP) para efectos legales, civiles y fiscales (pago de matrícula de vehículos). Es obligatorio para liberar de responsabilidad por accidentes o multas al vendedor.',
        categoriaId: '7',
        institucionId: 'i7',
        tiempoEstimado: '24 a 48 horas (Si no hay incidencias legales)',
        costo: 'Aprox. L. 3,500.00 (Incluye gastos registrales, notario e impuestos)',
        modalidad: 'Presencial',
        popular: true,
        requisitos: [
            'Testimonio de Escritura Pública o Auténtica de firmas del Contrato de Compra-Venta (Realizado por Notario Público).',
            'Boleta de Revisión Original (Vigente o con las multas pagadas).',
            'Constancia de Inspección Física y Revisión de Chasis y Motor emitida por la Dirección Policial de Investigaciones (DPI).',
            'Recibo de pago de Tradición de Dominio (Pago en Banco).',
            'Fotocopias de DNI y RTN de Comprador y Vendedor.'
        ],
        pasos: [
            { titulo: 'Revisión Física DPI', descripcion: 'Lleve el vehículo a las oficinas de la DPI para que un agente certifique que el número de chasis y motor no están adulterados y no tiene reporte de robo.', dependencia: 'DPI - Robo de Vehículos', modalidad: 'Presencial', tiempo: '2 horas', requisito: 'Vehículo Físico' },
            { titulo: 'Formalización del Contrato', descripcion: 'El abogado Notario redacta y autentica el contrato de compra-venta, asegurando la voluntad de ambas partes.', dependencia: 'Despacho Legal / Notariado', modalidad: 'Presencial', tiempo: '1 hora' },
            { titulo: 'Pago de Tasas Registrales', descripcion: 'Llenar formulario RV-01 y pagar en el banco el impuesto de Tradición de Dominio (2% del valor del vehículo) y emisión de certificado.', dependencia: 'Bancos Autorizados', modalidad: 'Presencial', tiempo: '20 min' },
            { titulo: 'Presentación del Expediente al IP', descripcion: 'Lleve todo el expediente armado a la ventanilla del Registro Vehicular del IP para su calificación registral.', dependencia: 'Instituto de la Propiedad (IP)', modalidad: 'Presencial', tiempo: '1 hora', requisito: 'Expediente Completo' },
            { titulo: 'Emisión de Nueva Boleta de Revisión', descripcion: 'Una vez procesado, se le entregará la nueva boleta de revisión donde el comprador ya figura como propietario actual.', dependencia: 'Registro Vehicular', modalidad: 'Presencial', tiempo: '24 horas' }
        ],
        lugares: [
            { nombre: 'Instituto de la Propiedad (Registro Vehicular)', ciudad: 'Tegucigalpa', direccion: 'Centro Cívico Gubernamental, Edificio Cuerpo Bajo B.', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' },
            { nombre: 'Inspección de Vehículos DPI', ciudad: 'Tegucigalpa', direccion: 'Instalaciones DPI Colonia Kennedy, contiguo a UMEP 4.', horario: 'Lunes a Viernes: 7:00 AM - 3:00 PM' }
        ],
        plantillas: [
            { nombre: 'Formulario de Trámites Vehiculares RV-01', formato: 'PDF', tamano: '900 KB', url: '#' },
            { nombre: 'Información y Requisitos Revisión DPI', formato: 'PDF', tamano: '400 KB', url: '#' }
        ],
        tramitesRelacionados: ['t7']
    },
    {
        id: 't13',
        titulo: 'Aviso de Cambio de Domicilio Fiscal (SAR)',
        descripcion: 'Gestión mediante la cual las Personas Naturales o Jurídicas notifican formalmente al Servicio de Administración de Rentas (SAR) el cambio de la dirección física donde realizan su actividad comercial o administrativa. Esto es fundamental para recibir notificaciones legales, auditorías y mantener el RTN actualizado y evitar multas formales.',
        categoriaId: '3',
        institucionId: 'i3',
        tiempoEstimado: 'Inmediato (Con actualización instantánea del RTN)',
        costo: 'Gratuito',
        modalidad: 'Virtual',
        popular: false,
        requisitos: [
            'Tener Contrato de Adhesión vigente y acceso a la Oficina Virtual del SAR.',
            'Documento soporte del nuevo domicilio (Ej. Recibo de ENEE, SANAA o Hondutel a nombre de la empresa, o contrato de alquiler notariado).',
            'Datos precisos: Departamento, Municipio, Colonia/Barrio, Calle, Avenida y punto de referencia.'
        ],
        pasos: [
            { titulo: 'Ingreso a Oficina Virtual', descripcion: 'Inicie sesión en el portal DEI/SAR en línea con su RTN y contraseña tributaria.', dependencia: 'Oficina Virtual SAR', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Formulario de Modificación de Datos', descripcion: 'Navegue al apartado de Registro y seleccione "Modificación de Datos". Actualice los campos de Domicilio Principal.', dependencia: 'Módulo de Registro', modalidad: 'Virtual', tiempo: '10 min' },
            { titulo: 'Carga de Documento de Soporte', descripcion: 'Anexe en formato PDF el recibo de servicio público o contrato de arrendamiento que valide la nueva dirección física.', dependencia: 'Sistema Documental', modalidad: 'Virtual', tiempo: '5 min', requisito: 'Soporte Escaneado' },
            { titulo: 'Generación de Acuse y Nuevo RTN', descripcion: 'Firme electrónicamente el formulario. El sistema generará un Acuse de Recibo y podrá imprimir la constancia de su RTN con el nuevo domicilio.', dependencia: 'Sistema SAR', modalidad: 'Virtual', tiempo: 'Inmediato' }
        ],
        plantillas: [
            { nombre: 'Manual de Usuario - Oficina Virtual SAR (Módulo Registro)', formato: 'PDF', tamano: '6.5 MB', url: '#' },
            { nombre: 'Tabla de Sanciones por Incumplimiento de Deberes Formales', formato: 'PDF', tamano: '2.1 MB', url: '#' }
        ],
        tramitesRelacionados: ['t3', 't10']
    },
    {
        id: 't14',
        titulo: 'Solicitud de Pensión por Vejez (Jubilación IHSS)',
        descripcion: 'Es el beneficio económico mensual y vitalicio que se otorga al asegurado(a) del Instituto Hondureño de Seguridad Social que ha cumplido con los requisitos de edad (65 años para hombres y 60 años para mujeres) y que ha cotizado el número mínimo de meses requeridos por la ley al Régimen de Invalidez, Vejez y Muerte (IVM).',
        categoriaId: '1',
        institucionId: 'i6',
        tiempoEstimado: '60 a 90 días (Fase de cálculo y auditoría)',
        costo: 'Trámite Gratuito',
        modalidad: 'Híbrido',
        popular: true,
        requisitos: [
            'Haber cumplido 60 años (mujeres) o 65 años (hombres).',
            'Tener acreditadas un mínimo de 180 cotizaciones mensuales (15 años) debidamente pagadas.',
            'Copia del DNI y Certificación de Nacimiento original reciente.',
            'Constancia de retiro definitivo de labores (Cese de la empresa).',
            'Cuenta Bancaria a nombre del solicitante (Constancia del Banco).'
        ],
        pasos: [
            { titulo: 'Estudio de Cuenta Individual', descripcion: 'Previo al retiro, solicite un Estado de Cuenta en línea para confirmar que cumple con el conteo de 180 cotizaciones. Si hay inconsistencias, debe solicitar investigación.', dependencia: 'Portal IHSS (Cuenta IVM)', modalidad: 'Virtual', tiempo: '30 min' },
            { titulo: 'Presentación de la Solicitud', descripcion: 'Acuda al departamento de Pensiones IVM con el formulario de solicitud firmado y todos los documentos soporte (certificados y constancia del banco).', dependencia: 'Departamento Pensiones IVM', modalidad: 'Presencial', tiempo: '1 hora', requisito: 'Formularios Completos' },
            { titulo: 'Auditoría y Cálculo Actuarial', descripcion: 'El expediente pasa al área de auditoría, donde se verifica que el patrono realmente pagó las cuotas y se calcula el monto base de la pensión según el promedio salarial.', dependencia: 'Unidad de Cálculo y Auditoría', modalidad: 'Interno', tiempo: '30 a 60 días' },
            { titulo: 'Resolución y Emisión de Dictamen', descripcion: 'La comisión técnica aprueba la resolución legal que otorga el derecho a la pensión. Se cita al adulto mayor para notificárselo.', dependencia: 'Dirección Médica y Legal', modalidad: 'Presencial', tiempo: '15 días' },
            { titulo: 'Primer Pago y Supervivencia', descripcion: 'La pensión se depositará mensualmente. Recuerde realizar el trámite de Fe de Vida o Supervivencia cada 6 meses.', dependencia: 'Bancos / IHSS', modalidad: 'Virtual', tiempo: 'Continuo' }
        ],
        lugares: [
            { nombre: 'Edificio Administrativo IHSS (Pensiones)', ciudad: 'Tegucigalpa', direccion: 'Barrio Abajo, frente a Museo para la Identidad Nacional.', horario: 'Lunes a Viernes: 7:00 AM - 3:00 PM' },
            { nombre: 'Edificio Administrativo IHSS (Norte)', ciudad: 'San Pedro Sula', direccion: 'Colonia Tepeaca, Boulevard del Norte.', horario: 'Lunes a Viernes: 7:00 AM - 3:00 PM' }
        ],
        plantillas: [
            { nombre: 'Formulario de Solicitud de Pensión (IVM-05)', formato: 'PDF', tamano: '1.2 MB', url: '#' },
            { nombre: 'Hoja de Requisitos Completos y Documentación', formato: 'PDF', tamano: '800 KB', url: '#' },
            { nombre: 'Guía sobre Retiros Anticipados', formato: 'PDF', tamano: '2.4 MB', url: '#' }
        ],
        tramitesRelacionados: ['t6', 't2']
    },
    {
        id: 't15',
        titulo: 'Constancia de Solvencia Municipal',
        descripcion: 'La Solvencia Municipal es un documento oficial y de vital importancia que certifica que un ciudadano o empresa se encuentra al día ("solvente") con el pago de todos los impuestos, tasas, multas y contribuciones correspondientes a la Alcaldía (Bienes inmuebles, impuesto vecinal, servicios públicos, etc.). Es requerida para casi cualquier trámite notarial, traspaso de propiedades o contratos con el Estado.',
        categoriaId: '3',
        institucionId: 'i4',
        tiempoEstimado: 'Inmediato',
        costo: 'L. 100.00 (Empresa) / L. 50.00 (Persona Natural)',
        modalidad: 'Virtual',
        popular: true,
        requisitos: [
            'DNI o RTN del ciudadano o empresa.',
            'Haber pagado previamente el Impuesto Personal (Vecinal) o el Impuesto de Industria y Comercio.',
            'No poseer deudas arrastradas de Bienes Inmuebles, agua o multas de tránsito municipales asociadas al DNI.'
        ],
        pasos: [
            { titulo: 'Verificación de Estado de Cuenta', descripcion: 'Ingrese al portal tributario con su DNI y consulte su estado de cuenta para asegurarse de que el saldo esté en 0.00.', dependencia: 'Portal AER - AMDC', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Generación del Cobro de Constancia', descripcion: 'Seleccione "Emitir Solvencia" en el menú. El sistema creará un recibo por el valor del certificado (Ej. L. 100).', dependencia: 'Módulo de Solvencias', modalidad: 'Virtual', tiempo: '2 min' },
            { titulo: 'Pago en Línea', descripcion: 'Pague el costo de la constancia mediante tarjeta de crédito/débito o en su banca en línea (Pago de Servicios Públicos).', dependencia: 'Pasarela de Pagos', modalidad: 'Virtual', tiempo: '5 min' },
            { titulo: 'Descarga Inmediata', descripcion: 'El sistema validará el pago y generará un documento PDF con firma digital y un código QR verificable, con una vigencia de 3 a 6 meses.', dependencia: 'Sistema Automático AMDC', modalidad: 'Virtual', tiempo: 'Inmediato' }
        ],
        plantillas: [
            { nombre: 'Manual de Consulta de Saldos (AER)', formato: 'PDF', tamano: '3.3 MB', url: '#' },
            { nombre: 'Información sobre Prescripción de Deudas', formato: 'PDF', tamano: '1.5 MB', url: '#' }
        ],
        tramitesRelacionados: ['t4', 't10', 't3']
    }
];
