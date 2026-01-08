import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { ArrowLeft, Clock, Gamepad2, Linkedin } from "lucide-react";
import { getBlogBySlug } from "../services/BlogRepository";
import { getMoreBlogs } from "../services/BlogManager";
import { useSEO } from "@/shared/hooks/useSEO";
import type { Blog } from "../types/blog";

// ============= HELPER FUNCTIONS =============

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function getHeadingText(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function ensureUniqueId(base: string, used: Set<string>) {
  let id = base || "section";
  let i = 2;
  while (used.has(id)) id = `${base}-${i++}`;
  used.add(id);
  return id;
}

function addIdsToHeadings(html: string): string {
  const used = new Set<string>();

  return html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, level, attrs, content) => {
      // ✅ If heading already has id, keep it (do NOT add a new one)
      const idMatch = attrs.match(/\sid=["']([^"']+)["']/i);
      if (idMatch?.[1]) {
        used.add(idMatch[1]);
        return match;
      }

      const text = getHeadingText(content);
      const base = slugify(text);
      const id = ensureUniqueId(base, used);

      return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
    }
  );
}

function extractToc(htmlWithIds: string): TocItem[] {
  // ✅ Read ids that actually exist in the HTML
  const regex = /<h([23])[^>]*\sid=["']([^"']+)["'][^>]*>([\s\S]*?)<\/h\1>/gi;
  const items: TocItem[] = [];
  let match;

  while ((match = regex.exec(htmlWithIds)) !== null) {
    const level = Number(match[1]);
    const id = match[2];
    const text = getHeadingText(match[3]);
    if (text) items.push({ id, text, level });
  }

  return items;
}

function nlToHtml(raw: string) {
  const text = raw.replace(/\r\n/g, "\n").trim();

  const paras = text
    .split("\n\n") // paragraph delimiter
    .map((p) => p.trim())
    .filter(Boolean);

  return `
    <div class="blog-content">
      ${paras.map((p) => `<p>${p.split("\n").join("<br />")}</p>`).join("")}
    </div>
  `;
}

// ============= SUB-COMPONENTS =============

