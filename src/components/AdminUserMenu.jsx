import React from "react";

// ─────────────────────────────────────────────
// ADMIN USER MENU — Avatar + nombre + botón Salir
// ─────────────────────────────────────────────

export default function AdminUserMenu({ admin, logoutAdmin, navigate }) {
    const handleLogout = () => {
        logoutAdmin();
        navigate("/");
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                    {admin.name}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    Administrador
                </div>
            </div>

            {/* Avatar con inicial */}
            <div
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--red), var(--navy-light))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--head)",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: 16,
                }}
            >
                {admin.name.charAt(0).toUpperCase()}
            </div>

            <button
                className="btn-ghost"
                style={{ padding: "8px 14px", fontSize: 12 }}
                onClick={handleLogout}
            >
                Salir
            </button>
        </div>
    );
}
