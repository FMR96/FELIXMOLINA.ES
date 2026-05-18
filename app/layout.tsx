import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono as GeistMono } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"
import { AnalyticsProvider } from "@/components/analytics-provider"

const geistMono = GeistMono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Félix Molina — Emprendedor & Builder",
  description: "Web personal de Félix Molina. Emprendedor, builder y apasionado de los sistemas que escalan negocios.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${geistMono.className} bg-black text-white antialiased`}>
        {children}
        <CookieBanner />
        <AnalyticsProvider />
      </body>
    </html>
  )
}
