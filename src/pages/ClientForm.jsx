import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { FormField, FormRow } from "../components/FormField";

// ─────────────────────────────────────────────
// CLIENT FORM — Formulario público de solicitud
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
};

function validateForm(form) {
    const errors = {};
    if (!form.owner.trim()) errors.owner = "Nombre requerido";
    if (!form.phone.trim()) errors.phone = "Teléfono requerido";
    if (!form.brand.trim()) errors.brand = "Marca requerida";
    if (!form.model.trim()) errors.model = "Modelo requerido";
    if (!form.year || form.year < 1980 || form.year > new Date().getFullYear() + 1)
        errors.year = "Año inválido";
    if (!form.problem.trim()) errors.problem = "Describa el problema";
    return errors;
}

export default function ClientForm() {
    const { addOrder, notify } = useAppContext();
    const navigate = useNavigate();
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            notify("Por favor, complete todos los campos requeridos.", "error");
            return;
        }

        setLoading(true);
        try {
            await addOrder({
                ...form,
                year: Number(form.year),
                km: Number(form.km) || 0,
                status: "pendiente",
                source: "client",
                cost: 0,
            });

            setForm(INITIAL_FORM);
            setErrors({});
            setSubmitted(true);
            notify("¡Solicitud enviada exitosamente!");
        } catch (err) {
            notify("Error al enviar la solicitud. Intente de nuevo.", "error");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div style={{ maxWidth: 600, margin: "80px auto", padding: "0 24px", textAlign: "center" }}>
                <div className="card" style={{ padding: 48 }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                    <h2
                        style={{
                            fontFamily: "var(--head)",
                            fontWeight: 800,
                            fontSize: 24,
                            letterSpacing: 2,
                            marginBottom: 8,
                        }}
                    >
                        ¡SOLICITUD RECIBIDA!
                    </h2>
                    <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
                        Nos pondremos en contacto con usted a la brevedad.
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                        <button className="btn-navy" onClick={() => setSubmitted(false)}>
                            Enviar otra solicitud
                        </button>
                        <button className="btn-ghost" onClick={() => navigate("/")}>
                            Volver al inicio
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: 640, margin: "40px auto", padding: "0 24px" }}>
            <div style={{ marginBottom: 32 }}>
                <h1
                    style={{
                        fontFamily: "var(--head)",
                        fontWeight: 800,
                        fontSize: 28,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                    }}
                >
                    Solicitar <span style={{ color: "var(--accent)" }}>Servicio</span>
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>
                    Complete el formulario y nos comunicaremos con usted.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <FormRow>
                    <FormField id="cf-owner" label="Nombre completo" error={errors.owner}>
                        <input
                            className="input-field"
                            placeholder="Ej: Juan Pérez"
                            value={form.owner}
                            onChange={(e) => handleChange("owner", e.target.value)}
                        />
                    </FormField>
                    <FormField id="cf-phone" label="Teléfono" error={errors.phone}>
                        <input
                            className="input-field"
                            placeholder="0981-123456"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />
                    </FormField>
                </FormRow>

                <FormRow>
                    <FormField id="cf-brand" label="Marca" error={errors.brand}>
                        <input
                            className="input-field"
                            placeholder="Ej: Toyota"
                            value={form.brand}
                            onChange={(e) => handleChange("brand", e.target.value)}
                        />
                    </FormField>
                    <FormField id="cf-model" label="Modelo" error={errors.model}>
                        <input
                            className="input-field"
                            placeholder="Ej: Hilux"
                            value={form.model}
                            onChange={(e) => handleChange("model", e.target.value)}
                        />
                    </FormField>
                </FormRow>

                <FormRow>
                    <FormField id="cf-type" label="Tipo">
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
                    </FormField>
                    <FormField id="cf-year" label="Año" error={errors.year}>
                        <input
                            className="input-field"
                            type="number"
                            placeholder="2020"
                            value={form.year}
                            onChange={(e) => handleChange("year", e.target.value)}
                        />
                    </FormField>
                    <FormField id="cf-km" label="Kilometraje">
                        <input
                            className="input-field"
                            type="number"
                            placeholder="85000"
                            value={form.km}
                            onChange={(e) => handleChange("km", e.target.value)}
                        />
                    </FormField>
                </FormRow>

                <FormField id="cf-problem" label="Descripción del problema" error={errors.problem}>
                    <textarea
                        className="input-field"
                        placeholder="Describa detalladamente el problema o servicio que necesita..."
                        value={form.problem}
                        onChange={(e) => handleChange("problem", e.target.value)}
                        rows={4}
                    />
                </FormField>

                <button className="btn-red" type="submit" style={{ width: "100%", marginTop: 8 }} disabled={loading}>
                    {loading ? "Enviando..." : "Enviar Solicitud"}
                </button>
            </form>
        </div>
    );
}
