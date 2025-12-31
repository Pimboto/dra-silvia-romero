"use client";

import { useState, useEffect, useCallback } from "react";

interface DoctorBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Imágenes para cada tab
const TAB_IMAGES = {
  info: "/img/doc/docimages/IMG_7209.jpeg",
  tecnologia: "/img/doc/docimages/IMG_7228.jpeg", 
  certificados: "/img/doc/docimages/IMG_8381.jpeg",
};

// Datos para cada tab del modal
const bioData = [
  {
    // Tab 0: Información Básica
    title: "Dra. Silvia Romero",
    subtitle: "Cirujana Plástica Estética y Reconstructiva",
    content: (
      <>
        <p className="mb-6 text-gray-300 font-sans font-light leading-relaxed">
          Con más de <span className="text-gold font-medium">5 años de experiencia</span> y más de <span className="text-gold font-medium">400 procedimientos</span> realizados, 
          la Dra. Silvia Katherine Romero Rondón se especializa en rejuvenecimiento y armonización facial, 
          buscando siempre resultados naturales que realcen tu belleza única.
        </p>
        <p className="mb-6 text-gray-300 font-sans font-light leading-relaxed">
          Mi filosofía es ir más allá de lo estético, logrando una transformación de cuerpo, mente y espíritu, 
          acompañándote con amor en cada paso de este proceso.
        </p>
        <ul className="space-y-3 text-sm text-gray-400 font-sans">
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            <span className="font-sans"><strong className="text-white font-sans">Ubicación:</strong> Medellín, C.C. El Tesoro</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            <span className="font-sans"><strong className="text-white font-sans">Consultorio:</strong> Torre Médica 2, Cons. 1062</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            <span className="font-sans"><strong className="text-white font-sans">Especialidad:</strong> Rejuvenecimiento y Armonización Facial</span>
          </li>
        </ul>
      </>
    ),
    image: TAB_IMAGES.info,
  },
  {
    // Tab 1: Certificaciones
    title: "Excelencia Reconocida",
    subtitle: "Certificaciones y Premios",
    content: (
      <>
        <p className="mb-6 text-gray-300 font-sans font-light leading-relaxed">
          La seguridad y la excelencia no son negociables. Mi práctica está respaldada por las instituciones 
          médicas más prestigiosas y formación en las mejores universidades del país.
        </p>
        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-gold/30 transition-colors">
            <div className="text-gold text-2xl"></div>
            <div>
              <h4 className="text-white font-sans font-bold text-sm">Formación Académica</h4>
              <p className="text-xs text-gray-500 font-sans">Universidad Industrial de Santander, Colombia</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-gold/30 transition-colors">
            <div className="text-gold text-2xl"></div>
            <div>
              <h4 className="text-white font-sans font-bold text-sm">Premio FELSOCEM</h4>
              <p className="text-xs text-gray-500 font-sans">Investigación - Federación Latinoamericana</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-gold/30 transition-colors">
            <div className="text-gold text-2xl"></div>
            <div>
              <h4 className="text-white font-sans font-bold text-sm">Miembro SCCP</h4>
              <p className="text-xs text-gray-500 font-sans">Sociedad Colombiana de Cirugía Plástica</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-gold/30 transition-colors">
            <div className="text-gold text-2xl"></div>
            <div>
              <h4 className="text-white font-sans font-bold text-sm">Motiva Certified Surgeon</h4>
              <p className="text-xs text-gray-500 font-sans">Preservé - Certificación Internacional</p>
            </div>
          </div>
        </div>
      </>
    ),
    image: TAB_IMAGES.certificados,
  },
  {
    // Tab 2: Tecnología
    title: "Vanguardia Tecnológica",
    subtitle: "Equipos de Última Generación",
    content: (
      <>
        <p className="mb-6 text-gray-300 font-sans font-light leading-relaxed">
          Utilizo tecnología de punta para garantizar procedimientos menos invasivos, 
          recuperaciones más rápidas y resultados de alta precisión.
        </p>
        <div className="space-y-5 mt-6">
          <div className="border-l-2 border-gold pl-4">
            <strong className="text-white block font-sans text-sm uppercase tracking-wider">Implantes Premium</strong>
            <span className="text-sm text-gray-400 font-sans">GC Aesthetics y Motiva ergonómicos de última generación</span>
          </div>
          <div className="border-l-2 border-gold pl-4">
            <strong className="text-white block font-sans text-sm uppercase tracking-wider">Técnicas Avanzadas</strong>
            <span className="text-sm text-gray-400 font-sans">BodyTite, FaceTite, Morpheus 8, Deep Plane, FullFace</span>
          </div>
          <div className="border-l-2 border-gold pl-4">
            <strong className="text-white block font-sans text-sm uppercase tracking-wider">Equipos Especializados</strong>
            <span className="text-sm text-gray-400 font-sans">Laser CO2, Exosomas, NanoFat, MicroFat, TENSAMAX</span>
          </div>
          <div className="border-l-2 border-gold pl-4">
            <strong className="text-white block font-sans text-sm uppercase tracking-wider">Protocolos de Seguridad</strong>
            <span className="text-sm text-gray-400 font-sans">Quirófanos El Tesoro Nivel III • Póliza de complicaciones • Seguimiento 24/7</span>
          </div>
        </div>
      </>
    ),
    image: TAB_IMAGES.tecnologia,
  },
];

