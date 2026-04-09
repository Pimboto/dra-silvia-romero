"use client";

export const TechTicker = () => {
  return (
    <section className="relative py-16 border-y border-gray-100 bg-white">
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-neutral-50/80 to-transparent" />

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50/50" />

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 px-6 grayscale hover:grayscale-0 transition-all duration-500 relative z-10">
        <img
          alt="Implantes Motiva"
          className="h-10 md:h-14 object-contain"
          src="/img/technology/Motiva-logo-purple-RGB.png"
        />
        <img
          alt="Bodytite"
          className="h-10 md:h-14 object-contain"
          src="/img/technology/1665005161-bodytite-1.webp"
        />
        <img
          alt="Morpheus 8"
          className="h-10 md:h-14 object-contain"
          src="/img/technology/Morpheus8-Logo.jpg.jpeg"
        />
        <img
          alt="Quirófanos El Tesoro"
          className="h-10 md:h-14 object-contain"
          src="/img/technology/quirofaos.png"
        />
      </div>
    </section>
  );
};
