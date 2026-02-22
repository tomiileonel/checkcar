import React, { useState, useEffect, useCallback, createContext, useContext } from "react";
import Toast from "../components/Toast";
import * as api from "../services/api";

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
 * Provider global: maneja órdenes, sesión admin, revenue y notificaciones.
 * - Se conecta a la API REST del backend.
 * - Verifica el token JWT al montar para restaurar sesión.
 */
export function AppProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [revenueData, setRevenueData] = useState({});
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState(null);

    // ── Verificar token al montar ──
    useEffect(() => {
        api.verifyToken()
            .then((adminData) => {
                if (adminData) {
                    setAdmin(adminData);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    // ── Cargar órdenes y revenue cuando hay admin ──
    useEffect(() => {
        if (admin) {
            api.fetchOrders()
                .then(setOrders)
                .catch((err) => console.error("Error cargando órdenes:", err));
            api.fetchRevenue()
                .then(setRevenueData)
                .catch((err) => console.error("Error cargando revenue:", err));
        }
    }, [admin]);

    // ── Login ──
    const loginAdmin = useCallback(async (username, password) => {
        const adminData = await api.login(username, password);
        setAdmin(adminData);
        return adminData;
    }, []);

    // ── Logout ──
    const logoutAdmin = useCallback(() => {
        api.logout();
        setAdmin(null);
        setOrders([]);
        setRevenueData({});
    }, []);

    // ── CRUD de órdenes ──
    const addOrder = useCallback(async (orderData) => {
        const newOrder = await api.createOrder(orderData);
        setOrders((prev) => [newOrder, ...prev]);
        return newOrder;
    }, []);

    const updateOrder = useCallback(async (code, updates) => {
        const updated = await api.updateOrder(code, updates);
        setOrders((prev) =>
            prev.map((o) => (o.id === code ? updated : o))
        );
        return updated;
    }, []);

    // ── Recargar órdenes ──
    const refreshOrders = useCallback(async () => {
        if (!admin) return;
        const data = await api.fetchOrders();
        setOrders(data);
    }, [admin]);

    // ── Notificaciones ──
    const notify = useCallback((msg, type = "success") => {
        setToast({ msg, type });
    }, []);

    const value = {
        orders,
        addOrder,
        updateOrder,
        refreshOrders,
        admin,
        loginAdmin,
        logoutAdmin,
        loading,
        notify,
        revenueData,
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
