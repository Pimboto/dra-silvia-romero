"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface DoctorBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Multiple images per tab for auto-slideshow
const TAB_IMAGE_SETS = [
  ["/img/doc/docimages/IMG_7209.jpeg", "/img/doc/docimages/IMG_9542.jpeg", "/img/doc/docimages/photo-output.jpeg"],
  ["/img/doc/docimages/IMG_8381.jpeg", "/img/doc/docimages/IMG_7248.jpeg"],
  ["/img/doc/docimages/IMG_7228.jpeg", "/img/doc/docimages/IMG_8058.jpeg"],
  [
    "/img/trainings/Abdominoplastia mastopexia Dr Saldanha brasil.jpg",
    "/img/trainings/Armonización facial con implantes Brasil.jpg",
    "/img/trainings/Congreso seguridad del paciente.jpg",
    "/img/trainings/Liftin facial Nora Stanford.jpg",
    "/img/trainings/Medellin Health City.jpeg",
    "/img/trainings/Rejuvenecimiento íntimo.JPG",
    "/img/trainings/Rinoplastia Brasil Dr Nakamura.JPG",
    "/img/trainings/Rinoplastia Dr Juan Diego Mejía.jpeg",
    "/img/trainings/Ritidoplastia Turkia.jpeg",
  ],
];

const KEN_BURNS_CLASSES = ["animate-ken-burns-0", "animate-ken-burns-1", "animate-ken-burns-2"];

