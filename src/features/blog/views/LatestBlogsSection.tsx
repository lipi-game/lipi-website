import { Link } from "react-router-dom";
import { Clock, Gamepad2 } from "lucide-react";
import { getFeaturedBlog, getSecondaryBlogs, getAllBlogsSorted } from "../services/BlogManager";
import type { Blog } from "../types/blog";
import { useRef, useState, useEffect } from "react";

function CategoryChip({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8f0fe] text-[#4285f4] text-xs font-medium">
      <Gamepad2 className="w-3.5 h-3.5" />
      {category}
    </span>
  );
}

function ReadTimeChip({ readTime }: { readTime: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f1f3f4] text-gray-600 text-xs font-medium">
      <Clock className="w-3.5 h-3.5" />
      {readTime}
    </span>
  );
}

function FeaturedCard({ blog }: { blog: Blog }) {
  return (
    <Link to={`/blogs/${blog.slug}`} className="block group">
      <article className="bg-[#f0e6fa] rounded-[24px] overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-[320px] lg:w-[360px] flex-shrink-0 p-4 md:p-5">
            <div className="aspect-square md:aspect-[4/5] rounded-[20px] overflow-hidden">
              {blog.imageUrl ? (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center rounded-[20px]">
                  <span className="text-muted-foreground">No image</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 md:p-6 md:pl-2 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryChip category={blog.category} />
              <ReadTimeChip readTime={blog.readTime} />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#118fdd] transition-colors">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3">{blog.author}</p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

function SecondaryCard({ blog }: { blog: Blog }) {
  return (
    <Link to={`/blogs/${blog.slug}`} className="block group h-full">
      <article className="bg-white rounded-[24px] shadow-sm ring-1 ring-gray-300 overflow-hidden flex flex-col h-full">
        {/* Image */}
        <div className="p-4 pb-0">
          <div className="aspect-[4/3] rounded-[16px] overflow-hidden">
            {blog.imageUrl ? (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center rounded-[16px]">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pt-4 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            <CategoryChip category={blog.category} />
            <ReadTimeChip readTime={blog.readTime} />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-[#118fdd] transition-colors">
            {blog.title}
          </h3>

          <p className="text-sm text-gray-600 mb-2">{blog.author}</p>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

export function LatestBlogsSection() {
  const allBlogs = getAllBlogsSorted();
  const featured = getFeaturedBlog();
  const secondary = getSecondaryBlogs();
  
  // Mobile carousel state
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active dot on scroll
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to specific slide when dot is clicked
  const scrollToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.offsetWidth, behavior: "smooth" });
  };

  if (!featured) return null;

  return (
    <section
      aria-labelledby="latest-blogs-heading"
      className="py-4 md:py-6 lg:py-8 bg-white"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Mobile: Single blog card swipe carousel with ALL blogs */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allBlogs.map((blog) => (
              <div key={blog.id} className="w-full shrink-0 snap-center px-2">
                <MobileCard blog={blog} />
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {allBlogs.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Desktop/Tablet: Featured + Secondary grid */}
        <div className="hidden md:block">
          {/* Featured Card */}
          <div className="mb-6">
            <FeaturedCard blog={featured} />
          </div>

          {/* Secondary Cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {secondary.map((blog) => (
              <SecondaryCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Mobile-specific card (matches screenshot style)
function MobileCard({ blog }: { blog: Blog }) {
  return (
    <Link to={`/blogs/${blog.slug}`} className="block group">
      <article className="bg-[#f0e6fa] rounded-[24px] overflow-hidden">
        {/* Image */}
        <div className="p-4 pb-0">
          <div className="aspect-square rounded-[20px] overflow-hidden">
            {blog.imageUrl ? (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center rounded-[20px]">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pt-3">
          <div className="flex flex-wrap gap-2 mb-3">
            <CategoryChip category={blog.category} />
            <ReadTimeChip readTime={blog.readTime} />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#ff7c2b] transition-colors">
            {blog.title}
          </h3>

          <p className="text-sm text-gray-600 mb-2">{blog.author}</p>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
