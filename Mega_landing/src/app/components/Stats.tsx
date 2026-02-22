import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 5000, suffix: "+", label: "Vehículos Atendidos", desc: "Desde nuestra apertura" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos", desc: "Tasa de retención anual" },
  { value: 9, suffix: " meses", label: "Investigación I+D", desc: "De análisis de mercado" },
  { value: 15, suffix: "+", label: "Técnicos Certificados", desc: "Especializados por área" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="bg-[#0D0D2B] py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8"
            >
              <div
                className="text-white mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}
              >
                <span className="text-[#CC0000]">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-white text-sm tracking-wide mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
