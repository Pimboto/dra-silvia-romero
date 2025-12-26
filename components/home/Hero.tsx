"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 blur-md opacity-40"
        >
          <source src="/vid/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Gradiente suave hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-[5]"></div>

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
