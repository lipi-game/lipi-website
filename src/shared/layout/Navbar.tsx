import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import lipiLogo from "/Assets/lipi-logo.png";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/#games", label: "Games" },
  { to: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string
  ) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const targetId = to.replace("/#", "");

      // Close menu first
      setIsOpen(false);

      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        window.location.href = to;
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Close menu on regular navigation
      setIsOpen(false);
    }
  };

  const isActiveLink = (to: string) => {
    if (to.startsWith("/#")) {
      return location.pathname === "/" && location.hash === to.replace("/", "");
    }
    return location.pathname === to;
  };

  const navBgClass = "bg-black/20 backdrop-blur-sm";
  const textClass = "text-white/80 hover:text-white";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBgClass}`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={lipiLogo}
            alt="Lipi Logo"
            className="h-7 md:h-8 w-7 md:w-8"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`text-xs md:text-sm font-medium transition-all duration-200 ${textClass}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-white" />
        </button>

        {/* Mobile Full-Screen Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-screen max-w-none h-screen bg-[#118fdd]/95 backdrop-blur-md border-none p-0"
          >
            <VisuallyHidden.Root>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden.Root>

            {/* Menu Header */}
            <div className="flex items-center justify-between px-5 py-4">
              {/* Logo */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <img src={lipiLogo} alt="Lipi Logo" className="h-7 w-7" />
              </Link>

              {/* Close Button */}
              <SheetClose asChild>
                <button
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </SheetClose>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`text-2xl font-medium transition-all duration-300 ${
                    isActiveLink(link.to)
                      ? "text-white underline underline-offset-8"
                      : "text-white/70 hover:text-white hover:translate-x-1"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
