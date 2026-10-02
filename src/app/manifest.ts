import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} - ${business.headline}`,
    short_name: business.name,
    description: business.description,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#1e3a5f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
