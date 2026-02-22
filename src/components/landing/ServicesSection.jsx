import React from "react";
import {
    Cpu, Zap, Wrench, Droplets,
    RotateCcw, Wind, ShieldCheck, Settings,
} from "lucide-react";

const services = [
    {
        icon: Cpu,
        title: "Diagnóstico Computarizado",
        desc: "Escáner electrónico avanzado OBD-II con reporte digital completo para identificar fallas con precisión milimétrica.",
        tag: "Premium",
        img: "https://images.unsplash.com/photo-1625465588028-458f59e19ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZWxlY3RyaWNhbCUyMHN5c3RlbSUyMHNjYW5uZXJ8ZW58MXx8fHwxNzcxNzA2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
        icon: Wrench,
        title: "Mecánica General & Motor",
        desc: "Mantenimiento preventivo y correctivo, sincronización de motor, distribución y overhaul con repuestos originales.",
        tag: "Integral",
        img: "https://images.unsplash.com/photo-1555140713-973b9f36cd1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zdGljJTIwcHJvZmVzc2lvbmFsJTIwbWVjaGFuaWN8ZW58MXx8fHwxNzcxNzA2NzkxfDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
        icon: RotateCcw,
        title: "Alineación & Balanceo",
        desc: "Sistema 3D de cuatro ruedas con tecnología láser para una conducción segura y uniforme, alargando la vida de las llantas.",
        tag: "Tecnología 3D",
        img: "https://images.unsplash.com/photo-1745239651577-d74076914d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsaWdubWVudCUyMHRpcmUlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MTcwNjc5NXww&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
        icon: Zap,
        title: "Electricidad Automotriz",
        desc: "Diagnóstico y reparación de sistemas eléctricos, alternadores, motores de arranque, instalación de accesorios.",
        tag: "Especializado",
        img: null,
    },
    {
        icon: Droplets,
        title: "Sistema de Frenos",
        desc: "Revisión completa del sistema de frenado, discos, pastillas, líquido de frenos y cilindros maestros con garantía.",
        tag: "Seguridad",
        img: null,
    },
    {
        icon: Wind,
        title: "Aire Acondicionado",
        desc: "Recarga de gas refrigerante, reparación de compresores, limpieza de evaporadores para óptimo confort climático.",
        tag: "Confort",
        img: null,
    },
    {
        icon: ShieldCheck,
        title: "Revisión Técnico-Mecánica",
        desc: "Preparación y pre-inspección para RTM, chequeo de 50 puntos de seguridad con informe técnico detallado.",
        tag: "Certificación",
        img: null,
    },
    {
        icon: Settings,
        title: "Transmisión & Caja",
        desc: "Mantenimiento de cajas automáticas, mecánicas y CVT. Cambio de aceite diferencial y reparación de acoplamientos.",
        tag: "Avanzado",
        img: null,
    },
];

const tagColors = {
    Premium: { bg: "rgba(234,179,8,0.15)", color: "#facc15", border: "rgba(234,179,8,0.3)" },
    Integral: { bg: "rgba(59,130,246,0.15)", color: "#60a5fa", border: "rgba(59,130,246,0.3)" },
    "Tecnología 3D": { bg: "rgba(168,85,247,0.15)", color: "#c084fc", border: "rgba(168,85,247,0.3)" },
    Especializado: { bg: "rgba(249,115,22,0.15)", color: "#fb923c", border: "rgba(249,115,22,0.3)" },
    Seguridad: { bg: "rgba(239,68,68,0.15)", color: "#f87171", border: "rgba(239,68,68,0.3)" },
    Confort: { bg: "rgba(20,184,166,0.15)", color: "#2dd4bf", border: "rgba(20,184,166,0.3)" },
    Certificación: { bg: "rgba(34,197,94,0.15)", color: "#4ade80", border: "rgba(34,197,94,0.3)" },
    Avanzado: { bg: "rgba(99,102,241,0.15)", color: "#818cf8", border: "rgba(99,102,241,0.3)" },
};

export default function ServicesSection() {
    return (
        <section id="servicios" className="ld-section" style={{ background: "var(--ld-dark)" }}>
            <div className="ld-section-inner">
                {/* Header */}
                <div className="ld-section-header">
                    <div className="ld-section-tag">
                        <div className="ld-section-tag-line" />
                        <span className="ld-section-tag-text">Nuestros Servicios</span>
                        <div className="ld-section-tag-line" />
                    </div>
                    <h2 className="ld-section-title">
                        Soluciones Automotrices <span>Integrales</span>
                    </h2>
                    <p className="ld-section-subtitle">
                        Contamos con tecnología de punta y técnicos certificados para
                        ofrecer el más alto estándar de servicio automotriz.
                    </p>
                </div>

                {/* Grid */}
                <div className="ld-services-grid">
                    {services.map((service) => {
                        const Icon = service.icon;
                        const tc = tagColors[service.tag];
                        return (
                            <div key={service.title} className="ld-service-card">
                                {service.img && (
                                    <div className="ld-service-card-img">
                                        <img src={service.img} alt={service.title} />
                                        <div className="ld-service-card-img-overlay" />
                                    </div>
                                )}
                                <div className="ld-service-card-body">
                                    <div className={`ld-service-icon${service.img ? " has-img" : ""}`}>
                                        <Icon size={20} />
                                    </div>
                                    <span
                                        className="ld-service-tag"
                                        style={{
                                            background: tc.bg,
                                            color: tc.color,
                                            borderColor: tc.border,
                                        }}
                                    >
                                        {service.tag}
                                    </span>
                                    <h3 className="ld-service-title">{service.title}</h3>
                                    <p className="ld-service-desc">{service.desc}</p>
                                    <div className="ld-service-arrow">
                                        <span>Saber más</span>
                                        <span>→</span>
                                    </div>
                                </div>
                                <div className="ld-service-card-line" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
