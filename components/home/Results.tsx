"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion, AnimatePresence } from "framer-motion";

const resultsData = [
  {
    id: 1,
    title: "Abdominoplastia",
    before: "/img/after-before/antes-abdominoplastia.jpeg",
    after: "/img/after-before/Abdominoplastia.jpeg",
    description: "Definición abdominal y eliminación de flacidez."
  },
  {
    id: 2,
    title: "Armonización Facial",
    before: "/img/after-before/antes-acido.jpeg",
    after: "/img/after-before/acido.jpeg",
    description: "Resultados naturales con ácido hialurónico."
  },
  {
    id: 3,
    title: "Bichectomía",
    before: "/img/after-before/antes-bichetomia.jpeg",
    after: "/img/after-before/Bichetomia.jpeg",
    description: "Perfilamiento facial y definición de mejillas."
  }
];

export const Results = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="relative py-32 px-6 md:px-12 bg-luxury-black text-white overflow-hidden">
      {/* Degradado superior desde Services */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-xl"></div>
      
      {/* Degradado inferior hacia DoctorFlipCard */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-white/10 to-white/30 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Casos de Éxito</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Resultados <br /> <span className="text-gold italic">Reales</span></h2>

              <div className="space-y-6 mb-12">
                {resultsData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveIndex(index);
                      setSliderPos(50);
                    }}
                    className={`w-full text-left p-6 border-l-2 transition-all duration-500 ${activeIndex === index
                        ? "border-gold bg-white/5"
                        : "border-white/10 hover:border-white/30"
                      }`}
                  >
                    <h3 className={`text-xl font-serif mb-1 ${activeIndex === index ? "text-gold" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light">{item.description}</p>
                  </button>
                ))}
              </div>

              <Button
                as={Link}
                href="/results"
                className="bg-gold text-luxury-black px-10 py-7 rounded-none text-sm uppercase tracking-widest font-bold hover:bg-white transition-all shadow-xl"
              >
                Ver Galería Completa
              </Button>
            </motion.div>
          </div>

          {/* Right Slider */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-square w-full bg-neutral-800 overflow-hidden shadow-2xl border border-white/5">
              <div
                className="relative w-full h-full cursor-col-resize select-none"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
              >
                {/* After Image (Base) */}
                <img
                  src={resultsData[activeIndex].after}
                  alt="Después"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Overlay) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img
                    src={resultsData[activeIndex].before}
                    alt="Antes"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
                  />
                  <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-4 py-1 text-[10px] uppercase tracking-widest border border-white/10">
                    Antes
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-gold/80 backdrop-blur-md px-4 py-1 text-[10px] uppercase tracking-widest text-black font-bold">
                  Después
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-gold z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-2xl">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-500 text-xs uppercase tracking-[0.2em]">
              Desliza para comparar el cambio
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
