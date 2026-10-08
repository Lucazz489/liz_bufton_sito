import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/my-story/", "/programme/", "/growth-and-insights/", "/book-a-call/"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));
}