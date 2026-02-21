import React from "react";

// ─────────────────────────────────────────────
// STATUS TOGGLE — Selector de estado de orden
// ─────────────────────────────────────────────

const STATUS_OPTIONS = [
    { id: "pendiente", label: "Pendiente", color: "var(--warn)" },
    { id: "en_reparacion", label: "En Reparación", color: "var(--accent)" },
    { id: "listo", label: "Listo", color: "var(--success)" },
];

export default function StatusToggle({ value, onChange }) {
    return (
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {STATUS_OPTIONS.map((opt) => {
                const isActive = value === opt.id;
                return (
                    <button
                        key={opt.id}
                        onClick={() => onChange(opt.id)}
                        style={{
                            padding: "6px 12px",
                            borderRadius: 100,
                            cursor: "pointer",
                            fontFamily: "var(--head)",
                            fontWeight: 700,
                            fontSize: 11,
                            letterSpacing: 1.5,
                            textTransform: "uppercase",
                            transition: "all 0.2s",
                            background: isActive ? `${opt.color}22` : "transparent",
                            border: `1px solid ${isActive ? opt.color : "var(--border)"}`,
                            color: isActive ? opt.color : "var(--text-muted)",
                            boxShadow: isActive ? `0 0 12px ${opt.color}44` : "none",
                        }}
                    >
                        {opt.label}
                    </button>
                );
            })}
        </div>
    );
}
