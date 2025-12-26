"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const DoctorFlipCard = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Flip Card Container */}
        <div className="group w-full md:w-1/2 h-[750px] perspective-1000">
          <div className="relative w-full h-full transition-all duration-1000 transform style-preserve-3d group-hover:rotate-y-180 shadow-2xl">
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=2070&auto=format&fit=crop"
                alt="Dra. Silvia Romero"
                className="w-full h-full object-cover grayscale brightness-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h3 className="text-4xl font-serif text-white mb-1">Dra. Silvia Romero</h3>
                <p className="text-gold tracking-widest text-sm uppercase font-semibold">Cirujana Plástica Estética y Reconstructiva</p>
                <p className="text-gray-300 text-sm mt-4 opacity-80 italic">"La belleza es un estado de equilibrio"</p>
              </div>
            </div>
            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-luxury-black p-12 flex flex-col justify-center text-center border-[12px] border-double border-gold/20">
              <div className="mb-8">
                <h3 className="text-3xl font-serif text-white mb-2">Dra. Silvia Romero</h3>
                <div className="h-0.5 w-16 bg-gold mx-auto my-4"></div>
                <p className="text-gold text-xs uppercase tracking-[0.2em]">Trayectoria & Excelencia</p>
              </div>

              <div className="space-y-8 text-white/80 font-serif text-lg">
                <div>
                  <h4 className="text-gold text-sm uppercase tracking-widest mb-1">Formación Académica</h4>
                  <p className="font-light">Medica Cirujana - Universidad Industrial de Santander</p>
                  <p className="font-light text-sm mt-1">Especialista en Cirugía Plástica, Estética y Reconstructiva</p>
                </div>
                <div>
                  <h4 className="text-gold text-sm uppercase tracking-widest mb-1">Experiencia Clínica</h4>
                  <p className="font-light">+5 años dedicados al arte de la cirugía</p>
                  <p className="font-light">+400 procedimientos exitosos</p>
                </div>
                <div>
                  <h4 className="text-gold text-sm uppercase tracking-widest mb-1">Ubicación Exclusiva</h4>
                  <p className="font-light">Centro Comercial El Tesoro</p>
                  <p className="font-light">Torre Médica 2, Consultorio 1062</p>
                  <p className="font-light text-sm text-gray-400">Medellín, Colombia</p>
                </div>
                <div>
                  <h4 className="text-gold text-sm uppercase tracking-widest mb-1">Certificaciones</h4>
                  <p className="font-light text-sm">Miembro de Número - SCCP</p>
                  <p className="font-light text-sm">Preservé Motiva Certified Surgeon</p>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  as={Link}
                  href="/about"
                  variant="bordered"
                  className="border-gold text-gold hover:bg-gold hover:text-black rounded-none uppercase tracking-widest text-xs px-6 py-4"
                >
                  Perfil Completo
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">Filosofía</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-luxury-black leading-tight">
            Pasión por <br /> la <span className="text-gold">Perfección</span>
          </h2>
          <div className="space-y-6 text-xl leading-relaxed text-gray-600 font-light">
            <p>
              "La belleza no se trata de cambiar quien eres, sino de revelar tu versión más radiante y segura. Entiendo la cirugía plástica como el punto de encuentro exacto entre la ciencia médica rigorosa y la sensibilidad artística."
            </p>
            <p>
              Cada procedimiento es planificado meticulosamente, respetando la anatomía única de cada paciente para esculpir resultados que no solo se ven naturales, sino que armonizan con tu esencia.
            </p>
          </div>
          <Button
            as={Link}
            href="/about"
            variant="light"
            className="mt-10 text-gold text-lg uppercase tracking-wider font-semibold border-b border-gold rounded-none px-0 pb-1 hover:opacity-70 transition-opacity"
            disableRipple
          >
            Conoce más sobre mí
          </Button>
        </div>
      </div>
    </section>
  );
};
