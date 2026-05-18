import fs from "fs"
import path from "path"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type PostFrontmatter = {
  title: string
  h1: string
  slug: string
  metaTitle: string
  metaDescription: string
  keyword: string
  keywordsSecondary: string[]
  searchIntent: "informacional" | "comercial" | "transaccional" | "navegacional"
  funnel: "TOFU" | "MOFU" | "BOFU"
  cluster: string
  publishOrder: number
  date: string
  readTime: string
  schema: string[]
  isPillar?: boolean
}

export type Post = PostFrontmatter & {
  content: string
  fileName: string
}

export type PostMeta = PostFrontmatter & {
  fileName: string
}

function parseFrontmatter(raw: string): { frontmatter: Record<string, unknown>; content: string } {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!fmMatch) return { frontmatter: {}, content: raw }

  const fmRaw = fmMatch[1]
  const content = fmMatch[2].trim()
  const frontmatter: Record<string, unknown> = {}

  for (const line of fmRaw.split("\n")) {
    const colonIdx = line.indexOf(":")
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()

    if (val.startsWith("[") && val.endsWith("]")) {
      frontmatter[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean)
    } else if (val === "true") {
      frontmatter[key] = true
    } else if (val === "false") {
      frontmatter[key] = false
    } else if (/^\d+$/.test(val)) {
      frontmatter[key] = parseInt(val, 10)
    } else {
      frontmatter[key] = val.replace(/^["']|["']$/g, "")
    }
  }

  return { frontmatter, content }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts: PostMeta[] = []
  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
    const { frontmatter } = parseFrontmatter(raw)
    posts.push({ ...(frontmatter as unknown as PostFrontmatter), fileName: file })
  }

  return posts.sort((a, b) => (a.publishOrder ?? 99) - (b.publishOrder ?? 99))
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(BLOG_DIR)) return null

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
    const { frontmatter, content } = parseFrontmatter(raw)
    if (frontmatter.slug === slug) {
      return { ...(frontmatter as unknown as PostFrontmatter), content, fileName: file }
    }
  }
  return null
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug).filter(Boolean)
}

export function getPostsByCluster(cluster: string): PostMeta[] {
  return getAllPosts().filter((p) => p.cluster === cluster)
}

export const CLUSTERS = [
  "PILLAR — Hub Central",
  "SEO Local Sevilla",
  "GEO / IA Generativa",
  "SEO para Restaurantes",
  "Automatización + IA",
  "Marca Personal",
  "Google Business Profile",
  "SEO Técnico Moderno",
  "Future Search",
] as const

export type Cluster = (typeof CLUSTERS)[number]
