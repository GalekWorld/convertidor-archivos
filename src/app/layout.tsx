import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

// Componente de Anuncio mejorado
function Advertisement() {
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConvertPro",
  description: "Convert your files! Jpg a pdf, Mp4 a Mp3 and more.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
  authors: [{ name: "Z.ai Team" }],
  icons: {
    icon: "https://i.imgur.com/9MysNF8.jpeg",
  },
  openGraph: {
    title: "ConvertPro",
    description: "Convert your files! Jpg a pdf, Mp4 a Mp3 and more.",
    url: "sps://chat.z.ai",
    siteName: "Z.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertPro",
    description: "Convert your files! Jpg a pdf, Mp4 a Mp3 and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Advertisement />
        <Toaster />
      </body>
    </html>
  );
}
