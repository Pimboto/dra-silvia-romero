"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowDown2 } from "iconsax-reactjs";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="min-w-full min-h-full object-cover opacity-50"
        >
          <source src="/vid/hero/hero new.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-tight">
          {t.hero.title} <br />
          <span className="text-gold italic">{t.hero.subtitle}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-sans tracking-wide max-w-2xl mx-auto mb-10">
          {t.hero.description}
        </p>
        <Button
          as={Link}
          href="https://wa.me/573118324191"
          variant="solid"
          radius="full"
          className="bg-gold text-luxury-black font-semibold text-lg px-10 py-8 hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_-5px_var(--color-gold)] rounded-full"
        >
          {t.hero.cta}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-gold transition-colors duration-300 cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">{t.hero.scroll}</span>
        <div className="animate-bounce">
          <ArrowDown2 size={28} variant="Bold" className="group-hover:text-gold transition-colors" />
        </div>
      </button>
    </section>
  );
};
