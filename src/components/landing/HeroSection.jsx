import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Clock, Award, ChevronDown, Car, UserCog } from "lucide-react";

const heroBg =
    "https://images.unsplash.com/photo-1766246099181-2055091f8721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdXRvbW90aXZlJTIwd29ya3Nob3AlMjBnYXJhZ2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNzA2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const badges = [
    { icon: Shield, text: "Garantía certificada" },
    { icon: Clock, text: "Entrega puntual" },
    { icon: Award, text: "9 meses de I+D" },
];

export default function HeroSection() {
    const navigate = useNavigate();

    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="inicio" className="ld-hero">
            {/* Background */}
            <div className="ld-hero-bg">
                <img src={heroBg} alt="CheckCar Workshop" />
                <div className="ld-hero-overlay-1" />
                <div className="ld-hero-overlay-2" />
            </div>
            <div className="ld-hero-grid" />
            <div className="ld-hero-accent-line" />

            {/* Content */}
            <div className="ld-hero-content">
                <div className="ld-hero-inner">
                    {/* Tag */}
                    <div className="ld-hero-tag">
                        <div className="ld-hero-tag-line" />
                        <span className="ld-hero-tag-text">Taller Mecánico Integral</span>
                    </div>

                    {/* Title */}
                    <h1 className="ld-hero-title">
                        Ingeniería de <span>Precisión</span>
                        <br />
                        para tu Vehículo
                    </h1>

                    {/* Subtitle */}
                    <p className="ld-hero-subtitle">
                        Más de 9 meses de investigación de mercado nos permiten ofrecer un
                        servicio automotriz integral de alta gama, diseñado para maximizar
                        la vida útil de tu vehículo y tu tranquilidad.
                    </p>

                    {/* Badges */}
                    <div className="ld-hero-badges">
                        {badges.map(({ icon: Icon, text }) => (
                            <div key={text} className="ld-hero-badge">
                                <Icon size={14} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs — Soy Cliente / Soy Admin */}
                    <div className="ld-hero-ctas">
                        <button
                            className="ld-hero-cta-primary"
                            onClick={() => navigate("/cliente/solicitud")}
                        >
                            <Car size={18} />
                            Soy Cliente
                        </button>
                        <button
                            className="ld-hero-cta-secondary"
                            onClick={() => navigate("/login")}
                        >
                            <UserCog size={18} />
                            Soy Admin
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="ld-scroll-indicator" onClick={() => scrollTo("#stats")}>
                <span>Scroll</span>
                <ChevronDown size={20} />
            </div>
        </section>
    );
}
