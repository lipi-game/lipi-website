import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "@/shared/layout/Navbar";
import { Footer } from "@/shared/layout/Footer";
import { HomePage } from "@/features/home";
import NotFound from "@/pages/NotFound";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop";

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function RouteLoading() {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-2 border-[#118fdd]/25 border-t-[#118fdd] animate-spin" />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}


const AboutPage = lazy(() =>
  import("@/features/about").then((m) => ({ default: m.AboutPage })),
);

const BlogsPage = lazy(() =>
  import("@/features/blog").then((m) => ({ default: m.BlogsPage })),
);

const BlogDetailPage = lazy(() =>
  import("@/features/blog").then((m) => ({ default: m.BlogDetailPage })),
);

const ContactPage = lazy(() => import("@/pages/ContactPage"));

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}