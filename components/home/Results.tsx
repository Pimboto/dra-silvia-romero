"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const Results = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Galería</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Resultados <br /> <span className="text-gold/80 italic">Reales</span></h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed">
            Cada paciente es una obra única. Explora nuestra galería de transformaciones y visualiza lo que podemos lograr juntos.
          </p>
          <Button
            as={Link}
            href="/results"
            variant="bordered"
            radius="none"
            className="border-gold text-gold hover:bg-gold hover:text-black font-semibold text-lg px-8 py-6 uppercase tracking-wider"
          >
            Ver Galería Completa
          </Button>
        </div>
        <div className="relative h-[600px] w-full grid grid-cols-6 grid-rows-6 gap-2">
          {/* Main Placeholder Image instead of Video */}
          <div className="col-span-4 row-span-6 bg-neutral-800 rounded-sm overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Result 1" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
          {/* Secondary Images */}
          <div className="col-span-2 row-span-3 bg-neutral-800 rounded-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Result 2" />
          </div>
          <div className="col-span-2 row-span-3 bg-neutral-800 rounded-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Result 3" />
          </div>
        </div>
      </div>
    </section>
  );
};
