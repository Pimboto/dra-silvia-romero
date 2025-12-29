"use client";

export const TechTicker = () => {
  return (
    <section className="relative py-16 border-y border-gray-100 bg-white">
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-neutral-50/80 to-transparent"></div>
      
      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50/50"></div>
      
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 px-6 text-gray-400 grayscale hover:grayscale-0 transition-all duration-500 relative z-10">
        {/* Simple Text Labels as Placeholders for Logos */}
        <h3 className="font-sans text-xl md:text-2xl text-center hover:text-gold transition-colors cursor-default">Implantes Motiva</h3>
        <h3 className="font-sans text-xl md:text-2xl text-center hover:text-gold transition-colors cursor-default">Bodytite</h3>
        <h3 className="font-sans text-xl md:text-2xl text-center hover:text-gold transition-colors cursor-default">Morpheus 8</h3>
        <h3 className="font-sans text-xl md:text-2xl text-center hover:text-gold transition-colors cursor-default">Quirófanos El Tesoro</h3>
      </div>
    </section>
  );
};
