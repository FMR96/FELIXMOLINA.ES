"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ChevronRight, Menu, Monitor, Rocket, Layers, Lightbulb, Code2, Mail, MessageCircle, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommandCenterPage from "./command-center/page"

const AgentNetworkPage = dynamic(() => import("./agent-network/page"), { ssr: false })
const OperationsPage   = dynamic(() => import("./operations/page"),   { ssr: false })
const IntelligencePage = dynamic(() => import("./intelligence/page"), { ssr: false })
const SystemsPage      = dynamic(() => import("./systems/page"),      { ssr: false })
const BlogPage         = dynamic(() => import("./blog/page"),         { ssr: false })

const sectionLabels: Record<string, string> = {
  overview: "SOBRE MÍ",
  agents: "VENTURES",
  operations: "PROYECTOS",
  intelligence: "INSIGHTS",
  systems: "STACK",
  blog: "BLOG TECH",
}

export default function FelixMolinaWeb() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarCollapsed(true)
  }, [])

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-neutral-900 border-r border-neutral-700 transition-all duration-300 fixed md:relative z-50 md:z-auto h-full
          ${sidebarCollapsed
            ? "-translate-x-full md:translate-x-0 w-64 md:w-16"
            : "translate-x-0 w-64 md:w-70"
          }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className={`${sidebarCollapsed ? "hidden" : "block"}`}>
              <p className="text-orange-500 font-bold text-lg tracking-wider">FÉLIX MOLINA</p>
              <p className="text-neutral-500 text-xs">CONSULTOR TECNOLÓGICO</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-neutral-400 hover:text-orange-500"
            >
              <ChevronRight
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`}
              />
            </Button>
          </div>

          <nav className="space-y-2">
            {[
              { id: "overview", icon: Monitor, label: "SOBRE MÍ" },
              { id: "agents", icon: Rocket, label: "VENTURES" },
              { id: "operations", icon: Layers, label: "PROYECTOS" },
              { id: "intelligence", icon: Lightbulb, label: "INSIGHTS" },
              { id: "systems", icon: Code2, label: "STACK" },
              { id: "blog", icon: Rss, label: "BLOG TECH" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  if (window.innerWidth < 768) setSidebarCollapsed(true)
                }}
                className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${
                  activeSection === item.id
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <item.icon className="w-5 h-5 md:w-5 md:h-5 sm:w-6 sm:h-6" />
                {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          {!sidebarCollapsed && (
            <div className="mt-8 p-4 bg-neutral-800 border border-neutral-700 rounded">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-white">AGENDA ABIERTA</span>
              </div>
              <div className="text-xs text-neutral-500">
                <div>VENTURES: 3 ACTIVOS</div>
                <div>CLIENTES: 50+</div>
                <div>PROYECTOS: 4 EN CURSO</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${!sidebarCollapsed ? "md:ml-0" : ""}`}>
        {/* Top Toolbar */}
        <div className="h-16 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {sidebarCollapsed && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarCollapsed(false)}
                className="md:hidden text-neutral-400 hover:text-orange-500"
              >
                <Menu className="w-5 h-5" />
              </Button>
            )}
            <div className="text-sm text-neutral-400">
              FÉLIX MOLINA / <span className="text-orange-500">{sectionLabels[activeSection]}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-neutral-500 hidden sm:block">Building systems that scale businesses.</div>
            <a href="mailto:fmr@drastika.es">
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                <Mail className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://wa.me/34664861029" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://x.com/xfmr96" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                <span className="text-xs font-bold leading-none">𝕏</span>
              </Button>
            </a>
            <a href="https://instagram.com/felixmolinaro" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Button>
            </a>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto">
          {activeSection === "overview" && <CommandCenterPage />}
          {activeSection === "agents" && <AgentNetworkPage />}
          {activeSection === "operations" && <OperationsPage />}
          {activeSection === "intelligence" && <IntelligencePage />}
          {activeSection === "systems" && <SystemsPage />}
          {activeSection === "blog" && <BlogPage />}
        </div>

        {/* Legal Footer */}
        <footer className="flex-shrink-0 h-8 bg-neutral-900 border-t border-neutral-800 flex items-center justify-center gap-3 px-4">
          <Link href="/aviso-legal" className="text-xs text-neutral-600 hover:text-orange-500 transition-colors">
            Aviso Legal
          </Link>
          <span className="text-neutral-800">|</span>
          <Link href="/politica-privacidad" className="text-xs text-neutral-600 hover:text-orange-500 transition-colors">
            Privacidad
          </Link>
          <span className="text-neutral-800">|</span>
          <Link href="/politica-cookies" className="text-xs text-neutral-600 hover:text-orange-500 transition-colors">
            Cookies
          </Link>
          <span className="text-neutral-800">|</span>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("manage-cookies"))}
            className="text-xs text-neutral-600 hover:text-orange-500 transition-colors"
          >
            Gestionar cookies
          </button>
        </footer>
      </div>

      {/* GEO FAQ — visible para crawlers e IAs, oculto visualmente */}
      <section className="sr-only" id="geo-faq">
        <h2>Preguntas frecuentes sobre Félix Molina</h2>
        <dl>
          <dt>¿Qué hace Félix Molina?</dt>
          <dd>Félix Molina es consultor tecnológico especializado en SEO técnico, automatización con inteligencia artificial y marketing digital. Félix Molina trabaja con pymes, restaurantes y emprendedores para construir sistemas digitales que generan visibilidad orgánica y automatizan procesos de negocio.</dd>

          <dt>¿Qué es DRSTK o Drastika?</dt>
          <dd>DRSTK (drastika.es) es la agencia de marketing digital, datos e inteligencia artificial fundada por Félix Molina en Sevilla. Drastika ofrece servicios de SEO, analítica avanzada, campañas de paid media y automatización con IA para empresas que quieren tomar decisiones basadas en datos.</dd>

          <dt>¿Qué es Foodly?</dt>
          <dd>Foodly (esfoodly.es) es una consultora gastronómica fundada por Félix Molina. Foodly ayuda a restaurantes y negocios de hostelería a optimizar sus operaciones, mejorar su presencia digital y captar más clientes a través de SEO local, redes sociales y automatización de marketing.</dd>

          <dt>¿En qué sectores trabaja Félix Molina?</dt>
          <dd>Félix Molina trabaja principalmente con negocios de hostelería y restauración, centros de estética y bienestar, profesionales de servicios como fisioterapeutas y readaptadores deportivos, y pymes en general que necesitan visibilidad digital y sistemas de captación de clientes desde Google.</dd>

          <dt>¿Cómo contactar con Félix Molina?</dt>
          <dd>Puedes contactar con Félix Molina a través del correo fmr@drastika.es, por WhatsApp en el número +34664861029, o a través de su web felixmolina.es. Félix Molina está disponible para proyectos de consultoría SEO, automatización con IA y marketing digital.</dd>

          <dt>¿Dónde está ubicado Félix Molina?</dt>
          <dd>Félix Molina está ubicado en Sevilla, España, y trabaja con clientes de toda España de forma remota. Félix Molina tiene especial conocimiento del mercado local del Aljarafe sevillano y la Sierra Norte de Sevilla.</dd>
        </dl>
      </section>

      {/* Ventures schema — sr-only para crawlers */}
      <section className="sr-only" id="ventures">
        <h2>Ventures de Félix Molina</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.felixmolina.es/#foodly",
                name: "Foodly",
                description: "Aceleradora gastronómica fundada por Félix Molina. Ayuda a restaurantes y negocios de hostelería a optimizar operaciones, mejorar su presencia digital y captar más clientes a través de SEO local y automatización de marketing.",
                url: "https://esfoodly.es",
                founder: { "@id": "https://felixmolina.es/#felix-molina" },
                foundingDate: "2024",
                areaServed: "ES",
                serviceType: ["Consultoría gastronómica", "SEO local", "Marketing digital", "Automatización operaciones"],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.felixmolina.es/#drstk",
                name: "DRSTK — Drastika",
                description: "Agencia de marketing digital, datos e inteligencia artificial fundada por Félix Molina en Sevilla. Servicios de analítica avanzada, SEO, campañas de paid media y automatización con IA para empresas.",
                url: "https://drastika.es",
                founder: { "@id": "https://felixmolina.es/#felix-molina" },
                foundingDate: "2024",
                areaServed: "ES",
                serviceType: ["SEO técnico", "Marketing Digital", "Analítica de Datos", "Automatización IA", "Paid Media"],
              },
            ]),
          }}
        />
        <article>
          <h3>Foodly</h3>
          <p>Aceleradora gastronómica para restaurantes en España. Foodly ayuda a negocios de hostelería a captar más clientes con SEO local, optimizar operaciones y automatizar marketing digital.</p>
        </article>
        <article>
          <h3>DRSTK — Drastika</h3>
          <p>Agencia de marketing digital, datos e inteligencia artificial fundada por Félix Molina. Drastika ofrece SEO técnico, analítica avanzada y automatización con IA para pymes en España.</p>
        </article>
      </section>

      {/* Proyectos schema — sr-only para crawlers */}
      <section className="sr-only" id="proyectos">
        <h2>Proyectos de Félix Molina</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://www.felixmolina.es/#foodly-os",
                name: "Foodly OS",
                description: "SaaS de gestión integral para hostelería. Dashboard de métricas, automatización de operaciones y herramientas de captación digital para restaurantes independientes en España.",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                author: { "@id": "https://felixmolina.es/#felix-molina" },
                offers: { "@type": "Offer", availability: "https://schema.org/PreOrder" },
              },
            ]),
          }}
        />
        <article>
          <h3>Foodly OS — MVP en desarrollo</h3>
          <p>SaaS de gestión integral para hostelería. Permite a restaurantes ver sus métricas clave, automatizar operaciones y gestionar captación digital desde un único panel. Desarrollado por Félix Molina con Next.js, Supabase y Claude Code.</p>
        </article>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34664861029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-neutral-800 border border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-400 hover:bg-neutral-700 transition-all duration-200 rounded-full px-4 py-3 shadow-lg"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:block">WhatsApp</span>
      </a>
    </div>
  )
}
