import React from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Router from "./router/Router";

// ─────────────────────────────────────────────
// APP ROOT — Punto de entrada de la aplicación
// ─────────────────────────────────────────────

export default function App() {
    return (
        <AppProvider>
            <Navbar />
            <Router />
        </AppProvider>
    );
}
