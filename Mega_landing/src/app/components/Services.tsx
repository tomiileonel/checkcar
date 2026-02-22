import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Cpu,
  Zap,
  Wrench,
  Droplets,
  RotateCcw,
  Wind,
  ShieldCheck,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Diagnóstico Computarizado",
    desc: "Escáner electrónico avanzado OBD-II con reporte digital completo para identificar fallas con precisión milimétrica.",
    tag: "Premium",
    img: "https://images.unsplash.com/photo-1625465588028-458f59e19ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZWxlY3RyaWNhbCUyMHN5c3RlbSUyMHNjYW5uZXJ8ZW58MXx8fHwxNzcxNzA2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    icon: Wrench,
    title: "Mecánica General & Motor",
    desc: "Mantenimiento preventivo y correctivo, sincronización de motor, distribución y overhaul con repuestos originales.",
    tag: "Integral",
    img: "https://images.unsplash.com/photo-1555140713-973b9f36cd1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zdGljJTIwcHJvZmVzc2lvbmFsJTIwbWVjaGFuaWN8ZW58MXx8fHwxNzcxNzA2NzkxfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    icon: RotateCcw,
    title: "Alineación & Balanceo",
    desc: "Sistema 3D de cuatro ruedas con tecnología láser para una conducción segura y uniforme, alargando la vida de las llantas.",
    tag: "Tecnología 3D",
    img: "https://images.unsplash.com/photo-1745239651577-d74076914d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsaWdubWVudCUyMHRpcmUlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MTcwNjc5NXww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    icon: Zap,
    title: "Electricidad Automotriz",
    desc: "Diagnóstico y reparación de sistemas eléctricos, alternadores, motores de arranque, instalación de accesorios.",
    tag: "Especializado",
    img: null,
  },
  {
    icon: Droplets,
    title: "Sistema de Frenos",
    desc: "Revisión completa del sistema de frenado, discos, pastillas, líquido de frenos y cilindros maestros con garantía.",
    tag: "Seguridad",
    img: null,
  },
  {
    icon: Wind,
    title: "Aire Acondicionado",
    desc: "Recarga de gas refrigerante, reparación de compresores, limpieza de evaporadores para óptimo confort climático.",
    tag: "Confort",
    img: null,
  },
  {
    icon: ShieldCheck,
    title: "Revisión Técnico-Mecánica",
    desc: "Preparación y pre-inspección para RTM, chequeo de 50 puntos de seguridad con informe técnico detallado.",
    tag: "Certificación",
    img: null,
  },
  {
    icon: Settings,
    title: "Transmisión & Caja",
    desc: "Mantenimiento de cajas automáticas, mecánicas y CVT. Cambio de aceite diferencial y reparación de acoplamientos.",
    tag: "Avanzado",
    img: null,
  },
];

const tagColors: Record<string, string> = {
  Premium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  Integral: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Tecnología 3D": "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Especializado: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Seguridad: "bg-red-500/15 text-red-400 border-red-500/30",
  Confort: "bg-teal-500/15 text-teal-400 border-teal-500/30",
  Certificación: "bg-green-500/15 text-green-400 border-green-500/30",
  Avanzado: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
};

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="bg-[#080818] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-[#CC0000]" />
            <span className="text-[#CC0000] text-sm tracking-[0.2em] uppercase">
              Nuestros Servicios
            </span>
            <div className="h-px w-8 bg-[#CC0000]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Soluciones Automotrices{" "}
            <span className="text-[#CC0000]">Integrales</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
          >
            Contamos con tecnología de punta y técnicos certificados para
            ofrecer el más alto estándar de servicio automotriz.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative bg-[#0D0D2B] border border-white/8 rounded-xl overflow-hidden hover:border-[#CC0000]/40 transition-all duration-400 hover:shadow-xl hover:shadow-[#CC0000]/10 cursor-pointer"
              >
                {/* Image top (only for first 3) */}
                {service.img && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D2B] via-[#0D0D2B]/20 to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#CC0000]/15 transition-all duration-300 group-hover:bg-[#CC0000]/25 ${
                      service.img ? "-mt-8 relative z-10" : ""
                    }`}
                  >
                    <Icon size={20} className="text-[#CC0000]" />
                  </div>

                  {/* Tag */}
                  <span
                    className={`inline-block text-xs px-2 py-0.5 rounded-full border mb-3 ${
                      tagColors[service.tag]
                    }`}
                  >
                    {service.tag}
                  </span>

                  <h3
                    className="text-white mb-2 group-hover:text-[#FF2222] transition-colors duration-300"
                    style={{ fontSize: "0.95rem", fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-4 flex items-center gap-2 text-[#CC0000] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Saber más</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-[#CC0000] transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
