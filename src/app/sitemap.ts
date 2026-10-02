import type { MetadataRoute } from "next";
import { abs, SITE_URL, videos } from "@/lib/site";
import { galleryItems } from "@/lib/gallery";
import { servicePages } from "@/lib/servicePages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: galleryItems.map((item) => abs(item.image)),
      videos: videos.map((v) => ({
        title: v.name,
        description: v.description,
        thumbnail_loc: abs(v.thumbnail),
        content_loc: abs(v.file),
      })),
    },
    {
      url: `${SITE_URL}/servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages.map((page) => ({
      url: `${SITE_URL}/servicos/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: page.photos.map((p) => abs(p.image)),
    })),
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
