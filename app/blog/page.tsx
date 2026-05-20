"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Rss, Clock, Calendar, Tag, ArrowUpRight, Star } from "lucide-react"

// ─── Tech posts (hardcoded, client-side blog) ───────────────────────────────

type TechPost = {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  summary: string
  tags: string[]
  content: string[]
}

const TECH_POSTS: TechPost[] = [
  {
    id: "BLOG-001",
    title: "MCP: El protocolo que convierte a Claude en un agente real",
    category: "IA",
    date: "2026-04-28",
    readTime: "6 min",
    summary:
      "Model Context Protocol (MCP) permite a los LLMs conectarse a herramientas externas con un estándar abierto. Esto cambia fundamentalmente cómo construimos agentes de IA: de chatbots a sistemas que actúan.",
    tags: ["MCP", "Claude", "agentes", "LLM", "Anthropic"],
    content: [
      "Durante meses, la forma de dar herramientas a un LLM era propietaria y fragmentada. Cada plataforma tenía su propio sistema de function calling. Integrar Claude con tu base de datos, tu CRM o tu sistema de archivos requería glue code personalizado que se rompía con cada actualización del modelo.",
      "MCP (Model Context Protocol) es la solución de Anthropic a ese problema. Un protocolo abierto y estándar que define cómo un LLM puede exponer y consumir herramientas externas.",
      "La arquitectura es simple: un servidor MCP expone recursos (datos que el modelo puede leer) y herramientas (acciones que el modelo puede ejecutar). El cliente — Claude en este caso — decide cuándo y cómo usarlos.",
      "Lo que cambia con MCP no es técnico, es conceptual. Un LLM con MCP no es un chatbot que responde preguntas; es un agente que puede leer tu base de datos, escribir archivos, llamar a APIs, y encadenar acciones complejas con criterio propio.",
      "En la práctica: he conectado Claude a Supabase via MCP. Ahora puedo pedirle que analice los datos de ventas de un restaurante, identifique anomalías y redacte un informe. Cero código intermediario. Cero copia-pega de datos.",
      "El ecosistema crece rápido. Hay servidores MCP para GitHub, Slack, bases de datos SQL, sistemas de archivos, Figma y decenas más. La comunidad open source está construyendo integraciones más rápido de lo que cualquier empresa podría hacerlo sola.",
      "Predicción: en 12 meses, la capacidad de orquestar agentes vía MCP será tan estándar como saber usar APIs REST. Los builders que lo entiendan ahora tienen una ventaja real.",
    ],
  },
  {
    id: "BLOG-002",
    title: "N8n vs Zapier en 2026: ¿cuál usar y cuándo?",
    category: "AUTOMATIZACIÓN",
    date: "2026-04-15",
    readTime: "5 min",
    summary:
      "Dos herramientas de automatización con filosofías opuestas. Zapier prioriza la simplicidad; N8n prioriza el control. La elección correcta depende de si optimizas para velocidad o para poder.",
    tags: ["N8n", "Zapier", "automatización", "workflow", "no-code"],
    content: [
      "Llevo dos años usando ambas en producción. Esta no es una comparativa teórica.",
      "ZAPIER: su ventaja es la velocidad de activación. En 10 minutos tienes un flujo funcionando. La interfaz es intuitiva, la documentación es excelente y tiene más de 6.000 integraciones nativas. Es la herramienta correcta cuando el equipo no es técnico y el flujo es simple.",
      "El problema de Zapier: el precio escala muy rápido con el volumen. Y cuando necesitas lógica compleja — condicionales anidados, loops, transformación de datos avanzada — la interfaz se vuelve torpe. Estás pagando por simplicidad que ya no necesitas.",
      "N8N: código abierto, self-hosteable, con un modelo de datos más potente. Los nodos de código JavaScript te dan control total sobre la transformación de datos. Puedes construir flujos que Zapier simplemente no puede ejecutar.",
      "Cuándo usar cada uno: Zapier si el equipo es no técnico, el flujo es simple y el tiempo de setup importa más que el coste a escala. N8n si tienes algo de capacidad técnica, el volumen es alto o los flujos requieren lógica compleja.",
    ],
  },
  {
    id: "BLOG-003",
    title: "Supabase en producción: lo que nadie te cuenta",
    category: "DESARROLLO",
    date: "2026-04-02",
    readTime: "7 min",
    summary:
      "Supabase es la alternativa a Firebase que el ecosistema open source necesitaba. Pero usarla bien en producción requiere entender sus límites y sus patrones óptimos.",
    tags: ["Supabase", "PostgreSQL", "backend", "SaaS", "producción"],
    content: [
      "Supabase se vende como 'Firebase pero con PostgreSQL'. Eso es correcto y a la vez engañoso.",
      "Lo que funciona de forma excelente: el sistema de autenticación es sólido y se integra perfectamente con Next.js. Las Row Level Security (RLS) policies son la forma correcta de controlar acceso a datos por usuario sin lógica en el backend.",
      "1. RLS tiene coste de rendimiento. En tablas grandes con políticas complejas, esto se nota. Diseña tus políticas pensando en índices desde el principio.",
      "2. Las funciones de Edge son potentes pero tienen cold start. Para operaciones críticas en tiempo de respuesta, considera si realmente necesitas una edge function.",
      "3. El plan gratuito pausa el proyecto tras 7 días de inactividad. En producción, necesitas al menos el plan Pro.",
    ],
  },
  {
    id: "BLOG-004",
    title: "Cursor vs Claude Code: dos filosofías de IA para developers",
    category: "HERRAMIENTAS",
    date: "2026-03-20",
    readTime: "5 min",
    summary:
      "Cursor integra IA en tu editor. Claude Code opera desde el terminal con acceso al proyecto completo. No son competidores directos: resuelven problemas distintos.",
    tags: ["Cursor", "Claude Code", "IA", "herramientas dev", "productividad"],
    content: [
      "La pregunta más frecuente que recibo: ¿Cursor o Claude Code? La respuesta correcta es: depende de si eres developer o builder.",
      "CURSOR: un editor de código (fork de VS Code) con IA integrada. Su fortaleza es el autocompletado inteligente y la edición inline.",
      "CLAUDE CODE: un agente que opera desde el terminal y tiene acceso a todo el proyecto. Razona sobre arquitectura, no solo sobre líneas de código.",
      "La diferencia fundamental: Cursor amplifica la velocidad de un developer. Claude Code amplifica la capacidad de un no-developer.",
    ],
  },
  {
    id: "BLOG-005",
    title: "Embeddings y búsqueda semántica: cómo funciona realmente",
    category: "IA",
    date: "2026-03-05",
    readTime: "8 min",
    summary:
      "Los embeddings son la tecnología detrás de la búsqueda semántica, los sistemas RAG y la memoria de los agentes IA.",
    tags: ["embeddings", "RAG", "búsqueda semántica", "IA", "vectores"],
    content: [
      "Un embedding es una representación numérica de texto en un espacio vectorial de alta dimensión. Textos con significado similar están cerca en ese espacio.",
      "RAG (Retrieval Augmented Generation): el patrón más usado en producción. En lugar de pedirle al LLM que 'recuerde' hechos, le das los documentos relevantes en el contexto.",
      "Implementación práctica con Supabase: pgvector es una extensión de PostgreSQL que almacena vectores directamente en tu base de datos.",
    ],
  },
  {
    id: "BLOG-006",
    title: "Vercel vs self-hosting: el análisis honesto de costes",
    category: "DESARROLLO",
    date: "2026-02-18",
    readTime: "6 min",
    summary:
      "Vercel es el deploy más rápido del mercado. Pero a escala, el coste puede ser difícil de justificar.",
    tags: ["Vercel", "deploy", "infraestructura", "costes", "Next.js"],
    content: [
      "Vercel tiene el mejor DX del mercado para proyectos Next.js. El deploy es un git push. Las previews automáticas por PR son genuinamente útiles.",
      "El problema: el precio escala de forma agresiva conforme creces.",
      "Mi decisión actual: Vercel para el frontend, Railway para servicios backend y workers.",
    ],
  },
  {
    id: "BLOG-007",
    title: "Cómo construyo pipelines de datos con N8n y Claude",
    category: "DATOS",
    date: "2026-02-03",
    readTime: "7 min",
    summary:
      "Un flujo real: ingesta de datos desde múltiples fuentes, limpieza con Claude, y output a dashboard. Sin equipo de datos.",
    tags: ["datos", "N8n", "Claude", "pipeline", "automatización"],
    content: [
      "En DRSTK construimos pipelines de datos para clientes que no tienen equipo técnico.",
      "INGESTA: N8n extrae los datos de cada fuente y los deposita en tablas de staging en Supabase.",
      "TRANSFORMACIÓN: Claude analiza los datos crudos, identifica anomalías y redacta un resumen ejecutivo.",
      "COSTE: aproximadamente 30€ al mes en infraestructura + llamadas a la API de Claude.",
    ],
  },
]

