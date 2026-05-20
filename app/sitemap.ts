import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

const BASE = "https://felixmolina.es"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.isPillar ? 1.0 : post.funnel === "BOFU" ? 0.9 : 0.8,
  }))

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/screaming-frog-guia/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ]

  return [...staticRoutes, ...blogEntries]
}
