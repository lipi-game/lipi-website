import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const lipiEpicsLinks = [
  { label: "Lipi Epics", href: "/games" },
  { label: "Lipi Kids", href: "/games" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "support@lipi.game", href: "mailto:support@lipi.game", external: true },
  { label: "+91 8977044710", href: "tel:+918977044710", external: true },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blogs" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1a1a1a]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-10 md:py-14">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Lipi Games</h3>
            <p className="text-[13px] leading-relaxed text-gray-400">
              Creating mobile games that combine ancient epics, word games with modern gameplay.
            </p>
            <p className="text-[13px] text-gray-400">
              3rd Floor, BBR Forum, Banjara Hills Road no 2, Hyderabad
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Lipi Epics Column */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Lipi Epics</h3>
            <ul className="space-y-2">
              {lipiEpicsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-gray-400 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">FAQ</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-[13px] text-gray-400 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-[13px] text-gray-400 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Privacy Policy</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-gray-400 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-700/50" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[13px] text-gray-400">
            © {currentYear} Lipi Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
