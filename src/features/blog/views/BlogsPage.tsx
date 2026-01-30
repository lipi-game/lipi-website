import { Link } from "react-router-dom";
import { Clock, Gamepad2 } from "lucide-react";
import { getAllBlogsSorted } from "../services/BlogManager";
import { useSEO } from "@/shared/hooks/useSEO";
import type { Blog } from "../types/blog";

const BLOG_CARD_BG_CLASSES = ["bg-[#EDFFF4]", "bg-[#FFEDED]"];


function getBlogCardBgClassById(id) {
  const n = Number(id) || 0;
  return BLOG_CARD_BG_CLASSES[n % BLOG_CARD_BG_CLASSES.length];
}


function CategoryChip({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f4fc] text-[#4a90b8] text-xs font-medium">
      <Gamepad2 className="w-3.5 h-3.5" />
      {category}
    </span>
  );
}

function ReadTimeChip({ readTime }: { readTime: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f5] text-gray-600 text-xs font-medium">
      <Clock className="w-3.5 h-3.5" />
      {readTime}
    </span>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
   <article className={`group rounded-md overflow-hidden flex flex-col ring-0 ring-black/50 shadow-lg hover:shadow-xl transition-shadow duration-200 ${getBlogCardBgClassById(blog.id)}`}>
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden p-2">
        {blog.imageUrl ? (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          <CategoryChip category={blog.category} />
          <ReadTimeChip readTime={blog.readTime} />
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
          <Link
            to={`/blogs/${blog.slug}`}
            className="hover:text-[#118fdd] transition-colors"
          >
            {blog.title}
          </Link>
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          {blog.author} · {formattedDate}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
          {blog.excerpt}
        </p>
      </div>
    </article>
  );
}

export function BlogsPage() {

  useSEO({
    title: "Lipi Games Blog | Mahabharata, Ramayana & Word Games Insights",
    description:
      "Explore the Lipi Games blog for the latest articles on Word Games, language learning, Hindi Wordle, Telugu Wordle, and timeless stories from the Mahabharata and Ramayana.",
    canonical: "https://lipiinc.com/blogs",
    keywords:
      "lipi games blog, mahabharata quiz questions, ramayana learning, hindi wordle, unjumble words, vocabulary learning game, telugu wordle, indian mythology",
    ogTitle: "Lipi Games Blog | Insights on Indian Epics & Word Games",
    ogDescription:
      "Read the latest updates, tips, and stories about learning Mahabharata, Ramayana, and mastering vocabulary through word games.",
    ogImage: "https://img.lipi.games/lipi-notifications/email/Lipi-cube-logo.png",
  });

  const blogs = getAllBlogsSorted();

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Blogs
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Insights, stories, and updates from the Lipi team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}