import React, { useState, useRef, useCallback, createContext, useContext } from "react";
import { MOCK_ORDERS, REVENUE_DATA } from "../data/mockData";
import Toast from "../components/Toast";

// ─────────────────────────────────────────────
// CONTEXTO GLOBAL DE LA APLICACIÓN
// ─────────────────────────────────────────────

const AppContext = createContext(null);

/**
 * Hook personalizado para acceder al contexto.
 * Lanza un error descriptivo si se usa fuera del Provider.
 */
export function useAppContext() {
    const ctx = useContext(AppContext);
    if (!ctx) {
        throw new Error("useAppContext debe usarse dentro de <AppProvider>");
    }
    return ctx;
}

/**
 * Provider global: maneja órdenes, vista activa, sesión admin y notificaciones.
 * - Usa useRef para el contador de IDs: evita colisiones al borrar/agregar órdenes.
 * - Usa useCallback en las funciones expuestas para evitar re-renders innecesarios.
 */
export function AppProvider({ children }) {
    const [orders, setOrders] = useState(MOCK_ORDERS);
    const [view, setView] = useState("landing");
    const [admin, setAdmin] = useState(null);
    const [toast, setToast] = useState(null);

    // Contador independiente de orders.length para evitar IDs duplicados
    const orderCounter = useRef(MOCK_ORDERS.length);

    const addOrder = useCallback((order) => {
        orderCounter.current += 1;
        const newOrder = {
            ...order,
            id: `ORD-${String(orderCounter.current).padStart(3, "0")}`,
            entryDate: new Date().toISOString().split("T")[0],
        };
        setOrders((prev) => [newOrder, ...prev]);
        return newOrder;
    }, []);

    const updateOrder = useCallback((id, updates) => {
        setOrders((prev) =>
            prev.map((o) => (o.id === id ? { ...o, ...updates } : o))
        );
    }, []);

    const notify = useCallback((msg, type = "success") => {
        setToast({ msg, type });
    }, []);

    const value = {
        orders,
        addOrder,
        updateOrder,
        view,
        setView,
        admin,
        setAdmin,
        notify,
        revenueData: REVENUE_DATA,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
            {toast && (
                <Toast
                    message={toast.msg}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </AppContext.Provider>
    );
}

export default AppContext;
