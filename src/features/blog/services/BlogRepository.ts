import type { Blog } from "../types/blog";
import blogsData from "../data/blogs.json";

export function getAllBlogs(): Blog[] {
  return blogsData as Blog[];
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return getAllBlogs().find((blog) => blog.slug === slug);
}
