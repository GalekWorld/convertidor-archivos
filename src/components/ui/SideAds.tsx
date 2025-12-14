import React, { useState } from 'react';

interface AdConfig {
  id: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  bgColor: string;
  textColor: string;
}

const adConfigs: AdConfig[] = [
  {
    id: '1',
    title: 'Adobe Acrobat',
    description: 'La solución profesional para PDF',
    cta: 'Prueba Gratis',
    link: 'https://acrobat.adobe.com',
    bgColor: '#fa3e3e',
    textColor: 'white'
  },
  {
    id: '2',
    title: 'Wondershare PDFelement',
    description: 'Editor PDF todo en uno',
    cta: 'Descargar Gratis',
    link: 'https://pdf.wondershare.com',
    bgColor: '#4a90e2',
    textColor: 'white'
  },
  {
    id: '3',
    title: 'Movavi Video Converter',
    description: 'Convierte videos fácilmente',
    cta: 'Ver Ofertas',
    link: 'https://www.movavi.com',
    bgColor: '#ff6b6b',
    textColor: 'white'
  },
  {
    id: '4',
    title: 'iLovePDF',
    description: 'Herramientas PDF online',
    cta: 'Comenzar Gratis',
    link: 'https://www.ilovepdf.com',
    bgColor: '#28a745',
    textColor: 'white'
  }
];

export default function SideAds() {
  const [visibleAds, setVisibleAds] = useState<string[]>([]);

  React.useEffect(() => {
    // Rotar anuncios cada 30 segundos
    const rotateAds = () => {
      const shuffled = [...adConfigs].sort(() => 0.5 - Math.random());
      setVisibleAds(shuffled.slice(0, 2));
    };

    rotateAds();
    const interval = setInterval(rotateAds, 30000);

    return () => clearInterval(interval);
  }, []);

  const trackAdClick = (adId: string) => {
    console.log(`Ad clicked: ${adId}`);
    // Aquí podrías integrar Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'ad_click', {
        'ad_id': adId,
        'page': 'converter'
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: '999',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      {visibleAds.map((ad) => (
        <div
          key={ad.id}
          style={{
            background: ad.bgColor,
            borderRadius: '12px',
            padding: '20px',
            width: '280px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onClick={() => {
            trackAdClick(ad.id);
            window.open(ad.link, '_blank', 'noopener,noreferrer');
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.25)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
          }}
        >
          <div style={{ marginBottom: '12px', textAlign: 'center' }}>
            <div style={{
              fontSize: '24px',
              marginBottom: '8px'
            }}>
              {ad.id === '1' && '📄'}
              {ad.id === '2' && '📋'}
              {ad.id === '3' && '🎥'}
              {ad.id === '4' && '💻'}
            </div>
            <h3 style={{
              color: ad.textColor,
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '6px',
              lineHeight: '1.2'
            }}>
              {ad.title}
            </h3>
            <p style={{
              color: ad.textColor,
              fontSize: '14px',
              marginBottom: '12px',
              opacity: '0.9',
              lineHeight: '1.4'
            }}>
              {ad.description}
            </p>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              {ad.cta}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}