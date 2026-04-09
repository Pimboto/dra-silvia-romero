"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

const LOOP_COUNTS: Record<number, number> = {
  3: 5, // Abdominoplastia
  7: 5, // Abdomen
};
const DEFAULT_LOOP_COUNT = 3;

// Seconds to hold on the final frame before advancing
const HOLD_DURATION: Record<number, number> = {
  3: 3000, // Abdominoplastia - 3s extra on final frame
  7: 3000, // Abdomen - 3s extra on final frame
};
const DEFAULT_HOLD = 1500;

const getMaxLoops = (index: number): number =>
  LOOP_COUNTS[index] ?? DEFAULT_LOOP_COUNT;
const getHoldDuration = (index: number): number =>
  HOLD_DURATION[index] ?? DEFAULT_HOLD;

export const Results = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotationStopped, setAutoRotationStopped] = useState(false);
  const playCountRef = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const resultsData = [
    {
      id: 7,
      title: t.results.cases[0].title,
      before: "/vid/implantacion-mamaria.mp4",
      after: "/vid/implantacion-mamaria.mp4",
      description: t.results.cases[0].description,
      isVideo: true,
    },
    {
      id: 1,
      title: t.results.cases[1].title,
      before: "/img/assets/ritidoplastiabianca.mp4",
      after: "/img/assets/ritidoplastiabianca.mp4",
      description: t.results.cases[1].description,
      isVideo: true,
    },
    {
      id: 2,
      title: t.results.cases[2].title,
      before: "/img/assets/acidoastrid.mp4",
      after: "/img/assets/acidoastrid.mp4",
      description: t.results.cases[2].description,
      isVideo: true,
    },
    {
      id: 3,
      title: t.results.cases[3].title,
      before: "/vid/abdomyno.mp4",
      after: "/vid/abdomyno.mp4",
      description: t.results.cases[3].description,
      isVideo: true,
    },
    {
      id: 4,
      title: t.results.cases[4].title,
      before: "/vid/cervicoplastia.mp4",
      after: "/vid/cervicoplastia.mp4",
      description: t.results.cases[4].description,
      isVideo: true,
    },
    {
      id: 5,
      title: t.results.cases[5].title,
      before: "/vid/explantacion-mamaria.mp4",
      after: "/vid/explantacion-mamaria.mp4",
      description: t.results.cases[5].description,
      isVideo: true,
    },
    {
      id: 6,
      title: t.results.cases[6].title,
      before: "/vid/gluteos.mp4",
      after: "/vid/gluteos.mp4",
      description: t.results.cases[6].description,
      isVideo: true,
    },
    {
      id: 8,
      title: t.results.cases[7].title,
      before: "/vid/abdomen.mp4",
      after: "/vid/abdomen.mp4",
      description: t.results.cases[7].description,
      isVideo: true,
    },
  ];

  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleVideoEnded = useCallback(() => {
    const hold = getHoldDuration(activeIndex);

    // Always hold on final frame before doing anything
    holdTimerRef.current = setTimeout(() => {
      if (autoRotationStopped) {
        // Manual mode: just replay after hold
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      } else {
        // Auto-rotation mode
        playCountRef.current += 1;
        const maxLoops = getMaxLoops(activeIndex);

        if (playCountRef.current >= maxLoops) {
          playCountRef.current = 0;
          setActiveIndex((prev) => (prev + 1) % resultsData.length);
        } else {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
          }
        }
      }
    }, hold);
  }, [activeIndex, autoRotationStopped, resultsData.length]);

  const handleUserClick = useCallback((index: number) => {
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    setAutoRotationStopped(true);
    playCountRef.current = 0;
    setActiveIndex(index);
  }, []);

  return (
    <section
      className="relative py-32 px-6 md:px-12 bg-luxury-black text-white overflow-hidden"
      id="results"
    >
      {/* Degradado superior desde Services */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-xl" />

      {/* Degradado inferior hacia DoctorFlipCard */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-white/10 to-white/30 blur-xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="font-sans text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                {t.results.tag}
              </span>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
                {t.results.title} <br />{" "}
                <span className="text-gold italic font-serif">
                  {t.results.subtitle}
                </span>
              </h2>

              <div className="grid grid-cols-2 gap-3 mb-12">
                {resultsData.map((item, index) => (
                  <button
                    key={item.id}
                    className={`w-full text-left p-4 border-l-4 rounded-r-[20px] transition-all duration-500 ${
                      activeIndex === index
                        ? "border-gold bg-white/5"
                        : "border-white/10 hover:border-white/30"
                    }`}
                    onClick={() => handleUserClick(index)}
                  >
                    <h3
                      className={`font-serif text-sm md:text-base mb-1 ${activeIndex === index ? "text-gold" : "text-white"}`}
                    >
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-light">
                      {item.description}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Slider */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-square w-full bg-neutral-800 overflow-hidden shadow-2xl border border-white/5 rounded-[32px]">
              <div className="relative w-full h-full">
                {resultsData[activeIndex].isVideo ? (
                  <video
                    key={activeIndex}
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    loop={false}
                    src={resultsData[activeIndex].after}
                    onEnded={handleVideoEnded}
                  />
                ) : (
                  <img
                    alt={resultsData[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={resultsData[activeIndex].after}
                  />
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 bg-gold/90 backdrop-blur-md px-6 py-3 text-sm uppercase tracking-widest text-black font-bold rounded-full font-sans">
                  {resultsData[activeIndex].title}
                </div>
              </div>
            </div>
            <p className="font-sans mt-6 text-center text-gray-500 text-xs uppercase tracking-[0.2em]">
              {t.results.videoLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
