// ─────────────────────────────────────────────
// SEED — Crea las tablas e inserta datos mock
// ─────────────────────────────────────────────

const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
require("dotenv").config();

async function seed() {
    // Conexión sin DB para poder crearla
    const conn = await mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
    });

    const DB = process.env.DB_NAME || "checkcar";

    console.log("🔧 Creando base de datos...");
    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    await conn.query(`USE \`${DB}\``);

    // ── Tabla orders ──
    console.log("📋 Creando tabla orders...");
    await conn.query(`
        CREATE TABLE IF NOT EXISTS orders (
            id              INT AUTO_INCREMENT PRIMARY KEY,
            code            VARCHAR(10) UNIQUE NOT NULL,
            owner           VARCHAR(100) NOT NULL,
            phone           VARCHAR(20),
            brand           VARCHAR(50) NOT NULL,
            model           VARCHAR(50),
            type            ENUM('auto','camioneta','moto','otro') DEFAULT 'auto',
            year            INT,
            km              INT DEFAULT 0,
            entry_date      DATE NOT NULL,
            exit_date       DATE,
            estimated_exit  DATE,
            problem         TEXT NOT NULL,
            cost            INT DEFAULT 0,
            status          ENUM('pendiente','en_reparacion','listo') DEFAULT 'pendiente',
            source          ENUM('admin','client') DEFAULT 'admin',
            created_by      VARCHAR(50),
            created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `);

    // ── Tabla admin_config ──
    console.log("🔐 Creando tabla admin_config...");
    await conn.query(`
        CREATE TABLE IF NOT EXISTS admin_config (
            id              INT PRIMARY KEY DEFAULT 1,
            password_hash   VARCHAR(255) NOT NULL
        )
    `);

    // ── Insertar contraseña de admin ──
    const adminPass = process.env.ADMIN_PASSWORD || "mh1234";
    const hash = await bcrypt.hash(adminPass, 10);

    await conn.query(`
        INSERT INTO admin_config (id, password_hash) VALUES (1, ?)
        ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)
    `, [hash]);
    console.log(`   Contraseña de admin hasheada (${adminPass})`);

    // ── Insertar órdenes mock ──
    console.log("🚗 Insertando órdenes de ejemplo...");

    const mockOrders = [
        {
            code: "ORD-001",
            owner: "Ricardo Méndez",
            phone: "0981-123456",
            brand: "Toyota",
            model: "Hilux",
            type: "camioneta",
            year: 2020,
            km: 85000,
            entry_date: "2025-01-10",
            exit_date: "2025-01-15",
            estimated_exit: "2025-01-15",
            problem: "Cambio de aceite y revisión de frenos traseros. Ruido al frenar.",
            cost: 350000,
            status: "listo",
            source: "admin",
        },
        {
            code: "ORD-002",
            owner: "Carolina Vega",
            phone: "0991-654321",
            brand: "Chevrolet",
            model: "Onix",
            type: "auto",
            year: 2022,
            km: 32000,
            entry_date: "2025-01-14",
            exit_date: null,
            estimated_exit: "2025-01-18",
            problem: "Luz de motor encendida. Diagnóstico por computadora.",
            cost: 180000,
            status: "en_reparacion",
            source: "admin",
        },
        {
            code: "ORD-003",
            owner: "Miguel Torres",
            phone: "0971-987654",
            brand: "Ford",
            model: "Ranger",
            type: "camioneta",
            year: 2019,
            km: 120000,
            entry_date: "2025-01-16",
            exit_date: null,
            estimated_exit: "2025-01-20",
            problem: "Revisión general. El motor tiembla en ralentí.",
            cost: 500000,
            status: "pendiente",
            source: "client",
        },
    ];

    for (const o of mockOrders) {
        await conn.query(
            `INSERT INTO orders (code, owner, phone, brand, model, type, year, km, entry_date, exit_date, estimated_exit, problem, cost, status, source)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE owner = VALUES(owner)`,
            [o.code, o.owner, o.phone, o.brand, o.model, o.type, o.year, o.km, o.entry_date, o.exit_date, o.estimated_exit, o.problem, o.cost, o.status, o.source]
        );
        console.log(`   ✓ ${o.code} — ${o.owner}`);
    }

    console.log("\n✅ Seed completado exitosamente!");
    await conn.end();
    process.exit(0);
}

seed().catch((err) => {
    console.error("❌ Error en seed:", err.message);
    process.exit(1);
});
