import { Link, useLocation } from "react-router-dom";
import lipiLogo from "/Assets/lipi-logo.png";

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/#games", label: "Games" },
  { to: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const location = useLocation();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const targetId = to.replace("/#", "");
      
      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        window.location.href = to;
        return;
      }
      
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Use light navbar style on about page (grey bg with dark text like screenshot)
  const navBgClass = "bg-black/20 backdrop-blur-sm";
  
  const textClass = "text-white/80 hover:text-white";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBgClass}`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={lipiLogo} alt="Lipi Logo" className="h-7 md:h-8 w-7 md:w-8" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 md:gap-8">
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
      </div>
    </nav>
  );
}
