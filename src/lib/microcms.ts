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

  return client.getList<Diary>({
    endpoint: "diary",
    queries: {
      orders: "-publishedAt",
      ...queries
    }
  });
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

  return client.getList<News>({
    endpoint: "news",
    queries: {
      orders: "-publishedAt",
      ...queries
    }
  });
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
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85",
  rice:
    "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=900&q=85",
  grapes:
    "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=900&q=85",
  vegetables:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=85",
  winter:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  field:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
  market:
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=85"
};
