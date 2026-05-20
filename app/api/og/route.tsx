import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") ?? "Félix Molina | Consultor SEO, Automatización IA · Sevilla"
  const description = searchParams.get("description") ?? "Consultor Tecnológico · SEO · GEO · IA"
  const type = (searchParams.get("type") ?? "default") as "blog" | "venture" | "default"

  const accentColor = "#f97316"

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "6px",
            height: "630px",
            backgroundColor: accentColor,
          }}
        />

        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Header: FÉLIX MOLINA + type label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
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
          <div style={{ color: "#525252", fontSize: "15px" }}>·</div>
          <div
            style={{
              color: "#737373",
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {type === "blog" ? "Blog" : type === "venture" ? "Venture" : "felixmolina.es"}
          </div>
        </div>

        {/* Main title — flexible grow to push footer down */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 60 ? "40px" : title.length > 40 ? "48px" : "56px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "960px",
            }}
          >
            {title}
          </div>

          {description && type === "blog" && (
            <div
              style={{
                color: "#a3a3a3",
                fontSize: "19px",
                lineHeight: 1.5,
                maxWidth: "820px",
              }}
            >
              {description.length > 110 ? description.slice(0, 107) + "..." : description}
            </div>
          )}
        </div>

        {/* Footer: CTA izquierda + URL derecha */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1f1f1f",
            paddingTop: "22px",
            marginTop: "0px",
          }}
        >
          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#111111",
              border: "1px solid #2a2a2a",
              borderRadius: "6px",
              padding: "10px 20px",
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
                letterSpacing: "0.01em",
              }}
            >
              Agenda una llamada gratuita →
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              color: "#6b7280",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            felixmolina.es
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
