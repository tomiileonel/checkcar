// ─────────────────────────────────────────────
// ORDERS ROUTES — CRUD de órdenes de servicio
// ─────────────────────────────────────────────

const express = require("express");
const pool = require("../db");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// ── Helpers ──

// Convierte snake_case de MySQL a camelCase para el frontend
function toCamel(row) {
    return {
        id: row.code,
        dbId: row.id,
        owner: row.owner,
        phone: row.phone,
        brand: row.brand,
        model: row.model,
        type: row.type,
        year: row.year,
        km: row.km,
        entryDate: row.entry_date,
        exitDate: row.exit_date,
        estimatedExit: row.estimated_exit,
        problem: row.problem,
        cost: row.cost,
        status: row.status,
        source: row.source,
        createdBy: row.created_by,
    };
}

// Genera el siguiente código de orden (ORD-004, ORD-005, ...)
async function nextCode() {
    const [rows] = await pool.query(
        "SELECT code FROM orders ORDER BY id DESC LIMIT 1"
    );
    if (rows.length === 0) return "ORD-001";
    const last = parseInt(rows[0].code.replace("ORD-", ""), 10);
    return `ORD-${String(last + 1).padStart(3, "0")}`;
}

// ── Rutas ──

// GET /api/orders — Lista todas las órdenes (protegida)
router.get("/", authMiddleware, async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM orders ORDER BY id DESC");
        res.json(rows.map(toCamel));
    } catch (err) {
        console.error("GET /orders error:", err);
        res.status(500).json({ error: "Error al obtener órdenes" });
    }
});

// POST /api/orders — Crea una nueva orden (pública para clientes, admin con token)
router.post("/", async (req, res) => {
    try {
        const {
            owner, phone, brand, model, type,
            year, km, problem, estimatedExit, cost, status, source,
        } = req.body;

        if (!owner || !brand || !problem) {
            return res.status(400).json({ error: "Campos obligatorios: owner, brand, problem" });
        }

        const code = await nextCode();

        // Si hay token, extraer el username para auditoría
        let createdBy = null;
        const header = req.headers.authorization;
        if (header && header.startsWith("Bearer ")) {
            try {
                const jwt = require("jsonwebtoken");
                const decoded = jwt.verify(header.split(" ")[1], process.env.JWT_SECRET);
                createdBy = decoded.username;
            } catch (_) { /* sin token o inválido — no pasa nada */ }
        }

        const [result] = await pool.query(
            `INSERT INTO orders (code, owner, phone, brand, model, type, year, km, entry_date, exit_date, estimated_exit, problem, cost, status, source, created_by)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURDATE(), NULL, ?, ?, ?, ?, ?, ?)`,
            [
                code,
                owner,
                phone || null,
                brand,
                model || null,
                type || "auto",
                year ? Number(year) : null,
                km ? Number(km) : 0,
                estimatedExit || null,
                problem,
                cost ? Number(cost) : 0,
                status || "pendiente",
                source || "client",
                createdBy,
            ]
        );

        // Devolver la orden creada
        const [rows] = await pool.query("SELECT * FROM orders WHERE id = ?", [result.insertId]);
        res.status(201).json(toCamel(rows[0]));
    } catch (err) {
        console.error("POST /orders error:", err);
        res.status(500).json({ error: "Error al crear la orden" });
    }
});

// PUT /api/orders/:code — Actualiza una orden (protegida)
router.put("/:code", authMiddleware, async (req, res) => {
    try {
        const { code } = req.params;
        const { status, cost, exitDate, problem } = req.body;

        const updates = [];
        const values = [];

        if (status !== undefined) { updates.push("status = ?"); values.push(status); }
        if (cost !== undefined) { updates.push("cost = ?"); values.push(Number(cost)); }
        if (exitDate !== undefined) { updates.push("exit_date = ?"); values.push(exitDate || null); }
        if (problem !== undefined) { updates.push("problem = ?"); values.push(problem); }

        if (updates.length === 0) {
            return res.status(400).json({ error: "No hay campos para actualizar" });
        }

        values.push(code);
        await pool.query(
            `UPDATE orders SET ${updates.join(", ")} WHERE code = ?`,
            values
        );

        const [rows] = await pool.query("SELECT * FROM orders WHERE code = ?", [code]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Orden no encontrada" });
        }

        res.json(toCamel(rows[0]));
    } catch (err) {
        console.error("PUT /orders error:", err);
        res.status(500).json({ error: "Error al actualizar la orden" });
    }
});

// GET /api/orders/revenue — Datos de ingresos por mes (protegida)
router.get("/revenue", authMiddleware, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT
                DATE_FORMAT(entry_date, '%Y-%m') AS month,
                DATE_FORMAT(entry_date, '%M')    AS label,
                COALESCE(SUM(cost), 0)           AS revenue,
                COUNT(*)                          AS orders_count
            FROM orders
            WHERE entry_date >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
            GROUP BY month, label
            ORDER BY month ASC
        `);

        // Convertir a formato que el frontend espera
        const data = {};
        rows.forEach((r) => {
            const key = r.month;
            data[key] = {
                label: r.label,
                revenue: Number(r.revenue),
                orders: Number(r.orders_count),
            };
        });

        res.json(data);
    } catch (err) {
        console.error("GET /orders/revenue error:", err);
        res.status(500).json({ error: "Error al obtener ingresos" });
    }
});

module.exports = router;
