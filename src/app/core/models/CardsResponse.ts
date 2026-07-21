import { Card } from "./Card";

export interface CardsResponse {
  data: Card[];
  meta: PaginationMetadata;
}

export interface PaginationMetadata {
  generated: string;

  current_rows: number;
  total_rows: number;
  rows_remaining: number;

  total_pages: number;
  pages_remaining: number;

  previous_page?: string;
  previous_page_offset?: number;

  next_page?: string;
  next_page_offset?: number;
}