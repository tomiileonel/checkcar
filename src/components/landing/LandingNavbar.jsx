import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "../Logo";

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
];

export default function LandingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav className={`ld-navbar${scrolled ? " scrolled" : ""}`}>
                <div className="ld-navbar-inner">
                    <a
                        href="#inicio"
                        className="ld-navbar-logo"
                        onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }}
                    >
                        <Logo />
                        <div>
                            <div style={{
                                fontFamily: "var(--head)",
                                fontWeight: 800,
                                fontSize: 18,
                                letterSpacing: 3,
                                color: "#fff",
                                lineHeight: 1,
                            }}>
                                CHECK<span style={{ color: "var(--ld-red)" }}>CAR</span>
                            </div>
                            <div style={{
                                fontFamily: "var(--mono)",
                                fontSize: 9,
                                color: "rgba(255,255,255,0.5)",
                                letterSpacing: 2,
                            }}>
                                MH · TALLER INTEGRAL
                            </div>
                        </div>
                    </a>

                    <div className="ld-navbar-links">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                className="ld-navbar-link"
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="ld-navbar-actions">
                        <a href="tel:+573001234567" className="ld-navbar-phone">
                            <Phone size={15} />
                            <span>+57 300 123 4567</span>
                        </a>
                        <button
                            className="ld-btn-red"
                            onClick={() => handleNav("#contacto")}
                        >
                            Agendar Cita
                        </button>
                        <button
                            className="ld-mobile-toggle"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {mobileOpen && (
                <div className="ld-mobile-menu">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            className="ld-mobile-link"
                            onClick={() => handleNav(link.href)}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        className="ld-btn-red"
                        style={{ marginTop: 32, padding: "16px", fontSize: 16 }}
                        onClick={() => handleNav("#contacto")}
                    >
                        Agendar Cita
                    </button>
                </div>
            )}
        </>
    );
}
