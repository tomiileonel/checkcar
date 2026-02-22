import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

// ─────────────────────────────────────────────
// ADMIN LOGIN — Formulario de inicio de sesión
// ─────────────────────────────────────────────

export default function AdminLogin() {
    const { loginAdmin, notify } = useAppContext();
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.trim() || !pass.trim()) {
            setError("Complete ambos campos");
            return;
        }

        setLoading(true);
        setError("");

        try {
            await loginAdmin(user.trim(), pass);
            notify("Sesión iniciada correctamente");
            navigate("/admin/dashboard");
        } catch (err) {
            setError(err.message || "Credenciales incorrectas");
            notify("Credenciales incorrectas", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "80px auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
                <h1
                    style={{
                        fontFamily: "var(--head)",
                        fontWeight: 800,
                        fontSize: 28,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                    }}
                >
                    ACCESO <span style={{ color: "var(--red)" }}>ADMIN</span>
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>
                    Ingrese su nombre de usuario y la contraseña de admin
                </p>
            </div>

            <form onSubmit={handleSubmit} className="card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                    <label
                        style={{
                            display: "block",
                            fontFamily: "var(--head)",
                            fontWeight: 600,
                            fontSize: 11,
                            letterSpacing: 1.5,
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                            marginBottom: 6,
                        }}
                    >
                        Nombre de usuario
                    </label>
                    <input
                        className="input-field"
                        placeholder="Ej: Juan, María, Carlos..."
                        value={user}
                        onChange={(e) => { setUser(e.target.value); setError(""); }}
                    />
                </div>

                <div>
                    <label
                        style={{
                            display: "block",
                            fontFamily: "var(--head)",
                            fontWeight: 600,
                            fontSize: 11,
                            letterSpacing: 1.5,
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                            marginBottom: 6,
                        }}
                    >
                        Contraseña
                    </label>
                    <input
                        className="input-field"
                        type="password"
                        placeholder="••••••••"
                        value={pass}
                        onChange={(e) => { setPass(e.target.value); setError(""); }}
                    />
                </div>

                {error && (
                    <div
                        style={{
                            padding: "10px 14px",
                            borderRadius: "var(--radius-sm)",
                            background: "rgba(230,57,70,0.1)",
                            border: "1px solid var(--red)",
                            color: "var(--red)",
                            fontSize: 13,
                        }}
                    >
                        {error}
                    </div>
                )}

                <button className="btn-red" type="submit" style={{ width: "100%" }} disabled={loading}>
                    {loading ? "Iniciando..." : "Iniciar Sesión"}
                </button>
            </form>
        </div>
    );
}
