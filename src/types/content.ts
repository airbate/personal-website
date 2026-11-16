export type GrowthStage = "seedling" | "budding" | "evergreen";

export interface BookItem {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  readYear: string;
  rating?: number;
  takeaway: string;
  href: string;
}

export interface ReadingNoteItem {
  slug: string;
  title: string;
  bookTitle?: string;
  dateLabel: string;
  growth: GrowthStage;
  summary: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
