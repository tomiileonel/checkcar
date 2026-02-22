import { motion } from "motion/react";
import { ChevronDown, Shield, Clock, Award } from "lucide-react";

const heroBg =
  "https://images.unsplash.com/photo-1766246099181-2055091f8721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdXRvbW90aXZlJTIwd29ya3Nob3AlMjBnYXJhZ2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNzA2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const badges = [
  { icon: Shield, text: "Garantía certificada" },
  { icon: Clock, text: "Entrega puntual" },
  { icon: Award, text: "9 meses de I+D" },
];

export function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="CheckCar Workshop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A1E]/95 via-[#0A0A1E]/75 to-[#0A0A1E]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1E]/80 via-transparent to-transparent" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#CC0000] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-[#CC0000]" />
            <span className="text-[#CC0000] text-sm tracking-[0.25em] uppercase">
              Taller Mecánico Integral
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Ingeniería de{" "}
            <span className="text-[#CC0000]">Precisión</span>
            <br />
            para tu Vehículo
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/65 text-lg mb-10 max-w-xl leading-relaxed"
          >
            Más de 9 meses de investigación de mercado nos permiten ofrecer un
            servicio automotriz integral de alta gama, diseñado para maximizar
            la vida útil de tu vehículo y tu tranquilidad.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/8 backdrop-blur border border-white/15 rounded-full px-4 py-2"
              >
                <Icon size={14} className="text-[#CC0000]" />
                <span className="text-white/80 text-xs tracking-wide">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleNav("#contacto")}
              className="group relative bg-[#CC0000] hover:bg-[#AA0000] text-white px-8 py-4 rounded text-sm tracking-wider uppercase transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-red-900/30"
            >
              <span className="relative z-10">Agendar Diagnóstico</span>
            </button>
            <button
              onClick={() => handleNav("#servicios")}
              className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/5"
            >
              Ver Servicios
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleNav("#stats")}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-white/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
