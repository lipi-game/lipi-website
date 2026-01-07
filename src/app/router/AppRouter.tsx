import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/shared/layout/Navbar";
import { Footer } from "@/shared/layout/Footer";
import { HomePage } from "@/features/home";
import { AboutPage } from "@/features/about";
import { BlogsPage, BlogDetailPage } from "@/features/blog";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop";

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
