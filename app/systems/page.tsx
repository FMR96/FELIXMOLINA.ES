"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, Megaphone, Zap, Database, Globe, Star, Wrench, BarChart2 } from "lucide-react"

type Tool = {
  id: string
  name: string
  category: string
  status: string
  proficiency: number
  usage: number
  description: string
  useCase: string
  since: string
}

export default function StackPage() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)

  const tools: Tool[] = [
    {
      id: "T-001",
      name: "NEXT.JS",
      category: "Frontend",
      status: "primary",
      proficiency: 85,
      usage: 90,
      description: "Framework principal para desarrollo web. Usado en Foodly OS y proyectos de producto.",
      useCase: "Desarrollo de productos SaaS y webs de alto rendimiento",
      since: "2024",
    },
    {
      id: "T-002",
      name: "SUPABASE",
      category: "Backend / DB",
      status: "primary",
      proficiency: 80,
      usage: 85,
      description: "Backend-as-a-service. Base de datos, autenticación y storage integrados.",
      useCase: "Backend de Foodly OS y proyectos SaaS",
      since: "2024",
    },
    {
      id: "T-003",
      name: "N8N",
      category: "Automatización",
      status: "primary",
      proficiency: 92,
      usage: 98,
      description: "Automatización de flujos de trabajo. El corazón operativo de DRSTK y Foodly.",
      useCase: "Automatización de marketing, reporting y captación de clientes",
      since: "2024",
    },
    {
      id: "T-004",
      name: "META ADS",
      category: "Marketing",
      status: "primary",
      proficiency: 95,
      usage: 100,
      description: "Publicidad en Facebook e Instagram. Canal principal de captación para clientes.",
      useCase: "Captación de clientes para restaurantes y empresas",
      since: "2023",
    },
    {
      id: "T-005",
      name: "CLAUDE / AI",
      category: "IA",
      status: "primary",
      proficiency: 88,
      usage: 95,
      description: "Modelos de IA integrados en flujos de trabajo, creación de contenido y desarrollo de producto.",
      useCase: "Automatización inteligente, agentes y desarrollo de producto",
      since: "2024",
    },
    {
      id: "T-006",
      name: "VERCEL",
      category: "Deploy",
      status: "secondary",
      proficiency: 85,
      usage: 80,
      description: "Plataforma de despliegue para proyectos Next.js. Rápida y sencilla.",
      useCase: "Deploy y hosting de productos web",
      since: "2024",
    },
    {
      id: "T-007",
      name: "GOOGLE ADS",
      category: "Marketing",
      status: "secondary",
      proficiency: 80,
      usage: 70,
      description: "Publicidad en búsqueda y display. Complementario a Meta Ads para captar por intención.",
      useCase: "Captación por intención de búsqueda",
      since: "2023",
    },
    {
      id: "T-008",
      name: "NOTION",
      category: "Operaciones",
      status: "secondary",
      proficiency: 90,
      usage: 85,
      description: "Sistema de gestión de conocimiento y operaciones internas. SOPs, documentación y proyectos.",
      useCase: "Documentación, SOPs y gestión de proyectos internos",
      since: "2023",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend": return <Code2 className="w-6 h-6" />
      case "Backend / DB": return <Database className="w-6 h-6" />
      case "Automatización": return <Zap className="w-6 h-6" />
      case "Marketing": return <Megaphone className="w-6 h-6" />
      case "IA": return <Star className="w-6 h-6" />
      case "Deploy": return <Globe className="w-6 h-6" />
      case "Operaciones": return <Wrench className="w-6 h-6" />
      default: return <BarChart2 className="w-6 h-6" />
    }
  }

  const getStatusBadge = (status: string) => {
    return status === "primary"
      ? "bg-orange-500/20 text-orange-500"
      : "bg-neutral-500/20 text-neutral-300"
  }

  const primary = tools.filter((t) => t.status === "primary").length

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">STACK & TOOLS</h1>
          <p className="text-sm text-neutral-400">Herramientas y tecnologías que uso a diario</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">HERRAMIENTAS</p>
                <p className="text-2xl font-bold text-white font-mono">{tools.length}</p>
              </div>
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">STACK PRIMARIO</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">{primary}</p>
              </div>
              <Star className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">CATEGORÍAS</p>
                <p className="text-2xl font-bold text-white font-mono">7</p>
              </div>
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">IA INTEGRADA</p>
                <p className="text-2xl font-bold text-white font-mono">SÍ</p>
              </div>
              <Zap className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer"
            onClick={() => setSelectedTool(tool)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(tool.category)}
                  <div>
                    <CardTitle className="text-sm font-bold text-white tracking-wider">{tool.name}</CardTitle>
                    <p className="text-xs text-neutral-400">{tool.category}</p>
                  </div>
                </div>
                <Badge className={getStatusBadge(tool.status)}>
                  {tool.status === "primary" ? "PRIMARIO" : "SECUNDARIO"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-neutral-300">{tool.description}</p>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-neutral-400">Dominio</span>
                    <span className="text-white font-mono">{tool.proficiency}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-1">
                    <div className="bg-orange-500 h-1 rounded-full" style={{ width: `${tool.proficiency}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-neutral-400">Uso diario</span>
                    <span className="text-white font-mono">{tool.usage}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-1">
                    <div className="bg-white h-1 rounded-full" style={{ width: `${tool.usage}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-500 font-mono">DESDE: {tool.since}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedTool && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                {getCategoryIcon(selectedTool.category)}
                <div>
                  <CardTitle className="text-xl font-bold text-white tracking-wider">{selectedTool.name}</CardTitle>
                  <p className="text-sm text-neutral-400">{selectedTool.category} · {selectedTool.id}</p>
                </div>
              </div>
              <Button variant="ghost" onClick={() => setSelectedTool(null)} className="text-neutral-400 hover:text-white">✕</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Badge className={getStatusBadge(selectedTool.status)}>
                {selectedTool.status === "primary" ? "STACK PRIMARIO" : "STACK SECUNDARIO"}
              </Badge>

              <p className="text-sm text-neutral-300 leading-relaxed">{selectedTool.description}</p>

              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">CASO DE USO</p>
                <p className="text-sm text-white">{selectedTool.useCase}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-400">Nivel de dominio</span>
                    <span className="text-white font-mono">{selectedTool.proficiency}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${selectedTool.proficiency}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-400">Frecuencia de uso</span>
                    <span className="text-white font-mono">{selectedTool.usage}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: `${selectedTool.usage}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-400 font-mono pt-2">EN MI STACK DESDE: {selectedTool.since}</div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
