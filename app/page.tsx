import PortfolioClient from "./PortfolioClient"

export const metadata = {
  title: "Ezequiel Diaz — Full-Stack Developer | Cinematic Portfolio",
  description:
    "Experiencia cinematográfica interactiva de Ezequiel Diaz. Full-Stack Developer con +4 años de experiencia en React, Next.js, TypeScript y Node.js.",
  keywords:
    "Ezequiel Diaz, Full Stack Developer, React Developer, Next.js, TypeScript, Node.js, Portfolio, Córdoba Argentina, Programador Córdoba, Desarrollador Ssr Córdoba",
  openGraph: {
    title: "Ezequiel Diaz — Full-Stack Developer",
    description:
      "Una experiencia cinematográfica interactiva sobre mi carrera como desarrollador.",
    images: ["/og-image-home.jpg"],
  },
}

export default function Portfolio() {
  return <PortfolioClient />
}
