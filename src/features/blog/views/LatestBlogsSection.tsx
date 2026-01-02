import { Link } from "react-router-dom";
import { Clock, Gamepad2 } from "lucide-react";
import { getFeaturedBlog, getSecondaryBlogs } from "../services/BlogManager";
import type { Blog } from "../types/blog";

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

function FeaturedCard({ blog }: { blog: Blog }) {
  return (
    <article className="bg-white rounded-[20px] shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-[340px] lg:w-[400px] flex-shrink-0">
          <div className="aspect-[4/3] md:aspect-auto md:h-full">
            {blog.imageUrl ? (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            <CategoryChip category={blog.category} />
            <ReadTimeChip readTime={blog.readTime} />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
            {blog.title}
          </h3>

          <p className="text-sm text-gray-500 mb-3">{blog.author}</p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}

function SecondaryCard({ blog }: { blog: Blog }) {
  return (
    <article className="bg-white rounded-[20px] shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        {blog.imageUrl ? (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover"
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

        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">{blog.author}</p>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>
      </div>
    </article>
  );
}

export function LatestBlogsSection() {
  const featured = getFeaturedBlog();
  const secondary = getSecondaryBlogs();

  if (!featured) return null;

  return (
    <section
      aria-labelledby="latest-blogs-heading"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2
            id="latest-blogs-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Read Our Latest Blogs
          </h2>

          <Link
            to="/blogs"
            className="inline-flex items-center px-5 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Featured Card */}
        <div className="mb-6">
          <FeaturedCard blog={featured} />
        </div>

        {/* Secondary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((blog) => (
            <SecondaryCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
