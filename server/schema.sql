-- ─────────────────────────────────────────────
-- CheckCar MH — Esquema de Base de Datos
-- ─────────────────────────────────────────────

CREATE DATABASE IF NOT EXISTS `checkcar`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `checkcar`;

-- ── Tabla de órdenes de servicio ──
CREATE TABLE IF NOT EXISTS `orders` (
    `id`              INT AUTO_INCREMENT PRIMARY KEY,
    `code`            VARCHAR(10) UNIQUE NOT NULL COMMENT 'Código visual: ORD-001, ORD-002...',
    `owner`           VARCHAR(100) NOT NULL COMMENT 'Nombre del propietario',
    `phone`           VARCHAR(20) COMMENT 'Teléfono de contacto',
    `brand`           VARCHAR(50) NOT NULL COMMENT 'Marca del vehículo',
    `model`           VARCHAR(50) COMMENT 'Modelo del vehículo',
    `type`            ENUM('auto','camioneta','moto','otro') DEFAULT 'auto',
    `year`            INT COMMENT 'Año del vehículo',
    `km`              INT DEFAULT 0 COMMENT 'Kilometraje',
    `entry_date`      DATE NOT NULL COMMENT 'Fecha de ingreso',
    `exit_date`       DATE COMMENT 'Fecha de salida real',
    `estimated_exit`  DATE COMMENT 'Fecha de salida estimada',
    `problem`         TEXT NOT NULL COMMENT 'Descripción del problema o servicio',
    `cost`            INT DEFAULT 0 COMMENT 'Costo en guaraníes',
    `status`          ENUM('pendiente','en_reparacion','listo') DEFAULT 'pendiente',
    `source`          ENUM('admin','client') DEFAULT 'admin' COMMENT 'Quién creó la orden',
    `created_by`      VARCHAR(50) COMMENT 'Username del admin que creó la orden',
    `created_at`      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at`      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ── Configuración de admin (contraseña compartida) ──
CREATE TABLE IF NOT EXISTS `admin_config` (
    `id`              INT PRIMARY KEY DEFAULT 1,
    `password_hash`   VARCHAR(255) NOT NULL COMMENT 'Hash bcrypt de la contraseña compartida'
) ENGINE=InnoDB;

-- ── Datos de ejemplo ──
INSERT INTO `orders` (`code`, `owner`, `phone`, `brand`, `model`, `type`, `year`, `km`, `entry_date`, `exit_date`, `estimated_exit`, `problem`, `cost`, `status`, `source`) VALUES
('ORD-001', 'Ricardo Méndez',  '0981-123456', 'Toyota',    'Hilux',  'camioneta', 2020, 85000,  '2025-01-10', '2025-01-15', '2025-01-15', 'Cambio de aceite y revisión de frenos traseros. Ruido al frenar.', 350000, 'listo',         'admin'),
('ORD-002', 'Carolina Vega',   '0991-654321', 'Chevrolet', 'Onix',   'auto',      2022, 32000,  '2025-01-14', NULL,         '2025-01-18', 'Luz de motor encendida. Diagnóstico por computadora.',             180000, 'en_reparacion', 'admin'),
('ORD-003', 'Miguel Torres',   '0971-987654', 'Ford',      'Ranger', 'camioneta', 2019, 120000, '2025-01-16', NULL,         '2025-01-20', 'Revisión general. El motor tiembla en ralentí.',                   500000, 'pendiente',     'client')
ON DUPLICATE KEY UPDATE `owner` = VALUES(`owner`);

-- NOTA: La contraseña de admin se inserta desde seed.js porque
-- requiere bcrypt para hashearla. Si querés insertarla manualmente,
-- generá el hash de "mh1234" con bcrypt y hacé:
-- INSERT INTO admin_config (id, password_hash) VALUES (1, '<tu_hash_bcrypt>');
