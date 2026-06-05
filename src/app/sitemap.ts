import type { MetadataRoute } from "next";
import { getDiaryList, getSiteUrl } from "@/lib/microcms";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const staticRoutes = ["", "/about", "/crops", "/diary", "/sales", "/contact"];
  const diary = await getDiaryList({ fields: "slug,updatedAt", limit: 100 });

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })),
    ...diary.contents.map((entry) => ({
      url: `${siteUrl}/diary/${entry.slug}`,
      lastModified: new Date(entry.updatedAt)
    }))
  ];
}
