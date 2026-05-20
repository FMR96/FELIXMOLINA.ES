import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const postUrl = `https://felixmolina.es/blog/${slug}`

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.keyword, ...post.keywordsSecondary].join(", "),
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      url: postUrl,
      locale: "es_ES",
      siteName: "Félix Molina",
    },
    twitter: {
      card: "summary",
      site: "@xfmr96",
      creator: "@xfmr96",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
}

function renderMarkdown(content: string): string {
  return content
    // Code blocks (before inline code)
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_m, _lang, code) =>
      `<pre class="bg-neutral-800 border border-neutral-700 rounded-lg p-4 overflow-x-auto my-6 text-xs font-mono text-neutral-300"><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`)
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-neutral-800 text-orange-400 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>')
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-white mt-10 mb-4 border-l-2 border-orange-500 pl-4">$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-white mt-8 mb-3">$1</h3>')
    // H4
    .replace(/^#### (.+)$/gm, '<h4 class="text-base font-bold text-neutral-200 mt-6 mb-2">$1</h4>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-orange-500 pl-4 my-6 text-base text-neutral-300 italic leading-relaxed">$1</blockquote>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Tables
    .replace(/(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g, (_m, header, _sep, rows) => {
      const headerCells = header.split("|").filter((c: string) => c.trim())
        .map((c: string) => `<th class="px-4 py-2 text-left text-xs font-mono text-orange-400 uppercase tracking-wider border-b border-neutral-700">${c.trim()}</th>`)
        .join("")
      const bodyRows = rows.trim().split("\n")
        .map((row: string) => {
          const cells = row.split("|").filter((c: string) => c.trim())
            .map((c: string) => `<td class="px-4 py-2.5 text-sm text-neutral-300 border-b border-neutral-800">${c.trim()}</td>`)
            .join("")
          return `<tr class="hover:bg-neutral-800/50">${cells}</tr>`
        }).join("")
      return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-neutral-700 rounded-lg overflow-hidden"><thead class="bg-neutral-900"><tr>${headerCells}</tr></thead><tbody class="bg-neutral-900/50">${bodyRows}</tbody></table></div>`
    })
    // Unordered lists
    .replace(/^[-*] (.+)$/gm, '<li class="text-base text-neutral-300 leading-relaxed ml-4 list-disc">$1</li>')
    .replace(/(<li[^>]*>.*<\/li>\n?)+/g, (m) => `<ul class="space-y-1.5 my-4">${m}</ul>`)
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li class="text-base text-neutral-300 leading-relaxed ml-4 list-decimal">$1</li>')
    // Internal links
    .replace(/\[([^\]]+)\]\(\/([^)]+)\)/g,
      '<a href="/$2" class="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">$1</a>')
    // External links
    .replace(/\[([^\]]+)\]\((https?[^)]+)\)/g,
      '<a href="$2" class="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>')
    // Checkboxes
    .replace(/- \[ \] (.+)/g, '<li class="text-sm text-neutral-400 flex items-center gap-2"><span class="w-3 h-3 border border-neutral-600 rounded-sm inline-block flex-shrink-0"></span>$1</li>')
    .replace(/- \[x\] (.+)/g, '<li class="text-sm text-neutral-300 flex items-center gap-2"><span class="w-3 h-3 bg-orange-500 rounded-sm inline-block flex-shrink-0"></span>$1</li>')
    // Paragraphs (lines not starting with HTML tags)
    .replace(/^(?!<[a-z])(.+)$/gm, (m) =>
      m.trim() ? `<p class="text-base text-neutral-300 leading-relaxed my-3">${m}</p>` : "")
    // HR
    .replace(/^---$/gm, '<hr class="border-neutral-800 my-8">')
    // Clean up empty paragraphs
    .replace(/<p[^>]*>\s*<\/p>/g, "")
}

const CLUSTER_COLORS: Record<string, string> = {
  "SEO Local Sevilla": "bg-orange-500/20 text-orange-400",
  "GEO / IA Generativa": "bg-white/15 text-white",
  "SEO para Restaurantes": "bg-amber-500/20 text-amber-400",
  "Automatización + IA": "bg-blue-500/20 text-blue-400",
  "Marca Personal": "bg-purple-500/20 text-purple-400",
  "Google Business Profile": "bg-green-500/20 text-green-400",
  "SEO Técnico Moderno": "bg-neutral-600/40 text-neutral-300",
  "Future Search": "bg-cyan-500/20 text-cyan-400",
  "PILLAR — Hub Central": "bg-orange-600/30 text-orange-300",
}

const FUNNEL_LABELS: Record<string, string> = {
  TOFU: "Awareness",
  MOFU: "Consideración",
  BOFU: "Decisión",
}

const INTENT_LABELS: Record<string, string> = {
  informacional: "Informacional",
  comercial: "Comercial",
  transaccional: "Transaccional",
  navegacional: "Navegacional",
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const postUrl = `https://felixmolina.es/blog/${slug}`

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${postUrl}#article`,
    url: postUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: post.h1,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      "@id": "https://felixmolina.es/#felix-molina",
      name: "Félix Molina",
      url: "https://felixmolina.es",
    },
    publisher: {
      "@id": "https://felixmolina.es/#felix-molina",
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: [post.keyword, ...post.keywordsSecondary].join(", "),
    inLanguage: "es-ES",
  }

  const rendered = renderMarkdown(post.content)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors font-mono mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          VOLVER AL BLOG
        </Link>

        {/* Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={`${CLUSTER_COLORS[post.cluster] ?? "bg-neutral-700 text-neutral-300"} text-xs`}>
              {post.cluster}
            </Badge>
            {post.isPillar && (
              <Badge className="bg-orange-600/40 text-orange-200 text-xs">PILLAR CONTENT</Badge>
            )}
            <span className="text-xs font-mono text-neutral-600">
              {FUNNEL_LABELS[post.funnel]} · {INTENT_LABELS[post.searchIntent]}
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">{post.h1}</h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {post.keyword}
            </span>
          </div>

          {post.keywordsSecondary?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.keywordsSecondary.slice(0, 5).map((kw) => (
                <span
                  key={kw}
                  className="text-xs text-neutral-600 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded font-mono"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <article
          className="prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-neutral-500 font-mono">Escrito por</p>
              <p className="text-sm font-bold text-white">Félix Molina</p>
              <p className="text-xs text-neutral-400">Consultor SEO & GEO · Sevilla</p>
            </div>
            <Link
              href="mailto:fmr@drastika.es"
              className="text-xs font-mono bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
            >
              SOLICITAR AUDITORÍA GRATUITA →
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}
