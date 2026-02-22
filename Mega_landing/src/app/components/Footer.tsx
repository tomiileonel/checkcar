import { Phone, MessageSquare, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logoImg from "figma:asset/29bab2bcba20f691b775934ed2e254663a5ae026.png";

const services = [
  "Diagnóstico Computarizado",
  "Mecánica General & Motor",
  "Alineación & Balanceo",
  "Electricidad Automotriz",
  "Sistema de Frenos",
  "Aire Acondicionado",
  "Revisión Técnico-Mecánica",
  "Transmisión & Caja",
];

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050510] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoImg}
              alt="CheckCar"
              className="h-14 w-auto object-contain mb-5"
              style={{ filter: "brightness(1.1)" }}
            />
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Taller mecánico integral de alta gama. Desarrollado con 9 meses
              de investigación de mercado para ofrecerte el mejor servicio
              automotriz de Colombia.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:border-[#CC0000] hover:bg-[#CC0000]/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-[0.15em]"
              style={{ fontWeight: 600 }}
            >
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/45 text-sm hover:text-[#CC0000] transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-[0.15em]"
              style={{ fontWeight: 600 }}
            >
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-white/45 text-sm hover:text-[#CC0000] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#CC0000] rounded-full flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-[0.15em]"
              style={{ fontWeight: 600 }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+573001234567"
                  className="flex items-start gap-3 text-white/45 hover:text-white transition-colors group"
                >
                  <Phone size={15} className="text-[#CC0000] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">+57 300 123 4567</div>
                    <div className="text-xs text-white/25">Lun - Sáb: 7am - 6pm</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573001234567"
                  className="flex items-start gap-3 text-white/45 hover:text-white transition-colors"
                >
                  <MessageSquare size={15} className="text-[#CC0000] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">WhatsApp Directo</div>
                    <div className="text-xs text-white/25">Respuesta inmediata</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/45">
                  <MapPin size={15} className="text-[#CC0000] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">Calle 45 #23-10</div>
                    <div className="text-xs text-white/25">Bogotá, Colombia</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 CheckCar. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidad", "Términos de Servicio"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 text-xs hover:text-white/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
