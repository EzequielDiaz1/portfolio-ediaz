import PortfolioClient from "./PortfolioClient"

// Metadatos específicos para la página principal
export const metadata = {
  title: "Ezequiel Diaz - Full-Stack Developer | Portfolio",
  description:
    "Portfolio de Ezequiel Diaz, Full Stack Developer con 4+ años de experiencia en React, Next.js, TypeScript y Node.js. Especializado en e-commerce y aplicaciones SaaS.",
  keywords:
    "Ezequiel Diaz, Full Stack Developer, React Developer, Next.js, TypeScript, Node.js, Portfolio, Full-Stack Developer, Back-end Developer, Full Stack Developer, React Developer, Next.js, TypeScript, Node.js, Portfolio, Córdoba Argentina, Córdoba, Programador Córdoba, Desarrollador Ssr Córdoba",
  openGraph: {
    title: "Ezequiel Diaz - Full-Stack Developer",
    description: "Descubre mis proyectos y experiencia como Full Stack Developer",
    images: ["/og-image-home.jpg"],
  },
}

export default function Portfolio() {
  return <PortfolioClient />
}
