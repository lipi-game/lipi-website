import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "@/shared/layout/Navbar";
import { Footer } from "@/shared/layout/Footer";
import { HomePage } from "@/features/home";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop";
import { RouteLoading } from "@/shared/components/RouteLoading";

function ScrollToTop() {
  useScrollToTop();
  return null;
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

const FAQPage = lazy(() =>
  import("@/features/faq").then((m) => ({ default: m.FAQ })),
);

const GameDetailPage = lazy(() =>
  import("@/features/games").then((m) => ({ default: m.GameDetailPage })),
);

const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

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
              <Route path="/games/:gameId" element={<GameDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}