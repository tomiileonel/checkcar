// ─────────────────────────────────────────────
// SERVER — Punto de entrada de la API
// ─────────────────────────────────────────────

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const ordersRoutes = require("./routes/orders");

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middlewares globales ──
app.use(cors());
app.use(express.json());

// ── Rutas ──
app.use("/api/auth", authRoutes);
app.use("/api/orders", ordersRoutes);

// ── Health check ──
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Iniciar servidor ──
app.listen(PORT, () => {
    console.log(`\n🚀 CheckCar API corriendo en http://localhost:${PORT}`);
    console.log(`   📋 Órdenes:  http://localhost:${PORT}/api/orders`);
    console.log(`   🔐 Auth:     http://localhost:${PORT}/api/auth/login`);
    console.log(`   ❤️  Health:   http://localhost:${PORT}/api/health\n`);
});
