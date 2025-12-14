import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";

// Importaciones explícitas de páginas
import PreciosPage from "./precios";
import ContactoPage from "./contacto";
import CaracteristicasPage from "./caracteristicas";
import SoportePage from "./soporte";
import PrivacidadPage from "./privacidad";
import TerminosPage from "./terminos";

// Componente Social Bar
function SocialBar() {
  return (
    <script
      type="text/javascript"
      src="https://pl28253981.effectivegatecpm.com/cd/63/35/cd63352fbcabc3905ef613d6c57f4cb4.js"
      async
    />
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
  title: "ConvertPro - Convertidor de Archivos Online Gratuito",
  description: "Convierte archivos gratis: JPG a PDF, MP4 a MP3, PNG a JPG y más. Rápido, seguro y sin límites. Más de 10 años de experiencia en conversión de archivos.",
  keywords: [
    "convertidor archivos",
    "jpg a pdf", 
    "mp4 a mp3",
    "convertir imagen",
    "convertir video",
    "convertidor online gratis",
    "pdf a jpg",
    "png a pdf",
    "convertir archivos online",
    "extraer audio de video",
    "cambiar formato archivo",
    "convertidor de formato",
    "herramienta conversión"
  ],
  authors: [{ name: "Dym Team" }],
  icons: {
    icon: "https://i.imgur.com/9MysNF8.jpeg",
  },
  openGraph: {
    title: "ConvertPro - Convertidor de Archivos Online Gratuito",
    description: "Convierte archivos gratis: JPG a PDF, MP4 a MP3, PNG a JPG y más. Rápido, seguro y sin límites.",
    url: "https://convertidor-archivos.vercel.app",
    siteName: "ConvertidorArchivos",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/9MysNF8.jpeg",
        width: 1200,
        height: 630,
        alt: "ConvertPro - Convertidor de Archivos Online"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertPro - Convertidor de Archivos Online Gratuito",
    description: "Convierte archivos gratis: JPG a PDF, MP4 a MP3, PNG a JPG y más. Rápido, seguro y sin límites.",
    images: ["https://i.imgur.com/9MysNF8.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <SocialBar />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
