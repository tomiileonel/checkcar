// ─────────────────────────────────────────────
// API SERVICE — Helpers para comunicación con el backend
// ─────────────────────────────────────────────

const API_BASE = "/api";

// ── Token helpers ──

function getToken() {
    return localStorage.getItem("checkcar_token");
}

function setToken(token) {
    localStorage.setItem("checkcar_token", token);
}

function removeToken() {
    localStorage.removeItem("checkcar_token");
}

// ── Fetch wrapper con auth automática ──

async function apiFetch(path, options = {}) {
    const token = getToken();
    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers,
    });

    if (res.status === 401) {
        removeToken();
        // No forzar redirección aquí — que lo maneje el componente
    }

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Error en la solicitud");
    }

    return data;
}

// ── Auth ──

export async function login(username, password) {
    const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
    setToken(data.token);
    return data.admin;
}

export async function verifyToken() {
    const token = getToken();
    if (!token) return null;
    try {
        const data = await apiFetch("/auth/me");
        return data.admin;
    } catch {
        removeToken();
        return null;
    }
}

export function logout() {
    removeToken();
}

export function isAuthenticated() {
    return !!getToken();
}

// ── Orders ──

export async function fetchOrders() {
    return apiFetch("/orders");
}

export async function createOrder(orderData) {
    return apiFetch("/orders", {
        method: "POST",
        body: JSON.stringify(orderData),
    });
}

export async function updateOrder(code, updates) {
    return apiFetch(`/orders/${code}`, {
        method: "PUT",
        body: JSON.stringify(updates),
    });
}

// ── Revenue ──

export async function fetchRevenue() {
    return apiFetch("/orders/revenue");
}