export const DoctorBioModal = ({ isOpen, onClose }: DoctorBioModalProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(true);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setActiveTabIndex(0);
      setIsContentVisible(true);
      setIsImageVisible(true);
    }
  }, [isOpen]);

  // Handle ESC key to close modal
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

  const switchTab = useCallback((index: number) => {
    if (index === activeTabIndex) return;
    
    // Fade out
    setIsContentVisible(false);
    setIsImageVisible(false);
    
    setTimeout(() => {
      setActiveTabIndex(index);
      // Fade in
      setIsContentVisible(true);
      setIsImageVisible(true);
    }, 200);
  }, [activeTabIndex]);

  const currentData = bioData[activeTabIndex];
  const tabLabels = ["Información Básica", "Certificados", "Tecnología"];

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-400
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content Container */}
      <div 
        className={`relative bg-[#0f0f0f] border border-gold/30 w-full max-w-6xl h-[85vh] md:h-[75vh] 
          flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl
          transition-all duration-400 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white transition-colors bg-black/50 p-2 rounded-full hover:bg-black/70"
          aria-label="Cerrar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT: Tabs & Content */}
        <div className="w-full md:w-1/2 flex flex-col border-r border-gray-800 order-2 md:order-1">
          {/* Tabs Header */}
          <div className="flex items-center justify-around border-b border-gray-800 bg-[#050505] p-4 md:p-6">
            {tabLabels.map((label, index) => (
              <button
                key={label}
                onClick={() => switchTab(index)}
                className={`pb-2 font-sans text-xs md:text-sm uppercase tracking-wider transition-all duration-300
                  border-b-2 ${activeTabIndex === index 
                    ? "text-gold-light border-gold" 
                    : "text-gray-500 border-transparent hover:text-gold"}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Text Content Area */}
          <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#0a0a0a]">
            <div 
              className={`h-full flex flex-col justify-start transition-opacity duration-300
                ${isContentVisible ? "opacity-100" : "opacity-0"}`}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{currentData.title}</h3>
              <h4 className="text-gold font-sans tracking-widest text-xs uppercase mb-8">{currentData.subtitle}</h4>
              <div className="text-content">
                {currentData.content}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image Area (Desktop) */}
        <div className="hidden md:block w-full md:w-1/2 relative bg-black order-1 md:order-2">
          <img 
            src={currentData.image}
            alt="Dra. Silvia Romero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
              ${isImageVisible ? "opacity-100" : "opacity-0"}`}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0f0f0f]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden h-48 relative overflow-hidden order-1">
          <img 
            src={currentData.image}
            alt="Dra. Silvia Romero"
            className={`w-full h-full object-cover transition-opacity duration-500
              ${isImageVisible ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
