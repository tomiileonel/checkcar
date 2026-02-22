import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Logo from "./Logo";
import AdminUserMenu from "./AdminUserMenu";

// ─────────────────────────────────────────────
// NAVBAR — Barra de navegación principal
// ─────────────────────────────────────────────

export default function Navbar() {
    const { admin, logoutAdmin } = useAppContext();
    const navigate = useNavigate();
    const location = useLocation();
    const isLanding = location.pathname === "/";

    return (
        <nav className="nav-bar">
            {/* Brand / Logo */}
            <div
                style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
                onClick={() => navigate("/")}
            >
                <Logo />
                <div>
                    <div
                        style={{
                            fontFamily: "var(--head)",
                            fontWeight: 800,
                            fontSize: 18,
                            letterSpacing: 3,
                            color: "#fff",
                            lineHeight: 1,
                        }}
                    >
                        CHECK<span style={{ color: "var(--accent)" }}>CAR</span>
                    </div>
                    <div
                        style={{
                            fontFamily: "var(--mono)",
                            fontSize: 9,
                            color: "var(--text-muted)",
                            letterSpacing: 2,
                        }}
                    >
                        MH · TALLER INTEGRAL
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {!isLanding && (
                    <button
                        className="btn-ghost"
                        style={{ padding: "8px 16px", fontSize: 12 }}
                        onClick={() => navigate("/")}
                    >
                        ← Volver al inicio
                    </button>
                )}

                {admin && (
                    <AdminUserMenu admin={admin} logoutAdmin={logoutAdmin} navigate={navigate} />
                )}

                {!admin && !isLanding && location.pathname !== "/login" && (
                    <button className="btn-navy" onClick={() => navigate("/login")}>
                        Admin ↗
                    </button>
                )}
            </div>
        </nav>
    );
}