// ─── SEO Articles (server-read via static data) ──────────────────────────────

type SeoMeta = {
  slug: string
  title: string
  cluster: string
  date: string
  readTime: string
  metaDescription: string
  keyword: string
  funnel: string
  isPillar?: boolean
}

const SEO_ARTICLES: SeoMeta[] = [
  {
    slug: "seo-espana-2026-guia-definitiva",
    title: "SEO en España 2026: La Guía Definitiva de Posicionamiento",
    cluster: "PILLAR — Hub Central",
    date: "2026-05-20",
    readTime: "35 min",
    metaDescription:
      "La guía más completa de SEO en España para 2026. GEO, SEO local, automatización IA, topical authority y posicionamiento premium.",
    keyword: "seo españa 2026",
    funnel: "TOFU",
    isPillar: true,
  },
  {
    slug: "consultor-seo-sevilla",
    title: "Consultor SEO Sevilla: Guía Definitiva 2026",
    cluster: "SEO Local Sevilla",
    date: "2026-05-20",
    readTime: "18 min",
    metaDescription:
      "Félix Molina, consultor SEO en Sevilla. Estrategias avanzadas de posicionamiento local, GEO y automatización IA para negocios premium.",
    keyword: "consultor seo sevilla",
    funnel: "MOFU",
  },
  {
    slug: "geo-generative-engine-optimization",
    title: "GEO: Qué es y Cómo Optimizar para IA Generativa",
    cluster: "GEO / IA Generativa",
    date: "2026-05-20",
    readTime: "20 min",
    metaDescription:
      "Qué es GEO (Generative Engine Optimization), cómo funciona y cómo aparecer en ChatGPT, Gemini, Perplexity y Google AI Overviews.",
    keyword: "generative engine optimization",
    funnel: "TOFU",
  },
  {
    slug: "google-ai-overviews-estrategia",
    title: "Google AI Overviews: Cómo Aparecer en 2026",
    cluster: "GEO / IA Generativa",
    date: "2026-05-24",
    readTime: "16 min",
    metaDescription:
      "Cómo optimizar tu contenido para aparecer en Google AI Overviews en 2026. Factores, estructura y estrategia GEO.",
    keyword: "google ai overviews",
    funnel: "TOFU",
  },
  {
    slug: "seo-local-sevilla-google-maps",
    title: "SEO Local Sevilla: Domina Google Maps en 2026",
    cluster: "SEO Local Sevilla",
    date: "2026-05-27",
    readTime: "15 min",
    metaDescription:
      "Estrategia avanzada de SEO local en Sevilla. Cómo dominar el Pack Local, Google Maps y las búsquedas near me.",
    keyword: "seo local sevilla",
    funnel: "TOFU",
  },
  {
    slug: "seo-restaurantes-sevilla",
    title: "SEO para Restaurantes Sevilla: Guía Definitiva 2026",
    cluster: "SEO para Restaurantes",
    date: "2026-06-03",
    readTime: "17 min",
    metaDescription:
      "Guía completa de SEO para restaurantes en Sevilla. Google Maps, reseñas, contenido gastronómico y captación de reservas.",
    keyword: "seo para restaurantes sevilla",
    funnel: "MOFU",
  },
  {
    slug: "google-business-profile-optimizacion",
    title: "Google Business Profile 2026: Optimización Avanzada",
    cluster: "Google Business Profile",
    date: "2026-06-10",
    readTime: "14 min",
    metaDescription:
      "Guía avanzada de Google Business Profile 2026. Optimización completa para dominar el Pack Local y aumentar llamadas.",
    keyword: "google business profile optimizacion",
    funnel: "MOFU",
  },
  {
    slug: "automatizacion-seo-ia",
    title: "Automatización SEO con IA: Sistemas de Posicionamiento",
    cluster: "Automatización + IA",
    date: "2026-06-17",
    readTime: "16 min",
    metaDescription:
      "Cómo automatizar procesos SEO con inteligencia artificial en 2026. Stack técnico, flujos N8n, Claude API y sistemas escalables.",
    keyword: "automatizacion seo ia",
    funnel: "MOFU",
  },
  {
    slug: "ia-aplicada-seo",
    title: "IA Aplicada al SEO: De la Teoría a la Ventaja Real",
    cluster: "Automatización + IA",
    date: "2026-06-24",
    readTime: "14 min",
    metaDescription:
      "Cómo usar la inteligencia artificial para potenciar el SEO en 2026. Análisis semántico, automatización y ventajas competitivas.",
    keyword: "ia aplicada seo",
    funnel: "TOFU",
  },
  {
    slug: "marca-personal-seo",
    title: "Marca Personal SEO: Posiciónate como Experto",
    cluster: "Marca Personal",
    date: "2026-07-01",
    readTime: "15 min",
    metaDescription:
      "Cómo construir una marca personal posicionada en Google en 2026. EEAT, autoridad de autor y topical authority personal.",
    keyword: "marca personal seo",
    funnel: "TOFU",
  },
  {
    slug: "personal-branding-digital",
    title: "Personal Branding Digital: Autoridad Online en 2026",
    cluster: "Marca Personal",
    date: "2026-07-08",
    readTime: "12 min",
    metaDescription:
      "Cómo construir un personal branding digital de autoridad en 2026. Estrategia de contenido, LinkedIn y posicionamiento premium.",
    keyword: "personal branding digital",
    funnel: "TOFU",
  },
  {
    slug: "seo-tecnico-core-web-vitals",
    title: "SEO Técnico 2026: Core Web Vitals y Arquitectura",
    cluster: "SEO Técnico Moderno",
    date: "2026-07-15",
    readTime: "17 min",
    metaDescription:
      "Guía avanzada de SEO técnico para 2026. Core Web Vitals, structured data, arquitectura de información y rastreo.",
    keyword: "seo tecnico",
    funnel: "MOFU",
  },
  {
    slug: "topical-authority",
    title: "Topical Authority: Construye Dominio Semántico",
    cluster: "SEO Técnico Moderno",
    date: "2026-07-22",
    readTime: "14 min",
    metaDescription:
      "Qué es la topical authority y cómo construirla en 2026. Clusters, pillar pages y dominio semántico para posicionar mejor.",
    keyword: "topical authority",
    funnel: "MOFU",
  },
  {
    slug: "futuro-seo-ia-generativa",
    title: "El Futuro del SEO: Búsqueda por IA 2026-2030",
    cluster: "Future Search",
    date: "2026-07-29",
    readTime: "16 min",
    metaDescription:
      "Cómo evolucionará el SEO hasta 2030 con la IA generativa. Tendencias, predicciones y estrategias para el futuro.",
    keyword: "futuro del seo",
    funnel: "TOFU",
  },
  {
    slug: "chatgpt-seo-motores-ia",
    title: "ChatGPT SEO: Cómo Optimizar para Motores de IA",
    cluster: "Future Search",
    date: "2026-08-05",
    readTime: "14 min",
    metaDescription:
      "Cómo aparecer en las respuestas de ChatGPT, Gemini y Perplexity en 2026. Estrategia de optimización para LLMs.",
    keyword: "chatgpt seo",
    funnel: "TOFU",
  },
  {
    slug: "marketing-gastronomico-sevilla",
    title: "Marketing Gastronómico Sevilla: Sistema Premium 2026",
    cluster: "SEO para Restaurantes",
    date: "2026-08-12",
    readTime: "16 min",
    metaDescription:
      "Marketing gastronómico avanzado para restaurantes en Sevilla. SEO, redes sociales, GEO y captación de clientes premium.",
    keyword: "marketing gastronomico sevilla",
    funnel: "MOFU",
  },
  {
    slug: "caso-exito-seo-gelato-roma-mairena",
    title: "Cómo llevamos a una cafetería de Mairena del Aljarafe a la primera página de Google",
    cluster: "SEO para Restaurantes",
    date: "2026-05-19",
    readTime: "7 min",
    metaDescription:
      "Félix Molina cuenta cómo trabajó el SEO local de Gelato Roma Mairena: herramientas, proceso y resultados reales. Un caso práctico de éxito.",
    keyword: "cafetería Mairena del Aljarafe",
    funnel: "TOFU",
  },
  {
    slug: "caso-exito-seo-foodly",
    title: "SEO para una consultora gastronómica: cómo Foodly dejó de depender del boca a boca",
    cluster: "SEO para Restaurantes",
    date: "2026-05-20",
    readTime: "7 min",
    metaDescription:
      "Félix Molina explica cómo trabajó el SEO y la analítica digital de Foodly, consultora gastronómica. Proceso, herramientas y resultados reales.",
    keyword: "consultoría gastronómica SEO",
    funnel: "TOFU",
  },
  {
    slug: "colaboracion-seo-drastika",
    title: "Cuando el consultor SEO trabaja con una agencia de marketing: mi experiencia con Drastika",
    cluster: "Marca Personal",
    date: "2026-05-20",
    readTime: "7 min",
    metaDescription:
      "Félix Molina cuenta cómo colaboró con Drastika, agencia de marketing y analítica de datos en Sevilla. Una relación entre profesionales que suma.",
    keyword: "agencia de marketing Sevilla",
    funnel: "TOFU",
  },
  {
    slug: "caso-exito-seo-javi-dieguez",
    title: "SEO para readaptadores deportivos: cómo Javi Dieguez empezó a captar pacientes desde Google",
    cluster: "SEO Local Sevilla",
    date: "2026-05-20",
    readTime: "6 min",
    metaDescription:
      "Félix Molina explica cómo trabajó el SEO de Javi Dieguez, readaptador deportivo en Sevilla. De la invisibilidad digital a captar desde Google.",
    keyword: "readaptador deportivo Sevilla",
    funnel: "TOFU",
  },
  {
    slug: "caso-exito-seo-yuli-colors",
    title: "SEO para centros de estética: cómo Yuli Colors llenó su agenda desde Google",
    cluster: "SEO Local Sevilla",
    date: "2026-05-20",
    readTime: "6 min",
    metaDescription:
      "Félix Molina cuenta cómo trabajó el SEO de Yuli Colors, centro de estética en Camas. Agenda llena gracias a Google My Business y contenido optimizado.",
    keyword: "centro de estética Camas Sevilla",
    funnel: "TOFU",
  },
  {
    slug: "caso-exito-seo-taperia-ambi",
    title: "Cómo un bar de tapas en Mairena del Aljarafe pasó a salir el primero en Google Maps",
    cluster: "SEO para Restaurantes",
    date: "2026-05-20",
    readTime: "7 min",
    metaDescription:
      "Félix Molina cuenta el caso SEO de Taperia Ambi en Mairena del Aljarafe: Google Maps, reseñas y contenido local. Resultados reales para un bar de tapas.",
    keyword: "bar de tapas Mairena del Aljarafe",
    funnel: "TOFU",
  },
  {
    slug: "caso-exito-seo-el-pedroso-club",
    title: "SEO para un pub en un pueblo de Sevilla: el caso de El Pedroso Club",
    cluster: "SEO Local Sevilla",
    date: "2026-05-20",
    readTime: "6 min",
    metaDescription:
      "Félix Molina cuenta cómo trabajó el SEO de El Pedroso Club, un pub en El Pedroso, Sierra Norte de Sevilla. Visibilidad digital para el ocio rural.",
    keyword: "pub El Pedroso Sevilla",
    funnel: "TOFU",
  },
]

