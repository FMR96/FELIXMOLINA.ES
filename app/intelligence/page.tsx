"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Lightbulb, TrendingUp, ArrowLeft } from "lucide-react"

type Insight = {
  id: string
  title: string
  category: string
  type: string
  date: string
  status: string
  summary: string
  tags: string[]
  content: string[]
}

export default function InsightsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null)
  const [reading, setReading] = useState(false)

  const insights: Insight[] = [
    {
      id: "INS-007",
      title: "CLAUDE CODE: EL CO-FUNDADOR TÉCNICO QUE TODO EMPRENDEDOR NECESITA",
      category: "IA",
      type: "Reflexión",
      date: "2025-07-10",
      status: "publicado",
      summary: "No necesitas saber programar para construir producto. Necesitas saber qué construir y por qué. Claude Code hace el resto. Llevo meses usándolo para desarrollar Foodly OS y ha cambiado completamente cómo entiendo el rol del fundador no técnico.",
      tags: ["Claude Code", "IA", "fundadores", "producto", "SaaS"],
      content: [
        "Cuando empecé a construir Foodly OS, tenía un problema claro: sabía exactamente qué necesitaban los restaurantes, pero no sabía cómo construirlo. Contratar un equipo técnico caro para un MVP sin validar era una apuesta que no estaba dispuesto a tomar.",
        "Ahí entró Claude Code.",
        "Claude Code no es un generador de código. Es un co-fundador técnico que razona contigo. Le explicas el problema de negocio, te devuelve una arquitectura. Le describes la pantalla que necesitas, te genera el componente. Le dices que algo no funciona, te explica por qué y lo corrige.",
        "La diferencia con otros modelos de IA es brutal: Claude Code lee tu proyecto entero, entiende el contexto, y toma decisiones coherentes con lo que ya existe. No genera código en el vacío.",
        "Lo que más me ha cambiado: ya no necesito un intermediario técnico para tomar decisiones de producto. Puedo explorar opciones, probar ideas y descartar caminos en horas. Antes eso tardaba semanas y costaba dinero.",
        "Eso sí — y esto es clave — Claude Code amplifica tu criterio, no lo sustituye. Si no sabes lo que quieres construir ni por qué, la herramienta no te salva. El valor está en la claridad del fundador, no en la IA.",
        "Mi consejo para cualquier emprendedor no técnico: aprende a describir sistemas, no a escribir código. Esa es la habilidad que separa a quien aprovecha Claude Code de quien lo usa como un autocomplete caro.",
      ],
    },
    {
      id: "INS-008",
      title: "CÓMO USO CLAUDE CODE PARA CONSTRUIR FOODLY OS SIN SABER PROGRAMAR",
      category: "PRODUCTO",
      type: "Caso de uso",
      date: "2025-07-05",
      status: "publicado",
      summary: "Un flujo real: desde la idea hasta el código en producción. Cómo describo lo que quiero, cómo reviso lo que genera, dónde falla y cómo lo corrijo. No es magia, es método. Y este es el mío.",
      tags: ["Claude Code", "Foodly OS", "SaaS", "no-code", "workflow"],
      content: [
        "Este no es un post teórico. Es mi flujo real de trabajo al construir Foodly OS — el SaaS de gestión para hostelería que estoy desarrollando ahora mismo.",
        "PASO 1 — Defino el problema de negocio, no el técnico. Antes de abrir Claude Code, escribo en papel qué problema tiene el restaurante, qué datos necesita ver, y qué acción debería poder hacer. Eso es mi brief.",
        "PASO 2 — Le doy contexto completo. Le explico qué es Foodly OS, a quién va dirigido, qué stack usamos (Next.js + Supabase) y qué ya existe. Claude Code lee el proyecto entero y trabaja sobre lo que hay, no desde cero.",
        "PASO 3 — Describo la funcionalidad como si se la explicara a una persona. 'Necesito una pantalla donde el dueño del restaurante vea sus ventas del día, desglosadas por categoría de producto, con la posibilidad de filtrar por fecha.' Eso es todo.",
        "PASO 4 — Reviso antes de ejecutar. Claude Code me muestra el plan antes de tocar el código. Ahí es donde más aprendo: entiendo qué va a hacer y por qué. Si algo no tiene sentido para el negocio, lo corrijo antes de que escriba una línea.",
        "PASO 5 — Pruebo en el navegador. Abro localhost, uso la funcionalidad como si fuera un restaurante real y anoto qué falta o qué no encaja. Vuelvo a Claude Code con feedback concreto.",
        "Dónde falla: cuando el brief es vago. Si le digo 'hazme un dashboard', el resultado es mediocre. Si le digo exactamente qué dato, para qué usuario y qué decisión le ayuda a tomar, el resultado es preciso.",
        "El método no es secreto. Es el mismo que cualquier buen Product Manager usa con su equipo. La diferencia es que ahora puedo aplicarlo solo, en tiempo real, sin depender de nadie.",
      ],
    },
    {
      id: "INS-009",
      title: "EQUIPOS DE UNO: EL EMPRENDEDOR IA-FIRST",
      category: "NEGOCIOS",
      type: "Análisis",
      date: "2025-06-28",
      status: "publicado",
      summary: "La ventaja competitiva ya no es el equipo grande, es la velocidad de ejecución. Un fundador con Claude Code, N8n y Supabase puede hacer en una semana lo que antes requería tres desarrolladores en un mes. Esto lo cambia todo.",
      tags: ["IA", "emprendimiento", "Claude Code", "automatización", "equipos"],
      content: [
        "Durante años, el tamaño del equipo fue sinónimo de capacidad de ejecución. Más personas, más velocidad. Esa ecuación se ha roto.",
        "Hoy, un emprendedor con el stack correcto puede competir en capacidad de ejecución con equipos de 5 o 10 personas. No en todo — hay cosas que siguen necesitando personas — pero en la construcción inicial de producto, en la automatización de operaciones y en la captación, la ventaja del equipo grande se ha erosionado.",
        "Mi stack de 'equipo de uno': Claude Code para construir producto, N8n para automatizar operaciones y marketing, Supabase como infraestructura de datos, y Meta Ads para captación. Con eso he lanzado dos ventures activos.",
        "Lo que cambia fundamentalmente: el cuello de botella ya no es la capacidad técnica, es la claridad estratégica. El emprendedor IA-first necesita saber exactamente qué construir, para quién y en qué orden. La IA ejecuta; el fundador decide.",
        "Esto también cambia cómo se compite. Si tu ventaja era el equipo técnico, esa ventaja se acorta. Si tu ventaja es el conocimiento del mercado y la velocidad de decisión, esa ventaja se amplifica.",
        "El riesgo: caer en la trampa de construir porque puedes, no porque debes. La accesibilidad de las herramientas baja el coste de construir cosas inútiles a cero. La disciplina estratégica es más importante que nunca.",
        "Conclusión: el emprendedor IA-first no es el que más herramientas usa. Es el que más claro tiene qué problema resuelve, y usa la IA para llegar más rápido a la respuesta.",
      ],
    },
    {
      id: "INS-010",
      title: "LO QUE NADIE TE DICE SOBRE CONSTRUIR PRODUCTO CON IA",
      category: "IA",
      type: "Guía",
      date: "2025-06-20",
      status: "publicado",
      summary: "Claude Code no sustituye el criterio de negocio, lo amplifica. El error que cometen la mayoría es pedirle que piense por ellos. El que sabe usarlo le dice exactamente qué construir y por qué. La diferencia está en el prompt, pero sobre todo en la claridad del fundador.",
      tags: ["Claude Code", "IA", "producto", "fundadores", "errores"],
      content: [
        "Hay una narrativa que me cansa: 'con IA cualquiera puede construir un SaaS'. Es verdad y es mentira al mismo tiempo.",
        "Verdad: las barreras técnicas han caído. Con Claude Code, Next.js y Supabase, alguien sin conocimientos de programación puede tener un producto funcional en semanas.",
        "Mentira: que eso significa que el producto será bueno, que alguien lo querrá comprar, o que el modelo de negocio funcionará.",
        "Lo que la IA no hace por ti: decidir qué problema resolver, validar si alguien lo tiene, entender a tu cliente mejor que él mismo, o diseñar un modelo de monetización que aguante.",
        "El error más común que veo: fundadores que usan Claude Code para construir features que nadie pidió, más rápido que nunca. Antes de la IA, el coste de construir algo inútil frenaba esa tendencia. Ahora no hay freno técnico.",
        "Cómo lo evito yo: antes de pedirle a Claude Code que construya algo, me hago tres preguntas. ¿Qué problema del usuario resuelve esto? ¿Cómo sabré si funciona? ¿Es esto lo más importante que puedo construir ahora?",
        "Si no tengo respuesta clara a las tres, no le pido nada. La IA ejecuta lo que le pides. Si le pides mal, ejecuta mal, muy rápido.",
        "La habilidad que separa a quien aprovecha la IA de quien la desperdicia: pensar en sistemas y en usuarios, no en features. Eso no lo enseña ningún modelo. Lo aprende el fundador en el mercado.",
      ],
    },
    {
      id: "INS-001",
      title: "POR QUÉ LA MAYORÍA DE RESTAURANTES NO ESCALA",
      category: "HOSTELERÍA",
      type: "Análisis",
      date: "2025-06-01",
      status: "publicado",
      summary: "El problema no es el producto, es la ausencia de sistemas. La mayoría de restaurantes funciona en modo reactivo, sin datos ni procesos replicables. La solución empieza por medir.",
      tags: ["hostelería", "sistemas", "operaciones"],
      content: [
        "He trabajado con decenas de restaurantes y el patrón es siempre el mismo: buena comida, buen servicio, y un negocio que no crece porque el dueño no puede separarse de él ni un día.",
        "El problema no es la calidad del producto. Es la ausencia de sistemas.",
        "Un restaurante sin sistemas es un restaurante que depende de que el dueño esté presente, que los empleados de siempre no se vayan, y que nada salga mal un viernes noche. Eso no es un negocio; es una trampa.",
        "¿Qué es un sistema en hostelería? Un proceso documentado y replicable: cómo se abre el local, cómo se gestiona el inventario, cómo se contrata y forma al personal, cómo se mide si un día fue bueno o malo.",
        "Lo primero que hago con cualquier restaurante en Foodly es instalar métricas. Ticket medio, coste de producto, tasa de repetición de clientes, ventas por franja horaria. En menos de dos semanas, el dueño entiende su negocio de una forma que nunca había tenido.",
        "Con datos, las decisiones cambian. Se deja de hacer lo que 'parece' funcionar y se hace lo que los números dicen que funciona.",
        "El restaurante que escala no es el que tiene la mejor receta. Es el que tiene el mejor sistema para replicar una buena experiencia, medir su negocio y tomar decisiones basadas en datos.",
      ],
    },
    {
      id: "INS-002",
      title: "IA EN MARKETING: LO QUE FUNCIONA Y LO QUE NO",
      category: "MARKETING",
      type: "Guía",
      date: "2025-05-15",
      status: "publicado",
      summary: "No toda la automatización con IA genera valor. Las herramientas que realmente mueven el ROI son las que se integran en flujos de trabajo reales, no las que crean ruido.",
      tags: ["IA", "marketing", "automatización", "ROI"],
      content: [
        "Desde DRSTK trabajamos con IA en marketing desde el primer día. Y lo que he aprendido es que la mayoría de la gente la usa mal.",
        "Lo que no funciona: usar IA para generar contenido genérico a escala. El resultado es más ruido en un mercado ya saturado. Los algoritmos lo penalizan, los usuarios lo ignoran, y el ROI es negativo.",
        "Lo que sí funciona: usar IA para acelerar procesos que antes eran lentos y costosos. Research de audiencia, generación de variantes de copy para testear, análisis de resultados de campañas, automatización de seguimiento post-lead.",
        "La diferencia está en si la IA sustituye el pensamiento estratégico o lo ejecuta más rápido. En el primer caso, el resultado es mediocre. En el segundo, es una ventaja competitiva real.",
        "En DRSTK usamos N8n para conectar fuentes de datos con modelos de IA y generar reportes automáticos para clientes. Lo que antes era un proceso manual de 4 horas ahora tarda 10 minutos. Eso sí mueve el ROI.",
        "Mi regla: antes de automatizar algo con IA, pregúntate si ese algo está funcionando bien de forma manual. Si no funciona manualmente, automatizarlo solo escala el problema. La IA amplifica; no arregla lo que está roto.",
      ],
    },
    {
      id: "INS-003",
      title: "CÓMO CONSTRUIR UN SAAS SIENDO FUNDADOR NO TÉCNICO",
      category: "PRODUCTO",
      type: "Reflexión",
      date: "2025-04-20",
      status: "borrador",
      summary: "Lecciones aprendidas construyendo Foodly OS: cómo validar antes de desarrollar, qué delegar, cómo hablar con developers y qué errores evitar al crear un SaaS sin ser programador.",
      tags: ["SaaS", "producto", "fundadores", "no-code"],
      content: [
        "Cuando decidí construir Foodly OS, no sabía programar. Sigo sin saber programar en el sentido tradicional. Y aun así, el producto avanza.",
        "La primera lección: valida antes de construir. Antes de escribir una línea de código, hablé con 20 dueños de restaurantes. Les pregunté qué herramientas usaban, qué les dolía, cuánto pagarían por una solución. El producto que estoy construyendo no es el que imaginé al principio; es el que el mercado me pidió.",
        "La segunda lección: un fundador no técnico no necesita aprender a programar. Necesita aprender a especificar. Saber describir exactamente qué debe hacer un sistema, para quién y por qué. Eso es Product Management, y es una habilidad que se aprende.",
        "La tercera lección: el stack importa. Elegir tecnologías que tienen buena documentación, comunidades activas y se integran bien entre sí reduce enormemente la fricción. Next.js + Supabase + Vercel es un stack que cualquier developer conoce y que Claude Code maneja muy bien.",
        "Lo que más me costó: dejar de pensar como usuario y empezar a pensar como arquitecto. Los usuarios piden features; los buenos fundadores diseñan sistemas. La diferencia entre 'quiero un botón que haga X' y 'necesito que el sistema capture este dato para que el usuario pueda tomar esta decisión' es enorme.",
      ],
    },
    {
      id: "INS-004",
      title: "EL STACK DE AUTOMATIZACIÓN QUE USO EN 2025",
      category: "STACK",
      type: "Recurso",
      date: "2025-04-01",
      status: "publicado",
      summary: "Las herramientas que forman la columna vertebral de mis negocios: desde captación hasta reporting. Todo automatizado, todo medible. N8n, Claude, Supabase y más.",
      tags: ["stack", "automatización", "n8n", "tools"],
      content: [
        "Este es el stack que uso hoy para hacer funcionar Foodly y DRSTK. No es el stack perfecto; es el que funciona para mi modelo de negocio y mi forma de trabajar.",
        "CAPTACIÓN: Meta Ads + landing pages en Next.js + formularios conectados a Supabase. Los leads entran automáticamente en una base de datos y disparan una secuencia de seguimiento en N8n.",
        "AUTOMATIZACIÓN DE MARKETING: N8n es el cerebro. Conecta Meta Ads, email, WhatsApp, CRM y bases de datos. Cuando entra un lead, N8n decide qué secuencia activar según la fuente, el sector y el comportamiento.",
        "PRODUCTO: Next.js para el frontend, Supabase para base de datos y autenticación, Vercel para deploy. Claude Code para construir features rápido sin equipo técnico.",
        "IA: Claude en los flujos de N8n para procesar texto, generar contenido personalizado y analizar datos. No como sustituto del pensamiento estratégico, sino como ejecutor de tareas repetitivas que requieren lenguaje natural.",
        "REPORTING: N8n recoge datos de todas las fuentes, Claude los interpreta, y el resultado llega a un dashboard o directamente al cliente por email. Cero intervención manual.",
        "Lo que no uso: herramientas que hacen todo y no hacen nada bien. Prefiero cinco herramientas que se integran perfectamente a una plataforma all-in-one que me ata.",
      ],
    },
    {
      id: "INS-005",
      title: "LOS KPIs QUE TODO RESTAURANTE DEBERÍA MEDIR",
      category: "HOSTELERÍA",
      type: "Guía",
      date: "2025-03-10",
      status: "publicado",
      summary: "Ticket medio, coste de adquisición, tasa de repetición, margen por mesa. Los datos que marcan la diferencia entre un restaurante que crece y uno que solo sobrevive.",
      tags: ["hostelería", "datos", "KPIs", "métricas"],
      content: [
        "La mayoría de restaurantes mide una sola cosa: la caja del día. Si es mayor que ayer, bien. Si es menor, mal. Eso no es gestión; es supervivencia.",
        "Los KPIs que realmente importan:",
        "TICKET MEDIO: cuánto gasta de media cada cliente. Si sube, estás mejorando la experiencia o el mix de ventas. Si baja, algo está fallando. Segméntalo por franja horaria y día de semana.",
        "TASA DE REPETICIÓN: qué porcentaje de tus clientes vuelven. Un restaurante con alta tasa de repetición tiene un negocio estable. Uno que depende solo de clientes nuevos tiene un coste de adquisición oculto enorme.",
        "COSTE DE MATERIA PRIMA SOBRE VENTAS: debería estar entre el 28% y el 35% según el tipo de negocio. Si está por encima, tienes un problema de merma, de compras o de precios.",
        "VENTAS POR METRO CUADRADO: especialmente relevante en locales céntricos con alquiler caro. Te dice si estás rentabilizando bien el espacio.",
        "MARGEN POR PLATO: no todos los platos son igual de rentables. Conocer el margen real de cada uno te permite diseñar la carta y la estrategia de venta con criterio.",
        "Empezar a medir estos datos no requiere tecnología cara. Requiere disciplina. Una vez que los tienes, las decisiones cambian completamente.",
      ],
    },
    {
      id: "INS-006",
      title: "SISTEMATIZAR PARA ESCALAR: LA TRAMPA DEL AUTÓNOMO",
      category: "NEGOCIOS",
      type: "Análisis",
      date: "2025-02-20",
      status: "publicado",
      summary: "Si tu negocio depende de ti para funcionar, no tienes un negocio: tienes un empleo. Cómo pasar de operador a constructor de sistemas que trabajan solos.",
      tags: ["sistemas", "escalar", "operaciones", "fundadores"],
      content: [
        "Hay un momento en la vida de casi todo emprendedor en el que se da cuenta de que ha construido una trampa. El negocio funciona, genera dinero, los clientes están contentos — pero no puede desconectarse ni un día sin que algo falle.",
        "Eso no es un negocio. Es un empleo con más estrés y menos seguridad.",
        "La diferencia entre un negocio y un empleo está en los sistemas. Un sistema es un proceso documentado y replicable que no depende de que tú estés presente.",
        "El primer sistema que construí en Foodly fue el de onboarding de restaurantes. Antes, yo hacía cada incorporación manualmente: llamadas, envío de materiales, seguimiento. Tardaba horas y dependía de mi agenda. Ahora es un flujo automático: formulario, secuencia de emails, acceso a materiales, primera reunión agendada. Cero intervención mía hasta la primera llamada estratégica.",
        "Cómo empezar: coge el proceso que más tiempo te consume y documéntalo paso a paso. Luego hazte esta pregunta: ¿qué parte de esto requiere realmente mi criterio y cuál solo requiere seguir instrucciones? Lo segundo se puede sistematizar o delegar.",
        "El objetivo no es desaparecer del negocio. Es estar donde generas más valor y eliminar todo lo demás de tu plato.",
        "Sistematizar no es perder control. Es ganarlo.",
      ],
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "HOSTELERÍA": return "bg-orange-500/20 text-orange-500"
      case "MARKETING": return "bg-white/20 text-white"
      case "PRODUCTO": return "bg-orange-500/20 text-orange-400"
      case "STACK": return "bg-neutral-500/20 text-neutral-300"
      case "NEGOCIOS": return "bg-white/20 text-white"
      case "IA": return "bg-orange-500/20 text-orange-500"
      default: return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "publicado": return "bg-white/20 text-white"
      case "borrador": return "bg-orange-500/20 text-orange-500"
      default: return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const filteredInsights = insights.filter((i) =>
    i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
    i.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const published = insights.filter((i) => i.status === "publicado").length

  const openInsight = (insight: Insight) => {
    setSelectedInsight(insight)
    setReading(false)
  }

  const closeModal = () => {
    setSelectedInsight(null)
    setReading(false)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">INSIGHTS</h1>
          <p className="text-sm text-neutral-400">Ideas, análisis y recursos sobre negocios y tecnología</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2 bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                placeholder="Buscar insights..."
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
                <p className="text-xs text-neutral-400 tracking-wider">PUBLICADOS</p>
                <p className="text-2xl font-bold text-white font-mono">{published}</p>
              </div>
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">CATEGORÍAS</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">6</p>
              </div>
              <Lightbulb className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">TEMAS CORE</p>
                <p className="text-2xl font-bold text-white font-mono">3</p>
              </div>
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">TODOS LOS INSIGHTS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredInsights.map((insight) => (
              <div
                key={insight.id}
                className="border border-neutral-700 rounded p-4 hover:border-orange-500/50 transition-colors cursor-pointer"
                onClick={() => openInsight(insight)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-wider">{insight.title}</h3>
                        <p className="text-xs text-neutral-400 font-mono">{insight.id} · {insight.type}</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-300 ml-8">{insight.summary}</p>
                    <div className="flex flex-wrap gap-2 ml-8">
                      {insight.tags.map((tag) => (
                        <Badge key={tag} className="bg-neutral-800 text-neutral-300 text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getCategoryColor(insight.category)}>{insight.category}</Badge>
                      <Badge className={getStatusColor(insight.status)}>{insight.status.toUpperCase()}</Badge>
                    </div>
                    <span className="text-xs text-neutral-400 font-mono">{insight.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      {selectedInsight && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-neutral-900 border-b border-neutral-700 z-10">
              <div className="flex items-center gap-3">
                {reading && (
                  <Button variant="ghost" size="icon" onClick={() => setReading(false)} className="text-neutral-400 hover:text-white">
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                <div>
                  <CardTitle className="text-base font-bold text-white tracking-wider leading-tight">{selectedInsight.title}</CardTitle>
                  <p className="text-xs text-neutral-400 font-mono mt-1">{selectedInsight.id} · {selectedInsight.date}</p>
                </div>
              </div>
              <Button variant="ghost" onClick={closeModal} className="text-neutral-400 hover:text-white flex-shrink-0">✕</Button>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={getCategoryColor(selectedInsight.category)}>{selectedInsight.category}</Badge>
                <Badge className={getStatusColor(selectedInsight.status)}>{selectedInsight.status.toUpperCase()}</Badge>
                <Badge className="bg-neutral-800 text-neutral-300">{selectedInsight.type}</Badge>
              </div>

              {!reading ? (
                <>
                  {/* Vista resumen */}
                  <p className="text-sm text-neutral-300 leading-relaxed">{selectedInsight.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {selectedInsight.tags.map((tag) => (
                      <Badge key={tag} className="bg-neutral-800 text-neutral-300">{tag}</Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-700">
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => setReading(true)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Leer Completo
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  {/* Vista artículo completo */}
                  <div className="space-y-4">
                    {selectedInsight.content.map((paragraph, i) => (
                      <p key={i} className="text-sm text-neutral-200 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-700">
                    {selectedInsight.tags.map((tag) => (
                      <Badge key={tag} className="bg-neutral-800 text-neutral-300">{tag}</Badge>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
