"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import type { CookieConsent } from "./cookie-banner"

const CONSENT_KEY = "felix-cookie-consent"

export function AnalyticsProvider() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const check = () => {
      try {
        const raw = localStorage.getItem(CONSENT_KEY)
        if (raw) setEnabled((JSON.parse(raw) as CookieConsent).analytics === true)
      } catch {}
    }
    check()
    const handler = (e: Event) => setEnabled((e as CustomEvent<CookieConsent>).detail.analytics === true)
    window.addEventListener("cookie-consent-updated", handler)
    return () => window.removeEventListener("cookie-consent-updated", handler)
  }, [])

  if (!enabled) return null
  return <Analytics />
}
