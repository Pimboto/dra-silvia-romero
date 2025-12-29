"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion, AnimatePresence } from "framer-motion";

const resultsData = [
  {
    id: 1,
    title: "Ritidoplastia",
    before: "/img/assets/ritidoplastiabianca.mp4",
    after: "/img/assets/ritidoplastiabianca.mp4",
    description: "Rejuvenecimiento facial natural.",
    isVideo: true
  },
  {
    id: 2,
    title: "Bichectomía",
    before: "/img/assets/bichetomia.mp4",
    after: "/img/assets/bichetomia.mp4",
    description: "Perfilamiento facial y definición de mejillas.",
    isVideo: true
  },
  {
    id: 3,
    title: "Armonización Facial",
    before: "/img/assets/acidoastrid.mp4",
    after: "/img/assets/acidoastrid.mp4",
    description: "Resultados naturales con ácido hialurónico.",
    isVideo: true
  }
];

export const Results = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <span className="font-sans text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Casos de Éxito</span>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Resultados <br /> <span className="text-gold italic">Reales</span></h2>

              <div className="space-y-6 mb-12">
                {resultsData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveIndex(index);
                    }}
                    className={`w-full text-left p-6 border-l-4 rounded-r-[20px] transition-all duration-500 ${activeIndex === index
                        ? "border-gold bg-white/5"
                        : "border-white/10 hover:border-white/30"
                      }`}
                  >
                    <h3 className={`font-serif text-xl mb-1 ${activeIndex === index ? "text-gold" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-400 font-light">{item.description}</p>
                  </button>
                ))}
              </div>


            </motion.div>
          </div>

          {/* Right Slider */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-square w-full bg-neutral-800 overflow-hidden shadow-2xl border border-white/5 rounded-[32px]">
              <div className="relative w-full h-full">
                {/* Video */}
                {resultsData[activeIndex].isVideo ? (
                  <video
                    key={activeIndex}
                    src={resultsData[activeIndex].after}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={resultsData[activeIndex].after}
                    alt={resultsData[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 bg-gold/90 backdrop-blur-md px-6 py-3 text-sm uppercase tracking-widest text-black font-bold rounded-full font-sans">
                  {resultsData[activeIndex].title}
                </div>
              </div>
            </div>
            <p className="font-sans mt-6 text-center text-gray-500 text-xs uppercase tracking-[0.2em]">
              Video de caso real
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
