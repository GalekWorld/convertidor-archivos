import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Componente de Anuncio
function Advertisement() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="advertisement-container">
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : 'e3aec981126682d0f6c3a2e9f794fd99',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
              };
            `
          }}
        />
        <script
          type="text/javascript"
          src="https://www.highperformanceformat.com/e3aec981126682d0f6c3a2e9f794fd99/invoke.js"
          async
        />
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
    url: "https://convertidor-archivos.vercel.app",
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
