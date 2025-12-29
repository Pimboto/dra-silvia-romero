"use client";

import { Link } from "@heroui/link";

export const CTA = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CTA Section */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#1a1500] to-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="font-sans text-gold tracking-[0.5em] text-sm font-bold mb-6">
            NO ESPERES MÁS
          </p>
          <h2 className="font-serif text-5xl md:text-8xl font-bold mb-10 leading-tight text-white">
            Empieza Tu <br />
            <span className="text-gold italic">Transformación</span>
          </h2>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-sans font-bold text-white transition-all duration-300 border border-gold hover:border-yellow-400 hover:bg-yellow-900/20"
            >
              <span className="relative tracking-[0.2em] group-hover:text-yellow-400 transition-colors z-10">
                AGENDA TU CITA
              </span>
            </Link>
          </div>
          <p className="font-sans mt-8 text-gray-500 text-sm tracking-widest uppercase">
            Plazas Limitadas Este Mes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-center py-20 border-t border-white/10">
        <p className="font-serif text-gold text-xl md:text-2xl mb-4 tracking-widest">
          EXCELENCIA MÉDICA
        </p>
        <p className="font-sans text-gray-500 text-sm">
           {currentYear} Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
};
