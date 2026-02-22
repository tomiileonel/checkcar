import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

// ─────────────────────────────────────────────
// PROTECTED ROUTE — Redirige a /login si no hay admin
// ─────────────────────────────────────────────

export default function ProtectedRoute({ children }) {
    const { admin, loading } = useAppContext();

    // Mientras se verifica el token, mostrar nada (evita flash de login)
    if (loading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
                color: "var(--text-muted)",
                fontFamily: "var(--mono)",
                fontSize: 14,
            }}>
                Verificando sesión...
            </div>
        );
    }

    if (!admin) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
