import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAMABOT - Gabinete de Control con IA Integrada | SAMA Automation",
  description: "SAMABOT combina PLC Siemens, HMI y IA local para reducir paros, estandarizar mantenimiento y entrenar a tu equipo. Solución industrial 4.0.",
  keywords: "SAMABOT, PLC Siemens, HMI, IA industrial, automatización, mantenimiento predictivo, industria 4.0, SAMA Automation",
  authors: [{ name: "SAMA Automation" }],
  creator: "SAMA Automation",
  publisher: "SAMA Automation",
  robots: "index, follow",
  openGraph: {
    title: "SAMABOT - Gabinete de Control con IA Integrada",
    description: "Pon a un ingeniero experto dentro de tu máquina",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
