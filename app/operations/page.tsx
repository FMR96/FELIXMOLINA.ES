"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Clock, CheckCircle, PauseCircle, AlertTriangle } from "lucide-react"

type Project = {
  id: string
  name: string
  status: string
  priority: string
  category: string
  progress: number
  startDate: string
  estimatedCompletion: string
  description: string
  objectives: string[]
}

export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: "PRJ-001",
      name: "FOODLY OS — MVP",
      status: "active",
      priority: "high",
      category: "Producto",
      progress: 40,
      startDate: "2025-03-01",
      estimatedCompletion: "2025-09-01",
      description: "Desarrollo del MVP del SaaS de gestión integral para hostelería. Control total: ventas, operaciones, datos.",
      objectives: [
        "Módulo de ventas y TPV",
        "Dashboard de analytics",
        "Gestión de inventario",
        "App para camareros",
      ],
    },
    {
      id: "PRJ-002",
      name: "FOODLY — EXPANSIÓN NACIONAL",
      status: "active",
      priority: "high",
      category: "Crecimiento",
      progress: 60,
      startDate: "2025-01-01",
      estimatedCompletion: "2025-12-31",
      description: "Expansión de la aceleradora gastronómica a nuevas ciudades en España con un playbook replicable.",
      objectives: [
        "Onboarding de 20 nuevos restaurantes",
        "Playbook de expansión documentado",
        "Sistema de referidos activo",
        "Partnerships con proveedores clave",
      ],
    },
    {
      id: "PRJ-003",
      name: "DRSTK — SISTEMA DE IA",
      status: "active",
      priority: "medium",
      category: "Automatización",
      progress: 70,
      startDate: "2025-02-01",
      estimatedCompletion: "2025-06-30",
      description: "Implementación de flujos de automatización con IA para clientes y operaciones internas de DRSTK.",
      objectives: [
        "Agentes de captación automatizados",
        "Pipeline de contenido con IA",
        "Reporting automático de campañas",
        "CRM integrado con flujos de seguimiento",
      ],
    },
    {
      id: "PRJ-004",
      name: "SISTEMA DE CAPTACIÓN FOODLY",
      status: "completed",
      priority: "medium",
      category: "Marketing",
      progress: 100,
      startDate: "2024-10-01",
      estimatedCompletion: "2025-02-28",
      description: "Funnel automatizado de captación y onboarding para restaurantes interesados en la aceleradora.",
      objectives: [
        "Landing page optimizada",
        "Secuencia de email automatizada",
        "Proceso de onboarding estructurado",
        "KPIs de conversión definidos y medidos",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-white/20 text-white"
      case "planning": return "bg-orange-500/20 text-orange-500"
      case "completed": return "bg-white/20 text-white"
      case "paused": return "bg-neutral-500/20 text-neutral-300"
      default: return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "ACTIVO"
      case "planning": return "PLANIFICACIÓN"
      case "completed": return "COMPLETADO"
      case "paused": return "PAUSADO"
      default: return status.toUpperCase()
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <Zap className="w-4 h-4 text-white" />
      case "planning": return <Clock className="w-4 h-4 text-orange-500" />
      case "completed": return <CheckCircle className="w-4 h-4 text-white" />
      case "paused": return <PauseCircle className="w-4 h-4 text-neutral-400" />
      default: return <AlertTriangle className="w-4 h-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-orange-500/20 text-orange-500"
      case "medium": return "bg-neutral-500/20 text-neutral-300"
      case "low": return "bg-white/20 text-white"
      default: return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const active = projects.filter((p) => p.status === "active").length
  const completed = projects.filter((p) => p.status === "completed").length
  const avgProgress = Math.round(projects.filter((p) => p.status === "active").reduce((acc, p) => acc + p.progress, 0) / active)

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">PROYECTOS ACTIVOS</h1>
          <p className="text-sm text-neutral-400">Iniciativas en curso y completadas</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <p className="text-xs text-neutral-400 tracking-wider">EN CURSO</p>
            <p className="text-2xl font-bold text-white font-mono">{active}</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <p className="text-xs text-neutral-400 tracking-wider">COMPLETADOS</p>
            <p className="text-2xl font-bold text-white font-mono">{completed}</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <p className="text-xs text-neutral-400 tracking-wider">PROGRESO MEDIO</p>
            <p className="text-2xl font-bold text-orange-500 font-mono">{avgProgress}%</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <p className="text-xs text-neutral-400 tracking-wider">TASA DE ÉXITO</p>
            <p className="text-2xl font-bold text-white font-mono">100%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-sm font-bold text-white tracking-wider">{project.name}</CardTitle>
                  <p className="text-xs text-neutral-400 font-mono">{project.id}</p>
                </div>
                {getStatusIcon(project.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className={getStatusColor(project.status)}>{getStatusLabel(project.status)}</Badge>
                <Badge className={getPriorityColor(project.priority)}>{project.priority.toUpperCase()}</Badge>
                <Badge className="bg-neutral-800 text-neutral-300 text-xs">{project.category}</Badge>
              </div>

              <p className="text-sm text-neutral-300">{project.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-400">Progreso</span>
                  <span className="text-white font-mono">{project.progress}%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-xs text-neutral-500 font-mono">
                Completado estimado: {project.estimatedCompletion}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-white tracking-wider">{selectedProject.name}</CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedProject.id}</p>
              </div>
              <Button variant="ghost" onClick={() => setSelectedProject(null)} className="text-neutral-400 hover:text-white">✕</Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={getStatusColor(selectedProject.status)}>{getStatusLabel(selectedProject.status)}</Badge>
                <Badge className={getPriorityColor(selectedProject.priority)}>{selectedProject.priority.toUpperCase()}</Badge>
                <Badge className="bg-neutral-800 text-neutral-300">{selectedProject.category}</Badge>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">{selectedProject.description}</p>

              <div>
                <h3 className="text-sm text-neutral-300 tracking-wider mb-3">OBJETIVOS</h3>
                <div className="space-y-2">
                  {selectedProject.objectives.map((obj, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-neutral-300">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm text-neutral-300 tracking-wider mb-2">PROGRESO</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-neutral-400">Completado</span>
                  <span className="text-white font-mono">{selectedProject.progress}%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: `${selectedProject.progress}%` }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm pt-2">
                <div>
                  <span className="text-neutral-400">Inicio:</span>
                  <span className="text-white ml-2 font-mono">{selectedProject.startDate}</span>
                </div>
                <div>
                  <span className="text-neutral-400">Est. fin:</span>
                  <span className="text-white ml-2 font-mono">{selectedProject.estimatedCompletion}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
