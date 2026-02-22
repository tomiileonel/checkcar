import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import StatusToggle from "../components/StatusToggle";

// ─────────────────────────────────────────────
// EDIT SLIDEOVER — Panel lateral de edición
// ─────────────────────────────────────────────

export default function EditSlideover({ order, onClose }) {
    const { updateOrder, notify } = useAppContext();
    const [status, setStatus] = useState(order.status);
    const [cost, setCost] = useState(order.cost || 0);
    const [exitDate, setExitDate] = useState(order.exitDate || "");
    const [notes, setNotes] = useState(order.problem);
    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        try {
            await updateOrder(order.id, {
                status,
                cost: Number(cost),
                exitDate: exitDate || null,
                problem: notes,
            });
            notify(`Orden ${order.id} actualizada`);
            onClose();
        } catch (err) {
            notify("Error al actualizar la orden", "error");
        } finally {
            setSaving(false);
        }
    };

    return (
        <>
            <div className="slideover-backdrop" onClick={onClose} />
            <div className="slideover-panel">
                <div style={{ padding: 24 }}>
                    {/* Header */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 24,
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontFamily: "var(--mono)",
                                    fontSize: 12,
                                    color: "var(--accent)",
                                    marginBottom: 4,
                                }}
                            >
                                {order.id}
                            </div>
                            <h2
                                style={{
                                    fontFamily: "var(--head)",
                                    fontWeight: 800,
                                    fontSize: 22,
                                    letterSpacing: 2,
                                }}
                            >
                                EDITAR ORDEN
                            </h2>
                        </div>
                        <button
                            className="btn-ghost"
                            onClick={onClose}
                            style={{ padding: "8px 12px", fontSize: 16 }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Vehicle Info (read-only) */}
                    <div
                        className="card"
                        style={{
                            marginBottom: 20,
                            background: "var(--surface2)",
                            padding: 16,
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "var(--head)",
                                fontWeight: 700,
                                fontSize: 11,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                color: "var(--text-muted)",
                                marginBottom: 8,
                            }}
                        >
                            Vehículo
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 600 }}>
                            {order.brand} {order.model} ({order.year})
                        </div>
                        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                            {order.owner} · {order.phone}
                        </div>
                    </div>

                    {/* Editable Fields */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div>
                            <label style={labelStyle}>Estado</label>
                            <StatusToggle value={status} onChange={setStatus} />
                        </div>

                        <div>
                            <label style={labelStyle}>Costo (Gs.)</label>
                            <input
                                className="input-field"
                                type="number"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>Fecha de salida</label>
                            <input
                                className="input-field"
                                type="date"
                                value={exitDate}
                                onChange={(e) => setExitDate(e.target.value)}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>Notas / Problema</label>
                            <textarea
                                className="input-field"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                rows={4}
                            />
                        </div>

                        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                            <button className="btn-navy" onClick={handleSave} style={{ flex: 1 }} disabled={saving}>
                                {saving ? "Guardando..." : "Guardar Cambios"}
                            </button>
                            <button className="btn-ghost" onClick={onClose}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const labelStyle = {
    display: "block",
    fontFamily: "var(--head)",
    fontWeight: 600,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: 6,
};
