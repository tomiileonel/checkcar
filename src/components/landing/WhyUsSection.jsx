import React from "react";
import { CheckCircle2, Star, Users, BarChart2 } from "lucide-react";

const mechanicImg =
    "https://images.unsplash.com/photo-1698998881125-b7b8f05a504b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjB0ZWNobmljaWFuJTIwd29ya2luZyUyMGNhciUyMGxpZnR8ZW58MXx8fHwxNzcxNzA2NzkyfDA&ixlib=rb-4.1.0&q=80&w=800";

const reasons = [
    {
        icon: CheckCircle2,
        title: "Diagnóstico Transparente",
        desc: "Reportes digitales con fotos y videos del estado real de tu vehículo antes y después de cada intervención.",
    },
    {
        icon: Star,
        title: "Repuestos Certificados",
        desc: "Trabajamos exclusivamente con repuestos originales y de primera línea con garantía documentada.",
    },
    {
        icon: Users,
        title: "Asesoría Personalizada",
        desc: "Cada cliente tiene un asesor dedicado que acompaña el proceso completo y resuelve inquietudes en tiempo real.",
    },
    {
        icon: BarChart2,
        title: "Historial Digital del Vehículo",
        desc: "Accede al historial de mantenimiento de tu auto desde tu celular. Saber es poder para tomar mejores decisiones.",
    },
];

export default function WhyUsSection() {
    return (
        <section id="nosotros" className="ld-section" style={{ background: "var(--ld-dark2)", overflow: "hidden" }}>
            <div className="ld-section-inner">
                <div className="ld-whyus-grid">
                    {/* Image Side */}
                    <div className="ld-whyus-img-wrap">
                        <div className="ld-whyus-img">
                            <img src={mechanicImg} alt="CheckCar técnico trabajando" />
                            <div className="ld-whyus-img-overlay" />
                        </div>

                        {/* Rating badge */}
                        <div className="ld-whyus-badge-rating">
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{
                                    width: 48, height: 48,
                                    background: "var(--ld-red)",
                                    borderRadius: 12,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0,
                                }}>
                                    <Star size={22} color="#fff" fill="#fff" />
                                </div>
                                <div>
                                    <div style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}>
                                        4.9/5
                                    </div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 2 }}>
                                        Google Reviews
                                    </div>
                                    <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={10} color="#facc15" fill="#facc15" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience badge */}
                        <div className="ld-whyus-badge-exp">
                            <div style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>I+D</div>
                            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 4 }}>Metodología</div>
                            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Certificada</div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="ld-section-tag">
                            <div className="ld-section-tag-line" />
                            <span className="ld-section-tag-text">¿Por qué CheckCar?</span>
                        </div>

                        <h2 className="ld-section-title" style={{ textAlign: "left" }}>
                            Un taller diseñado <span>para ti,</span> no para tu auto
                        </h2>

                        <p style={{
                            color: "rgba(255,255,255,0.55)",
                            marginBottom: 40,
                            lineHeight: 1.7,
                            fontSize: 15,
                        }}>
                            CheckCar nació de 9 meses de investigación profunda del
                            comportamiento del conductor colombiano. Entendemos que tu
                            vehículo es tu herramienta de trabajo y tranquilidad familiar.
                            Por eso, cada servicio está optimizado para darte certeza,
                            transparencia y resultados que duran.
                        </p>

                        <div className="ld-whyus-reasons">
                            {reasons.map((reason) => {
                                const Icon = reason.icon;
                                return (
                                    <div key={reason.title} className="ld-whyus-reason">
                                        <div className="ld-whyus-reason-icon">
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="ld-whyus-reason-title">{reason.title}</h4>
                                            <p className="ld-whyus-reason-desc">{reason.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
