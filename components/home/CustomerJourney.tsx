"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Calendar, MagicStar, TickCircle } from "iconsax-reactjs";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const CustomerJourney = () => {
  const { t } = useLanguage();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const headerRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      tag: t.journey.steps[0].tag,
      title: t.journey.steps[0].title,
      subtitle: t.journey.steps[0].subtitle,
      description: t.journey.steps[0].description,
      icon: User,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      number: "02",
      tag: t.journey.steps[1].tag,
      title: t.journey.steps[1].title,
      subtitle: t.journey.steps[1].subtitle,
      description: t.journey.steps[1].description,
      icon: Calendar,
      image: "/img/procedimientos/Pre-operative-preparation-768x512.webp"
    },
    {
      number: "03",
      tag: t.journey.steps[2].tag,
      title: t.journey.steps[2].title,
      subtitle: t.journey.steps[2].subtitle,
      description: t.journey.steps[2].description,
      icon: MagicStar,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop"
    },
    {
      number: "04",
      tag: t.journey.steps[3].tag,
      title: t.journey.steps[3].title,
      subtitle: t.journey.steps[3].subtitle,
      description: t.journey.steps[3].description,
      icon: TickCircle,
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          }
        });
      }

      // Step animations
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const isEven = index % 2 === 0;
        const content = section.querySelector('.step-content');
        const imageContainer = section.querySelector('.step-image');
        const number = section.querySelector('.step-number');

        // Content reveal
        if (content) {
          gsap.fromTo(content,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
              }
            }
          );
        }

        // Image reveal
        if (imageContainer) {
          gsap.fromTo(imageContainer,
            { scale: 0.8, opacity: 0, rotationY: isEven ? 15 : -15 },
            {
              scale: 1,
              opacity: 1,
              rotationY: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
              }
            }
          );
        }

        // Number parallax
        if (number) {
          gsap.to(number, {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, [steps]); // Added steps dependency

  return (
    <section id="journey" className="relative bg-luxury-black text-white overflow-hidden">
      {/* Intro Header */}
      <header
        ref={headerRef}
        className="min-h-[60vh] flex flex-col items-center justify-center relative z-10 text-center px-4 py-24"
      >
        <p className="font-sans text-sm md:text-base tracking-[0.5em] uppercase text-gray-400 mb-6">
          {t.journey.intro}
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 leading-none">
          {t.journey.title} <span className="text-gold italic font-serif">{t.journey.subtitle}</span>
        </h1>
        <div className="w-px h-24 bg-gradient-to-b from-gold to-transparent mt-10"></div>
      </header>

      {/* Steps */}
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const Icon = step.icon;

        return (
          <section
            key={step.number}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="relative min-h-screen flex items-center justify-center border-b border-white/5 py-24"
          >
            {/* Background Image with Parallax */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('${step.image}')`,
                transform: 'translateZ(0)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/90 via-luxury-black/70 to-luxury-black/90" />

            <div className="container mx-auto px-6 relative z-10">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`step-content relative ${isEven ? 'order-2 md:order-1' : 'order-2'}`}>
                  {/* Large Background Number */}
                  <span className="step-number absolute text-[15rem] font-bold font-serif opacity-5 -z-10 select-none"
                    style={{
                      left: isEven ? '-50px' : 'auto',
                      right: isEven ? 'auto' : '-50px',
                      top: '-80px',
                      WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                      color: 'transparent',
                    }}
                  >
                    {step.number}
                  </span>

                  <div className={isEven ? '' : 'md:pl-12'}>
                    <h3 className="font-sans text-gold tracking-[0.3em] text-sm font-bold mb-2">
                      {step.tag}
                    </h3>
                    <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                      {step.title}
                      {step.subtitle && (
                        <>
                          <br />
                          <span className="font-light italic text-gray-300 font-serif">{step.subtitle}</span>
                        </>
                      )}
                    </h2>
                    <div className={`w-16 h-1 bg-gold mb-8 ${isEven ? '' : 'ml-auto md:ml-0'}`}></div>
                    <p className="font-sans text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-md">
                      {step.description}
                    </p>

                    {/* Icon */}
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                        <Icon size={24} variant="Bold" className="text-gold" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`step-image ${isEven ? 'order-1 md:order-2' : 'order-1'} flex ${isEven ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                  <div
                    className="relative p-2 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-gold/10 rounded-lg shadow-2xl transform hover:rotate-0 transition-transform duration-700 w-full max-w-md"
                    style={{ transform: `rotate(${isEven ? '2deg' : '-2deg'})` }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[400px] object-cover rounded grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};
