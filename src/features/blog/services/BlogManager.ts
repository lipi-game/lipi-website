import type { Blog } from "../types/blog";
import { getAllBlogs } from "./BlogRepository";

function sortByDateDescending(blogs: Blog[]): Blog[] {
  return [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestBlogs(count: number = 3): Blog[] {
  const sorted = sortByDateDescending(getAllBlogs());
  return sorted.slice(0, count);
}

export function getFeaturedBlog(): Blog | undefined {
  const sorted = sortByDateDescending(getAllBlogs());
  return sorted[0];
}

export function getSecondaryBlogs(): Blog[] {
  const sorted = sortByDateDescending(getAllBlogs());
  return sorted.slice(1, 3);
}

export function getAllBlogsSorted(): Blog[] {
  return sortByDateDescending(getAllBlogs());
}
