import React, { useState, useRef, useEffect } from 'react';
import { Info, X } from 'lucide-react';

export default function InfoBubble({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const bubbleRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="info-bubble-container" ref={bubbleRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '0.25rem' }}>
      <button 
        className="info-bubble-trigger" 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
        style={{ 
          padding: '0.15rem', 
          width: 'auto', 
          height: 'auto', 
          background: 'transparent', 
          border: 'none', 
          color: 'var(--text-secondary-light)', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%'
        }}
        aria-label="Más información"
      >
        <Info size={14} />
      </button>
      
      {isOpen && (
        <div className="info-bubble-content" style={{
          position: 'absolute',
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--surface-light)',
          border: '1px solid var(--border-light)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          padding: '0.75rem',
          width: 'max-content',
          maxWidth: '220px',
          zIndex: 50,
          fontSize: '0.85rem',
          lineHeight: '1.4',
          color: 'var(--text-primary-light)',
          textAlign: 'left',
          whiteSpace: 'normal',
          wordWrap: 'break-word'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
            <strong style={{ fontSize: '0.75rem', color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Información</strong>
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary-light)', padding: 0, display: 'flex' }}>
              <X size={14} />
            </button>
          </div>
          <div style={{ margin: 0, fontSize: '0.8rem' }}>{text}</div>
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderWidth: '6px',
            borderStyle: 'solid',
            borderColor: 'var(--surface-light) transparent transparent transparent',
            filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.05))'
          }}></div>
        </div>
      )}
    </div>
  );
}
