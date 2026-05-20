import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad — Félix Molina",
  description:
    "Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          ← VOLVER
        </Link>
        <div className="text-right">
          <div className="text-orange-500 font-bold text-sm tracking-widest">POLÍTICA DE PRIVACIDAD</div>
          <div className="text-neutral-600 text-xs">Última actualización: 18 de mayo de 2026</div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">

        <p className="text-neutral-400 text-sm leading-relaxed">
          En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la
          Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos
          digitales (LOPDGDD), se informa del tratamiento de datos personales realizado a través de este
          sitio web.
        </p>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            1. Responsable del tratamiento
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-1">
            <p><span className="text-neutral-500">Identidad:</span> Félix Molina</p>
            <p><span className="text-neutral-500">NIF/NIE:</span> [COMPLETAR]</p>
            <p><span className="text-neutral-500">Domicilio:</span> [COMPLETAR], España</p>
            <p>
              <span className="text-neutral-500">Correo electrónico:</span>{" "}
              <a href="mailto:fmr@drastika.es" className="text-orange-500 hover:underline">
                fmr@drastika.es
              </a>
            </p>
            <p><span className="text-neutral-500">Sitio web:</span> felixmolina.es</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            2. Finalidades del tratamiento y base jurídica
          </h2>
          <div className="space-y-5 text-sm text-neutral-300 leading-relaxed">

            <div className="space-y-1">
              <p className="font-bold text-white">2.1 Navegación y seguridad del servicio</p>
              <p>
                Los servidores de alojamiento (Vercel Inc.) registran automáticamente datos técnicos como
                la dirección IP, el tipo de navegador, el sistema operativo y las páginas visitadas, con la
                finalidad de mantener la seguridad y el correcto funcionamiento de la infraestructura.
              </p>
              <p className="text-neutral-500 text-xs">
                Base jurídica: Interés legítimo del responsable (art. 6.1.f RGPD) para garantizar la
                seguridad de la red e infraestructura.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-white">2.2 Analítica web</p>
              <p>
                Cuando el usuario lo autoriza expresamente, se utiliza Vercel Analytics para medir de
                forma agregada y anónima el uso del sitio, con el fin de mejorar su contenido y rendimiento.
                Esta herramienta no emplea identificadores persistentes entre sesiones ni establece cookies
                de terceros.
              </p>
              <p className="text-neutral-500 text-xs">
                Base jurídica: Consentimiento del interesado (art. 6.1.a RGPD). Puede retirarse en cualquier
                momento desde el enlace «Gestionar cookies» en el pie de página.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-white">2.3 Contacto</p>
              <p>
                Cuando el usuario se pone en contacto a través del correo electrónico o WhatsApp facilitados
                en el sitio, los datos aportados se utilizan exclusivamente para atender y responder a la
                consulta. El uso del enlace de WhatsApp implica que sus datos son procesados por Meta
                Platforms, Inc. conforme a sus propias políticas de privacidad, ajenas a este responsable.
              </p>
              <p className="text-neutral-500 text-xs">
                Base jurídica: Ejecución de medidas precontractuales a petición del interesado o
                consentimiento (art. 6.1.a y 6.1.b RGPD).
              </p>
            </div>

          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            3. Plazo de conservación
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              Los registros técnicos de navegación generados por la infraestructura de alojamiento se
              conservan durante el tiempo técnicamente necesario para garantizar la seguridad del servicio.
            </p>
            <p>
              Los datos de contacto se conservan durante el tiempo imprescindible para gestionar la consulta
              y, en su caso, mientras dure la relación posterior, eliminándose una vez finalizadas las gestiones.
            </p>
            <p>
              Las preferencias de cookies se almacenan durante 12 meses en el dispositivo del usuario,
              transcurridos los cuales se solicitará de nuevo el consentimiento.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            4. Destinatarios y transferencias internacionales
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>No se ceden datos personales a terceros salvo obligación legal.</p>
            <p>
              <strong className="text-white">Vercel Inc.</strong> (San Francisco, California, EE. UU.) actúa
              como encargado del tratamiento en calidad de proveedor de infraestructura cloud. Vercel dispone
              de cláusulas contractuales tipo (SCCs) aprobadas por la Comisión Europea que garantizan un nivel
              adecuado de protección en las transferencias internacionales de datos (art. 46 RGPD).
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            5. Derechos del interesado
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-3">
            <p>El usuario puede ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="space-y-2 ml-2">
              {[
                ["Acceso", "conocer qué datos personales se tratan."],
                ["Rectificación", "corregir datos inexactos o incompletos."],
                ["Supresión", "solicitar la eliminación de los datos cuando ya no sean necesarios para los fines para los que fueron recogidos."],
                ["Limitación del tratamiento", "solicitar que se restrinja el tratamiento en determinadas circunstancias."],
                ["Portabilidad", "recibir los datos en un formato estructurado y legible por máquina."],
                ["Oposición", "oponerse al tratamiento basado en el interés legítimo del responsable."],
                ["Retirada del consentimiento", "en cualquier momento, sin que ello afecte a la licitud del tratamiento previo."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-2">
                  <span className="text-orange-500 flex-shrink-0">→</span>
                  <span>
                    <strong className="text-white">{title}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, diríjase a{" "}
              <a href="mailto:fmr@drastika.es" className="text-orange-500 hover:underline">
                fmr@drastika.es
              </a>{" "}
              indicando el derecho que desea ejercer e incluyendo copia de su documento de identidad.
            </p>
            <p>
              Asimismo, tiene derecho a presentar una reclamación ante la{" "}
              <strong className="text-white">
                Agencia Española de Protección de Datos (AEPD)
              </strong>
              , autoridad de control competente en España:{" "}
              <span className="text-orange-500">www.aepd.es</span>
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            6. Cookies
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Para información detallada sobre el uso de cookies y tecnologías similares, consulte la{" "}
            <Link href="/politica-cookies" className="text-orange-500 hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-orange-500 text-xs font-bold tracking-widest uppercase border-b border-neutral-800 pb-2">
            7. Actualización de la política
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Esta política puede ser actualizada en cualquier momento para adaptarse a cambios legislativos o
            en los tratamientos realizados. La fecha de última actualización figura en la cabecera de este
            documento. Se recomienda revisarla periódicamente.
          </p>
        </section>

      </main>

      <footer className="border-t border-neutral-800 px-6 py-4 flex flex-wrap justify-center gap-4 mt-10">
        <Link href="/aviso-legal" className="text-xs text-neutral-500 hover:text-orange-500 transition-colors">
          Aviso Legal
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
