import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({
  title = "Ezequiel Diaz - Front-end Developer",
  description = "Front-end Developer con 4+ años de experiencia en React, Next.js, TypeScript y Node.js",
  image = "/og-image.jpg",
  url = "https://ezequieldiaz.dev",
  type = "website",
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ezequiel Diaz Portfolio" />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ezequieldiaz" />

      {/* LinkedIn */}
      <meta property="article:author" content="Ezequiel Diaz" />
      <meta property="article:publisher" content="https://www.linkedin.com/in/ezequiel-diaz-4b6b0b199" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Ezequiel Diaz" />
      <meta name="designer" content="Ezequiel Diaz" />
      <meta name="copyright" content="Ezequiel Diaz" />
      <meta name="reply-to" content="ezequiel.diaz1337@gmail.com" />
      <meta name="owner" content="Ezequiel Diaz" />
      <meta name="url" content={url} />
      <meta name="identifier-URL" content={url} />
      <meta name="directory" content="submission" />
      <meta name="category" content="Portfolio, Technology, Web Development" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Expires" content="0" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Cache-Control" content="no-cache" />

      {/* Geo Tags */}
      <meta name="geo.region" content="AR-X" />
      <meta name="geo.placename" content="Córdoba" />
      <meta name="geo.position" content="-31.4201;-64.1888" />
      <meta name="ICBM" content="-31.4201, -64.1888" />
    </Head>
  )
}
