import { Link } from "react-router-dom";
import lipiLogo from "/Assets/lipi-logo.png";

const navLinks = [
  { to: "/#about", label: "About Us" },
  { to: "/#games", label: "Games" },
  { to: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const targetId = to.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white">
          <img src={lipiLogo} alt="Lipi Logo" className="h-8 w-8" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="text-white/80 text-sm font-medium transition-all duration-200 hover:text-white"
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
