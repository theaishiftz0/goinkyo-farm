import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Diary, MicroCMSListResponse, News } from "@/types/microcms";

export const revalidate = 60;

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

const client =
  serviceDomain && apiKey
    ? createClient({
        serviceDomain,
        apiKey
      })
    : null;

const emptyList = <T>(): MicroCMSListResponse<T> => ({
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: 0
});

export async function getDiaryList(
  queries: MicroCMSQueries = {}
): Promise<MicroCMSListResponse<Diary>> {
  if (!client) {
    return emptyList<Diary>();
  }

  try {
    return await client.getList<Diary>({
      endpoint: "diary",
      queries: {
        orders: "-publishedAt",
        ...queries
      }
    });
  } catch {
    return emptyList<Diary>();
  }
}

export async function getDiaryBySlug(slug: string): Promise<Diary | null> {
  const list = await getDiaryList({
    filters: `slug[equals]${slug}`,
    limit: 1
  });

  return list.contents[0] ?? null;
}

export async function getNewsList(
  queries: MicroCMSQueries = {}
): Promise<MicroCMSListResponse<News>> {
  if (!client) {
    return emptyList<News>();
  }

  try {
    return await client.getList<News>({
      endpoint: "news",
      queries: {
        orders: "-publishedAt",
        ...queries
      }
    });
  } catch {
    return emptyList<News>();
  }
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
}

export function formatDate(value?: string) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo"
  }).format(new Date(value));
}

export const fallbackImages = {
  hero:
    "https://images.unsplash.com/photo-1774301582912-29fbd0a4f1cd?auto=format&fit=crop&w=1800&q=85",
  rice:
    "https://images.unsplash.com/photo-1572908721147-0a9eb395762d?auto=format&fit=crop&w=900&q=85",
  grapes:
    "https://images.unsplash.com/photo-1659403861630-d25fc0953ef8?auto=format&fit=crop&w=900&q=85",
  vegetables:
    "https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?auto=format&fit=crop&w=900&q=85",
  winter:
    "https://images.unsplash.com/photo-1760277110716-ce2b0b7ae379?auto=format&fit=crop&w=900&q=85",
  field:
    "https://images.unsplash.com/photo-1763905586215-9e43fc2da8f1?auto=format&fit=crop&w=1200&q=85",
  market:
    "https://images.unsplash.com/photo-1727295019821-96e0c88d273b?auto=format&fit=crop&w=1200&q=85"
};
