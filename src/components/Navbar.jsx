import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="navbar"
    >
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleNavClick}>
          <motion.div
            className="navbar__logo"
            whileHover={{ scale: 1.08, rotate: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            N
          </motion.div>

          <div className="navbar__name">
            <span>NEXORA</span>
            <small>DIGITAL DESIGNS</small>
          </div>
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          <span>Let's Talk</span>
          <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="navbar__menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navbar__mobile-link"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="navbar__mobile-cta"
              onClick={handleNavClick}
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
