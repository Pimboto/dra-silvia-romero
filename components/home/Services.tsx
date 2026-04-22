"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

import { useLanguage } from "@/context/LanguageContext";

type Procedure = {
  title: string;
  description: string;
  recovery: string;
  notes: string[];
  image?: string;
};

type ProceduresData = {
  [key: string]: Procedure[];
};

export const Services = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("");

  const proceduresData: ProceduresData = {
    [t.services.categories.body]: [
      {
        title: t.services.procedures.lipo.title,
        description: t.services.procedures.lipo.description,
        recovery: t.services.procedures.lipo.recovery,
        image: "/img/procedimientos/lipoescultura.webp",
        notes: t.services.procedures.lipo.notes,
      },
      {
        title: t.services.procedures.abdominoplasty.title,
        description: t.services.procedures.abdominoplasty.description,
        recovery: t.services.procedures.abdominoplasty.recovery,
        image: "/img/after-before/Abdominoplastia.jpeg",
        notes: t.services.procedures.abdominoplasty.notes,
      },
      {
        title: t.services.procedures.gluteoplasty.title,
        description: t.services.procedures.gluteoplasty.description,
        recovery: t.services.procedures.gluteoplasty.recovery,
        image: "/img/procedimientos/gluteoplastia.jpg",
        notes: t.services.procedures.gluteoplasty.notes,
      },
    ],
    [t.services.categories.breast]: [
      {
        title: t.services.procedures.breastAug.title,
        description: t.services.procedures.breastAug.description,
        recovery: t.services.procedures.breastAug.recovery,
        image: "/img/procedimientos/aumentosenosimplantes.webp",
        notes: t.services.procedures.breastAug.notes,
      },
      {
        title: t.services.procedures.mastopexy.title,
        description: t.services.procedures.mastopexy.description,
        recovery: t.services.procedures.mastopexy.recovery,
        image: "/img/procedimientos/mastopexia.webp",
        notes: t.services.procedures.mastopexy.notes,
      },
      {
        title: t.services.procedures.explantation.title,
        description: t.services.procedures.explantation.description,
        recovery: t.services.procedures.explantation.recovery,
        image: "/img/procedimientos/explantacion-mamaria.jpg",
        notes: t.services.procedures.explantation.notes,
      },
      {
        title: t.services.procedures.breastRed.title,
        description: t.services.procedures.breastRed.description,
        recovery: t.services.procedures.breastRed.recovery,
        image: "/img/procedimientos/reduccionmamaria.jpg",
        notes: t.services.procedures.breastRed.notes,
      },
    ],
    [t.services.categories.face]: [
      {
        title: t.services.procedures.facelift.title,
        description: t.services.procedures.facelift.description,
        recovery: t.services.procedures.facelift.recovery,
        image: "/img/procedimientos/riditoplastia.jpg",
        notes: t.services.procedures.facelift.notes,
      },
      {
        title: t.services.procedures.blepharoplasty.title,
        description: t.services.procedures.blepharoplasty.description,
        recovery: t.services.procedures.blepharoplasty.recovery,
        image: "/img/procedimientos/blefaroplastia.jpg",
        notes: t.services.procedures.blepharoplasty.notes,
      },
      {
        title: t.services.procedures.frontoplasty.title,
        description: t.services.procedures.frontoplasty.description,
        recovery: t.services.procedures.frontoplasty.recovery,
        image: "/img/procedimientos/frontoplastia.png",
        notes: t.services.procedures.frontoplasty.notes,
      },
      {
        title: t.services.procedures.rhinoplasty.title,
        description: t.services.procedures.rhinoplasty.description,
        recovery: t.services.procedures.rhinoplasty.recovery,
        image: "/img/procedimientos/rinoplastia.jpg",
        notes: t.services.procedures.rhinoplasty.notes,
      },
      {
        title: t.services.procedures.facialImplants.title,
        description: t.services.procedures.facialImplants.description,
        recovery: t.services.procedures.facialImplants.recovery,
        image: "/img/procedimientos/armonizacionfacialconimplantes.jpg",
        notes: t.services.procedures.facialImplants.notes,
      },
    ],
    [t.services.categories.intimate]: [
      {
        title: t.services.procedures.vaginal.title,
        description: t.services.procedures.vaginal.description,
        recovery: t.services.procedures.vaginal.recovery,
        image: "/img/procedimientos/rejuvenecimiento-vaginal.jpg",
        notes: t.services.procedures.vaginal.notes,
      },
    ],
    [t.services.categories.nonSurgical]: [
      {
        title: t.services.procedures.botox.title,
        description: t.services.procedures.botox.description,
        recovery: t.services.procedures.botox.recovery,
        image: "/img/procedimientos/botox.jpg",
        notes: t.services.procedures.botox.notes,
      },
      {
        title: t.services.procedures.hyaluronic.title,
        description: t.services.procedures.hyaluronic.description,
        recovery: t.services.procedures.hyaluronic.recovery,
        image: "/img/procedimientos/acidohialuronico1.png",
        notes: t.services.procedures.hyaluronic.notes,
      },
      {
        title: t.services.procedures.lips.title,
        description: t.services.procedures.lips.description,
        recovery: t.services.procedures.lips.recovery,
        image: "/img/procedimientos/definiciondelabios.png",
        notes: t.services.procedures.lips.notes,
      },
      {
        title: t.services.procedures.biostimulators.title,
        description: t.services.procedures.biostimulators.description,
        recovery: t.services.procedures.biostimulators.recovery,
        image: "/img/procedimientos/bioestimuladoresdecolageno.webp",
        notes: t.services.procedures.biostimulators.notes,
      },
    ],
  };

  useEffect(() => {
    setActiveTab(t.services.categories.face);
  }, [t]);

  const handleTabChange = (tab: string) => {
    const grid = document.getElementById("procedures-grid");

    if (grid) {
      // Fade out
      gsap.to(grid, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setActiveTab(tab);
          // Fade in will happen in useEffect
        },
      });
    } else {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    const grid = document.getElementById("procedures-grid");

    if (grid) {
      gsap.to(grid, { opacity: 1, duration: 0.3 });
      gsap.from("#procedures-grid .flip-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [activeTab]);

  if (!activeTab) return null;

  return (
    <section
      className="relative py-32 bg-luxury-black border-t border-white/5"
      id="services"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="font-sans text-gold tracking-[0.3em] text-sm font-bold block mb-4">
          {t.services.tag}
        </span>
        <h2 className="font-serif text-4xl md:text-7xl font-bold mb-4 text-white">
          {t.services.title}{" "}
          <span className="text-gold italic font-serif">
            {t.services.subtitle}
          </span>
        </h2>
        <div className="w-24 h-px bg-gold mx-auto mt-8" />
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 border-b border-white/10 pb-4">
          {Object.keys(proceduresData).map((category) => (
            <button
              key={category}
              className={`font-sans text-sm md:text-lg uppercase tracking-widest font-bold px-4 py-2 cursor-pointer transition-all duration-300 ${
                activeTab === category
                  ? "text-gold border-b-2 border-gold"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              onClick={() => handleTabChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-6">
        <div
          className={`grid gap-8 min-h-[500px] ${
            proceduresData[activeTab]?.length === 4
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
          id="procedures-grid"
        >
          {proceduresData[activeTab]?.map((procedure, index) => (
            <FlipCard key={index} procedure={procedure} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FlipCard({ procedure }: { procedure: Procedure }) {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card h-[500px] w-full cursor-pointer group"
      role="button"
      style={{ perspective: "1000px" }}
      tabIndex={0}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div
        className="flip-card-inner w-full h-full relative transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d" as any,
          // transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="flip-card-front absolute inset-0 rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Background Image */}
          {procedure.image && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${procedure.image})` }}
            />
          )}

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-luxury-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full backdrop-blur-sm border border-gold/10 rounded-lg p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-white text-center">
                {procedure.title}
              </h3>

              <div className="mb-4">
                <h4 className="font-sans text-gold text-xs uppercase tracking-widest font-bold mb-2">
                  {t.services.labels.description}
                </h4>
                <p className="font-sans text-gray-300 text-sm leading-relaxed">
                  {procedure.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-sans text-gold text-xs uppercase tracking-widest font-bold mb-2">
                  {t.services.labels.recovery}
                </h4>
                <p className="font-sans text-gray-300 text-sm leading-relaxed">
                  {procedure.recovery}
                </p>
              </div>
            </div>

            {/* <button
              className="font-sans text-gold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-white transition-colors self-center mt-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
            >
              {t.services.labels.more}
            </button> */}
          </div>
        </div>

        {/* Back */}
        <div
          className="flip-card-back absolute inset-0 bg-gradient-to-br from-gold/20 to-luxury-black/80 backdrop-blur-md border border-gold/30 rounded-lg p-6 flex flex-col justify-between overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="font-serif text-lg text-gold mb-4 text-center">
              {procedure.title}
            </h3>

            <h4 className="font-sans text-white text-xs uppercase tracking-widest font-bold mb-3">
              {t.services.labels.patientNotes}
            </h4>

            <ul className="space-y-3">
              {procedure.notes.map((note, index) => (
                <li
                  key={index}
                  className="font-sans text-gray-300 text-sm leading-relaxed flex items-start"
                >
                  <span className="text-gold mr-2 flex-shrink-0">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="font-sans text-white bg-white/10 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white/20 transition-all self-center mt-4"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            {t.services.labels.back}
          </button>
        </div>
      </div>
    </div>
  );
}