function TagChip({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium border border-[#747474]">
      {tag}
    </span>
  );
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

function TableOfContents({
  items,
  activeId,
}: {
  items: TocItem[];
  activeId: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm transition-colors pl-3 border-l-2 ${
              activeId === item.id
                ? "text-[#118fdd] border-[#118fdd] font-medium"
                : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
            } ${item.level === 3 ? "ml-3" : ""}`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

function AuthorBox() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Author</h3>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <div>
          <p className="font-medium text-gray-900">Sagar Anisingaraju</p>
          <p className="text-sm text-gray-500">CEO Lipi Inc</p>
        </div>
      </div>
    </div>
  );
}

function ShareBox({ title, url }: { title: string; url: string }) {
  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      "_blank"
    );
  };
  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };
  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Share this Blog
      </h3>
      <div className="flex gap-3">
        <button
          onClick={shareWhatsApp}
          className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="Share on WhatsApp"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
        <button
          onClick={shareFacebook}
          className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="Share on Facebook"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button
          onClick={shareLinkedIn}
          className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

function ReadMoreCard({ blog }: { blog: Blog }) {
  return (
    <Link to={`/blogs/${blog.slug}`} className="block group">
      <article className="bg-[#FFEDED] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="aspect-[16/10] overflow-hidden">
          {blog.imageUrl ? (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            <CategoryChip category={blog.category} />
            <ReadTimeChip readTime={blog.readTime} />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-[#118fdd] transition-colors">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{blog.author}</p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
            {blog.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

function ReadMoreSection({ currentSlug }: { currentSlug: string }) {
  const moreBlogs = getMoreBlogs(currentSlug, 4);

  if (moreBlogs.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Read More Blogs
          </h2>
          <Link
            to="/blogs"
            className="inline-flex items-center px-5 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreBlogs.map((blog) => (
            <ReadMoreCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#e8f4fc] rounded-3xl py-12 px-6 md:px-12 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Ready To Begin Your Mahabharata Learning Journey?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Download Lipi Epics & Word Games, The Interactive Mahabharata
            Learning App That Combines Storytelling And Fun Word Games. Explore
            Ancient Wisdom Through Engaging Stories, Quizzes, And Language
            Learning Tools Available In English And Indian Languages.
          </p>

          {/* Device mockup images */}
          <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 mb-8 px-2">
            <img
              src="/Assets/Images/phone.png"
              alt="Lipi app on phone"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
            <img
              src="/Assets/Images/tab.png"
              alt="Lipi app on tablet"
              className="w-40 sm:w-52 md:w-72 lg:w-96 h-auto object-contain"
            />
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Join Thousands Of Learners Worldwide In Making The Mahabharata
            Accessible, Engaging, And Unforgettable. Start Your Journey Today —
            Available Now On iOS And Android.
          </p>

          {/* App store badges placeholder */}
          {/* NOTE: Place badges at /public/cta/app-store-badge.svg and /public/cta/google-play-badge.svg */}
          <div className="flex justify-center gap-4">
            <a
              href="https://apps.apple.com/us/developer/lipi-inc/id1772086567"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 bg-black rounded-lg flex items-center justify-center text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=6433036785319466025&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 bg-black rounded-lg flex items-center justify-center text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= MAIN COMPONENT =============

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("");

  const blog = slug ? getBlogBySlug(slug) : undefined;

  useSEO({
    title: blog ? `${blog.title} | Lipi Games Blog` : "Blog | Lipi Games",
    description: blog?.excerpt || "Read the latest from Lipi Games.",
    canonical: blog
      ? `${window.location.origin}/blogs/${blog.slug}`
      : undefined,
  });

  const processedContent = useMemo(() => {
    if (!blog) return "";

    const raw = (blog.content || "").trim();

    // If content already has HTML tags, DO NOT run nlToHtml()
    const looksLikeHtml = /<\/?(div|p|h1|h2|h3|ul|ol|li|strong|em|a)\b/i.test(
      raw
    );

    const baseHtml = looksLikeHtml ? raw : nlToHtml(raw);

    return addIdsToHeadings(baseHtml);
  }, [blog]);

  const tocItems = useMemo(
    () => (processedContent ? extractToc(processedContent) : []),
    [processedContent]
  );

  // Track scroll position for TOC highlighting
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const headings = tocItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPos) {
          setActiveId(tocItems[i].id);
          return;
        }
      }
      if (tocItems.length > 0) {
        setActiveId(tocItems[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  if (!blog) {
    return (
      <main className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog not found
          </h1>
          <Link to="/blogs" className="text-[#ff7c2b] hover:underline">
            ← Back to blogs
          </Link>
        </div>
      </main>
    );
  }

  const displayTags = blog.tags?.slice(0, 4) || [
    "Lipi Epics & Word Games",
    "Cultural Heritage",
    "Indian Epics",
    "Word Games",
  ];

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Hero Header Card */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#f0e6fa] rounded-2xl p-8 md:p-12 text-center">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {displayTags.map((tag, idx) => (
              <TagChip key={idx} tag={tag} />
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {blog.title}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-6">
            {blog.excerpt}
          </p>

          {/* Author */}
          <p className="text-gray-700 font-medium mb-3">{blog.author}</p>

          {/* Meta row */}
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4" />
              {blog.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="lg:w-64 flex-shrink-0 space-y-6">
            <div className="lg:sticky lg:top-24 space-y-6">
              <TableOfContents items={tocItems} activeId={activeId} />
              <AuthorBox />
              <ShareBox title={blog.title} url={pageUrl} />
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div
              className="
                      bg-white rounded-2xl p-6 md:p-10 prose prose-gray max-w-none
                      prose-headings:font-bold prose-headings:text-gray-900
                      prose-a:text-[#ff7c2b] prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-gray-900
                      prose-ul:my-4 prose-ul:pl-5 prose-li:text-gray-600 prose-li:mb-2
                      prose-ol:my-4 prose-ol:pl-5

                      /* ✅ FORCE spacing rules inside blog-content (works even if prose-* fails) */
                      [&_.blog-content_h2]:!text-xl [&_.blog-content_h2]:!mt-10 [&_.blog-content_h2]:!mb-2
                      [&_.blog-content_h3]:!text-lg [&_.blog-content_h3]:!mt-8  [&_.blog-content_h3]:!mb-2

                      [&_.blog-content_p]:!text-gray-600
                      [&_.blog-content_p]:!leading-relaxed
                      [&_.blog-content_p]:!mb-2

                      /* ✅ Remove “newline after heading” by killing top margin on the paragraph after headings */
                      [&_.blog-content_h2+p]:!mt-0
                      [&_.blog-content_h3+p]:!mt-0
                    "
              style={{ fontFamily: "Satoshi, sans-serif" }}
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </article>
        </div>
      </div>

      {/* Read More Blogs Section */}
      <ReadMoreSection currentSlug={blog.slug} />

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
