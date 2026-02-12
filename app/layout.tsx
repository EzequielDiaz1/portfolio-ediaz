import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ezequiel Diaz — Full-Stack Developer",
  description:
    "Portfolio cinematográfico de Ezequiel Diaz. Full-Stack Developer con +4 años de experiencia en React, Next.js, TypeScript y Node.js.",
  keywords:
    "Ezequiel Diaz, Full Stack Developer, React, Next.js, TypeScript, Node.js, Portfolio, Córdoba Argentina",
  openGraph: {
    title: "Ezequiel Diaz — Full-Stack Developer",
    description:
      "Una experiencia cinematográfica interactiva sobre mi carrera como desarrollador.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/app/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
