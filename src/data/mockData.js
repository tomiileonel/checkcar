// ─────────────────────────────────────────────
// DATOS MOCK — Órdenes de trabajo y facturación
// ─────────────────────────────────────────────

export const MOCK_ORDERS = [
    {
        id: "ORD-001",
        owner: "Ricardo Méndez",
        phone: "0981-123456",
        brand: "Toyota",
        model: "Hilux",
        type: "camioneta",
        year: 2020,
        km: 85000,
        entryDate: "2025-01-10",
        exitDate: "2025-01-15",
        estimatedExit: "2025-01-15",
        problem: "Cambio de aceite y revisión de frenos traseros. Ruido al frenar.",
        cost: 350000,
        status: "listo",
        source: "admin",
    },
    {
        id: "ORD-002",
        owner: "Carolina Vega",
        phone: "0991-654321",
        brand: "Chevrolet",
        model: "Onix",
        type: "auto",
        year: 2022,
        km: 32000,
        entryDate: "2025-01-14",
        exitDate: null,
        estimatedExit: "2025-01-18",
        problem: "Luz de motor encendida. Diagnóstico por computadora.",
        cost: 180000,
        status: "en_reparacion",
        source: "admin",
    },
    {
        id: "ORD-003",
        owner: "Miguel Torres",
        phone: "0971-987654",
        brand: "Ford",
        model: "Ranger",
        type: "camioneta",
        year: 2019,
        km: 120000,
        entryDate: "2025-01-16",
        exitDate: null,
        estimatedExit: "2025-01-20",
        problem: "Revisión general. El motor tiembla en ralentí.",
        cost: 500000,
        status: "pendiente",
        source: "client",
    },
];

export const REVENUE_DATA = {
    Nov: { label: "Noviembre", revenue: 4250000, orders: 12 },
    Dec: { label: "Diciembre", revenue: 5810000, orders: 17 },
    Jan: { label: "Enero", revenue: 3920000, orders: 11 },
};
