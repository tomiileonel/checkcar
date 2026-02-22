import React from "react";
import { ArrowRight, Phone } from "lucide-react";

const customerImg =
    "https://images.unsplash.com/photo-1538575207325-5a2505373ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpc2ZpZWQlMjBjdXN0b21lciUyMGNhciUyMGRlYWxlcnNoaXB8ZW58MXx8fHwxNzcxNzA2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export default function CTABannerSection() {
    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="ld-cta-banner">
            <div className="ld-cta-banner-bg">
                <img src={customerImg} alt="Cliente satisfecho" />
                <div className="ld-cta-banner-overlay" />
                <div className="ld-cta-banner-gradient" />
            </div>
            <div className="ld-cta-banner-bar" />

            <div className="ld-cta-banner-content">
                <div className="ld-cta-banner-inner">
                    <p className="ld-cta-banner-tag">Oferta de Lanzamiento</p>
                    <h2 className="ld-cta-banner-title">
                        Diagnóstico Computarizado <span>100% Gratis</span>
                        <br />
                        por tiempo limitado
                    </h2>
                    <p className="ld-cta-banner-desc">
                        Trae tu vehículo hoy y descubre el estado real de tu auto con
                        nuestro escáner OBD-II profesional. Sin costos ocultos,
                        sin compromisos. Solo conocimiento.
                    </p>
                    <div className="ld-cta-banner-actions">
                        <button
                            className="ld-hero-cta-primary"
                            onClick={() => scrollTo("#contacto")}
                        >
                            Agendar Ahora
                            <ArrowRight size={16} />
                        </button>
                        <a
                            href="tel:+573001234567"
                            className="ld-hero-cta-secondary"
                            style={{ textDecoration: "none" }}
                        >
                            <Phone size={15} />
                            Llamar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
