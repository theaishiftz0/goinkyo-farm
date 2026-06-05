import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Diary = {
  title: string;
  slug: string;
  eyecatch?: MicroCMSImage;
  body: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  body: string;
} & MicroCMSListContent;

export type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
