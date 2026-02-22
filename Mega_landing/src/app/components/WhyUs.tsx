import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, Star, Users, BarChart2 } from "lucide-react";

const mechanicImg =
  "https://images.unsplash.com/photo-1698998881125-b7b8f05a504b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjB0ZWNobmljaWFuJTIwd29ya2luZyUyMGNhciUyMGxpZnR8ZW58MXx8fHwxNzcxNzA2NzkyfDA&ixlib=rb-4.1.0&q=80&w=800";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Diagnóstico Transparente",
    desc: "Reportes digitales con fotos y videos del estado real de tu vehículo antes y después de cada intervención.",
  },
  {
    icon: Star,
    title: "Repuestos Certificados",
    desc: "Trabajamos exclusivamente con repuestos originales y de primera línea con garantía documentada.",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    desc: "Cada cliente tiene un asesor dedicado que acompaña el proceso completo y resuelve inquietudes en tiempo real.",
  },
  {
    icon: BarChart2,
    title: "Historial Digital del Vehículo",
    desc: "Accede al historial de mantenimiento de tu auto desde tu celular. Saber es poder para tomar mejores decisiones.",
  },
];

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="bg-[#0A0A1E] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={ref}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={mechanicImg}
                alt="CheckCar técnico trabajando"
                className="w-full h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#CC0000]/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#0D0D2B] border border-white/10 rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#CC0000] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star size={22} className="text-white fill-white" />
                </div>
                <div>
                  <div
                    className="text-white"
                    style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}
                  >
                    4.9/5
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">Google Reviews</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="absolute -top-6 -left-6 bg-[#CC0000] rounded-2xl p-5 shadow-2xl"
            >
              <div className="text-white text-center">
                <div style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>I+D</div>
                <div className="text-white/80 text-xs mt-1">Metodología</div>
                <div className="text-white/80 text-xs">Certificada</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-sm tracking-[0.2em] uppercase">
                ¿Por qué CheckCar?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Un taller diseñado{" "}
              <span className="text-[#CC0000]">para ti,</span> no para tu auto
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/55 mb-10 leading-relaxed"
            >
              CheckCar nació de 9 meses de investigación profunda del
              comportamiento del conductor colombiano. Entendemos que tu
              vehículo es tu herramienta de trabajo y tranquilidad familiar.
              Por eso, cada servicio está optimizado para darte certeza,
              transparencia y resultados que duran.
            </motion.p>

            <div className="space-y-6">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#CC0000]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC0000]/25 transition-colors duration-300">
                      <Icon size={18} className="text-[#CC0000]" />
                    </div>
                    <div>
                      <h4
                        className="text-white mb-1"
                        style={{ fontWeight: 600, fontSize: "0.95rem" }}
                      >
                        {reason.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
