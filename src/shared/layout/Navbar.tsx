import { NavLink } from "@/components/NavLink";
import { Gamepad2 } from "lucide-react";
import lipiLogo from "@/assets/lipi-logo.png";

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/games", label: "Games" },
  { to: "/contact", label: "Contact Us" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-white">
        <img src={lipiLogo} alt="Lipi Logo" className="h-8 w-8" />
          {/* <Gamepad2 className="h-7 w-7" /> */}
          {/* <span className="text-xl font-semibold tracking-tight">Lipi</span> */}
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="text-white/80 text-sm font-medium transition-all duration-200 hover:text-white"
                activeClassName="text-white underline underline-offset-4"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
