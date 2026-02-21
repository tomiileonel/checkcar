import React from "react";
import { useAppContext } from "../context/AppContext";
import Logo from "../components/Logo";

// ─────────────────────────────────────────────
// LANDING PAGE — Pantalla de bienvenida
// ─────────────────────────────────────────────

export default function LandingPage() {
    const { setView } = useAppContext();

    return (
        <div style={styles.wrapper}>
            {/* Fondo decorativo */}
            <div style={styles.bgGlow} />
            <div style={styles.bgGlow2} />

            <div style={styles.container}>
                {/* Logo grande */}
                <div style={styles.logoBox}>
                    <div style={{ transform: "scale(2.2)" }}>
                        <Logo />
                    </div>
                </div>

                {/* Título */}
                <h1 style={styles.title}>
                    CHECK<span style={{ color: "var(--red)" }}>CAR</span>
                </h1>
                <p style={styles.subtitle}>
                    Sistema de gestión de órdenes de servicio automotriz
                </p>

                {/* Línea divisora */}
                <div style={styles.divider}>
                    <span style={styles.dividerDot} />
                </div>

                {/* Pregunta */}
                <p style={styles.question}>¿Cómo desea continuar?</p>

                {/* Botones */}
                <div style={styles.buttonGrid}>
                    {/* Botón Admin */}
                    <button
                        style={styles.roleCard}
                        className="landing-role-card"
                        onClick={() => setView("login")}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--red)";
                            e.currentTarget.style.boxShadow = "0 8px 40px rgba(230,57,70,0.2), inset 0 1px 0 rgba(230,57,70,0.1)";
                            e.currentTarget.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border2)";
                            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <div style={{ ...styles.roleIcon, background: "rgba(230,57,70,0.1)" }}>
                            🛡️
                        </div>
                        <div style={styles.roleTitle}>Soy Admin</div>
                        <div style={styles.roleDesc}>
                            Acceda al panel de gestión y control de órdenes
                        </div>
                        <div style={{ ...styles.roleArrow, color: "var(--red)" }}>→</div>
                    </button>

                    {/* Botón Cliente */}
                    <button
                        style={styles.roleCard}
                        className="landing-role-card"
                        onClick={() => setView("client")}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.boxShadow = "0 8px 40px rgba(79,195,247,0.2), inset 0 1px 0 rgba(79,195,247,0.1)";
                            e.currentTarget.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border2)";
                            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <div style={{ ...styles.roleIcon, background: "rgba(79,195,247,0.1)" }}>
                            🚗
                        </div>
                        <div style={styles.roleTitle}>Soy Cliente</div>
                        <div style={styles.roleDesc}>
                            Solicite un servicio para su vehículo
                        </div>
                        <div style={{ ...styles.roleArrow, color: "var(--accent)" }}>→</div>
                    </button>
                </div>

                {/* Footer */}
                <p style={styles.footer}>
                    CheckCar MH © {new Date().getFullYear()} — Todos los derechos reservados
                </p>
            </div>
        </div>
    );
}

// ── Estilos inline ──

const styles = {
    wrapper: {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    bgGlow: {
        position: "absolute",
        top: "-20%",
        left: "-10%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
    },
    bgGlow2: {
        position: "absolute",
        bottom: "-15%",
        right: "-10%",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,195,247,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
    },
    container: {
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        padding: "40px 24px",
        maxWidth: 560,
        width: "100%",
        animation: "fade-up 0.6s ease-out",
    },
    logoBox: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 20,
    },
    title: {
        fontFamily: "var(--head)",
        fontWeight: 800,
        fontSize: 42,
        letterSpacing: 8,
        textTransform: "uppercase",
        color: "var(--text)",
        marginBottom: 8,
    },
    subtitle: {
        fontFamily: "var(--body)",
        fontSize: 14,
        color: "var(--text-muted)",
        letterSpacing: 1,
        maxWidth: 360,
        margin: "0 auto",
    },
    divider: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "32px 0 24px",
    },
    dividerDot: {
        display: "block",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--border2)",
    },
    question: {
        fontFamily: "var(--head)",
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "var(--text-muted)",
        marginBottom: 24,
    },
    buttonGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        marginBottom: 40,
    },
    roleCard: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        padding: "32px 20px 28px",
        background: "var(--surface)",
        border: "1px solid var(--border2)",
        borderRadius: "var(--radius)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        outline: "none",
        textAlign: "center",
    },
    roleIcon: {
        width: 56,
        height: 56,
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
    },
    roleTitle: {
        fontFamily: "var(--head)",
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "var(--text)",
    },
    roleDesc: {
        fontFamily: "var(--body)",
        fontSize: 13,
        color: "var(--text-muted)",
        lineHeight: 1.4,
    },
    roleArrow: {
        fontFamily: "var(--mono)",
        fontSize: 20,
        marginTop: 4,
        transition: "transform 0.2s",
    },
    footer: {
        fontFamily: "var(--mono)",
        fontSize: 11,
        color: "var(--text-muted)",
        opacity: 0.5,
        letterSpacing: 1,
    },
};
