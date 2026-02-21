import React, { useState, useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import EditSlideover from "./EditSlideover";

// ─────────────────────────────────────────────
// DATA TABLE — Tabla de órdenes con filtros
// ─────────────────────────────────────────────

const STATUS_CONFIG = {
    pendiente: { label: "Pendiente", color: "var(--warn)" },
    en_reparacion: { label: "En Reparación", color: "var(--accent)" },
    listo: { label: "Listo", color: "var(--success)" },
};

export default function DataTable() {
    const { orders } = useAppContext();
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [editing, setEditing] = useState(null);

    const filtered = useMemo(() => {
        return orders.filter((o) => {
            const matchesStatus = filter === "all" || o.status === filter;
            const matchesSearch =
                !search ||
                o.owner.toLowerCase().includes(search.toLowerCase()) ||
                o.brand.toLowerCase().includes(search.toLowerCase()) ||
                o.id.toLowerCase().includes(search.toLowerCase());
            return matchesStatus && matchesSearch;
        });
    }, [orders, filter, search]);

    const formatCost = (cost) => {
        if (!cost) return "—";
        return `Gs. ${cost.toLocaleString("es-PY")}`;
    };

    return (
        <div>
            {/* Toolbar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                    flexWrap: "wrap",
                }}
            >
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {[
                        { id: "all", label: "Todas" },
                        ...Object.entries(STATUS_CONFIG).map(([id, cfg]) => ({ id, label: cfg.label })),
                    ].map((opt) => (
                        <button
                            key={opt.id}
                            className="btn-ghost"
                            onClick={() => setFilter(opt.id)}
                            style={{
                                borderColor: filter === opt.id ? "var(--accent)" : undefined,
                                color: filter === opt.id ? "var(--accent)" : undefined,
                            }}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
                <input
                    className="input-field"
                    placeholder="Buscar por nombre, marca o ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ maxWidth: 280 }}
                />
            </div>

            {/* Table */}
            <div className="card" style={{ padding: 0, overflow: "auto" }}>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Propietario</th>
                            <th>Vehículo</th>
                            <th>Estado</th>
                            <th>Costo</th>
                            <th>Ingreso</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={7} style={{ textAlign: "center", padding: 32, color: "var(--text-muted)" }}>
                                    No se encontraron órdenes.
                                </td>
                            </tr>
                        ) : (
                            filtered.map((order) => {
                                const st = STATUS_CONFIG[order.status] || {};
                                return (
                                    <tr key={order.id}>
                                        <td>
                                            <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>
                                                {order.id}
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ fontWeight: 600 }}>{order.owner}</div>
                                            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{order.phone}</div>
                                        </td>
                                        <td>
                                            {order.brand} {order.model} ({order.year})
                                        </td>
                                        <td>
                                            <span
                                                className="status-badge"
                                                style={{
                                                    background: `${st.color}18`,
                                                    border: `1px solid ${st.color}`,
                                                    color: st.color,
                                                }}
                                            >
                                                <span className="dot" style={{ background: st.color }} />
                                                {st.label}
                                            </span>
                                        </td>
                                        <td style={{ fontFamily: "var(--mono)", fontSize: 13 }}>
                                            {formatCost(order.cost)}
                                        </td>
                                        <td style={{ fontSize: 13, color: "var(--text-muted)" }}>
                                            {order.entryDate}
                                        </td>
                                        <td>
                                            <button
                                                className="btn-ghost"
                                                style={{ padding: "6px 12px", fontSize: 11 }}
                                                onClick={() => setEditing(order)}
                                            >
                                                Editar
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Slideover */}
            {editing && (
                <EditSlideover order={editing} onClose={() => setEditing(null)} />
            )}
        </div>
    );
}
