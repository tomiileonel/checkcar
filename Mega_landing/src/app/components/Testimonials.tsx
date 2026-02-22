import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Ejecutivo Comercial",
    vehicle: "Toyota Fortuner 2022",
    rating: 5,
    text: "Llevé mi Fortuner por un ruido extraño en el motor. En CheckCar me hicieron un diagnóstico completo con videos del problema antes de tocar nada. La transparencia fue total. El trabajo quedó impecable y el seguimiento post-servicio es algo que nunca había recibido en ningún taller.",
    initials: "CM",
    color: "#CC0000",
  },
  {
    name: "Andrea Rojas",
    role: "Empresaria",
    vehicle: "BMW X3 2021",
    rating: 5,
    text: "Como mujer, siempre me habían aprovechado en talleres. En CheckCar me explicaron todo con detalle, me mostraron los repuestos que iban a cambiar y respetaron el presupuesto al centavo. Es el único taller donde voy con confianza. Mis amigas ya también son clientes.",
    initials: "AR",
    color: "#1A1A5E",
  },
  {
    name: "Jorge Patiño",
    role: "Conductor de Plataforma",
    vehicle: "Renault Logan 2019",
    rating: 5,
    text: "Mi carro es mi herramienta de trabajo. CheckCar entendió eso desde el primer momento. Me dieron prioridad, el servicio fue rápido y el precio justo. Llevo 6 meses como cliente fiel y recomendado a 4 compañeros más. El historial digital es genial para controlar los mantenimientos.",
    initials: "JP",
    color: "#CC0000",
  },
  {
    name: "María Fernanda Torres",
    role: "Médica",
    vehicle: "Chevrolet Captiva 2023",
    rating: 5,
    text: "El nivel de profesionalismo es increíble. Llegué con el aire acondicionado dañado antes de una guardia. Me recibieron sin cita, diagnosticaron el problema en 30 minutos y lo solucionaron en 2 horas. El equipo es muy amable y el taller está impecablemente limpio.",
    initials: "MT",
    color: "#1A1A5E",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonios" className="bg-[#0A0A1E] py-28 overflow-hidden">
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
              Testimonios
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
            Lo que dicen nuestros{" "}
            <span className="text-[#CC0000]">clientes</span>
          </motion.h2>
        </div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-[#0D0D2B] border border-white/8 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote
              size={80}
              className="absolute top-6 right-8 text-[#CC0000]/10 -rotate-12"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <StarRating rating={t.rating} />

                <p className="text-white/75 text-lg leading-relaxed my-6 italic relative z-10">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: t.color, fontWeight: 700 }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white" style={{ fontWeight: 600 }}>
                      {t.name}
                    </div>
                    <div className="text-white/40 text-sm">{t.role}</div>
                    <div className="text-[#CC0000] text-xs mt-0.5">{t.vehicle}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-[#CC0000]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-white hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-white hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonials row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                i === current
                  ? "border-[#CC0000]/50 bg-[#CC0000]/8"
                  : "border-white/8 bg-[#0D0D2B] hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                  style={{ backgroundColor: t.color, fontWeight: 700 }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-xs" style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div className="text-white/40 text-xs">{t.vehicle}</div>
                </div>
              </div>
              <StarRating rating={t.rating} />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
