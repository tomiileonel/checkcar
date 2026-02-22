import React from "react";
import { Phone, MessageSquare, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import Logo from "../Logo";

const servicesList = [
    "Diagnóstico Computarizado",
    "Mecánica General & Motor",
    "Alineación & Balanceo",
    "Electricidad Automotriz",
    "Sistema de Frenos",
    "Aire Acondicionado",
    "Revisión Técnico-Mecánica",
    "Transmisión & Caja",
];

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
];

const socials = [
    { icon: Instagram, label: "Instagram" },
    { icon: Facebook, label: "Facebook" },
    { icon: Youtube, label: "YouTube" },
];

export default function FooterSection() {
    const handleNav = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="ld-footer">
            <div className="ld-footer-grid">
                {/* Brand */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ transform: "scale(1.3)" }}>
                            <Logo />
                        </div>
                        <div>
                            <div style={{
                                fontFamily: "var(--head)",
                                fontWeight: 800,
                                fontSize: 20,
                                letterSpacing: 3,
                                color: "#fff",
                                lineHeight: 1,
                            }}>
                                CHECK<span style={{ color: "var(--ld-red)" }}>CAR</span>
                            </div>
                            <div style={{
                                fontFamily: "var(--mono)",
                                fontSize: 9,
                                color: "rgba(255,255,255,0.4)",
                                letterSpacing: 2,
                            }}>
                                MH · TALLER INTEGRAL
                            </div>
                        </div>
                    </div>
                    <p className="ld-footer-brand-desc">
                        Taller mecánico integral de alta gama. Desarrollado con 9 meses
                        de investigación de mercado para ofrecerte el mejor servicio
                        automotriz de Colombia.
                    </p>
                    <div className="ld-footer-socials">
                        {socials.map(({ icon: Icon, label }) => (
                            <a key={label} href="#" aria-label={label} className="ld-footer-social">
                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="ld-footer-col-title">Servicios</h4>
                    <ul className="ld-footer-list">
                        {servicesList.map((s) => (
                            <li key={s}>
                                <span className="ld-footer-list-item">
                                    <span className="ld-footer-list-dot" />
                                    {s}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="ld-footer-col-title">Navegación</h4>
                    <ul className="ld-footer-list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <button
                                    className="ld-footer-list-item"
                                    onClick={() => handleNav(link.href)}
                                >
                                    <span className="ld-footer-list-dot" />
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="ld-footer-col-title">Contacto</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <a href="tel:+573001234567" className="ld-footer-contact-item">
                            <Phone size={15} />
                            <div>
                                <div className="ld-footer-contact-value">+57 300 123 4567</div>
                                <div className="ld-footer-contact-sub">Lun - Sáb: 7am - 6pm</div>
                            </div>
                        </a>
                        <a href="https://wa.me/573001234567" className="ld-footer-contact-item">
                            <MessageSquare size={15} />
                            <div>
                                <div className="ld-footer-contact-value">WhatsApp Directo</div>
                                <div className="ld-footer-contact-sub">Respuesta inmediata</div>
                            </div>
                        </a>
                        <div className="ld-footer-contact-item">
                            <MapPin size={15} />
                            <div>
                                <div className="ld-footer-contact-value">Calle 45 #23-10</div>
                                <div className="ld-footer-contact-sub">Bogotá, Colombia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="ld-footer-bottom">
                <p className="ld-footer-copy">
                    © {new Date().getFullYear()} CheckCar. Todos los derechos reservados.
                </p>
                <div className="ld-footer-legal">
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Términos de Servicio</a>
                </div>
            </div>
        </footer>
    );
}
