"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Rocket, TrendingUp, Code2, Megaphone } from "lucide-react"

type Venture = {
  id: string
  name: string
  type: string
  status: string
  description: string
  tags: string[]
  founded: string
  focus: string
  metrics: Record<string, string>
  url: string
}

export default function VenturesPage() {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null)

  const ventures: Venture[] = [
    {
      id: "V-001",
      name: "FOODLY",
      type: "Aceleradora",
      status: "active",
      description: "Aceleradora de negocios gastronómicos. Combina marketing, operaciones y tecnología para hacer crecer restaurantes de forma sistemática.",
      tags: ["Hostelería", "Growth", "Operaciones", "Marketing"],
      founded: "2024",
      focus: "Restaurantes independientes en España",
      metrics: { clientes: "50+", crecimiento: "+40%", NPS: "92" },
      url: "#",
    },
    {
      id: "V-002",
      name: "FOODLY OS",
      type: "SaaS / Producto",
      status: "development",
      description: "Software de gestión integral para hostelería. Control total del negocio: ventas, operaciones, datos y gestión en un solo lugar.",
      tags: ["SaaS", "Hostelería", "B2B", "Producto"],
      founded: "2025",
      focus: "Hostelería independiente",
      metrics: { fase: "MVP", objetivo: "Q3 2025", sector: "Hostelería" },
      url: "#",
    },
    {
      id: "V-003",
      name: "DRSTK",
      type: "Agencia",
      status: "active",
      description: "Agencia de marketing y datos enfocada en rendimiento y automatización con IA. Resultados medibles, sin humo.",
      tags: ["Marketing", "IA", "Data", "Automatización", "Performance"],
      founded: "2024",
      focus: "Empresas con ambición de escalar",
      metrics: { campañas: "30+", enfoque: "IA-first", ROI: "3x avg" },
      url: "#",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-white/20 text-white"
      case "development": return "bg-orange-500/20 text-orange-500"
      case "completed": return "bg-neutral-500/20 text-neutral-300"
      default: return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "ACTIVO"
      case "development": return "EN DESARROLLO"
      case "completed": return "COMPLETADO"
      default: return status.toUpperCase()
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Aceleradora": return <TrendingUp className="w-6 h-6" />
      case "SaaS / Producto": return <Code2 className="w-6 h-6" />
      case "Agencia": return <Megaphone className="w-6 h-6" />
      default: return <Rocket className="w-6 h-6" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">MIS VENTURES</h1>
          <p className="text-sm text-neutral-400">Negocios activos y en construcción</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">VENTURES ACTIVOS</p>
                <p className="text-2xl font-bold text-white font-mono">2</p>
              </div>
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">EN DESARROLLO</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">1</p>
              </div>
              <Code2 className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">CLIENTES TOTALES</p>
                <p className="text-2xl font-bold text-white font-mono">50+</p>
              </div>
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ventures Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ventures.map((venture) => (
          <Card
            key={venture.id}
            className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer"
            onClick={() => setSelectedVenture(venture)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getTypeIcon(venture.type)}
                  <div>
                    <CardTitle className="text-sm font-bold text-white tracking-wider">{venture.name}</CardTitle>
                    <p className="text-xs text-neutral-400">{venture.type}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(venture.status)}>{getStatusLabel(venture.status)}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-neutral-300">{venture.description}</p>

              <div className="flex flex-wrap gap-2">
                {venture.tags.map((tag) => (
                  <Badge key={tag} className="bg-neutral-800 text-neutral-300 text-xs">{tag}</Badge>
                ))}
              </div>

              <div className="space-y-1 text-xs">
                {Object.entries(venture.metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-neutral-400 uppercase">{key}:</span>
                    <span className="text-white font-mono">{value}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-neutral-500 font-mono">FUNDADO: {venture.founded}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedVenture && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                {getTypeIcon(selectedVenture.type)}
                <div>
                  <CardTitle className="text-xl font-bold text-white tracking-wider">{selectedVenture.name}</CardTitle>
                  <p className="text-sm text-neutral-400">{selectedVenture.type} · {selectedVenture.id}</p>
                </div>
              </div>
              <Button variant="ghost" onClick={() => setSelectedVenture(null)} className="text-neutral-400 hover:text-white">✕</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Badge className={getStatusColor(selectedVenture.status)}>{getStatusLabel(selectedVenture.status)}</Badge>

              <p className="text-sm text-neutral-300 leading-relaxed">{selectedVenture.description}</p>

              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">FOCO</p>
                <p className="text-sm text-white">{selectedVenture.focus}</p>
              </div>

              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">MÉTRICAS</p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedVenture.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-neutral-800 rounded">
                      <div className="text-lg font-bold text-white font-mono">{value}</div>
                      <div className="text-xs text-neutral-400 uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">TAGS</p>
                <div className="flex flex-wrap gap-2">
                  {selectedVenture.tags.map((tag) => (
                    <Badge key={tag} className="bg-neutral-800 text-neutral-300">{tag}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-neutral-700">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Venture
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
