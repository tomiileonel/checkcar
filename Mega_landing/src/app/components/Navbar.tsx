import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "figma:asset/29bab2bcba20f691b775934ed2e254663a5ae026.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A1E]/95 backdrop-blur-md shadow-2xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }}
              className="flex items-center gap-3"
            >
              <img
                src={logoImg}
                alt="CheckCar Logo"
                className="h-12 w-auto object-contain"
                style={{ filter: scrolled ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,0.6))" }}
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC0000] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Phone size={15} />
                <span>+57 300 123 4567</span>
              </a>
              <button
                onClick={() => handleNav("#contacto")}
                className="bg-[#CC0000] hover:bg-[#AA0000] text-white px-5 py-2.5 rounded text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40"
              >
                Agendar Cita
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0A0A1E] flex flex-col pt-24 px-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-white text-2xl py-4 border-b border-white/10 hover:text-[#CC0000] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleNav("#contacto")}
              className="mt-8 bg-[#CC0000] text-white px-8 py-4 rounded text-lg"
            >
              Agendar Cita
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
