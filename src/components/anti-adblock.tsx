'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AntiAdblock() {
  const [hasAdblock, setHasAdblock] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Método 1: Detectar si los elementos de anuncio están bloqueados
    const checkAdblock = () => {
      // Crear un elemento de anuncio falso para detectar bloqueo
      const fakeAd = document.createElement('div');
      fakeAd.innerHTML = '&nbsp;';
      fakeAd.className = 'adsbox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad';
      fakeAd.style.cssText = 'position: absolute; top: -10px; left: -10px; height: 1px; width: 1px; visibility: hidden;';
      
      document.body.appendChild(fakeAd);
      
      setTimeout(() => {
        if (fakeAd.offsetHeight === 0) {
          setHasAdblock(true);
          setShowWarning(true);
        }
        document.body.removeChild(fakeAd);
      }, 100);
    };

    // Método 2: Detectar si los scripts están bloqueados
    const checkBlockedScripts = () => {
      const testScript = document.createElement('script');
      testScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      testScript.onerror = () => {
        setHasAdblock(true);
        setShowWarning(true);
      };
      document.head.appendChild(testScript);
      setTimeout(() => {
        if (testScript.parentNode) {
          testScript.parentNode.removeChild(testScript);
        }
      }, 1000);
    };

    // Método 3: Verificar si hay adblockers conocidos
    const checkAdblockers = () => {
      const blockedElements = [
        '#ad-container',
        '.advertisement',
        '.ads',
        '.ad',
        '.adsbygoogle',
        '.google-auto-placed'
      ];
      
      let blocked = false;
      blockedElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element.offsetHeight === 0) {
          blocked = true;
        }
      });
      
      if (blocked) {
        setHasAdblock(true);
        setShowWarning(true);
      }
    };

    // Ejecutar todas las detecciones
    setTimeout(() => {
      checkAdblock();
      checkBlockedScripts();
      checkAdblockers();
    }, 1000);
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={() => setShowWarning(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¡AdBlock Detectado!
          </h3>
          <p className="text-gray-600 mb-6">
            Por favor, desactiva tu AdBlock para continuar usando ConvertPro. 
            Los anuncios nos ayudan a mantener este servicio gratuito.
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={() => setShowWarning(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Ya desactivé AdBlock
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => {
                window.open('https://www.getadblock.com/en/how-to-disable-adblock-on-any-website/', '_blank');
              }}
              className="w-full"
            >
              Cómo desactivar AdBlock
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Si ya desactivaste AdBlock, recarga la página
          </p>
        </div>
      </div>
    </div>
  );
}
