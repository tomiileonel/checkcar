import React, { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// TOAST — Notificación flotante con auto-dismiss
// ─────────────────────────────────────────────

export default function Toast({ message, type = "success", onClose }) {
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLeaving(true);
            setTimeout(onClose, 300);
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const isError = type === "error";
    const iconColor = isError ? "var(--red)" : "var(--success)";

    return (
        <div className={`toast${isError ? " error" : ""}${leaving ? " out" : ""}`}>
            <div
                style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: `${iconColor}18`,
                    border: `1px solid ${iconColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: iconColor,
                    fontWeight: 700,
                    fontSize: 14,
                    flexShrink: 0,
                }}
            >
                {isError ? "✕" : "✓"}
            </div>
            <div>
                <div
                    style={{
                        fontFamily: "var(--head)",
                        fontWeight: 700,
                        fontSize: 14,
                        letterSpacing: 1,
                        color: "var(--text)",
                    }}
                >
                    {isError ? "Error" : "¡Éxito!"}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>
                    {message}
                </div>
            </div>
        </div>
    );
}
