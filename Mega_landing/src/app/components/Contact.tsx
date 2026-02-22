import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const carImg =
  "https://images.unsplash.com/photo-1752959827892-7e635d49a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWwlMjBjbG9zZSUyMHVwJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzE3MDY3OTJ8MA&ixlib=rb-4.1.0&q=80&w=800";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 300 123 4567",
    sub: "Lunes a Sábado 7am - 6pm",
    href: "tel:+573001234567",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+57 300 123 4567",
    sub: "Respuesta inmediata",
    href: "https://wa.me/573001234567",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Calle 45 #23-10",
    sub: "Bogotá, Colombia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Sáb: 7am - 6pm",
    sub: "Dom: 8am - 2pm",
    href: "#",
  },
];

const services = [
  "Diagnóstico Computarizado",
  "Mecánica General",
  "Alineación y Balanceo",
  "Electricidad Automotriz",
  "Sistema de Frenos",
  "Aire Acondicionado",
  "Revisión Técnico-Mecánica",
  "Otro",
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-[#080818] py-28">
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
              Contáctanos
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
            Agenda tu{" "}
            <span className="text-[#CC0000]">Diagnóstico Gratuito</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-lg mx-auto"
          >
            El primer diagnóstico computarizado es sin costo. Completa el
            formulario y un asesor te contactará en menos de 30 minutos.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-8 h-56">
              <img
                src={carImg}
                alt="Vehículo de lujo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact items */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="bg-[#0D0D2B] border border-white/8 rounded-xl p-5 hover:border-[#CC0000]/40 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 bg-[#CC0000]/15 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#CC0000]/25 transition-colors">
                      <Icon size={16} className="text-[#CC0000]" />
                    </div>
                    <div className="text-white/50 text-xs mb-1">{item.label}</div>
                    <div
                      className="text-white text-sm"
                      style={{ fontWeight: 600 }}
                    >
                      {item.value}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#0D0D2B] border border-white/8 rounded-2xl p-8"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-[#CC0000]/15 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-[#CC0000]" />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontSize: "1.4rem", fontWeight: 700 }}
                >
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                  Un asesor CheckCar se comunicará contigo en los próximos 30
                  minutos para confirmar tu cita de diagnóstico gratuito.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-[#CC0000] text-sm hover:underline"
                >
                  Hacer otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#CC0000]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="300 123 4567"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#CC0000]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#CC0000]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">
                    Vehículo (marca, modelo, año)
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    placeholder="Ej: Toyota Corolla 2020"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#CC0000]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">
                    Servicio requerido *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0A0A1E] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#CC0000]/60 transition-colors"
                  >
                    <option value="" className="text-white/40">
                      Selecciona un servicio
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0D0D2B]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">
                    Describe el problema (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos qué está pasando con tu vehículo..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#CC0000]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#CC0000] hover:bg-[#AA0000] text-white py-4 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-red-900/30"
                >
                  <Send size={15} />
                  Solicitar Diagnóstico Gratuito
                </button>

                <p className="text-white/30 text-xs text-center">
                  Al enviar aceptas que un asesor te contacte. Sin spam, sin
                  compromisos.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
