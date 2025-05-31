"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SidebarIndex from "@/components/SidebarIndex";

export default function PortfolioClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setShowSidebar(window.scrollY > 400 && window.innerWidth >= 1024);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const skillsData = {
    frontend: {
      title: "Front-End",
      icon: "🎨",
      skills: [
        { name: "TypeScript", category: "Lenguajes" },
        { name: "JavaScript", category: "Lenguajes" },
        { name: "React.js", category: "Frameworks" },
        { name: "Next.js", category: "Frameworks" },
        { name: "Tailwind CSS", category: "Estilos" },
        { name: "Styled Components", category: "Estilos" },
        { name: "CSS Modules", category: "Estilos" },
        { name: "Framer Motion", category: "Animaciones" },
        { name: "Material-UI", category: "UI Libraries" },
        { name: "Shadcn/ui", category: "UI Libraries" },
        { name: "Ant Design", category: "UI Libraries" },
        { name: "Diseño Responsivo", category: "UI/UX" },
        { name: "Accesibilidad", category: "UI/UX" },
        { name: "Performance Optimization", category: "UI/UX" },
      ],
    },
    libraries: {
      title: "Ecosistema React",
      icon: "📚",
      skills: [
        // Formularios
        "React Hook Form",
        "Formik",
        "React Select",
        "React Datepicker",
        "React Mentions",
        // Estado & Data
        "TanStack Query",
        "Zustand",
        "Redux Toolkit",
        "SWR",
        // Navegación
        "React Router",
        "Next Router",
        // Tablas & Visualización
        "React Table",
        "AG Grid",
        "Chart.js",
        "Recharts",
        "D3.js",
        // Interacciones & Animaciones
        "React DnD",
        "React Spring",
        "React Transition Group",
        // Notificaciones & UI
        "React Hot Toast",
        "React Toastify",
        // Documentos & Email
        "jsPDF",
        "React PDF",
        "EmailJS",
        "React Email",
        // Desarrollo & Testing
        "React Helmet",
        "React Testing Library",
        "Storybook",
      ],
    },
    backend: {
      title: "Back-End",
      icon: "⚙️",
      skills: [
        { name: "Node.js", category: "Frameworks" },
        { name: "NestJS", category: "Frameworks" },
        { name: "Express.js", category: "Frameworks" },
        { name: "Auth0", category: "Autenticación" },
        { name: "Passport.js", category: "Autenticación" },
        { name: "JWT", category: "Autenticación" },
        { name: "REST APIs", category: "API Development" },
        { name: "GraphQL", category: "API Development" },
      ],
    },
    database: {
      title: "Bases de datos",
      icon: "💾",
      skills: [
        { name: "PostgreSQL", category: "SQL" },
        { name: "MongoDB", category: "NoSQL" },
        { name: "Prisma", category: "ORMs" },
        { name: "Mongoose", category: "ORMs" },
      ],
    },
    devops: {
      title: "DevOps & infraestructura",
      icon: "🔌",
      skills: [
        { name: "Docker", category: "Contenedores" },
        { name: "Git & GitHub", category: "Control de versiones" },
        { name: "Vercel", category: "Deploy" },
        { name: "Railway", category: "Deploy" },
        { name: "Render", category: "Deploy" },
        { name: "GitHub Actions", category: "CI/CD" },
      ],
    },
    integrations: {
      title: "Integraciones & no-code",
      icon: "🧩",
      skills: [
        { name: "n8n", category: "Automatización" },
        { name: "Make", category: "Automatización" },
        { name: "Zapier", category: "Automatización" },
        { name: "Google Sheets", category: "Servicios" },
        { name: "WhatsApp API", category: "Servicios" },
        { name: "Notion API", category: "Servicios" },
      ],
    },
    others: {
      title: "Otras tecnologías",
      icon: "📦",
      skills: [
        { name: "Socket.io", category: "Tiempo real" },
        { name: "Webhooks", category: "Integraciones" },
        { name: "Cron Jobs", category: "Automatización" },
        { name: "Email Services", category: "Notificaciones" },
      ],
    },
    soft: {
      title: "Habilidades blandas",
      icon: "🤝",
      skills: [
        { name: "Comunicación efectiva", category: "Interpersonal" },
        { name: "Resolución de problemas", category: "Analítica" },
        { name: "Mentalidad de producto", category: "Estratégica" },
        { name: "Autogestión", category: "Personal" },
        { name: "Adaptabilidad", category: "Personal" },
        { name: "Liderazgo técnico", category: "Interpersonal" },
        { name: "Mentoría", category: "Interpersonal" },
        { name: "Gestión de conflictos", category: "Interpersonal" },
        { name: "Pensamiento crítico", category: "Analítica" },
        { name: "Toma de decisiones", category: "Estratégica" },
        { name: "Orientación a resultados", category: "Estratégica" },
        { name: "Proactividad", category: "Personal" },
        { name: "Trabajo en equipo", category: "Interpersonal" },
      ],
    },
  };

  const projects = [
    {
      title: "Mr. Happy E-Commerce",
      description:
        "E-commerce personalizado para tienda especializada en productos de vapeo y artículos alternativos. Solución escalable orientada a la conversión de clientes.",
      tech: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "PostgreSQL",
        "Stripe",
      ],
      features: [
        "Arquitectura escalable y mantenible",
        "Gestión completa de productos y stock",
        "Integración con pasarela de pagos",
        "Panel de administración intuitivo",
        "Optimización SEO avanzada",
      ],
      image: "/placeholder.svg?height=400&width=600",
      type: "E-Commerce",
    },
    {
      title: "Paddel-Club Manager",
      description:
        "Aplicación web multitenant para gestión de clubes de pádel. Sistema completo de reservas, usuarios y pagos diseñado como SaaS escalable.",
      tech: [
        "React",
        "TailwindCSS",
        "Framer Motion",
        "NestJS",
        "PostgreSQL",
        "Auth0",
      ],
      features: [
        "Arquitectura multitenant escalable",
        "Sistema de reservas por franjas horarias",
        "Autenticación y manejo de roles",
        "Integración de pagos y notificaciones",
        "MVP completo listo para escalar",
      ],
      image: "/placeholder.svg?height=400&width=600",
      type: "SaaS Platform",
    },
  ];

  const experience = [
    {
      company: "Mitrol",
      position: "Front-end Developer Ssr",
      period: "enero 2023 - Actualidad",
      duration: `${(() => {
        const start = new Date(2023, 0); // enero 2023
        const now = new Date();
        const diffMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        const years = Math.floor(diffMonths / 12);
        const months = diffMonths % 12;
        return `${years ? `${years} año${years > 1 ? 's' : ''} ` : ''}${months ? `${months} mes${months > 1 ? 'es' : ''}` : ''}`.trim();
      })()}`,
      description:
        "Desarrollo de interfaces modernas y eficientes para productos core utilizados en centros de contacto. Trabajo como parte del equipo responsable del front-end de aplicaciones críticas dentro del ecosistema Mitrol, enfocándome en la creación de soluciones escalables y de alto rendimiento. Utilizo tecnologías como React, Next.js y TypeScript para diseñar experiencias de usuario intuitivas, manteniendo buenas prácticas de accesibilidad, rendimiento y mantenibilidad del código. Colaboro estrechamente con diseñadores, product owners y equipos de back-end para implementar funcionalidades clave que impactan directamente en la operación diaria de empresas que gestionan grandes volúmenes de atención al cliente.",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Material-UI",
        "Framer Motion",
      ],
    },
    {
      company: "Soho",
      position: "Full Stack Developer",
      period: "marzo 2022 - octubre 2022",
      duration: "8 meses",
      location: "Santiago, Chile",
      description:
        "Desarrollo full-stack de aplicaciones web escalables utilizando tecnologías modernas. Participé en la arquitectura de soluciones, implementación de APIs REST y creación de interfaces de usuario responsivas con enfoque en la experiencia del usuario.",
      tech: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind",
      ],
    },
    {
      company: "ROSS Outside the Box",
      position: "Full Stack Developer",
      period: "septiembre 2020 - marzo 2022",
      duration: "1 año 7 meses",
      location: "Córdoba, Argentina",
      description:
        "Mi primera experiencia profesional en desarrollo web. Desarrollé aplicaciones completas desde cero, implementé funcionalidades con React y Redux, creé APIs con Node.js y trabajé con bases de datos relacionales. Aprendí las bases del desarrollo profesional y las mejores prácticas de la industria.",
      tech: ["React", "Redux", "Node.js", "PostgreSQL", "Jest", "Material-UI"],
    },
  ];

  useEffect(() => {
    // Mejorar el scroll suave en toda la página
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {showSidebar && <SidebarIndex />}
      <HeroSection scrollToSection={scrollToSection} y={y} opacity={opacity} />
      <AboutSection scrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                mí
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Front-End Developer con pasión por crear interfaces excepcionales
              y experiencias de usuario memorables. Especializado en React,
              Next.js y TypeScript, con sólidos conocimientos en back-end y
              arquitectura full-stack. <span className="block mt-2">Actualmente trabajo full time, pero también realizo proyectos freelance para clientes que buscan soluciones modernas y personalizadas.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Mi historia
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Desde los 16 años he trabajado en diversos roles que
                  fortalecieron mi capacidad de organización, responsabilidad y
                  resolución de problemas. Estas experiencias, junto con mi
                  pasión por el handball, me enseñaron la importancia del
                  trabajo en equipo y la comunicación efectiva.
                </p>
                <p>
                  Mi transición a la tecnología fue natural, especializándome
                  principalmente en desarrollo front-end. Me apasiona crear
                  interfaces intuitivas y experiencias de usuario excepcionales,
                  aunque también tengo sólidos conocimientos en back-end, bases
                  de datos e infraestructura que me permiten tener una visión
                  completa del desarrollo web.
                </p>
                <p>
                  Como Front-End Developer, disfruto transformando diseños en
                  código, optimizando performance y creando animaciones que
                  deleiten a los usuarios. Mi enfoque está en la calidad del
                  código, la accesibilidad y las mejores prácticas de desarrollo
                  moderno.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    4+
                  </div>
                  <div className="text-gray-300">Años de experiencia</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    50+
                  </div>
                  <div className="text-gray-300">Tecnologías</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300">Proyectos</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-300">Empresas</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.button
            onClick={() => scrollToSection("skills")}
            className="mx-auto mt-12 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ y: 5 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            aria-label="Ir a la siguiente sección"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection skillsData={skillsData} scrollToSection={scrollToSection} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} scrollToSection={scrollToSection} />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experiencia{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                profesional
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-white">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg text-cyan-400 font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-300 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="text-sm text-gray-400">
                          {exp.duration}
                        </div>
                        {exp.location && (
                          <div className="flex items-center text-gray-400 text-sm mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {exp.description && (
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-600/50 text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="mx-auto mt-12 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ y: 5 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            aria-label="Ir a la siguiente sección"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Trabajamos{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                juntos?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevas oportunidades y proyectos
              interesantes. ¡Hablemos sobre cómo puedo ayudarte!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20"
              >
                <Mail className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">ezequiel.diaz1337@gmail.com</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
              >
                <Phone className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Teléfono
                </h3>
                <p className="text-gray-300">+54 351 201 4496</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
              >
                <MapPin className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Ubicación
                </h3>
                <p className="text-gray-300">Córdoba, Argentina</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                aria-label="Enviar un correo electrónico a Ezequiel Diaz"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                aria-label="Visitar el perfil de LinkedIn de Ezequiel Diaz"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500/50 text-gray-300 hover:bg-gray-500/10"
                aria-label="Visitar el perfil de GitHub de Ezequiel Diaz"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 - Ezequiel Diaz</p>
        </div>
      </footer>
    </div>
  );
}
