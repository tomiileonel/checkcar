import React from "react";
import { useAppContext } from "../context/AppContext";
import KPICard from "../components/KPICard";
import RevenueChart from "../components/RevenueChart";
import AdminIntakeForm from "./AdminIntakeForm";
import DataTable from "./DataTable";

// ─────────────────────────────────────────────
// ADMIN DASHBOARD — Panel principal del admin
// ─────────────────────────────────────────────

export default function AdminDashboard() {
    const { orders, revenueData } = useAppContext();

    const totalOrders = orders.length;
    const pending = orders.filter((o) => o.status === "pendiente").length;
    const inRepair = orders.filter((o) => o.status === "en_reparacion").length;
    const done = orders.filter((o) => o.status === "listo").length;
    const totalRevenue = orders.reduce((sum, o) => sum + (o.cost || 0), 0);

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
            {/* Header */}
            <div style={{ marginBottom: 28 }}>
                <h1
                    style={{
                        fontFamily: "var(--head)",
                        fontWeight: 800,
                        fontSize: 28,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                    }}
                >
                    PANEL <span style={{ color: "var(--red)" }}>ADMIN</span>
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
                    Gestión integral de órdenes de servicio
                </p>
            </div>

            {/* KPI Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 16,
                    marginBottom: 28,
                }}
            >
                <KPICard
                    label="Total Órdenes"
                    value={totalOrders}
                    sub={`${done} completadas`}
                    accent="var(--accent)"
                    icon="📋"
                    delay="0s"
                />
                <KPICard
                    label="Pendientes"
                    value={pending}
                    sub="esperando turno"
                    accent="var(--warn)"
                    icon="⏳"
                    delay="0.1s"
                />
                <KPICard
                    label="En Reparación"
                    value={inRepair}
                    sub="en progreso"
                    accent="var(--accent2)"
                    icon="🔧"
                    delay="0.2s"
                />
                <KPICard
                    label="Ingresos Total"
                    value={`Gs. ${(totalRevenue / 1000).toFixed(0)}k`}
                    sub="acumulado"
                    accent="var(--success)"
                    icon="💰"
                    delay="0.3s"
                />
            </div>

            {/* Chart */}
            <div style={{ marginBottom: 28 }}>
                <RevenueChart data={revenueData} />
            </div>

            {/* Intake Form */}
            <AdminIntakeForm />

            {/* Orders Table */}
            <div style={{ marginTop: 28 }}>
                <DataTable />
            </div>
        </div>
    );
}
