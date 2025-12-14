import React, { useState, useRef } from 'react';

export default function AdBanner() {
  const [showAd, setShowAd] = useState(true);

  // Cerrar banner
  const closeAd = () => {
    setShowAd(false);
    // Guardar preferencia en localStorage
    localStorage.setItem('ad-banner-closed', 'true');
  };

  // No mostrar si ya se cerró
  React.useEffect(() => {
    const wasClosed = localStorage.getItem('ad-banner-closed');
    if (wasClosed === 'true') {
      setShowAd(false);
    }
  }, []);

  if (!showAd) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #2d3748 100%)',
      color: 'white',
      padding: '12px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: '1000',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      borderBottom: '3px solid #f59e0b'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '18px' }}>🎯</span>
          <div>
            <strong>Convierte Más, Gana Más</strong>
            <div style={{ fontSize: '12px', opacity: '0.9', marginTop: '2px' }}>
              Herramientas profesionales para tus archivos
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a
            href="https://herramientas-pro.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#f59e0b',
              color: '#1e3a8a',
              padding: '8px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#f59e0b';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#f59e0b';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(245, 158, 11, 0.3)';
            }}
          >
            Descubrir Herramientas
          </a>
          
          <button
            onClick={closeAd}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}