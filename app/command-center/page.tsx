"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle } from "lucide-react"

export default function SobreMiPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Hero / Perfil */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">PERFIL</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl font-mono flex-shrink-0">
                FM
              </div>
              <div>
                <div className="text-xl font-bold text-white">Félix Molina</div>
                <div className="text-xs text-orange-500 font-mono tracking-wider">EMPRENDEDOR · BUILDER</div>
              </div>
            </div>

            <div className="text-sm text-white font-medium mb-3 leading-relaxed border-l-2 border-orange-500 pl-3">
              "Building systems that scale businesses."
            </div>

            <div className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Fundador de Foodly y DRSTK. Combino tecnología, marketing y operaciones para construir negocios que crecen de forma sistemática y escalable.
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-mono">3</div>
                <div className="text-xs text-neutral-500">Ventures</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-xs text-neutral-500">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-mono">4</div>
                <div className="text-xs text-neutral-500">Proyectos</div>
              </div>
            </div>

            <div className="p-3 bg-neutral-800 border border-neutral-700 rounded mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs text-white">DISPONIBLE PARA COLABORAR</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                <Mail className="w-3 h-3 mr-1" />
                Contacto
              </Button>
              <a href="https://wa.me/34664861029" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 bg-transparent">
                  <MessageCircle className="w-3 h-3" />
                </Button>
              </a>
              <a href="https://x.com/xfmr96" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 bg-transparent">
                  <span className="text-xs font-bold leading-none">𝕏</span>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Timeline de Hitos */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">TRAYECTORIA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {[
                { year: "2025", event: "Foodly OS — inicio MVP", detail: "SaaS de gestión integral para hostelería en desarrollo", tag: "PRODUCTO" },
                { year: "2025", event: "Expansión Foodly", detail: "Nuevos restaurantes incorporados al programa acelerador", tag: "CRECIMIENTO" },
                { year: "2024", event: "Lanzamiento DRSTK", detail: "Agencia de marketing y datos con IA para empresas que escalan", tag: "VENTURE" },
                { year: "2024", event: "Fundación Foodly", detail: "Aceleradora gastronómica arranca operaciones en España", tag: "VENTURE" },
                { year: "2023", event: "Primeros clientes", detail: "Validación del modelo con restaurantes en España", tag: "HITO" },
                { year: "2023", event: "Inicio del camino", detail: "Primeros sistemas de captación y automatización para hostelería", tag: "INICIO" },
              ].map((item, index) => (
                <div key={index} className="text-xs border-l-2 border-orange-500 pl-3 hover:bg-neutral-800 p-2 rounded transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-neutral-500 font-mono">{item.year}</span>
                    <span className="text-orange-500 text-xs">{item.tag}</span>
                  </div>
                  <div className="text-white font-medium">{item.event}</div>
                  <div className="text-neutral-400">{item.detail}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Construyendo ahora */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              CONSTRUYENDO AHORA
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 border-2 border-white rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute inset-2 border border-white rounded-full opacity-40"></div>
              <div className="absolute inset-4 border border-white rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-white opacity-30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-white opacity-30"></div>
              </div>
            </div>

            <div className="text-xs text-neutral-500 space-y-1 w-full font-mono">
              <div className="text-neutral-400"># STACK ACTIVO — 2025</div>
              <div className="text-white">{"> [PRJ:foodly_os] ::: building MVP"}</div>
              <div className="text-orange-500">{"> FASE #1 | Backend + Dashboard"}</div>
              <div className="text-white">{"> STATUS: EN DESARROLLO"}</div>
              <div className="text-neutral-400">{'> TARGET >> "hostelería independiente"'}</div>
              <div className="text-white">{"> [PRJ:drstk] ::: AI automation"}</div>
              <div className="text-orange-500">{"> FLUJOS IA | Activos"}</div>
            </div>
          </CardContent>
        </Card>

        {/* Gráfico de crecimiento */}
        <Card className="lg:col-span-8 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              CRECIMIENTO DE VENTURES
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-neutral-700"></div>
                ))}
              </div>
              <svg className="absolute inset-0 w-full h-full">
                {/* Clientes (naranja) */}
                <polyline
                  points="0,150 50,140 100,125 150,100 200,80 250,60 300,40 350,25"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                />
                {/* Ventures (blanco punteado) */}
                <polyline
                  points="0,170 50,168 100,165 150,155 200,145 250,130 300,115 350,100"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-neutral-500 -ml-6 font-mono">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-neutral-500 -mb-6 font-mono">
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
              </div>
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-0.5 bg-orange-500"></div>
                  <span className="text-neutral-400">Clientes</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-0.5 bg-white opacity-60" style={{ borderTop: "2px dashed white" }}></div>
                  <span className="text-neutral-400">Proyectos</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Áreas de expertise */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">EXPERTISE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xs text-white font-medium">Negocios</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Estrategia de negocio", value: 95 },
                    { label: "Operaciones", value: 90 },
                    { label: "Marketing digital", value: 95 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400">{item.label}</span>
                        <span className="text-white font-mono">{item.value}%</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-1">
                        <div className="bg-white h-1 rounded-full" style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-orange-500 font-medium">Tecnología</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Automatización IA", value: 90 },
                    { label: "Producto / SaaS", value: 80 },
                    { label: "Data & Analytics", value: 85 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400">{item.label}</span>
                        <span className="text-white font-mono">{item.value}%</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-1">
                        <div className="bg-orange-500 h-1 rounded-full" style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
