'use client';

import { useEffect } from 'react';

export default function Advertisement() {
  useEffect(() => {
    // Configuración del anuncio
    const atOptions = {
      'key': 'e3aec981126682d0f6c3a2e9f794fd99',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    // Crear el primer script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.text = `atOptions = ${JSON.stringify(atOptions)};`;

    // Crear el segundo script
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://www.highperformanceformat.com/e3aec981126682d0f6c3a2e9f794fd99/invoke.js';
    script2.async = true;

    // Buscar el contenedor del anuncio
    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
    }

    // Limpieza
    return () => {
      if (adContainer) {
        adContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-4">
      <div id="ad-container" className="advertisement-container">
        {/* Los scripts se añadirán aquí dinámicamente */}
      </div>
    </div>
  );
}
