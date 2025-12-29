"use client";

import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-luxury-black text-white pt-20 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif text-gold mb-6 tracking-widest">DRA. SILVIA ROMERO</h2>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Medicina estética y cirugía plástica con un enfoque humano y artístico. Transformamos vidas a través de la belleza responsable.
          </p>
          <div className="flex gap-4">
            <SocialIcon 
              url="https://www.instagram.com/dra.silviaromero/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              style={{ height: 40, width: 40 }}
              bgColor="#000000"
              fgColor="#ffffff"
            />
            <SocialIcon 
              url="https://wa.me/573118324191"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              style={{ height: 40, width: 40 }}
              bgColor="#000000"
              fgColor="#ffffff"
            />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gold font-serif uppercase tracking-widest text-sm mb-6 font-bold">Navegación</h3>
          <ul className="space-y-4">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-gold transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gold font-serif uppercase tracking-widest text-sm mb-6 font-bold">Contacto</h3>
          <div className="space-y-4 text-sm text-gray-400 font-medium">
            <p>C.C. El Tesoro, Torre Médica 2</p>
            <p>Consultorio 1062, Medellín</p>
            <p>+57 311 832 4191</p>
            <p>contacto@drasilviaromero.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
        <p>&copy; {currentYear} Dra. Silvia Romero. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
