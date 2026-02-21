import React from "react";

// ─────────────────────────────────────────────
// KPI CARD — Tarjeta de indicador clave
// ─────────────────────────────────────────────

export default function KPICard({ label, value, sub, accent, icon, delay = "0s" }) {
    const accentColor = accent || "var(--accent)";

    return (
        <div className="kpi-card" style={{ animationDelay: delay }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                }}
            >
                <span
                    style={{
                        fontFamily: "var(--head)",
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                    }}
                >
                    {label}
                </span>
                {icon && (
                    <span style={{ fontSize: 20, opacity: 0.5 }}>{icon}</span>
                )}
            </div>
            <div
                style={{
                    fontFamily: "var(--head)",
                    fontWeight: 800,
                    fontSize: 32,
                    color: accentColor,
                    lineHeight: 1,
                    marginBottom: 4,
                }}
            >
                {value}
            </div>
            {sub && (
                <div
                    style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--text-muted)",
                        letterSpacing: 1,
                    }}
                >
                    {sub}
                </div>
            )}
        </div>
    );
}
