"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Rss, Clock, ArrowLeft, Calendar, Tag } from "lucide-react"

type Post = {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  summary: string
  tags: string[]
  content: string[]
}

const CATEGORIES = ["TODOS", "IA", "AUTOMATIZACIÓN", "HERRAMIENTAS", "DESARROLLO", "DATOS"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("TODOS")
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const posts: Post[] = [
    {
      id: "BLOG-001",
      title: "MCP: El protocolo que convierte a Claude en un agente real",
      category: "IA",
      date: "2026-04-28",
      readTime: "6 min",
      summary: "Model Context Protocol (MCP) permite a los LLMs conectarse a herramientas externas con un estándar abierto. Esto cambia fundamentalmente cómo construimos agentes de IA: de chatbots a sistemas que actúan.",
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
      summary: "Dos herramientas de automatización con filosofías opuestas. Zapier prioriza la simplicidad; N8n prioriza el control. La elección correcta depende de si optimizas para velocidad o para poder.",
      tags: ["N8n", "Zapier", "automatización", "workflow", "no-code"],
      content: [
        "Llevo dos años usando ambas en producción. Esta no es una comparativa teórica.",
        "ZAPIER: su ventaja es la velocidad de activación. En 10 minutos tienes un flujo funcionando. La interfaz es intuitiva, la documentación es excelente y tiene más de 6.000 integraciones nativas. Es la herramienta correcta cuando el equipo no es técnico y el flujo es simple.",
        "El problema de Zapier: el precio escala muy rápido con el volumen. Y cuando necesitas lógica compleja — condicionales anidados, loops, transformación de datos avanzada — la interfaz se vuelve torpe. Estás pagando por simplicidad que ya no necesitas.",
        "N8N: código abierto, self-hosteable, con un modelo de datos más potente. Los nodos de código JavaScript te dan control total sobre la transformación de datos. Puedes construir flujos que Zapier simplemente no puede ejecutar.",
        "En DRSTK usamos N8n para todo lo crítico: ingesta de leads, enriquecimiento de datos con IA, reportes automáticos para clientes, sincronización entre sistemas. La capacidad de meter código real en el medio de un flujo es imprescindible.",
        "Cuándo usar cada uno: Zapier si el equipo es no técnico, el flujo es simple y el tiempo de setup importa más que el coste a escala. N8n si tienes algo de capacidad técnica, el volumen es alto o los flujos requieren lógica compleja.",
        "El error común: empezar en Zapier, llegar al límite, migrar a N8n con dolor. Si sabes que vas a necesitar poder, empieza directamente en N8n.",
      ],
    },
    {
      id: "BLOG-003",
      title: "Supabase en producción: lo que nadie te cuenta",
      category: "DESARROLLO",
      date: "2026-04-02",
      readTime: "7 min",
      summary: "Supabase es la alternativa a Firebase que el ecosistema open source necesitaba. Pero usarla bien en producción requiere entender sus límites y sus patrones óptimos. Esto es lo que he aprendido construyendo Foodly OS.",
      tags: ["Supabase", "PostgreSQL", "backend", "SaaS", "producción"],
      content: [
        "Supabase se vende como 'Firebase pero con PostgreSQL'. Eso es correcto y a la vez engañoso. Es mucho más que eso, pero también tiene límites importantes que no están en los docs.",
        "Lo que funciona de forma excelente: el sistema de autenticación es sólido y se integra perfectamente con Next.js. Las Row Level Security (RLS) policies son la forma correcta de controlar acceso a datos por usuario sin lógica en el backend. El cliente JavaScript es bien diseñado.",
        "Lo que hay que entender antes de ir a producción:",
        "1. RLS tiene coste de rendimiento. Cada query pasa por las políticas. En tablas grandes con políticas complejas, esto se nota. Diseña tus políticas pensando en índices desde el principio.",
        "2. Las funciones de Edge son potentes pero tienen cold start. Para operaciones críticas en tiempo de respuesta, considera si realmente necesitas una edge function o si puedes resolver con una query directa.",
        "3. El plan gratuito pausa el proyecto tras 7 días de inactividad. En producción, necesitas al menos el plan Pro. No hay alternativa.",
        "4. Las migraciones no son automáticas. Supabase te da el esquema visual, pero la gestión de migraciones para múltiples entornos (dev, staging, prod) requiere disciplina. Usa la CLI de Supabase y versiona tus migraciones desde el día uno.",
        "Lo que más valoro: poder hacer joins SQL complejos directamente desde el cliente, sin necesitar una API intermedia. Para un fundador no técnico que trabaja con Claude Code, esto es una ventaja enorme. El modelo relacional de PostgreSQL es más expresivo que cualquier base de datos NoSQL para datos de negocio.",
        "Conclusión: Supabase es mi elección por defecto para nuevos proyectos. Pero como toda herramienta poderosa, hay que entenderla antes de usarla en producción.",
      ],
    },
    {
      id: "BLOG-004",
      title: "Cursor vs Claude Code: dos filosofías de IA para developers",
      category: "HERRAMIENTAS",
      date: "2026-03-20",
      readTime: "5 min",
      summary: "Cursor integra IA en tu editor. Claude Code opera desde el terminal con acceso al proyecto completo. No son competidores directos: resuelven problemas distintos. Aquí está la distinción que importa.",
      tags: ["Cursor", "Claude Code", "IA", "herramientas dev", "productividad"],
      content: [
        "La pregunta más frecuente que recibo: ¿Cursor o Claude Code? La respuesta correcta es: depende de si eres developer o builder.",
        "CURSOR: un editor de código (fork de VS Code) con IA integrada. Su fortaleza es el autocompletado inteligente y la edición inline. Si ya sabes programar y quieres acelerar la escritura de código, Cursor es excelente. El contexto es el archivo abierto y los archivos relacionados.",
        "CLAUDE CODE: un agente que opera desde el terminal y tiene acceso a todo el proyecto. No es un editor; es un colaborador que lee, planifica y ejecuta cambios complejos que afectan a múltiples archivos. Razona sobre arquitectura, no solo sobre líneas de código.",
        "La diferencia fundamental: Cursor amplifica la velocidad de un developer. Claude Code amplifica la capacidad de un no-developer (o de un developer para tareas arquitectónicas).",
        "En mi caso, como fundador no técnico que construye Foodly OS: Claude Code es indispensable. Le describo una funcionalidad, lee el proyecto entero, planifica los cambios y los ejecuta. Cursor me daría un autocompletado que no sabría cómo aprovechar.",
        "Para un developer senior: probablemente use ambos. Cursor para la velocidad de escritura día a día, Claude Code para refactorizaciones grandes, nuevas features complejas o cuando necesita un segundo par de ojos sobre una decisión arquitectónica.",
        "Lo que importa: no optimices para la herramienta. Optimiza para el output. La herramienta correcta es la que te permite construir lo que el mercado necesita, más rápido.",
      ],
    },
    {
      id: "BLOG-005",
      title: "Embeddings y búsqueda semántica: cómo funciona realmente",
      category: "IA",
      date: "2026-03-05",
      readTime: "8 min",
      summary: "Los embeddings son la tecnología detrás de la búsqueda semántica, los sistemas RAG y la memoria de los agentes IA. Explicación práctica sin matemáticas innecesarias, con ejemplos de implementación real.",
      tags: ["embeddings", "RAG", "búsqueda semántica", "IA", "vectores"],
      content: [
        "Si trabajas con IA en 2026 y no entiendes los embeddings, estás construyendo sobre terreno que no comprendes. Esta es la explicación que me habría gustado tener al empezar.",
        "Un embedding es una representación numérica de texto (o de una imagen, o de audio) en un espacio vectorial de alta dimensión. El concepto clave: textos con significado similar están cerca en ese espacio. 'Perro' y 'can' están cerca. 'Perro' y 'hipoteca' están lejos.",
        "Por qué importa esto: la búsqueda tradicional busca palabras exactas. La búsqueda semántica busca significado. Si preguntas '¿cómo reduzco mis costes de energía?', un sistema basado en embeddings también devuelve resultados sobre 'eficiencia energética' o 'ahorro en factura de luz', aunque no contengan tus palabras exactas.",
        "RAG (Retrieval Augmented Generation): el patrón más usado en producción. En lugar de pedirle al LLM que 'recuerde' hechos (los alucinan), le das los documentos relevantes en el contexto. El flujo es: conviertes tus documentos en embeddings, los guardas en una base de datos vectorial (Pinecone, pgvector en Supabase, Qdrant), y cuando llega una pregunta, buscas los documentos más cercanos semánticamente y los incluyes en el prompt.",
        "Implementación práctica con Supabase: pgvector es una extensión de PostgreSQL que almacena vectores directamente en tu base de datos. Sin necesidad de una base de datos vectorial separada. Para volúmenes medianos (hasta millones de vectores), funciona perfectamente.",
        "El modelo de embeddings importa. OpenAI text-embedding-3-large es el estándar de facto para inglés. Para español, vale la pena evaluar modelos multilingual. La dimensionalidad del vector (1536, 3072) afecta tanto a la precisión como al coste de almacenamiento.",
        "Dónde lo aplico: en Foodly OS, usamos embeddings para que los dueños de restaurantes puedan hacer preguntas en lenguaje natural sobre sus datos históricos. 'Muéstrame mis mejores viernes de verano del año pasado' — sin embeddings, eso requeriría una query SQL compleja que el usuario no puede escribir.",
      ],
    },
    {
      id: "BLOG-006",
      title: "Vercel vs self-hosting: el análisis honesto de costes",
      category: "DESARROLLO",
      date: "2026-02-18",
      readTime: "6 min",
      summary: "Vercel es el deploy más rápido del mercado. Pero a escala, el coste puede ser difícil de justificar. Análisis de cuándo tiene sentido y cuándo deberías considerar alternativas como Fly.io o Railway.",
      tags: ["Vercel", "deploy", "infraestructura", "costes", "Next.js"],
      content: [
        "Vercel tiene el mejor DX (Developer Experience) del mercado para proyectos Next.js. El deploy es un `git push`. Las previews automáticas por PR son genuinamente útiles. La red de CDN es excelente.",
        "El problema: el precio escala de forma agresiva conforme creces.",
        "El plan gratuito es generoso para proyectos personales y prototipos. El plan Pro (20$/mes por miembro del equipo) es razonable para startups pequeñas. Pero en cuanto el tráfico crece, las funciones serverless se invocan mucho, o necesitas más bandwidth, la factura puede sorprenderte.",
        "Las alternativas que merece la pena conocer:",
        "FLY.IO: máquinas virtuales ligeras distribuidas globalmente. Más control, precios más predecibles. La curva de aprendizaje es mayor que Vercel pero la relación coste/control es mejor a escala.",
        "RAILWAY: el punto medio. Más fácil que Fly, más barato que Vercel a escala media. Buena opción para backends (APIs, workers) que no necesitan el CDN de Vercel.",
        "SELF-HOSTING en VPS (Hetzner, DigitalOcean): máximo control, mínimo coste por recursos. Requiere gestión de infraestructura. Tiene sentido cuando el equipo tiene capacidad técnica y el volumen justifica el esfuerzo.",
        "Mi decisión actual: Vercel para el frontend de Foodly OS (aprovecho el CDN y las previews), Railway para servicios backend y workers. Esta combinación me da el 80% de las ventajas de Vercel al 50% del coste a escala.",
        "La regla general: empieza en Vercel, muévete cuando el coste empiece a morder. No optimices prematuramente la infraestructura.",
      ],
    },
    {
      id: "BLOG-007",
      title: "Cómo construyo pipelines de datos con N8n y Claude",
      category: "DATOS",
      date: "2026-02-03",
      readTime: "7 min",
      summary: "Un flujo real: ingesta de datos desde múltiples fuentes, limpieza y transformación con Claude, y output a dashboard. Sin equipo de datos. Sin ingeniería compleja. Solo N8n, SQL y el modelo correcto.",
      tags: ["datos", "N8n", "Claude", "pipeline", "automatización"],
      content: [
        "En DRSTK construimos pipelines de datos para clientes que no tienen equipo técnico. Esta es la arquitectura que usamos.",
        "EL PROBLEMA TÍPICO: el cliente tiene datos en Meta Ads, Google Analytics, su CRM (HubSpot o similar) y su sistema de ventas. Nadie habla con nadie. Los informes se hacen manualmente cada semana. Tardan horas y son inconsistentes.",
        "LA SOLUCIÓN: un pipeline automático que ingesta, transforma y presenta los datos sin intervención manual.",
        "INGESTA: N8n tiene nodos nativos para Meta Ads, Google Analytics y la mayoría de CRMs. El primer paso del pipeline extrae los datos de cada fuente y los deposita en tablas de staging en Supabase. Cada fuente tiene su esquema propio; el objetivo de staging es tener los datos crudos disponibles.",
        "TRANSFORMACIÓN: aquí entra Claude. Con un nodo de código en N8n que llama a la API de Claude, puedo pedirle que tome datos crudos de ventas, los compare con el periodo anterior, identifique las anomalías y redacte un párrafo de resumen ejecutivo en lenguaje natural. Esto es lo que ningún dashboard tradicional puede hacer: contexto narrativo sobre los números.",
        "OUTPUT: los datos transformados van a una tabla en Supabase que alimenta el dashboard del cliente. El resumen narrativo de Claude llega por email o Slack automáticamente cada lunes a las 8:00.",
        "COSTE DEL PIPELINE: aproximadamente 30$ al mes en infraestructura + llamadas a la API de Claude. Para el cliente, sustituye 4 horas semanales de trabajo manual de alguien de su equipo.",
        "Lo que más me ha sorprendido: la parte más difícil no es técnica. Es decidir qué datos importan realmente y qué preguntas debería responder el pipeline. Esa claridad de negocio es el 80% del valor; N8n y Claude son el 20% de ejecución.",
      ],
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "IA": return "bg-orange-500/20 text-orange-400"
      case "AUTOMATIZACIÓN": return "bg-white/15 text-white"
      case "HERRAMIENTAS": return "bg-neutral-600/40 text-neutral-300"
      case "DESARROLLO": return "bg-orange-500/10 text-orange-300"
      case "DATOS": return "bg-white/10 text-neutral-200"
      default: return "bg-neutral-700 text-neutral-300"
    }
  }

  const filtered = posts.filter((p) => {
    const matchesCategory = activeCategory === "TODOS" || p.category === activeCategory
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      p.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">BLOG TECNOLÓGICO</h1>
          <p className="text-sm text-neutral-400">IA, herramientas, automatización y desarrollo de producto</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
          <Rss className="w-3 h-3" />
          <span>{posts.length} ARTÍCULOS</span>
        </div>
      </div>

      {/* Search + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-2 bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ARTÍCULOS</p>
                <p className="text-2xl font-bold text-white font-mono">{posts.length}</p>
              </div>
              <Rss className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">CATEGORÍAS</p>
                <p className="text-2xl font-bold text-white font-mono">{CATEGORIES.length - 1}</p>
              </div>
              <Tag className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
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

      {/* Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((post) => (
          <Card
            key={post.id}
            className="bg-neutral-900 border-neutral-700 hover:border-orange-500/40 transition-colors cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <Badge className={`${getCategoryColor(post.category)} text-xs flex-shrink-0`}>{post.category}</Badge>
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
                  <span key={tag} className="text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded font-mono">
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

      {filtered.length === 0 && (
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-8 text-center">
            <p className="text-neutral-500 text-sm">No hay artículos que coincidan con tu búsqueda.</p>
          </CardContent>
        </Card>
      )}

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="sticky top-0 bg-neutral-900 border-b border-neutral-700 z-10 pb-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedPost(null)}
                    className="text-neutral-400 hover:text-white flex-shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <div>
                    <Badge className={`${getCategoryColor(selectedPost.category)} text-xs mb-2`}>
                      {selectedPost.category}
                    </Badge>
                    <CardTitle className="text-base font-bold text-white leading-snug">
                      {selectedPost.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {selectedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {selectedPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPost(null)}
                  className="text-neutral-400 hover:text-white flex-shrink-0"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-neutral-300 leading-relaxed border-l-2 border-orange-500 pl-4 italic">
                {selectedPost.summary}
              </p>

              <div className="space-y-4 pt-2">
                {selectedPost.content.map((paragraph, i) => (
                  <p key={i} className="text-sm text-neutral-200 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-700">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="text-xs text-neutral-400 bg-neutral-800 px-2 py-1 rounded font-mono">
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
