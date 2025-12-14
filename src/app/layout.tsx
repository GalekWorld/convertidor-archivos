import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Advertisement from "@/components/advertisement";

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