export const DoctorBioModal = ({ isOpen, onClose }: DoctorBioModalProps) => {
  const { t } = useLanguage();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [autoKey, setAutoKey] = useState(0);
  const [modalEntered, setModalEntered] = useState(false);
  const isTransitioningRef = useRef(false);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setActiveTabIndex(0);
      setIsContentVisible(true);
      setIsImageVisible(true);
      setImageIndex(0);
      setAutoKey(0);
      setModalEntered(false);
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setModalEntered(true));
      });
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Auto-rotate images every 4s
  useEffect(() => {
    if (!isOpen) return;
    const images = TAB_IMAGE_SETS[activeTabIndex];
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setIsImageVisible(false);
      setTimeout(() => {
        setImageIndex(prev => (prev + 1) % images.length);
        setIsImageVisible(true);
        isTransitioningRef.current = false;
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, activeTabIndex, autoKey]);

  const switchTab = useCallback((index: number) => {
    if (index === activeTabIndex) return;
    setIsContentVisible(false);
    setIsImageVisible(false);
    setTimeout(() => {
      setActiveTabIndex(index);
      setImageIndex(0);
      setIsContentVisible(true);
      setIsImageVisible(true);
    }, 250);
  }, [activeTabIndex]);

  const handleTrainingClick = (index: number) => {
    if (index === imageIndex) return;
    isTransitioningRef.current = true;
    setIsImageVisible(false);
    setTimeout(() => {
      setImageIndex(index);
      setAutoKey(prev => prev + 1);
      setIsImageVisible(true);
      isTransitioningRef.current = false;
    }, 300);
  };

  const tabLabels = [
    t.doctorModal.tabs.info,
    t.doctorModal.tabs.certificates,
    t.doctorModal.tabs.technology,
    t.doctorModal.tabs.training,
  ];

  const currentImages = TAB_IMAGE_SETS[activeTabIndex] || TAB_IMAGE_SETS[0];
  const safeImageIndex = imageIndex % currentImages.length;
  const currentImage = currentImages[safeImageIndex];

  const certIcons = [
    <svg key="grad" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>,
    <svg key="award" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 11h-.5A3.375 3.375 0 009 14.25v4.5m3.75-12V3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V6.75" /></svg>,
    <svg key="shield" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
    <svg key="check" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
  ];

  const renderContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <div className="flex flex-col h-full">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-1">{t.doctorModal.info.title}</h3>
              <h4 className="text-gold font-sans tracking-widest text-xs uppercase mb-4">{t.doctorModal.info.subtitle}</h4>
              <p className="mb-3 text-gray-300 font-sans font-light leading-relaxed text-sm">
                {t.doctorModal.info.description1}
              </p>
              <p className="mb-4 text-gray-300 font-sans font-light leading-relaxed text-sm">
                {t.doctorModal.info.description2}
              </p>
              <ul className="space-y-2 text-sm text-gray-400 font-sans">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></span>
                  <span><strong className="text-white">{t.doctorModal.info.locationLabel}:</strong> {t.doctorModal.info.locationValue}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></span>
                  <span><strong className="text-white">{t.doctorModal.info.officeLabel}:</strong> {t.doctorModal.info.officeValue}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></span>
                  <span><strong className="text-white">{t.doctorModal.info.specialtyLabel}:</strong> {t.doctorModal.info.specialtyValue}</span>
                </li>
              </ul>
            </div>
            {/* Stats */}
            <div className="mt-auto pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
              <div className="text-center">
                <span className="text-3xl font-serif text-gold font-bold">5+</span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-sans">{t.doctorModal.info.statsYears}</p>
              </div>
              <div className="text-center border-x border-white/5">
                <span className="text-3xl font-serif text-gold font-bold">400+</span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-sans">{t.doctorModal.info.statsProcedures}</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-serif text-gold font-bold">24/7</span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-sans">{t.doctorModal.info.statsSupport}</p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col h-full">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-1">{t.doctorModal.certificates.title}</h3>
              <h4 className="text-gold font-sans tracking-widest text-xs uppercase mb-4">{t.doctorModal.certificates.subtitle}</h4>
              <p className="mb-4 text-gray-300 font-sans font-light leading-relaxed text-sm">
                {t.doctorModal.certificates.description}
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              {t.doctorModal.certificates.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-gold/30 transition-all duration-300 hover:bg-white/[0.07]">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    {certIcons[index]}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-sans font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">{item.description}</p>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0"></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col h-full">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-1">{t.doctorModal.technology.title}</h3>
              <h4 className="text-gold font-sans tracking-widest text-xs uppercase mb-4">{t.doctorModal.technology.subtitle}</h4>
              <p className="mb-4 text-gray-300 font-sans font-light leading-relaxed text-sm">
                {t.doctorModal.technology.description}
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              {(() => {
                const techImages = [
                  "/img/technology/Motiva-logo-purple-RGB.png",
                  "/img/technology/1665005161-bodytite-1.webp",
                  "/img/technology/Morpheus8-Logo.jpg.jpeg",
                  "/img/technology/quirofaos.png",
                ];
                return t.doctorModal.technology.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 border-l-2 border-gold pl-5 py-2 hover:border-gold-light transition-colors duration-300 hover:bg-white/[0.02] rounded-r-lg">
                    {techImages[index] && (
                      <img
                        src={techImages[index]}
                        alt={item.title}
                        className="w-12 h-12 object-contain rounded-md bg-white/10 p-1 flex-shrink-0"
                      />
                    )}
                    <div>
                      <strong className="text-white block font-sans text-sm uppercase tracking-wider">{item.title}</strong>
                      <span className="text-sm text-gray-400 font-sans leading-relaxed">{item.description}</span>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        );
      case 3: {
        const activeTraining = safeImageIndex % t.doctorModal.training.items.length;
        return (
          <div className="flex flex-col h-full">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-1">{t.doctorModal.training.title}</h3>
              <h4 className="text-gold font-sans tracking-widest text-xs uppercase mb-3">{t.doctorModal.training.subtitle}</h4>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              {t.doctorModal.training.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTrainingClick(index)}
                  className={`w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 relative overflow-hidden
                    ${activeTraining === index
                      ? "bg-gold/5 border-white/15"
                      : "bg-white/5 border-white/10 hover:border-gold/30 hover:bg-white/[0.07]"
                    }`}
                >
                  {activeTraining === index && (
                    <div
                      key={`progress-${imageIndex}-${autoKey}`}
                      className="absolute top-0 left-0 h-[2px] bg-gold animate-progress-line"
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 flex-shrink-0 ${activeTraining === index ? "bg-gold" : "bg-gray-600"}`}></div>
                    <div className="flex-1 min-w-0">
                      <h5 className={`font-sans font-bold text-xs transition-colors duration-300 ${activeTraining === index ? "text-gold" : "text-white"}`}>
                        {item.title}
                      </h5>
                      <p className="text-[10px] text-gray-500 font-sans leading-snug">{item.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500
          ${modalEntered ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-6xl h-[85vh] md:h-[75vh]
          flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl
          bg-[#0f0f0f] border animate-border-pulse
          transition-all duration-500 ease-out
          ${modalEntered
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-[0.96] opacity-0 translate-y-6"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white hover:rotate-90
            transition-all duration-300 bg-black/40 backdrop-blur-sm p-2.5 rounded-full
            hover:bg-black/60 border border-white/10 hover:border-white/20"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT: Tabs & Content */}
        <div className="w-full md:w-1/2 flex flex-col border-r border-white/5 order-2 md:order-1">
          {/* Tabs Header with sliding indicator */}
          <div className="relative flex border-b border-white/5 bg-[#050505]">
            {/* Sliding gold indicator */}
            <div
              className="absolute bottom-0 h-[2px] bg-gold transition-all duration-400 ease-out"
              style={{
                width: `${100 / tabLabels.length}%`,
                left: `${(activeTabIndex / tabLabels.length) * 100}%`,
                boxShadow: "0 0 8px rgba(212, 175, 55, 0.4)",
              }}
            />
            {tabLabels.map((label, index) => (
              <button
                key={label}
                onClick={() => switchTab(index)}
                className={`flex-1 py-4 font-sans text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-300
                  ${activeTabIndex === index
                    ? "text-gold"
                    : "text-gray-600 hover:text-gray-400"}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 p-4 md:p-6 overflow-hidden bg-[#0a0a0a]">
            <div
              data-stagger=""
              data-visible={String(isContentVisible)}
              className="h-full flex flex-col justify-start"
            >
              {renderContent()}
            </div>
          </div>
        </div>

        {/* RIGHT: Image Area (Desktop) */}
        <div className="hidden md:block w-full md:w-1/2 relative bg-black order-1 md:order-2 overflow-hidden">
          {/* Ken Burns image */}
          <img
            key={`img-${activeTabIndex}-${safeImageIndex}`}
            src={currentImage}
            alt="Dra. Silvia Romero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
              ${isImageVisible ? "opacity-100" : "opacity-0"}
              ${KEN_BURNS_CLASSES[safeImageIndex % KEN_BURNS_CLASSES.length]}`}
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0f0f0f]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 100px rgba(0,0,0,0.4)" }} />

          {/* Image slideshow dots */}
          {currentImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {currentImages.map((_, i) => (
                <div
                  key={i}
                  className={`h-[3px] rounded-full transition-all duration-500 ease-out
                    ${i === safeImageIndex
                      ? "bg-gold w-6"
                      : "bg-white/25 w-[3px] hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
          )}

          {/* Tab name watermark */}
          <div className="absolute top-6 right-6 z-10">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/20 font-medium">
              {tabLabels[activeTabIndex]}
            </span>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden h-48 relative overflow-hidden order-1">
          <img
            key={`mob-${activeTabIndex}-${safeImageIndex}`}
            src={currentImage}
            alt="Dra. Silvia Romero"
            className={`w-full h-full object-cover transition-opacity duration-500
              ${isImageVisible ? "opacity-100" : "opacity-0"}
              ${KEN_BURNS_CLASSES[safeImageIndex % KEN_BURNS_CLASSES.length]}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

          {/* Mobile dots */}
          {currentImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {currentImages.map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] rounded-full transition-all duration-500
                    ${i === safeImageIndex ? "bg-gold w-4" : "bg-white/25 w-[2px]"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
