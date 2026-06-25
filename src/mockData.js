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
    titulo: 'Renovación de Pasaporte',
    descripcion: 'Solicite o renueve su pasaporte hondureño de forma digital, rápida y segura.',
    categoriaId: '4',
    institucionId: 'i1',
    tiempoEstimado: '5 días hábiles',
    costo: 'L. 1,000.00',
    modalidad: 'Híbrido',
    popular: true,
    requisitos: [
      { texto: 'Documento Nacional de Identificación (DNI) vigente.', ejemplo: 'https://images.unsplash.com/photo-1633265486064-086b219458ce?q=80&w=600&auto=format&fit=crop' },
      'Recibo de pago en el banco autorizado.',
      { texto: 'Pasaporte anterior (si es renovación).', ejemplo: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop' }
    ],
    pasos: [
      { titulo: 'Pago en el Banco', descripcion: 'Realice el pago de su pasaporte en las agencias bancarias autorizadas.', dependencia: 'Agencias Bancarias Autorizadas', modalidad: 'Presencial' },
      { titulo: 'Programación de Cita', descripcion: 'Ingrese al sistema con su número de recibo y programe su cita.', dependencia: 'Portal INM', modalidad: 'Virtual' },
      { titulo: 'Asistencia a Cita', descripcion: 'Preséntese en la oficina 15 minutos antes con sus documentos.', dependencia: 'Área de Captura de Datos', modalidad: 'Presencial' },
      { titulo: 'Entrega de Pasaporte', descripcion: 'Retire su documento una vez impreso.', dependencia: 'Ventanilla de Entrega', modalidad: 'Presencial' }
    ],
    lugares: [
      { nombre: 'Centro Cívico Gubernamental', ciudad: 'Tegucigalpa', direccion: 'Blvr. Juan Pablo II, Tegucigalpa', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' },
      { nombre: 'Oficina Regional', ciudad: 'San Pedro Sula', direccion: 'Barrio El Centro, SPS', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' }
    ],
    tramitesRelacionados: ['t2', 't7']
  },
  {
    id: 't2',
    titulo: 'Constancia de Antecedentes Penales',
    descripcion: 'Obtenga su constancia oficial requerida para trámites laborales y personales.',
    categoriaId: '4',
    institucionId: 'i2',
    tiempoEstimado: '24 horas',
    costo: 'L. 150.00',
    modalidad: 'Virtual',
    popular: true,
    requisitos: [
      'Documento Nacional de Identificación (DNI).',
      { texto: 'Recibo de pago de la Tasa Única (TGR-1).', ejemplo: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=600&auto=format&fit=crop' },
      'Formulario de solicitud completo.'
    ],
    pasos: [
      { titulo: 'Generar Recibo TGR-1', descripcion: 'Genere e imprima el recibo de pago oficial.', dependencia: 'Secretaría de Finanzas (SEFIN)' },
      { titulo: 'Pago en Banco', descripcion: 'Pague la tasa correspondiente en los bancos autorizados.', dependencia: 'Bancos' },
      { titulo: 'Solicitud en Línea', descripcion: 'Suba su recibo y DNI escaneado al portal de antecedentes.', dependencia: 'Unidad de Antecedentes Penales' },
      { titulo: 'Descarga de Constancia', descripcion: 'Descargue e imprima su constancia oficial con código QR.', dependencia: 'Sistema Automático' }
    ],
    plantillas: [
      { nombre: 'Formulario de Solicitud en Línea', formato: 'PDF', tamano: '120 KB', url: '#' },
      { nombre: 'Guía de Generación TGR-1', formato: 'PDF', tamano: '450 KB', url: '#' }
    ],
    tramitesRelacionados: ['t1', 't3']
  },
  {
    id: 't3',
    titulo: 'Inscripción de Nueva Empresa',
    descripcion: 'Registre su nuevo negocio en el sistema mercantil del estado de manera simplificada.',
    categoriaId: '5',
    institucionId: 'i3',
    tiempoEstimado: '15 días',
    costo: 'Variable',
    modalidad: 'Virtual',
    popular: false,
    requisitos: [
      'Escritura pública de constitución de la empresa.',
      'RTN del Representante Legal.',
      'DNI de los socios.'
    ],
    pasos: [
      { titulo: 'Registro en Línea', descripcion: 'Complete el formulario de registro mercantil.' },
      { titulo: 'Subida de Documentos', descripcion: 'Cargue las escrituras y documentos de identidad.' },
      { titulo: 'Pago de Derechos', descripcion: 'Pague los derechos de registro en línea.' },
      { titulo: 'Aprobación', descripcion: 'Reciba la confirmación y certificado de registro comercial.' }
    ],
    tramitesRelacionados: ['t2', 't4']
  },
  {
    id: 't4',
    titulo: 'Pago de Bienes Inmuebles',
    descripcion: 'Realice el pago de impuestos municipales de sus bienes inmuebles de forma segura.',
    categoriaId: '3',
    institucionId: 'i4',
    tiempoEstimado: 'Inmediato',
    costo: 'Según Avalúo',
    modalidad: 'Virtual',
    popular: true,
    requisitos: [
      'Clave Catastral de la propiedad.',
      'Estar al día con pagos anteriores.'
    ],
    pasos: [
      { titulo: 'Consulta de Saldo', descripcion: 'Ingrese su clave catastral para revisar el monto adeudado.' },
      { titulo: 'Selección de Método de Pago', descripcion: 'Elija pago con tarjeta o generación de recibo bancario.' },
      { titulo: 'Pago Exitoso', descripcion: 'Descargue su comprobante de solvencia municipal.' }
    ],
    tramitesRelacionados: ['t3']
  },
  {
    id: 't5',
    titulo: 'Solicitud de Beca Universitaria',
    descripcion: 'Aplique a los programas de becas nacionales para educación superior.',
    categoriaId: '2',
    institucionId: 'i5',
    tiempoEstimado: '30 días',
    costo: 'Gratuito',
    modalidad: 'Virtual',
    popular: false,
    requisitos: [
      'Certificado de estudios con índice académico mayor a 80%.',
      'Carta de recomendación o constancia de conducta.',
      'DNI o Partida de Nacimiento.'
    ],
    pasos: [
      { titulo: 'Crear Perfil Estudiantil', descripcion: 'Regístrese en el portal de becas.' },
      { titulo: 'Llenar Formulario', descripcion: 'Complete sus datos socioeconómicos y académicos.' },
      { titulo: 'Evaluación', descripcion: 'Espere el periodo de evaluación del comité.' },
      { titulo: 'Resolución', descripcion: 'Consulte los resultados de la selección.' }
    ],
    tramitesRelacionados: ['t2']
  },
  {
    id: 't6',
    titulo: 'Afiliación al Seguro Social (IHSS)',
    descripcion: 'Proceso de afiliación inicial o actualización para asegurados y dependientes.',
    categoriaId: '1',
    institucionId: 'i6',
    tiempoEstimado: '3 días',
    costo: 'Gratuito',
    modalidad: 'Híbrido',
    popular: true,
    requisitos: [
      'DNI del trabajador.',
      { texto: 'Constancia de trabajo reciente.', ejemplo: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop' },
      'Acta de matrimonio (para cónyuge).'
    ],
    pasos: [
      { titulo: 'Ingreso al Sistema', descripcion: 'Acceda con su usuario patronal o individual.', modalidad: 'Virtual' },
      { titulo: 'Carga de Planilla', descripcion: 'Añada la información requerida de afiliación.', modalidad: 'Virtual' },
      { titulo: 'Emisión de Carnet', descripcion: 'Solicite el documento de identificación del IHSS.', modalidad: 'Presencial' }
    ],
    lugares: [
      { nombre: 'Hospital de Especialidades', ciudad: 'Tegucigalpa', direccion: 'Barrio La Granja, Tegucigalpa', horario: 'Lunes a Viernes: 7:00 AM - 3:00 PM' },
      { nombre: 'Clínica Periférica', ciudad: 'San Pedro Sula', direccion: 'Colonia Tepeaca, SPS', horario: 'Lunes a Viernes: 7:00 AM - 3:00 PM' }
    ],
    tramitesRelacionados: ['t3', 't2']
  },
  {
    id: 't7',
    titulo: 'Renovación de Licencia de Conducir',
    descripcion: 'Renueve su permiso de conducir en línea y agende su cita de reclamo.',
    categoriaId: '7',
    institucionId: 'i7',
    tiempoEstimado: 'Inmediato',
    costo: 'L. 600.00',
    modalidad: 'Híbrido',
    popular: true,
    requisitos: [
      'Exámenes médicos (vista, físico y psicológico).',
      'Pago del recibo en el banco.',
      'Licencia vencida.'
    ],
    pasos: [
      { titulo: 'Exámenes', descripcion: 'Realice sus exámenes en la Cruz Roja u otro centro certificado.', modalidad: 'Presencial' },
      { titulo: 'Pago en el Banco', descripcion: 'Pague la renovación según el tipo y años requeridos.', modalidad: 'Presencial' },
      { titulo: 'Solicitud en Línea', descripcion: 'Ingrese al portal policial, suba los documentos y espere la validación.', modalidad: 'Virtual' },
      { titulo: 'Impresión Digital', descripcion: 'Su licencia será emitida digitalmente para uso oficial.', modalidad: 'Virtual' }
    ],
    tramitesRelacionados: ['t1', 't2']
  },
  {
    id: 't8',
    titulo: 'Licencia Ambiental',
    descripcion: 'Solicitud de licenciamiento para proyectos que generen impacto ambiental.',
    categoriaId: '8',
    institucionId: 'i8',
    tiempoEstimado: '45 días',
    costo: 'Variable',
    modalidad: 'Presencial',
    popular: false,
    requisitos: [
      { texto: 'Estudio de Impacto Ambiental.', ejemplo: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=600&auto=format&fit=crop' },
      'Planos del proyecto.',
      'RTN de la Empresa.'
    ],
    pasos: [
      { titulo: 'Presentación', descripcion: 'Suba el estudio de impacto ambiental y los anexos correspondientes.', dependencia: 'Ventanilla Única' },
      { titulo: 'Revisión Técnica', descripcion: 'Los técnicos evaluarán el impacto y las medidas de mitigación.', dependencia: 'Departamento de Evaluación Ambiental' },
      { titulo: 'Visita de Campo', descripcion: 'Se programará una inspección al lugar del proyecto.', dependencia: 'Unidad de Inspectores' },
      { titulo: 'Emisión de Licencia', descripcion: 'Se otorgará la licencia ambiental si el proyecto cumple la normativa.', dependencia: 'Despacho Ministerial' }
    ],
    lugares: [
      { nombre: 'Secretaría de Recursos Naturales y Ambiente (SERNA)', ciudad: 'Tegucigalpa', direccion: '100 metros al sur del Estadio Nacional', horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM' }
    ],
    plantillas: [
      { nombre: 'Formato de Estudio de Impacto Ambiental', formato: 'DOCX', tamano: '1.2 MB', url: '#' },
      { nombre: 'Declaración Jurada de Representante Legal', formato: 'PDF', tamano: '300 KB', url: '#' },
      { nombre: 'Matriz de Medidas de Mitigación', formato: 'XLSX', tamano: '850 KB', url: '#' }
    ],
    tramitesRelacionados: ['t3']
  },
  {
    id: 't9',
    titulo: 'Inscripción de Nacimiento',
    descripcion: 'Inscriba el nacimiento de su hijo/a en el Registro Nacional de las Personas.',
    categoriaId: '4',
    institucionId: 'i4',
    tiempoEstimado: '1 día',
    costo: 'Gratuito',
    modalidad: 'Presencial',
    popular: true,
    requisitos: [
      'Constancia de nacimiento del hospital.',
      'DNI de los padres.'
    ],
    pasos: [
      { titulo: 'Presentación', descripcion: 'Acuda al registro con los documentos.' },
      { titulo: 'Inscripción', descripcion: 'Firma del acta de nacimiento.' }
    ],
    tramitesRelacionados: ['t1']
  },
  {
    id: 't10',
    titulo: 'Permiso de Operación de Negocios',
    descripcion: 'Solicite o renueve el permiso de operación para su comercio local.',
    categoriaId: '5',
    institucionId: 'i4',
    tiempoEstimado: '10 días hábiles',
    costo: 'L. 1,500.00',
    modalidad: 'Virtual',
    popular: true,
    requisitos: [
      'Escritura de la empresa.',
      'Solvencia municipal.'
    ],
    pasos: [
      { titulo: 'Solicitud', descripcion: 'Llene el formulario en el portal de la Alcaldía.' },
      { titulo: 'Inspección', descripcion: 'Visita técnica de bomberos y salud.' },
      { titulo: 'Emisión', descripcion: 'Descarga del permiso digital.' }
    ],
    tramitesRelacionados: ['t3', 't4']
  },
  {
    id: 't11',
    titulo: 'Auténtica de Notas de Secundaria',
    descripcion: 'Autentique su certificado de estudios secundarios para uso universitario o extranjero.',
    categoriaId: '2',
    institucionId: 'i5',
    tiempoEstimado: '3 días',
    costo: 'L. 50.00',
    modalidad: 'Presencial',
    popular: false,
    requisitos: [
      'Certificado de estudios original.',
      'Recibo TGR-1 pagado.'
    ],
    pasos: [
      { titulo: 'Pago', descripcion: 'Pague la auténtica mediante recibo TGR.' },
      { titulo: 'Entrega', descripcion: 'Entregue el documento en ventanilla de la Secretaría.' },
      { titulo: 'Devolución', descripcion: 'Retire su documento firmado y sellado.' }
    ],
    tramitesRelacionados: ['t5']
  },
  {
    id: 't12',
    titulo: 'Traspaso de Vehículo',
    descripcion: 'Realice el cambio de propietario de su vehículo automotor.',
    categoriaId: '7',
    institucionId: 'i7',
    tiempoEstimado: '2 días',
    costo: 'L. 3,000.00',
    modalidad: 'Presencial',
    popular: true,
    requisitos: [
      'Contrato de compraventa autenticado.',
      'Revisión original del vehículo.',
      'DNI de comprador y vendedor.'
    ],
    pasos: [
      { titulo: 'Auténtica', descripcion: 'Lleve el contrato ante un notario.' },
      { titulo: 'Presentación', descripcion: 'Presente los documentos en el Instituto de la Propiedad.' },
      { titulo: 'Emisión', descripcion: 'Reciba la nueva revisión a su nombre.' }
    ],
    tramitesRelacionados: ['t7']
  },
  {
    id: 't13',
    titulo: 'Aviso de Cambio de Domicilio Fiscal',
    descripcion: 'Actualice la dirección registrada de su empresa ante las autoridades fiscales.',
    categoriaId: '3',
    institucionId: 'i3',
    tiempoEstimado: 'Inmediato',
    costo: 'Gratuito',
    modalidad: 'Virtual',
    popular: false,
    requisitos: [
      'RTN de la empresa.',
      'Recibo público con la nueva dirección.'
    ],
    pasos: [
      { titulo: 'Ingreso', descripcion: 'Inicie sesión en la plataforma fiscal.' },
      { titulo: 'Actualización', descripcion: 'Modifique los datos y suba el comprobante.' },
      { titulo: 'Confirmación', descripcion: 'Reciba correo de confirmación de cambio.' }
    ],
    tramitesRelacionados: ['t3']
  },
  {
    id: 't14',
    titulo: 'Pensión por Vejez',
    descripcion: 'Solicite su pensión por jubilación al cumplir los requisitos de edad y cotización.',
    categoriaId: '1',
    institucionId: 'i6',
    tiempoEstimado: '60 días',
    costo: 'Gratuito',
    modalidad: 'Híbrido',
    popular: true,
    requisitos: [
      'Cumplir la edad (60 mujeres, 65 hombres).',
      'Tener mínimo 180 cotizaciones.',
      'Constancia de terminación laboral.'
    ],
    pasos: [
      { titulo: 'Cálculo', descripcion: 'Verifique sus cotizaciones en línea.', modalidad: 'Virtual' },
      { titulo: 'Solicitud', descripcion: 'Llene la solicitud y presente documentos.', modalidad: 'Presencial' },
      { titulo: 'Resolución', descripcion: 'Emisión del dictamen de pensión.', modalidad: 'Virtual' }
    ],
    tramitesRelacionados: ['t6']
  },
  {
    id: 't15',
    titulo: 'Constancia de Solvencia Municipal',
    descripcion: 'Obtenga un certificado que acredite que no posee deudas con la alcaldía.',
    categoriaId: '3',
    institucionId: 'i4',
    tiempoEstimado: 'Inmediato',
    costo: 'L. 100.00',
    modalidad: 'Virtual',
    popular: true,
    requisitos: [
      'DNI.',
      'No poseer saldos pendientes.'
    ],
    pasos: [
      { titulo: 'Verificación', descripcion: 'Ingrese su DNI en el portal.' },
      { titulo: 'Pago', descripcion: 'Pague la constancia en línea.' },
      { titulo: 'Descarga', descripcion: 'Descargue su documento validado con QR.' }
    ],
    tramitesRelacionados: ['t4', 't10']
  }
];
