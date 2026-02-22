import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const carImg =
    "https://images.unsplash.com/photo-1752959827892-7e635d49a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWwlMjBjbG9zZSUyMHVwJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzE3MDY3OTJ8MA&ixlib=rb-4.1.0&q=80&w=800";

const contactInfo = [
    { icon: Phone, label: "Teléfono", value: "+57 300 123 4567", sub: "Lunes a Sábado 7am - 6pm", href: "tel:+573001234567" },
    { icon: MessageSquare, label: "WhatsApp", value: "+57 300 123 4567", sub: "Respuesta inmediata", href: "https://wa.me/573001234567" },
    { icon: MapPin, label: "Ubicación", value: "Calle 45 #23-10", sub: "Bogotá, Colombia", href: "#" },
    { icon: Clock, label: "Horario", value: "Lun - Sáb: 7am - 6pm", sub: "Dom: 8am - 2pm", href: "#" },
];

const serviceOptions = [
    "Diagnóstico Computarizado",
    "Mecánica General",
    "Alineación y Balanceo",
    "Electricidad Automotriz",
    "Sistema de Frenos",
    "Aire Acondicionado",
    "Revisión Técnico-Mecánica",
    "Otro",
];

export default function ContactSection() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        name: "", phone: "", email: "", service: "", vehicle: "", message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section id="contacto" className="ld-section" style={{ background: "var(--ld-dark)" }}>
            <div className="ld-section-inner">
                <div className="ld-section-header">
                    <div className="ld-section-tag">
                        <div className="ld-section-tag-line" />
                        <span className="ld-section-tag-text">Contáctanos</span>
                        <div className="ld-section-tag-line" />
                    </div>
                    <h2 className="ld-section-title">
                        Agenda tu <span>Diagnóstico Gratuito</span>
                    </h2>
                    <p className="ld-section-subtitle">
                        El primer diagnóstico computarizado es sin costo. Completa el
                        formulario y un asesor te contactará en menos de 30 minutos.
                    </p>
                </div>

                <div className="ld-contact-grid">
                    {/* Left: Info */}
                    <div>
                        <div className="ld-contact-img">
                            <img src={carImg} alt="Vehículo de lujo" />
                        </div>
                        <div className="ld-contact-info-grid">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a key={item.label} href={item.href} className="ld-contact-info-item">
                                        <div className="ld-contact-info-icon">
                                            <Icon size={16} />
                                        </div>
                                        <div className="ld-contact-info-label">{item.label}</div>
                                        <div className="ld-contact-info-value">{item.value}</div>
                                        <div className="ld-contact-info-sub">{item.sub}</div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="ld-contact-form-wrap">
                        {sent ? (
                            <div className="ld-contact-success">
                                <div className="ld-contact-success-icon">
                                    <CheckCircle size={32} />
                                </div>
                                <h3>¡Solicitud Enviada!</h3>
                                <p>
                                    Un asesor CheckCar se comunicará contigo en los próximos 30
                                    minutos para confirmar tu cita de diagnóstico gratuito.
                                </p>
                                <button onClick={() => setSent(false)}>
                                    Hacer otra solicitud
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="ld-contact-form">
                                <div className="ld-contact-form-row">
                                    <div>
                                        <label className="ld-contact-label">Nombre completo *</label>
                                        <input
                                            type="text" name="name" value={form.name}
                                            onChange={handleChange} required
                                            placeholder="Tu nombre"
                                            className="ld-contact-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="ld-contact-label">Teléfono / WhatsApp *</label>
                                        <input
                                            type="tel" name="phone" value={form.phone}
                                            onChange={handleChange} required
                                            placeholder="300 123 4567"
                                            className="ld-contact-input"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="ld-contact-label">Correo electrónico</label>
                                    <input
                                        type="email" name="email" value={form.email}
                                        onChange={handleChange}
                                        placeholder="tu@correo.com"
                                        className="ld-contact-input"
                                    />
                                </div>

                                <div>
                                    <label className="ld-contact-label">Vehículo (marca, modelo, año)</label>
                                    <input
                                        type="text" name="vehicle" value={form.vehicle}
                                        onChange={handleChange}
                                        placeholder="Ej: Toyota Corolla 2020"
                                        className="ld-contact-input"
                                    />
                                </div>

                                <div>
                                    <label className="ld-contact-label">Servicio requerido *</label>
                                    <select
                                        name="service" value={form.service}
                                        onChange={handleChange} required
                                        className="ld-contact-select"
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        {serviceOptions.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="ld-contact-label">Describe el problema (opcional)</label>
                                    <textarea
                                        name="message" value={form.message}
                                        onChange={handleChange} rows={3}
                                        placeholder="Cuéntanos qué está pasando con tu vehículo..."
                                        className="ld-contact-input ld-contact-textarea"
                                    />
                                </div>

                                <button type="submit" className="ld-contact-submit">
                                    <Send size={15} />
                                    Solicitar Diagnóstico Gratuito
                                </button>

                                <p className="ld-contact-disclaimer">
                                    Al enviar aceptas que un asesor te contacte. Sin spam, sin compromisos.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
