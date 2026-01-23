import { ContentItem } from "./ContentItem";

export interface ReferenceBlock {
  id: string;
  title: string;
  variant: "brown" | "blue";
  content: ContentItem[];
}