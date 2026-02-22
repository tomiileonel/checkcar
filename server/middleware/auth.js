// ─────────────────────────────────────────────
// AUTH MIDDLEWARE — Verifica JWT en rutas protegidas
// ─────────────────────────────────────────────

const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded; // { username, iat, exp }
        next();
    } catch (err) {
        return res.status(401).json({ error: "Token inválido o expirado" });
    }
}

module.exports = authMiddleware;
