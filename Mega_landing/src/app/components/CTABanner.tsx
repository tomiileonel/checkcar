import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

const customerImg =
  "https://images.unsplash.com/photo-1538575207325-5a2505373ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpc2ZpZWQlMjBjdXN0b21lciUyMGNhciUyMGRlYWxlcnNoaXB8ZW58MXx8fHwxNzcxNzA2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={customerImg}
          alt="Cliente satisfecho"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0A0A1E]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#CC0000]/20 to-transparent" />
      </div>

      {/* Left red bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#CC0000]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#CC0000] text-sm tracking-[0.2em] uppercase mb-4"
          >
            Oferta de Lanzamiento
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            Diagnóstico Computarizado{" "}
            <span className="text-[#CC0000]">100% Gratis</span>
            <br />
            por tiempo limitado
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 mb-8 max-w-lg"
          >
            Trae tu vehículo hoy y descubre el estado real de tu auto con
            nuestro escáner OBD-II profesional. Sin costos ocultos,
            sin compromisos. Solo conocimiento.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleNav("#contacto")}
              className="group flex items-center gap-2 bg-[#CC0000] hover:bg-[#AA0000] text-white px-8 py-4 rounded text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30"
            >
              Agendar Ahora
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+573001234567"
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/5"
            >
              <Phone size={15} />
              Llamar Ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
