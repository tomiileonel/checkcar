import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ClientForm from "./pages/ClientForm";

// ─────────────────────────────────────────────
// APP ROOT — Punto de entrada de la aplicación
// ─────────────────────────────────────────────

function AppContent() {
    const location = useLocation();
    const isLanding = location.pathname === "/";

    return (
        <>
            {!isLanding && <Navbar />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<AdminLogin />} />
                <Route path="/cliente/solicitud" element={<ClientForm />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default function App() {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
}
