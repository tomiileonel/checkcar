import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

// ─────────────────────────────────────────────
// ADMIN INTAKE FORM — Formulario de ingreso (admin)
// ─────────────────────────────────────────────

const INITIAL_FORM = {
    owner: "",
    phone: "",
    brand: "",
    model: "",
    type: "auto",
    year: "",
    km: "",
    problem: "",
    estimatedExit: "",
    cost: "",
    status: "pendiente",
};

function validateAdminForm(form) {
    const errors = {};
    if (!form.owner.trim()) errors.owner = "Propietario requerido";
    if (!form.brand.trim()) errors.brand = "Marca requerida";
    if (!form.problem.trim()) errors.problem = "Descripción requerida";
    return errors;
}

export default function AdminIntakeForm() {
    const { addOrder, notify } = useAppContext();
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateAdminForm(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            notify("Complete los campos obligatorios.", "error");
            return;
        }

        addOrder({
            ...form,
            year: Number(form.year) || 0,
            km: Number(form.km) || 0,
            cost: Number(form.cost) || 0,
            source: "admin",
            exitDate: null,
        });

        setForm(INITIAL_FORM);
        setErrors({});
        notify("Orden creada exitosamente");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="card"
            style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}
        >
            <div
                style={{
                    fontFamily: "var(--head)",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 4,
                }}
            >
                + Nueva Orden
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                    <input
                        id="ai-owner"
                        className="input-field"
                        placeholder="Propietario *"
                        value={form.owner}
                        onChange={(e) => handleChange("owner", e.target.value)}
                        aria-invalid={errors.owner ? true : undefined}
                    />
                    {errors.owner && <div className="field-error">{errors.owner}</div>}
                </div>
                <input
                    className="input-field"
                    placeholder="Teléfono"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                <div>
                    <input
                        id="ai-brand"
                        className="input-field"
                        placeholder="Marca *"
                        value={form.brand}
                        onChange={(e) => handleChange("brand", e.target.value)}
                        aria-invalid={errors.brand ? true : undefined}
                    />
                    {errors.brand && <div className="field-error">{errors.brand}</div>}
                </div>
                <input
                    className="input-field"
                    placeholder="Modelo"
                    value={form.model}
                    onChange={(e) => handleChange("model", e.target.value)}
                />
                <select
                    className="input-field"
                    value={form.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                >
                    <option value="auto">Auto</option>
                    <option value="camioneta">Camioneta</option>
                    <option value="moto">Moto</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
                <input className="input-field" type="number" placeholder="Año" value={form.year} onChange={(e) => handleChange("year", e.target.value)} />
                <input className="input-field" type="number" placeholder="Km" value={form.km} onChange={(e) => handleChange("km", e.target.value)} />
                <input className="input-field" type="date" placeholder="Salida est." value={form.estimatedExit} onChange={(e) => handleChange("estimatedExit", e.target.value)} />
                <input className="input-field" type="number" placeholder="Costo Gs." value={form.cost} onChange={(e) => handleChange("cost", e.target.value)} />
            </div>

            <div>
                <textarea
                    id="ai-problem"
                    className="input-field"
                    placeholder="Descripción del problema *"
                    value={form.problem}
                    onChange={(e) => handleChange("problem", e.target.value)}
                    rows={3}
                    aria-invalid={errors.problem ? true : undefined}
                />
                {errors.problem && <div className="field-error">{errors.problem}</div>}
            </div>

            <button className="btn-navy" type="submit" style={{ alignSelf: "flex-start" }}>
                Crear Orden
            </button>
        </form>
    );
}
