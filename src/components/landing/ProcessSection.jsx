import React from "react";
import { Calendar, Search, ClipboardList, Wrench, CheckCircle, MessageSquare } from "lucide-react";

const steps = [
    {
        icon: Calendar, step: "01", title: "Agenda tu Cita",
        desc: "Reserva en línea o por WhatsApp en menos de 2 minutos. Sin esperas, sin filas. Escoge el horario que más te convenga.",
    },
    {
        icon: Search, step: "02", title: "Diagnóstico Completo",
        desc: "Nuestro equipo realiza un diagnóstico computarizado de 50 puntos con escáner OBD-II y revisión visual documentada.",
    },
    {
        icon: ClipboardList, step: "03", title: "Cotización Transparente",
        desc: "Recibes un informe digital con fotos, descripción del problema y cotización detallada. Tú apruebas antes de que empecemos.",
    },
    {
        icon: Wrench, step: "04", title: "Intervención Técnica",
        desc: "Técnicos certificados ejecutan el servicio con repuestos originales. Seguimiento en tiempo real vía app o WhatsApp.",
    },
    {
        icon: CheckCircle, step: "05", title: "Control de Calidad",
        desc: "Prueba dinámica post-servicio y revisión final por el jefe técnico. Tu vehículo solo sale cuando cumple los estándares.",
    },
    {
        icon: MessageSquare, step: "06", title: "Seguimiento Post-Servicio",
        desc: "A los 3, 7 y 30 días te contactamos para verificar el funcionamiento. Tu satisfacción es nuestra garantía.",
    },
];

export default function ProcessSection() {
    return (
        <section id="proceso" className="ld-section" style={{ background: "var(--ld-dark)" }}>
            <div className="ld-section-inner">
                <div className="ld-section-header">
                    <div className="ld-section-tag">
                        <div className="ld-section-tag-line" />
                        <span className="ld-section-tag-text">Nuestro Proceso</span>
                        <div className="ld-section-tag-line" />
                    </div>
                    <h2 className="ld-section-title">
                        6 Pasos hacia la <span>Excelencia Mecánica</span>
                    </h2>
                    <p className="ld-section-subtitle">
                        Un proceso estructurado y transparente que elimina la incertidumbre
                        y te devuelve el control total sobre el estado de tu vehículo.
                    </p>
                </div>

                <div className="ld-process-grid">
                    {steps.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div key={s.step} className="ld-process-card">
                                <div className="ld-process-card-watermark">{s.step}</div>
                                <div className="ld-process-icon">
                                    <Icon size={22} />
                                </div>
                                <div className="ld-process-step-label">Paso {s.step}</div>
                                <h3 className="ld-process-title">{s.title}</h3>
                                <p className="ld-process-desc">{s.desc}</p>
                                <div className="ld-process-card-line" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
