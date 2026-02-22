import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Carlos Mendoza", role: "Ejecutivo Comercial", vehicle: "Toyota Fortuner 2022",
        rating: 5, initials: "CM", color: "#CC0000",
        text: "Llevé mi Fortuner por un ruido extraño en el motor. En CheckCar me hicieron un diagnóstico completo con videos del problema antes de tocar nada. La transparencia fue total. El trabajo quedó impecable y el seguimiento post-servicio es algo que nunca había recibido en ningún taller.",
    },
    {
        name: "Andrea Rojas", role: "Empresaria", vehicle: "BMW X3 2021",
        rating: 5, initials: "AR", color: "#1A1A5E",
        text: "Como mujer, siempre me habían aprovechado en talleres. En CheckCar me explicaron todo con detalle, me mostraron los repuestos que iban a cambiar y respetaron el presupuesto al centavo. Es el único taller donde voy con confianza. Mis amigas ya también son clientes.",
    },
    {
        name: "Jorge Patiño", role: "Conductor de Plataforma", vehicle: "Renault Logan 2019",
        rating: 5, initials: "JP", color: "#CC0000",
        text: "Mi carro es mi herramienta de trabajo. CheckCar entendió eso desde el primer momento. Me dieron prioridad, el servicio fue rápido y el precio justo. Llevo 6 meses como cliente fiel y recomendado a 4 compañeros más. El historial digital es genial para controlar los mantenimientos.",
    },
    {
        name: "María Fernanda Torres", role: "Médica", vehicle: "Chevrolet Captiva 2023",
        rating: 5, initials: "MT", color: "#1A1A5E",
        text: "El nivel de profesionalismo es increíble. Llegué con el aire acondicionado dañado antes de una guardia. Me recibieron sin cita, diagnosticaron el problema en 30 minutos y lo solucionaron en 2 horas. El equipo es muy amable y el taller está impecablemente limpio.",
    },
];

function StarRating({ rating }) {
    return (
        <div className="ld-testimonial-stars">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={i < rating ? "filled" : "empty"}
                />
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const t = testimonials[current];

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    return (
        <section id="testimonios" className="ld-section" style={{ background: "var(--ld-dark2)", overflow: "hidden" }}>
            <div className="ld-section-inner">
                <div className="ld-section-header">
                    <div className="ld-section-tag">
                        <div className="ld-section-tag-line" />
                        <span className="ld-section-tag-text">Testimonios</span>
                        <div className="ld-section-tag-line" />
                    </div>
                    <h2 className="ld-section-title">
                        Lo que dicen nuestros <span>clientes</span>
                    </h2>
                </div>

                {/* Main testimonial */}
                <div className="ld-testimonial-main">
                    <Quote size={80} className="ld-testimonial-quote-icon" />
                    <StarRating rating={t.rating} />
                    <p className="ld-testimonial-text">"{t.text}"</p>
                    <div className="ld-testimonial-author">
                        <div
                            className="ld-testimonial-avatar"
                            style={{ backgroundColor: t.color }}
                        >
                            {t.initials}
                        </div>
                        <div>
                            <div className="ld-testimonial-name">{t.name}</div>
                            <div className="ld-testimonial-role">{t.role}</div>
                            <div className="ld-testimonial-vehicle">{t.vehicle}</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="ld-testimonial-nav">
                    <div className="ld-testimonial-dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`ld-testimonial-dot ${i === current ? "active" : "inactive"}`}
                                onClick={() => setCurrent(i)}
                            />
                        ))}
                    </div>
                    <div className="ld-testimonial-arrows">
                        <button className="ld-testimonial-arrow" onClick={prev}>
                            <ChevronLeft size={18} />
                        </button>
                        <button className="ld-testimonial-arrow" onClick={next}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Mini cards */}
                <div className="ld-testimonial-mini-grid">
                    {testimonials.map((t, i) => (
                        <button
                            key={i}
                            className={`ld-testimonial-mini ${i === current ? "active" : ""}`}
                            onClick={() => setCurrent(i)}
                        >
                            <div className="ld-testimonial-mini-author">
                                <div
                                    className="ld-testimonial-mini-avatar"
                                    style={{ backgroundColor: t.color }}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <div style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{t.name}</div>
                                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>{t.vehicle}</div>
                                </div>
                            </div>
                            <StarRating rating={t.rating} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
