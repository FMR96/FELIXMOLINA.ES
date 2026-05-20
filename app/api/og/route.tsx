import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") ?? "Félix Molina"
  const description = searchParams.get("description") ?? "Consultor Tecnológico · SEO · GEO · IA"
  const type = (searchParams.get("type") ?? "default") as "blog" | "venture" | "default"

  const accentColor = type === "venture" ? "#f97316" : type === "blog" ? "#f97316" : "#f97316"

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

        {/* Grid background lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Header: FÉLIX MOLINA label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              color: accentColor,
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            FÉLIX MOLINA
          </div>
          <div style={{ color: "#525252", fontSize: "14px" }}>·</div>
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

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "auto",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 60 ? "42px" : "52px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                color: "#a3a3a3",
                fontSize: "20px",
                lineHeight: 1.5,
                maxWidth: "800px",
              }}
            >
              {description.length > 120 ? description.slice(0, 117) + "..." : description}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #262626",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: accentColor,
              }}
            />
            <div style={{ color: "#737373", fontSize: "14px", letterSpacing: "0.05em" }}>
              Consultor Tecnológico · SEO · GEO · Automatización IA
            </div>
          </div>
          <div
            style={{
              color: accentColor,
              fontSize: "14px",
              fontWeight: 600,
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
