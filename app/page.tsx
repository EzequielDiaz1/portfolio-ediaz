import PortfolioClient from "./PortfolioClient"

// Metadatos específicos para la página principal
export const metadata = {
  title: "Ezequiel Diaz - Front-end Developer | Portfolio",
  description:
    "Portfolio de Ezequiel Diaz, Full Stack Developer con 4+ años de experiencia en React, Next.js, TypeScript y Node.js. Especializado en e-commerce y aplicaciones SaaS.",
  keywords:
    "Ezequiel Diaz, Full Stack Developer, React Developer, Next.js, TypeScript, Node.js, Portfolio, Front-end Developer, Back-end Developer, Full Stack Developer, React Developer, Next.js, TypeScript, Node.js, Portfolio, Córdoba Argentina",
  openGraph: {
    title: "Ezequiel Diaz - Front-end Developer",
    description: "Descubre mis proyectos y experiencia como Full Stack Developer",
    images: ["/og-image-home.jpg"],
  },
}

export default function Portfolio() {
  return <PortfolioClient />
}
