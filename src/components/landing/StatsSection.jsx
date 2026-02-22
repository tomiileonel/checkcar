import React, { useState, useEffect, useRef } from "react";

const stats = [
    { value: 5000, suffix: "+", label: "Vehículos Atendidos", desc: "Desde nuestra apertura" },
    { value: 98, suffix: "%", label: "Clientes Satisfechos", desc: "Tasa de retención anual" },
    { value: 9, suffix: " meses", label: "Investigación I+D", desc: "De análisis de mercado" },
    { value: 15, suffix: "+", label: "Técnicos Certificados", desc: "Especializados por área" },
];

function Counter({ target, suffix }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [started, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section id="stats" className="ld-stats">
            <div className="ld-stats-grid">
                {stats.map((stat) => (
                    <div key={stat.label} className="ld-stat-item">
                        <div className="ld-stat-value">
                            <Counter target={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="ld-stat-label">{stat.label}</div>
                        <div className="ld-stat-desc">{stat.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
