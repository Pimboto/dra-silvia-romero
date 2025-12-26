"use client";

export const TechTicker = () => {
  return (
    <section className="py-16 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 px-6 text-gray-400 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Simple Text Labels as Placeholders for Logos */}
        <h3 className="text-xl md:text-2xl font-serif text-center hover:text-gold transition-colors cursor-default">Implantes Motiva</h3>
        <h3 className="text-xl md:text-2xl font-serif text-center hover:text-gold transition-colors cursor-default">Bodytite</h3>
        <h3 className="text-xl md:text-2xl font-serif text-center hover:text-gold transition-colors cursor-default">Morpheus 8</h3>
        <h3 className="text-xl md:text-2xl font-serif text-center hover:text-gold transition-colors cursor-default">Quirófanos El Tesoro</h3>
      </div>
    </section>
  );
};
