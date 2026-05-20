import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") ?? "Félix Molina | Consultor SEO, Automatización IA · Sevilla"
  const description = searchParams.get("description") ?? ""
  const type = (searchParams.get("type") ?? "default") as "blog" | "venture" | "default"

  const accentColor = "#f97316"
  const typeLabel = type === "blog" ? "Blog" : type === "venture" ? "Venture" : "felixmolina.es"
  const fontSize = title.length > 60 ? "40px" : title.length > 40 ? "48px" : "56px"
  const showDescription = !!description && type === "blog"

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "52px 72px 48px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left accent bar — absolute */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "6px",
            height: "630px",
            backgroundColor: accentColor,
          }}
        />

        {/* Grid background — absolute, explicit size */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1200px",
            height: "630px",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── TOP: name + type label ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              color: accentColor,
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            FÉLIX MOLINA
          </div>
          <div style={{ color: "#404040", fontSize: "15px" }}>·</div>
          <div
            style={{
              color: "#6b7280",
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {typeLabel}
          </div>
        </div>

        {/* ── MIDDLE: title + optional description ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize,
              fontWeight: 700,
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              maxWidth: "960px",
            }}
          >
            {title}
          </div>

          {showDescription && (
            <div
              style={{
                color: "#9ca3af",
                fontSize: "19px",
                lineHeight: "1.5",
                maxWidth: "820px",
              }}
            >
              {description.length > 110 ? description.slice(0, 107) + "..." : description}
            </div>
          )}
        </div>

        {/* ── BOTTOM: CTA + URL ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1f1f1f",
            paddingTop: "20px",
          }}
        >
          {/* CTA pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#111111",
              border: "1px solid #2a2a2a",
              borderRadius: "8px",
              padding: "12px 22px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: accentColor,
              }}
            />
            <div
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Agenda una llamada gratuita →
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              color: "#6b7280",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            felixmolina.es
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
