"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const CONSENT_KEY = "felix-cookie-consent"
const CONSENT_DAYS = 365

export type CookieConsent = {
  essential: true
  analytics: boolean
  timestamp: string
  expires: string
}

function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const c = JSON.parse(raw) as CookieConsent
    if (new Date(c.expires) < new Date()) {
      localStorage.removeItem(CONSENT_KEY)
      return null
    }
    return c
  } catch {
    return null
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [details, setDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    if (!readConsent()) setVisible(true)

    const onManage = () => {
      setDetails(true)
      setVisible(true)
    }
    window.addEventListener("manage-cookies", onManage)
    return () => window.removeEventListener("manage-cookies", onManage)
  }, [])

  const save = (withAnalytics: boolean) => {
    const now = new Date()
    const expires = new Date(now)
    expires.setDate(expires.getDate() + CONSENT_DAYS)
    const consent: CookieConsent = {
      essential: true,
      analytics: withAnalytics,
      timestamp: now.toISOString(),
      expires: expires.toISOString(),
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
    setVisible(false)
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: consent }))
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-neutral-900 border-t border-orange-500/30 shadow-2xl">
      <div className="max-w-5xl mx-auto p-4 md:p-5 space-y-4">
        <div>
          <h2 className="text-orange-500 font-bold text-xs tracking-widest mb-2">
            PREFERENCIAS DE PRIVACIDAD
          </h2>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Utilizamos cookies técnicas, imprescindibles para el funcionamiento del sitio. Con tu consentimiento expreso,
            también usamos cookies analíticas para medir el tráfico de forma anónima. Consulta nuestra{" "}
            <Link href="/politica-cookies" className="text-orange-500 hover:underline">
              Política de Cookies
            </Link>{" "}
            y{" "}
            <Link href="/politica-privacidad" className="text-orange-500 hover:underline">
              Política de Privacidad
            </Link>
            .
          </p>
        </div>

        {details && (
          <div className="bg-neutral-800 border border-neutral-700 rounded divide-y divide-neutral-700">
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-white text-xs font-bold">Cookies técnicas o esenciales</p>
                <p className="text-neutral-500 text-xs mt-0.5">
                  Necesarias para el funcionamiento básico. No requieren consentimiento.
                </p>
              </div>
              <span className="text-neutral-500 text-xs ml-4 whitespace-nowrap">Siempre activas</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-white text-xs font-bold">Cookies analíticas</p>
                <p className="text-neutral-500 text-xs mt-0.5">
                  Medición anónima de visitas mediante Vercel Analytics.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={analytics}
                onClick={() => setAnalytics(!analytics)}
                className={`relative ml-4 flex-shrink-0 inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  analytics ? "bg-orange-500" : "bg-neutral-600"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                    analytics ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-end gap-2">
          <button
            onClick={() => setDetails(!details)}
            className="text-xs text-neutral-400 hover:text-white px-3 py-2 border border-neutral-700 rounded hover:border-neutral-500 transition-colors"
          >
            {details ? "Ocultar opciones" : "Personalizar"}
          </button>
          <button
            onClick={() => save(false)}
            className="text-xs text-neutral-400 hover:text-white px-4 py-2 border border-neutral-700 rounded hover:border-neutral-500 transition-colors"
          >
            Rechazar no esenciales
          </button>
          <button
            onClick={() => save(details ? analytics : true)}
            className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold transition-colors"
          >
            {details ? "Guardar preferencias" : "Aceptar todas"}
          </button>
        </div>
      </div>
    </div>
  )
}
