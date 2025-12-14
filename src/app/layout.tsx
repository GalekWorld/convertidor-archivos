import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "ConvertPro",
  description: "Convert your files! Jpg a pdf, Mp4 a Mp3 and more.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
  authors: [{ name: "Dym Team" }],
  icons: {
    icon: "https://i.imgur.com/9MysNF8.jpeg",
  },
  openGraph: {
    title: "ConvertPro",
    description: "Convert your files! Jpg a pdf, Mp4 a Mp3 and more.",
    url: "convertidor-archivos.vercel.app",
    siteName: "ConvertidorArchivos",
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
      <head>
        <SocialBar />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