// ─── Category system ─────────────────────────────────────────────────────────

const TECH_CATEGORIES = ["TODOS", "IA", "AUTOMATIZACIÓN", "HERRAMIENTAS", "DESARROLLO", "DATOS"]

const CLUSTER_COLORS: Record<string, string> = {
  "SEO Local Sevilla": "bg-orange-500/20 text-orange-400",
  "GEO / IA Generativa": "bg-white/15 text-white",
  "SEO para Restaurantes": "bg-amber-500/20 text-amber-400",
  "Automatización + IA": "bg-blue-500/20 text-blue-400",
  "Marca Personal": "bg-purple-500/20 text-purple-400",
  "Google Business Profile": "bg-green-500/20 text-green-400",
  "SEO Técnico Moderno": "bg-neutral-600/40 text-neutral-300",
  "Future Search": "bg-cyan-500/20 text-cyan-400",
  "PILLAR — Hub Central": "bg-orange-600/30 text-orange-300",
}

const TECH_CATEGORY_COLORS: Record<string, string> = {
  IA: "bg-orange-500/20 text-orange-400",
  AUTOMATIZACIÓN: "bg-white/15 text-white",
  HERRAMIENTAS: "bg-neutral-600/40 text-neutral-300",
  DESARROLLO: "bg-orange-500/10 text-orange-300",
  DATOS: "bg-white/10 text-neutral-200",
}

