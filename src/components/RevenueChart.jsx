import React from "react";

// ─────────────────────────────────────────────
// REVENUE CHART — Gráfico de barras de ingresos
// ─────────────────────────────────────────────

export default function RevenueChart({ data }) {
    const entries = Object.values(data);
    const maxRevenue = Math.max(...entries.map((e) => e.revenue));

    return (
        <div className="card">
            <div
                style={{
                    fontFamily: "var(--head)",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 20,
                }}
            >
                Ingresos Mensuales
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 16, height: 160 }}>
                {entries.map((entry, i) => {
                    const heightPct = (entry.revenue / maxRevenue) * 100;
                    return (
                        <div
                            key={i}
                            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
                        >
                            <div
                                style={{
                                    fontFamily: "var(--mono)",
                                    fontSize: 11,
                                    color: "var(--accent)",
                                }}
                            >
                                {(entry.revenue / 1000000).toFixed(1)}M
                            </div>
                            <div
                                style={{
                                    width: "100%",
                                    maxWidth: 48,
                                    height: `${heightPct}%`,
                                    background: "linear-gradient(180deg, var(--accent), var(--navy))",
                                    borderRadius: "6px 6px 0 0",
                                    transition: "height 0.5s ease-out",
                                    minHeight: 8,
                                }}
                            />
                            <div
                                style={{
                                    fontFamily: "var(--head)",
                                    fontSize: 11,
                                    color: "var(--text-muted)",
                                    letterSpacing: 1,
                                }}
                            >
                                {entry.label}
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--mono)",
                                    fontSize: 10,
                                    color: "var(--text-muted)",
                                }}
                            >
                                {entry.orders} órdenes
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
