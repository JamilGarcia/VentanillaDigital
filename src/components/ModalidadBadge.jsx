import React from 'react';
import { MonitorSmartphone, MapPin, RefreshCcw } from 'lucide-react';
import InfoBubble from './InfoBubble';

export default function ModalidadBadge({ modalidad, inverse, instName, pasos }) {
  let icon = null;
  let colorClass = '';
  let tooltip = null;
  
  switch (modalidad) {
    case 'Virtual':
      icon = <MonitorSmartphone size={14} />;
      colorClass = 'modalidad-virtual';
      tooltip = instName ? `Puede realizarse de manera presencial en ${instName} con la ayuda de un funcionario.` : 'Puede realizarse de manera presencial con la ayuda de un funcionario.';
      break;
    case 'Presencial':
      icon = <MapPin size={14} />;
      colorClass = 'modalidad-presencial';
      break;
    case 'Híbrido':
      icon = <RefreshCcw size={14} />;
      colorClass = 'modalidad-hibrido';
      if (pasos && pasos.length > 0) {
        tooltip = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontWeight: '600', marginBottom: '0.25rem', display: 'block' }}>Detalle de pasos:</span>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {pasos.map((paso, idx) => (
                <li key={idx}>
                  <strong>{paso.titulo}:</strong> <span style={{ color: paso.modalidad === 'Virtual' ? 'var(--secondary-color)' : 'var(--primary-color)', fontWeight: '500' }}>{paso.modalidad || 'Presencial'}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      } else {
        tooltip = 'El inicio es virtual, pero requiere presentarse para la entrega de documentos físicos finales.';
      }
      break;
    default:
      icon = <MonitorSmartphone size={14} />;
      colorClass = 'modalidad-virtual';
  }

  return (
    <span className={`badge-modalidad ${colorClass} ${inverse ? 'inverse' : ''}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon} <span>{modalidad || 'Virtual'}</span>
      {tooltip && <InfoBubble text={tooltip} />}
    </span>
  );
}
