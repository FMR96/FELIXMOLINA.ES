import Link from "next/link"
import type { Metadata } from "next"
import { ManageCookiesButton } from "@/components/manage-cookies-button"

export const metadata: Metadata = {
  title: "Política de Cookies — Félix Molina",
  description:
    "Información sobre las cookies utilizadas en felixmolina.es conforme a la normativa europea.",
}

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          ← VOLVER
        </Link>
        <div className="text-right">
          <div className="text-orange-500 font-bold text-sm tracking-widest">POLÍTICA DE COOKIES</div>
          <div className="text-neutral-600 text-xs">Última actualización: 18 de mayo de 2026</div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">

        <p className="text-neutral-400 text-sm leading-relaxed">
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
          Electrónico (LSSI-CE), y de la Directiva 2009/136/CE (Directiva ePrivacy), se informa del uso de
          cookies y tecnologías de almacenamiento local en este sitio web.
        </p>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            1. ¿Qué son las cookies?
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Las cookies son pequeños ficheros de texto que un sitio web deposita en el dispositivo del
            usuario al visitarlo. Permiten recordar acciones y preferencias durante un período de tiempo.
            Además de las cookies en sentido estricto, este sitio utiliza{" "}
            <code className="text-orange-400 text-xs bg-neutral-900 px-1 py-0.5 rounded">localStorage</code>,
            una tecnología de almacenamiento local equivalente sujeta a la misma normativa de privacidad
            conforme al art. 22.2 LSSI-CE.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            2. Tipos de cookies
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-3">
            <ul className="space-y-2 ml-2">
              <li className="flex gap-2">
                <span className="text-orange-500 flex-shrink-0">→</span>
                <span>
                  <strong className="text-white">Técnicas o esenciales:</strong> imprescindibles para el
                  funcionamiento básico del sitio. No requieren consentimiento previo (art. 22.2 LSSI-CE).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 flex-shrink-0">→</span>
                <span>
                  <strong className="text-white">Analíticas:</strong> permiten medir el número de visitas
                  y el comportamiento de los usuarios de forma agregada y anónima. Solo se activan con el
                  consentimiento previo y expreso del usuario.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            3. Detalle de cookies y almacenamiento local
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-2 pr-3 text-neutral-500 font-bold tracking-wider">NOMBRE</th>
                  <th className="text-left py-2 pr-3 text-neutral-500 font-bold tracking-wider">TITULAR</th>
                  <th className="text-left py-2 pr-3 text-neutral-500 font-bold tracking-wider">TIPO</th>
                  <th className="text-left py-2 pr-3 text-neutral-500 font-bold tracking-wider">FINALIDAD</th>
                  <th className="text-left py-2 text-neutral-500 font-bold tracking-wider">DURACIÓN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                <tr>
                  <td className="py-3 pr-3 text-orange-400 font-mono whitespace-nowrap">felix-cookie-consent</td>
                  <td className="py-3 pr-3 text-neutral-300">felixmolina.es</td>
                  <td className="py-3 pr-3 text-neutral-300">Técnica (localStorage)</td>
                  <td className="py-3 pr-3 text-neutral-300">
                    Almacena las preferencias de consentimiento de cookies del usuario.
                  </td>
                  <td className="py-3 text-neutral-300 whitespace-nowrap">12 meses</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 text-orange-400 font-mono whitespace-nowrap">Vercel Analytics</td>
                  <td className="py-3 pr-3 text-neutral-300">Vercel Inc.</td>
                  <td className="py-3 pr-3 text-neutral-300">Analítica (solo con consentimiento)</td>
                  <td className="py-3 pr-3 text-neutral-300">
                    Medición anónima de visitas y comportamiento agregado. No emplea identificadores
                    persistentes entre sesiones.
                  </td>
                  <td className="py-3 text-neutral-300 whitespace-nowrap">Sesión</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-neutral-500 text-xs leading-relaxed">
            Vercel Inc. actúa como encargado del tratamiento y dispone de cláusulas contractuales tipo (SCCs)
            aprobadas por la Comisión Europea para las transferencias internacionales de datos a EE. UU.
            (art. 46 RGPD). Para más información, consulte la política de privacidad de Vercel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            4. Cómo gestionar tus preferencias
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-3">
            <p>
              Puedes revisar y modificar tus preferencias de cookies en cualquier momento haciendo clic en{" "}
              <ManageCookiesButton />.
            </p>
            <p>
              También puedes configurar tu navegador para rechazar, bloquear o eliminar cookies. A
              continuación se indican los enlaces de configuración de los navegadores más comunes:
            </p>
            <ul className="space-y-1 ml-2 text-xs text-neutral-400">
              <li className="flex gap-2">
                <span className="text-orange-500">→</span>
                <span>
                  <strong className="text-neutral-300">Google Chrome:</strong>{" "}
                  Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">→</span>
                <span>
                  <strong className="text-neutral-300">Mozilla Firefox:</strong>{" "}
                  Opciones → Privacidad y seguridad → Cookies y datos del sitio
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">→</span>
                <span>
                  <strong className="text-neutral-300">Safari:</strong>{" "}
                  Preferencias → Privacidad → Gestionar datos de sitio web
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">→</span>
                <span>
                  <strong className="text-neutral-300">Microsoft Edge:</strong>{" "}
                  Configuración → Cookies y permisos del sitio
                </span>
              </li>
            </ul>
            <p className="text-neutral-500 text-xs">
              Bloquear todas las cookies puede afectar al funcionamiento de algunos sitios web.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            5. Actualización de la política
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Esta política puede ser actualizada cuando se produzcan cambios en las cookies utilizadas o en la
            normativa aplicable. La fecha de última actualización figura en la cabecera de este documento.
            Se recomienda revisarla periódicamente.
          </p>
        </section>

      </main>

      <footer className="border-t border-neutral-800 px-6 py-4 flex flex-wrap justify-center gap-4 mt-10">
        <Link href="/aviso-legal" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          Aviso Legal
        </Link>
        <span className="text-neutral-700">|</span>
        <Link href="/politica-privacidad" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          Política de Privacidad
        </Link>
        <span className="text-neutral-700">|</span>
        <Link href="/" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          felixmolina.es
        </Link>
      </footer>
    </div>
  )
}
