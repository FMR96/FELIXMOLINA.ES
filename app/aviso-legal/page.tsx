import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal — Félix Molina",
  description: "Información legal e identificación del titular del sitio web felixmolina.es",
}

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          ← VOLVER
        </Link>
        <div className="text-right">
          <div className="text-orange-500 font-bold text-sm tracking-widest">AVISO LEGAL</div>
          <div className="text-neutral-600 text-xs">Última actualización: 18 de mayo de 2026</div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">

        <p className="text-neutral-400 text-sm leading-relaxed">
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSI-CE), se facilitan los datos de identificación del titular
          de este sitio web.
        </p>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            1. Datos del titular
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-1">
            <p><span className="text-neutral-500">Nombre:</span> Félix Molina</p>
            <p><span className="text-neutral-500">NIF/NIE:</span> [COMPLETAR]</p>
            <p><span className="text-neutral-500">Domicilio:</span> [COMPLETAR], España</p>
            <p>
              <span className="text-neutral-500">Correo electrónico:</span>{" "}
              <a href="mailto:felixmolina96@gmail.com" className="text-orange-500 hover:underline">
                felixmolina96@gmail.com
              </a>
            </p>
            <p><span className="text-neutral-500">Teléfono:</span> +34 664 861 029</p>
            <p><span className="text-neutral-500">Sitio web:</span> felixmolina.es</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            2. Objeto y condiciones de uso
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              Este sitio web tiene carácter informativo y personal. A través de él se presenta la trayectoria
              profesional, proyectos y publicaciones de su titular, Félix Molina.
            </p>
            <p>
              El acceso y uso del sitio web es gratuito y no requiere registro previo. El usuario se compromete
              a hacer un uso adecuado de los contenidos y servicios disponibles, respetando la legislación
              vigente, los derechos de terceros y las normas de convivencia en Internet.
            </p>
            <p>
              El titular se reserva el derecho a modificar sin previo aviso los contenidos y condiciones de uso
              del sitio web.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            3. Propiedad intelectual e industrial
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              Todos los contenidos de este sitio web —textos, imágenes, diseño, código fuente, logotipos y
              demás elementos— son titularidad de Félix Molina o de los terceros que los hayan cedido, y están
              protegidos por la legislación de propiedad intelectual e industrial vigente.
            </p>
            <p>
              Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública
              o transformación de dichos contenidos sin la autorización expresa y por escrito del titular, salvo
              en los casos previstos por la ley.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            4. Exclusión de responsabilidad
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              El titular no garantiza la disponibilidad continua del sitio web ni se responsabiliza de los
              daños que puedan derivarse de su uso, de interrupciones técnicas, de errores tipográficos o de
              la desactualización de los contenidos.
            </p>
            <p>
              Los enlaces a sitios web de terceros incluidos en este sitio tienen finalidad informativa. El
              titular no asume ninguna responsabilidad sobre los contenidos o servicios de esos sitios, ni
              sobre su disponibilidad o exactitud.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            5. Legislación aplicable y jurisdicción
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Las presentes condiciones legales se rigen por la legislación española. Para la resolución de
            cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten, con
            renuncia expresa a cualquier otro fuero, a los juzgados y tribunales del domicilio del usuario,
            de conformidad con la normativa vigente de protección de consumidores y usuarios.
          </p>
        </section>

      </main>

      <footer className="border-t border-neutral-800 px-6 py-4 flex flex-wrap justify-center gap-4 mt-10">
        <Link href="/politica-privacidad" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          Política de Privacidad
        </Link>
        <span className="text-neutral-700">|</span>
        <Link href="/politica-cookies" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          Política de Cookies
        </Link>
        <span className="text-neutral-700">|</span>
        <Link href="/" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          felixmolina.es
        </Link>
      </footer>
    </div>
  )
}
