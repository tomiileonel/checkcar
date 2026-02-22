import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, Search, ClipboardList, Wrench, CheckCircle, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Agenda tu Cita",
    desc: "Reserva en línea o por WhatsApp en menos de 2 minutos. Sin esperas, sin filas. Escoge el horario que más te convenga.",
  },
  {
    icon: Search,
    step: "02",
    title: "Diagnóstico Completo",
    desc: "Nuestro equipo realiza un diagnóstico computarizado de 50 puntos con escáner OBD-II y revisión visual documentada.",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Cotización Transparente",
    desc: "Recibes un informe digital con fotos, descripción del problema y cotización detallada. Tú apruebas antes de que empecemos.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Intervención Técnica",
    desc: "Técnicos certificados ejecutan el servicio con repuestos originales. Seguimiento en tiempo real vía app o WhatsApp.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Control de Calidad",
    desc: "Prueba dinámica post-servicio y revisión final por el jefe técnico. Tu vehículo solo sale cuando cumple los estándares.",
  },
  {
    icon: MessageSquare,
    step: "06",
    title: "Seguimiento Post-Servicio",
    desc: "A los 3, 7 y 30 días te contactamos para verificar el funcionamiento. Tu satisfacción es nuestra garantía.",
  },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proceso" className="bg-[#080818] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-[#CC0000]" />
            <span className="text-[#CC0000] text-sm tracking-[0.2em] uppercase">
              Nuestro Proceso
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
            6 Pasos hacia la{" "}
            <span className="text-[#CC0000]">Excelencia Mecánica</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
          >
            Un proceso estructurado y transparente que elimina la incertidumbre
            y te devuelve el control total sobre el estado de tu vehículo.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-[#0D0D2B] border border-white/8 rounded-xl p-7 hover:border-[#CC0000]/30 transition-all duration-400 group overflow-hidden"
              >
                {/* Step number watermark */}
                <div
                  className="absolute top-4 right-5 text-white/5 select-none pointer-events-none"
                  style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1 }}
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#CC0000]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#CC0000]/25 transition-colors duration-300">
                  <Icon size={22} className="text-[#CC0000]" />
                </div>

                {/* Step label */}
                <div className="text-[#CC0000] text-xs tracking-[0.2em] mb-2 uppercase">
                  Paso {step.step}
                </div>

                <h3
                  className="text-white mb-3"
                  style={{ fontWeight: 600, fontSize: "1rem" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-[#CC0000] transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
