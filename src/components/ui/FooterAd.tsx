import React, { useState } from 'react';

export default function FooterAd() {
  const [adIndex, setAdIndex] = useState(0);

  const ads = [
    {
      title: 'Necesitas más herramientas?',
      description: 'Descubre nuestro paquete premium',
      cta: 'Ver Planes',
      link: 'https://herramientas-pro.com/premium',
      color: '#8b5cf6'
    },
    {
      title: '¿Archivo muy grande?',
      description: 'Comprime tus archivos antes de convertir',
      cta: 'Comprimir Gratis',
      link: 'https://herramientas-pro.com/compressor',
      color: '#10b981'
    },
    {
      title: 'Convierte en lote',
      description: 'Procesa múltiples archivos a la vez',
      cta: 'Probar Ahora',
      link: 'https://herramientas-pro.com/batch',
      color: '#f59e0b'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % ads.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentAd = ads[adIndex];

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      borderTop: '3px solid #8b5cf6',
      zIndex: '999',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.3)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '15px 25px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🚀</div>
            <div>
              <h4 style={{ margin: '0', fontSize: '18px', fontWeight: '700' }}>
                {currentAd.title}
              </h4>
              <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
                {currentAd.description}
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a
            href={currentAd.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: currentAd.color,
              color: 'white',
              padding: '12px 30px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            }}
          >
            {currentAd.cta}
          </a>
          
          <button
            onClick={() => {
              const footer = document.querySelector('[data-footer-ad]');
              if (footer) {
                footer.style.display = 'none';
              }
            }}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '20px',
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