import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

// ─────────────────────────────────────────────
// ADMIN LOGIN — Formulario de inicio de sesión
// ─────────────────────────────────────────────

const ADMIN_CREDENTIALS = { user: "admin", pass: "mh1234" };

export default function AdminLogin() {
    const { setAdmin, setView, notify } = useAppContext();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === ADMIN_CREDENTIALS.user && pass === ADMIN_CREDENTIALS.pass) {
            setAdmin({ name: "Administrador", role: "admin" });
            setView("admin");
            notify("Sesión iniciada correctamente");
        } else {
            setError("Credenciales incorrectas");
            notify("Credenciales incorrectas", "error");
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
                    Ingrese sus credenciales de administrador
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
                        Usuario
                    </label>
                    <input
                        className="input-field"
                        placeholder="admin"
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

                <button className="btn-red" type="submit" style={{ width: "100%" }}>
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
}
