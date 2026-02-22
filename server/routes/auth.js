// ─────────────────────────────────────────────
// AUTH ROUTES — Login y verificación de sesión
// ─────────────────────────────────────────────

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// POST /api/auth/login
// Recibe { username, password }. Valida la contraseña compartida
// y genera un JWT con el username para auditoría.
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Usuario y contraseña requeridos" });
        }

        // Obtener hash de la contraseña compartida
        const [rows] = await pool.query("SELECT password_hash FROM admin_config WHERE id = 1");

        if (rows.length === 0) {
            return res.status(500).json({ error: "Configuración de admin no encontrada" });
        }

        const valid = await bcrypt.compare(password, rows[0].password_hash);

        if (!valid) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }

        // Generar JWT con el nombre del admin
        const token = jwt.sign(
            { username },
            process.env.JWT_SECRET,
            { expiresIn: "8h" }
        );

        res.json({
            token,
            admin: { name: username, role: "admin" },
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// GET /api/auth/me
// Devuelve los datos del admin a partir del token JWT.
router.get("/me", authMiddleware, (req, res) => {
    res.json({
        admin: { name: req.admin.username, role: "admin" },
    });
});

module.exports = router;