// ─── Component ───────────────────────────────────────────────────────────────

type Tab = "SEO" | "TECH"

export default function BlogPage() {
  const [tab, setTab] = useState<Tab>("SEO")
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("TODOS")
  const [selectedTechPost, setSelectedTechPost] = useState<TechPost | null>(null)

  // Filter tech posts
  const filteredTech = TECH_POSTS.filter((p) => {
    const matchesCat = activeCategory === "TODOS" || p.category === activeCategory
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      p.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCat && matchesSearch
  })

  // Filter SEO articles
  const filteredSeo = SEO_ARTICLES.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.cluster.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.metaDescription.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">BLOG</h1>
          <p className="text-sm text-neutral-400">SEO · GEO · IA · Automatización · Desarrollo</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
          <Rss className="w-3 h-3" />
          <span>{SEO_ARTICLES.length + TECH_POSTS.length} ARTÍCULOS</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setTab("SEO")}
          className={`text-xs font-mono transition-colors ${
            tab === "SEO"
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-700"
          }`}
        >
          SEO & GEO — {SEO_ARTICLES.length} artículos
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setTab("TECH")}
          className={`text-xs font-mono transition-colors ${
            tab === "TECH"
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-700"
          }`}
        >
          TECH — {TECH_POSTS.length} artículos
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <Input
          placeholder="Buscar artículos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 text-sm"
        />
      </div>

      {/* ── SEO TAB ─────────────────────────────────────────────────────────── */}
      {tab === "SEO" && (
        <div className="space-y-4">
          {/* Pillar highlight */}
          {filteredSeo.some((p) => p.isPillar) && (
            <div className="mb-2">
              {filteredSeo
                .filter((p) => p.isPillar)
                .map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="bg-gradient-to-r from-orange-950/40 to-neutral-900 border-orange-500/30 hover:border-orange-500/60 transition-all cursor-pointer">
                      <CardContent className="p-5 flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                            <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                              Pillar Content
                            </span>
                          </div>
                          <h2 className="text-base font-bold text-white leading-tight">{post.title}</h2>
                          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                            {post.metaDescription}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              {post.keyword}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          )}

          {/* SEO articles grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredSeo
              .filter((p) => !p.isPillar)
              .map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="bg-neutral-900 border-neutral-700 hover:border-orange-500/40 transition-colors cursor-pointer h-full">
                    <CardContent className="p-5 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <Badge
                          className={`${CLUSTER_COLORS[post.cluster] ?? "bg-neutral-700 text-neutral-300"} text-xs flex-shrink-0`}
                        >
                          {post.cluster}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-white leading-snug">{post.title}</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                        {post.metaDescription}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className="text-neutral-600">{post.funnel}</span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-orange-400 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>

          {filteredSeo.length === 0 && (
            <Card className="bg-neutral-900 border-neutral-700">
              <CardContent className="p-8 text-center">
                <p className="text-neutral-500 text-sm">No hay artículos que coincidan con tu búsqueda.</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* ── TECH TAB ────────────────────────────────────────────────────────── */}
      {tab === "TECH" && (
        <div className="space-y-4">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {TECH_CATEGORIES.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant="ghost"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono transition-colors ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-700"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredTech.map((post) => (
              <Card
                key={post.id}
                className="bg-neutral-900 border-neutral-700 hover:border-orange-500/40 transition-colors cursor-pointer"
                onClick={() => setSelectedTechPost(post)}
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <Badge
                      className={`${TECH_CATEGORY_COLORS[post.category] ?? "bg-neutral-700 text-neutral-300"} text-xs flex-shrink-0`}
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug">{post.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">{post.summary}</p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-neutral-600 px-1">+{post.tags.length - 3}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTech.length === 0 && (
            <Card className="bg-neutral-900 border-neutral-700">
              <CardContent className="p-8 text-center">
                <p className="text-neutral-500 text-sm">No hay artículos que coincidan con tu búsqueda.</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Tech post modal */}
      {selectedTechPost && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedTechPost(null)}
        >
          <Card
            className="bg-neutral-900 border-neutral-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <Badge
                    className={`${TECH_CATEGORY_COLORS[selectedTechPost.category] ?? "bg-neutral-700 text-neutral-300"} text-xs`}
                  >
                    {selectedTechPost.category}
                  </Badge>
                  <h2 className="text-base font-bold text-white leading-tight">{selectedTechPost.title}</h2>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
                    <span>{selectedTechPost.date}</span>
                    <span>{selectedTechPost.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedTechPost(null)}
                  className="text-neutral-400 hover:text-white flex-shrink-0"
                >
                  ✕
                </Button>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed border-l-2 border-orange-500 pl-4 italic">
                {selectedTechPost.summary}
              </p>

              <div className="space-y-3">
                {selectedTechPost.content.map((p, i) => (
                  <p key={i} className="text-sm text-neutral-200 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
                {selectedTechPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral-400 bg-neutral-800 px-2 py-1 rounded font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
