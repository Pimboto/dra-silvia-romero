"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";

import { DoctorBioModal } from "./DoctorBioModal";

import { useLanguage } from "@/context/LanguageContext";

export const DoctorFlipCard = () => {
  const { t } = useLanguage();
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipKey, setFlipKey] = useState(0);

  // Auto-rotate the flip card every 6 seconds, resets when flipKey changes (manual click)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, [flipKey]);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
    setFlipKey((prev) => prev + 1);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-white" id="doctor">
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-luxury-black/10 to-transparent" />

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-50/80" />

      <div className="max-w-7xl mx-auto items-center gap-16 grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* 3D Filp Card Component */}
        <div
          className="group w-full h-[650px] [perspective:1000px] cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={handleCardClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCardClick();
            }
          }}
        >
          <div
            className="relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d]"
            style={{
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* FRONT FACE */}
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-[32px] overflow-hidden">
              <img
                alt="Dra. Silvia Romero"
                className="w-full h-full object-cover grayscale brightness-110"
                src="/img/doc/doctora.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 w-full p-10">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-2 leading-tight">
                    {t.doctor.name} <br /> {t.doctor.surname}
                  </h3>
                  <p className="font-sans text-gold tracking-[0.2em] text-sm uppercase font-semibold">
                    {t.doctor.specialty}
                  </p>
                </div>
              </div>
            </div>

            {/* BACK FACE */}
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-luxury-black text-white p-12 flex flex-col justify-center border-[1px] border-gold/30 rounded-[32px]">
              {/* Decorative element */}
              <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-gold/40" />
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-gold/40" />

              <div className="text-center mb-10">
                <span className="font-sans text-gold text-xs uppercase tracking-[0.3em] block mb-2">
                  {t.doctor.credentials}
                </span>
                <h3 className="font-serif text-3xl text-white">
                  {t.doctor.excellence}
                </h3>
                <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex gap-4 items-start group/item">
                  <span className="font-serif text-gold text-2xl opacity-50 font-bold group-hover:item:opacity-100 transition-opacity">
                    01.
                  </span>
                  <div>
                    <h4 className="font-sans text-white text-sm uppercase tracking-wider font-bold mb-1">
                      {t.doctor.items[0].title}
                    </h4>
                    <p className="font-sans text-gray-400 font-light text-sm leading-relaxed">
                      {t.doctor.items[0].description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <span className="font-serif text-gold text-2xl opacity-50 font-bold group-hover:item:opacity-100 transition-opacity">
                    02.
                  </span>
                  <div>
                    <h4 className="font-sans text-white text-sm uppercase tracking-wider font-bold mb-1">
                      {t.doctor.items[1].title}
                    </h4>
                    <p className="font-sans text-gray-400 font-light text-sm leading-relaxed">
                      {t.doctor.items[1].description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <span className="font-serif text-gold text-2xl opacity-50 font-bold group-hover:item:opacity-100 transition-opacity">
                    03.
                  </span>
                  <div>
                    <h4 className="font-sans text-white text-sm uppercase tracking-wider font-bold mb-1">
                      {t.doctor.items[2].title}
                    </h4>
                    <p className="font-sans text-gray-400 font-light text-sm leading-relaxed">
                      {t.doctor.items[2].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full">
                  <p className="font-sans text-xs text-gold uppercase tracking-widest text-center">
                    {t.doctor.member}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content (Static) */}
        <div className="flex flex-col justify-center">
          <span className="font-sans text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-6 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-gold" />
            {t.doctor.philosophy}
          </span>

          <h2 className="font-serif text-5xl md:text-6xl mb-8 text-luxury-black leading-[1.1]">
            {t.doctor.passion} <br /> {t.doctor.perfection.split(" ")[0]}{" "}
            <span className="text-gold italic">
              {t.doctor.perfection.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-gray-600 font-sans font-light border-l border-gray-200 pl-8">
            <p>{t.doctor.bio}</p>
          </div>

          <div className="mt-12">
            <Button
              className="font-sans bg-luxury-black text-white px-10 py-7 rounded-full text-sm uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-xl"
              onClick={() => setIsBioModalOpen(true)}
            >
              {t.doctor.readMore}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de Biografía */}
      <DoctorBioModal
        isOpen={isBioModalOpen}
        onClose={() => setIsBioModalOpen(false)}
      />
    </section>
  );
};
