import React from "react";

// ─────────────────────────────────────────────
// LOGO SVG — Ícono triangular de CheckCar
// ─────────────────────────────────────────────

export default function Logo() {
    return (
        <div
            style={{
                position: "relative",
                width: 32,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                <path
                    d="M4 30 L20 8 L36 30 Z"
                    stroke="var(--red)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinejoin="round"
                />
                <path
                    d="M11 30 L20 14 L29 30"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinejoin="round"
                    opacity="0.7"
                />
            </svg>
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <span className="logo-dot" />
            </div>
        </div>
    );
}
