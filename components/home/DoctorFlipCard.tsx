"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const DoctorFlipCard = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto items-center gap-16 grid grid-cols-1 lg:grid-cols-2">

        {/* 3D Filp Card Component */}
        <div className="group w-full h-[650px] [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl rounded-sm">

            {/* FRONT FACE */}
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=2070&auto=format&fit=crop"
                alt="Dra. Silvia Romero"
                className="w-full h-full object-cover grayscale brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 w-full p-10">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-2 leading-tight">Dra. Silvia <br /> Romero</h3>
                  <p className="text-gold tracking-[0.2em] text-sm uppercase font-semibold">Cirujana Plástica</p>
                </div>
              </div>
            </div>

            {/* BACK FACE */}
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-luxury-black text-white p-12 flex flex-col justify-center border-[1px] border-gold/30">

              {/* Decorative element */}
              <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-gold/40"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-gold/40"></div>

              <div className="text-center mb-10">
                <span className="text-gold text-xs uppercase tracking-[0.3em] block mb-2">Credenciales</span>
                <h3 className="text-3xl font-serif text-white">Excelencia Médica</h3>
                <div className="w-12 h-0.5 bg-gold mx-auto mt-4"></div>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex gap-4 items-start group/item">
                  <span className="text-gold font-serif text-2xl opacity-50 font-bold group-hover/item:opacity-100 transition-opacity">01.</span>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-1">Formación</h4>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">Médica y Cirujana - Universidad Industrial de Santander (UIS).</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <span className="text-gold font-serif text-2xl opacity-50 font-bold group-hover/item:opacity-100 transition-opacity">02.</span>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-1">Especialización</h4>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">Cirugía Plástica, Estética y Reconstructiva.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <span className="text-gold font-serif text-2xl opacity-50 font-bold group-hover/item:opacity-100 transition-opacity">03.</span>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-1">Experiencia</h4>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">+5 Años de trayectoria y más de 400 vidas transformadas con éxito.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block p-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <p className="text-xs text-gold uppercase tracking-widest text-center">Miembro SCCP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content (Static) */}
        <div className="flex flex-col justify-center">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-6 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-gold"></span>
            Filosofía
          </span>

          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-luxury-black leading-[1.1]">
            Pasión por <br /> la <span className="text-gold italic">Perfección</span>
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-gray-600 font-light border-l border-gray-200 pl-8">
            <blockquote className="italic text-gray-800 font-serif text-xl">
              "La belleza no se trata de cambiar quien eres, sino de revelar tu versión más radiante y segura."
            </blockquote>
            <p>
              Entiendo la cirugía plástica como el punto de encuentro exacto entre la ciencia médica rigorosa y la sensibilidad artística. Cada procedimiento es planificado meticulosamente, respetando la anatomía única de cada paciente.
            </p>
          </div>

          <div className="mt-12">
            <Button
              as={Link}
              href="/about"
              className="bg-luxury-black text-white px-10 py-7 rounded-none text-sm uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-xl"
            >
              Leer Biografía Completa
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
