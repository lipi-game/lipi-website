import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/shared/layout/Navbar";
import { HomePage } from "@/features/home";
import { BlogsPage } from "@/features/blog";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
