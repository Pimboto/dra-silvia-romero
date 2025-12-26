"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Placeholder for Video Background */}
      <div className="absolute inset-0 bg-neutral-900/50 z-0">
        <div className="w-full h-full opacity-30 bg-gradient-to-b from-black/20 via-black/40 to-black/80">
          {/* Simulated Video Element */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1519681393798-3828fb4090bb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay opacity-40"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-tight">
          Arte y Ciencia <br />
          <span className="text-gold italic">para tu Transformación</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-sans tracking-wide max-w-2xl mx-auto mb-10">
          Medicina estética de alta gama donde la precisión médica se encuentra con la armonía artística.
        </p>
        <Button
          as={Link}
          href="/contact"
          variant="solid"
          radius="none"
          className="bg-gold text-luxury-black font-semibold text-lg px-10 py-8 hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_-5px_var(--color-gold)]"
        >
          Descubre tu mejor versión
        </Button>
      </div>
    </section>
  );
};
