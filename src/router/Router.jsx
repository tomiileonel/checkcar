import React from "react";
import { useAppContext } from "../context/AppContext";
import LandingPage from "../pages/LandingPage";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import ClientForm from "../pages/ClientForm";

// ─────────────────────────────────────────────
// ROUTER — Navegación condicional por vista
// ─────────────────────────────────────────────

const ROUTES = {
    landing: LandingPage,
    login: AdminLogin,
    admin: AdminDashboard,
    client: ClientForm,
};

export default function Router() {
    const { view } = useAppContext();

    const Page = ROUTES[view] || LandingPage;
    return <Page />;
}
