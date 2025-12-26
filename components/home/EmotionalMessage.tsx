"use client";

export const EmotionalMessage = () => {
  return (
    <section className="relative py-32 px-6 bg-neutral-50 flex items-center justify-center">
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
      
      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/80"></div>
      
      <div className="max-w-4xl text-center relative z-10">
        <span className="text-9xl text-gold/20 font-serif absolute -top-16 -left-10 select-none">“</span>
        <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-luxury-black">
          Conmigo tú eres la protagonista de esta historia... mi propósito es poner mi experticia y arte a tu disposición... logrando una transformación de <span className="italic text-gold">cuerpo, mente y espíritu.</span>
        </p>
        <span className="text-9xl text-gold/20 font-serif absolute -bottom-24 -right-10 select-none">”</span>
      </div>
    </section>
  );
};
