import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samabot.com.mx"),
  title: "SAMABOT — control y monitoreo sobre las máquinas que ya tienes",
  description:
    "SAMA integra control, monitoreo industrial y un asistente de IA sobre el PLC, los sensores y las válvulas que tu planta ya tiene. Se compra una vez; el registro y las alarmas siguen corriendo sin internet.",
  keywords: [
    "retrofit industrial",
    "monitoreo de amoniaco",
    "detección NH3",
    "integración de PLC",
    "automatización Cuauhtémoc",
    "refrigeración industrial Chihuahua",
    "SAMABOT",
    "SAMA Automatización",
  ],
  authors: [{ name: "SAMA Automatización S.A.S. de C.V." }],
  creator: "SAMA Automatización",
  publisher: "SAMA Automatización",
  robots: "index, follow",
  openGraph: {
    title: "SAMABOT — sobre las máquinas que ya tienes",
    description:
      "Control, monitoreo y asistente de IA sobre tu equipo instalado. Cuauhtémoc, Chihuahua.",
    type: "website",
    locale: "es_MX",
    siteName: "SAMABOT",
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
        className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
