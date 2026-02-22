<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<h1 align="center">🚗 CheckCar MH</h1>

<p align="center">
  <strong>Sistema de gestión de órdenes de servicio automotriz</strong><br/>
  Panel administrativo moderno con interfaz oscura de alta calidad, diseñado para talleres mecánicos.
</p>

---

## 📋 Descripción

**CheckCar MH** es una aplicación web tipo SPA (Single Page Application) que permite a talleres mecánicos gestionar de forma eficiente sus órdenes de servicio. Ofrece un flujo diferenciado para **administradores** y **clientes**, con un diseño oscuro premium con estilo glassmorphism.

### ¿Para quién es?

- **Administradores del taller**: gestionan órdenes, visualizan métricas (KPIs) y controlan el estado de cada servicio.
- **Clientes**: solicitan servicios para sus vehículos a través de un formulario intuitivo.

---

## ✨ Características principales

| Módulo | Descripción |
|---|---|
| 🏠 **Landing Page** | Pantalla de bienvenida con selección de rol (Admin / Cliente) |
| 🔐 **Login Admin** | Autenticación para acceder al panel de gestión |
| 📊 **Dashboard** | KPIs en tiempo real: órdenes, pendientes, en reparación e ingresos |
| 📈 **Gráfico de ingresos** | Visualización de la facturación acumulada |
| 📝 **Formulario de ingreso** | Registro de nuevas órdenes de servicio (admin) |
| 🚗 **Formulario de cliente** | Solicitud de servicio por parte del cliente |
| 📋 **Tabla de datos** | Listado completo de órdenes con búsqueda y filtros |
| ✏️ **Panel de edición** | Slideover lateral para editar órdenes existentes |
| 🔔 **Notificaciones Toast** | Feedback visual para acciones del usuario |
| 🎨 **Tema oscuro premium** | Interfaz con glassmorphism, gradientes y micro-animaciones |

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/) con JSX
- **Build Tool**: [Vite 6](https://vitejs.dev/) — HMR ultrarrápido
- **Estilos**: CSS Vanilla con variables custom (design tokens)
- **Tipografías**: [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed), [Barlow](https://fonts.google.com/specimen/Barlow) y [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono)
- **Estado global**: React Context API
- **Routing**: Sistema de vistas condicional propio

---

## 📁 Estructura del proyecto

```
checkcar/
├── index.html              # Punto de entrada HTML
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias y scripts
│
└── src/
    ├── main.jsx            # Montaje de React
    ├── App.jsx             # Componente raíz (Provider + Navbar + Router)
    │
    ├── context/
    │   └── AppContext.jsx  # Estado global (órdenes, vista, sesión, toast)
    │
    ├── router/
    │   └── Router.jsx      # Navegación condicional por vistas
    │
    ├── pages/
    │   ├── LandingPage.jsx     # Pantalla de bienvenida
    │   ├── AdminLogin.jsx      # Login de administrador
    │   ├── AdminDashboard.jsx  # Panel con KPIs y gráficos
    │   ├── AdminIntakeForm.jsx # Formulario de ingreso de órdenes
    │   ├── ClientForm.jsx      # Formulario de solicitud del cliente
    │   ├── DataTable.jsx       # Tabla de órdenes
    │   └── EditSlideover.jsx   # Panel lateral de edición
    │
    ├── components/
    │   ├── Navbar.jsx          # Barra de navegación superior
    │   ├── Logo.jsx            # Logo animado de CheckCar
    │   ├── FormField.jsx       # Campo de formulario reutilizable
    │   ├── KPICard.jsx         # Tarjeta de métrica
    │   ├── RevenueChart.jsx    # Gráfico de ingresos
    │   ├── StatusToggle.jsx    # Selector de estado de orden
    │   ├── Toast.jsx           # Notificación emergente
    │   └── AdminUserMenu.jsx   # Menú del usuario admin
    │
    ├── data/
    │   └── mockData.js         # Datos de ejemplo
    │
    └── styles/
        └── global.css          # Variables, tokens y estilos globales
```

---

## 🚀 Instalación y uso

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/checkcar.git
cd checkcar

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera el bundle de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

---

## 🖥️ Capturas de pantalla

> _Próximamente — Capturas de la landing page, dashboard y formularios._

---

## 🗺️ Roadmap

- [ ] Integración con backend / API REST
- [ ] Persistencia de datos con base de datos
- [ ] Autenticación real (JWT / OAuth)
- [ ] Exportar órdenes a PDF
- [ ] Notificaciones por email al cliente
- [ ] Modo responsive optimizado para móviles

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

---

<p align="center">
  Hecho con ❤️ por <strong>CheckCar MH</strong>
</p>
