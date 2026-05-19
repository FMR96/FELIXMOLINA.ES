import Link from "next/link"
import { Monitor, Rocket, Layers, Lightbulb, Code2, Rss } from "lucide-react"

const NAV_ITEMS = [
  { href: "/", label: "INICIO", icon: Monitor },
  { href: "/#ventures", label: "VENTURES", icon: Rocket },
  { href: "/#proyectos", label: "PROYECTOS", icon: Layers },
  { href: "/#insights", label: "INSIGHTS", icon: Lightbulb },
  { href: "/#stack", label: "STACK", icon: Code2 },
  { href: "/blog", label: "BLOG", icon: Rss },
]

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-neutral-900/95 backdrop-blur border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="text-orange-500 font-bold text-sm tracking-wider shrink-0 hover:text-orange-400 transition-colors">
            FÉLIX MOLINA
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors data-[active]:bg-orange-500 data-[active]:text-white"
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: solo links clave */}
          <nav className="flex md:hidden items-center gap-1">
            <Link href="/" className="px-2.5 py-1.5 rounded text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
              INICIO
            </Link>
            <Link href="/blog" className="px-2.5 py-1.5 rounded text-xs font-mono bg-orange-500 text-white">
              BLOG
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}
