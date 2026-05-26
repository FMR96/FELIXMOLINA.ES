import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono as GeistMono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"
import { AnalyticsProvider } from "@/components/analytics-provider"

const geistMono = GeistMono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Félix Molina | Consultor SEO, Automatización IA · Sevilla",
  description: "Félix Molina es consultor tecnológico en Sevilla. SEO técnico, automatización con IA y marketing digital para pymes, restaurantes y emprendedores.",
  authors: [{ name: "Félix Molina", url: "https://www.felixmolina.es" }],
  creator: "Félix Molina",
  metadataBase: new URL("https://www.felixmolina.es"),
  alternates: { canonical: "https://www.felixmolina.es" },
  openGraph: {
    title: "Félix Molina | Consultor SEO, Automatización IA · Sevilla",
    description: "Félix Molina es consultor tecnológico en Sevilla. SEO técnico, automatización con IA y marketing digital para pymes, restaurantes y emprendedores.",
    url: "https://www.felixmolina.es",
    siteName: "Félix Molina",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-felix-molina.jpg", width: 1200, height: 630, alt: "Félix Molina — Consultor Tecnológico" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xfmr96",
    creator: "@xfmr96",
    images: ["/og-felix-molina.jpg"],
  },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://felixmolina.es/#felix-molina",
      name: "Félix Molina",
      jobTitle: "Consultor Tecnológico",
      description: "Félix Molina es consultor tecnológico y emprendedor en Sevilla. Especializado en SEO técnico, automatización con inteligencia artificial y marketing digital para pymes, restaurantes y negocios en crecimiento.",
      url: "https://felixmolina.es",
      image: "https://www.felixmolina.es/felix-molina.jpg",
      email: "fmr@drastika.es",
      telephone: "+34664861029",
      address: { "@type": "PostalAddress", addressLocality: "Sevilla", addressCountry: "ES" },
      knowsAbout: ["SEO técnico", "GEO", "Automatización IA", "Marketing digital", "Next.js", "Supabase", "Claude API", "N8n", "Analítica de datos"],
      sameAs: [
        "https://x.com/xfmr96",
        "https://instagram.com/felixmolinaro",
        "https://wa.me/34664861029",
        "https://drastika.es",
        "https://esfoodly.es",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://felixmolina.es/#drstk",
      name: "DRSTK — Drastika",
      description: "Agencia de marketing digital, datos e inteligencia artificial fundada por Félix Molina en Sevilla. Servicios de analítica avanzada, SEO, campañas de paid media y automatización con IA para empresas.",
      url: "https://drastika.es",
      founder: { "@id": "https://felixmolina.es/#felix-molina" },
      address: { "@type": "PostalAddress", addressLocality: "Sevilla", addressCountry: "ES" },
      areaServed: "ES",
      serviceType: ["SEO", "Marketing Digital", "Analítica de Datos", "Automatización IA", "Paid Media"],
    },
    {
      "@type": "WebSite",
      "@id": "https://felixmolina.es/#website",
      url: "https://felixmolina.es",
      name: "Félix Molina",
      description: "Web personal y profesional de Félix Molina, consultor tecnológico en Sevilla.",
      author: { "@id": "https://felixmolina.es/#felix-molina" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://felixmolina.es/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué hace Félix Molina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Félix Molina es consultor tecnológico especializado en SEO técnico, automatización con inteligencia artificial y marketing digital. Félix Molina trabaja con pymes, restaurantes y emprendedores para construir sistemas digitales que generan visibilidad orgánica y automatizan procesos de negocio.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es DRSTK o Drastika?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRSTK (drastika.es) es la agencia de marketing digital, datos e inteligencia artificial fundada por Félix Molina en Sevilla. Drastika ofrece servicios de SEO, analítica avanzada, campañas de paid media y automatización con IA para empresas que quieren tomar decisiones basadas en datos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es Foodly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Foodly (esfoodly.es) es una consultora gastronómica fundada por Félix Molina. Foodly ayuda a restaurantes y negocios de hostelería a optimizar sus operaciones, mejorar su presencia digital y captar más clientes a través de SEO local, redes sociales y automatización de marketing.",
          },
        },
        {
          "@type": "Question",
          name: "¿En qué sectores trabaja Félix Molina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Félix Molina trabaja principalmente con negocios de hostelería y restauración, centros de estética y bienestar, profesionales de servicios (fisioterapeutas, readaptadores deportivos, consultores) y pymes en general que necesitan visibilidad digital y sistemas de captación de clientes desde Google.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo contactar con Félix Molina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes contactar con Félix Molina a través del correo fmr@drastika.es, por WhatsApp en el número +34664861029, o a través de su web felixmolina.es. Félix Molina está disponible para proyectos de consultoría SEO, automatización con IA y marketing digital.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde está ubicado Félix Molina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Félix Molina está ubicado en Sevilla, España, aunque trabaja con clientes de toda España de forma remota. Félix Molina tiene especial conocimiento del mercado local del Aljarafe sevillano y la Sierra Norte de Sevilla.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${geistMono.className} bg-black text-white antialiased`}>
        {children}
        <CookieBanner />
        <AnalyticsProvider />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y87BFC1T5X"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y87BFC1T5X');
          `}
        </Script>
      </body>
    </html>
  )
}
