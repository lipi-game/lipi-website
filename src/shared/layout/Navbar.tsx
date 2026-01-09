import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import lipiLogo from "/Assets/lipi-logo.png";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const navLinks = [
  { to: "/#games", label: "Games" },
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About Us" },
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
  const textClass = `text-white/80 lg:text-lg hover:text-white relative inline-block text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#118FDD]
    after:scale-x-0 after:origin-left after:transition-transform after:duration-300
    [@media(hover:hover)]:hover:after:scale-x-100`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBgClass}`}>
      <div className="flex w-full items-center justify-between px-4 py-3 md:px-10 md:py-4 lg:py-3 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={lipiLogo}
            alt="Lipi Logo"
            className="h-10 w-10 mt-1 md:h-12 md:w-12 lg:w-14 lg:h-14 motion-safe:hover:animate-pulse motion-reduce:animate-none"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex flex-1 items-center justify-end gap-4 md:gap-8">
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
          className="md:hidden inline-flex items-center justify-center p-2 text-white/90 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-white" />
        </button>

        {/* Mobile Full-Screen Menu  */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="
              w-screen max-w-none h-[100dvh] p-0 border-none
              bg-[radial-gradient(ellipse_at_top,_rgba(8,16,40,1)_55%,_rgba(5,8,18,1)_100%)]
            "
          >
            <VisuallyHidden.Root>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden.Root>

            <div className="flex h-[100dvh] flex-col">
              {/* Top bar (ONLY close icon, ignore search) */}
              <div className="flex items-center justify-end px-6 pt-6">
                <SheetClose asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    <X className="h-7 w-7" />
                  </button>
                </SheetClose>
              </div>

              {/* Links (left aligned, dividers) */}
              <nav className="mt-6">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.label} className="border-b border-white/15">
                      <Link
                        to={link.to}
                        onClick={(e) => handleNavClick(e, link.to)}
                        className="flex items-center justify-between px-6 py-7 text-[28px] leading-none font-medium text-white"
                      >
                        <span>{link.label}</span>
                        {false ? (
                          <ChevronDown className="h-6 w-6 text-white/90" />
                        ) : (
                          <span className="h-6 w-6" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Keep bottom empty space like screenshot */}
              <div className="flex-1" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
