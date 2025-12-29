"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

type Procedure = {
  title: string;
  description: string;
  recovery: string;
  notes: string[];
};

type ProceduresData = {
  [key: string]: Procedure[];
};

const proceduresData: ProceduresData = {
  "CUERPO": [
    {
      title: "Lipoescultura",
      description: "Liposucción con definición, marcación corporal y transferencia a glúteos.",
      recovery: "10–14 días antes de volver a rutina, 12 semanas de recuperación total.",
      notes: [
        "Uso obligatorio de faja por 6 semanas",
        "Mejores candidatas tienen buena elasticidad en la piel",
        "No corrige el exceso de piel moderado y severo"
      ]
    },
    {
      title: "Abdominoplastia",
      description: "Moldeamiento del abdomen con retiro de piel excedente, retiro de depósitos grasos, cierre de músculos para lograr un abdomen más plano y con cintura.",
      recovery: "21 días antes de volver a rutina, 12 semanas de recuperación total. Un año para resultado definitivo.",
      notes: [
        "Uso obligatorio de faja por 6 semanas",
        "No es una cirugía para bajar de peso, sino para moldear",
        "Normalmente se recomienda con lipoescultura",
        "Los buenos hábitos de salud y vida son muy importantes para mantener el resultado"
      ]
    },
    {
      title: "Gluteoplastia",
      description: "Aumento natural del tamaño de los glúteos con implantes.",
      recovery: "21 días antes de volver a rutina, 12 semanas de recuperación total.",
      notes: [
        "Uso obligatorio de faja por 6 semanas",
        "No apoyo en los glúteos por 2 semanas",
        "Adecuada higiene muy importante para evitar contaminación",
        "No corrige el exceso de piel moderado y severo"
      ]
    }
  ],
  "SENOS": [
    {
      title: "Aumento de Senos con Implantes",
      description: "Resultados naturales usando implantes, técnica convencional con implantes GC Aesthetics, o técnica PRESERVÉ con implantes MOTIVA.",
      recovery: "7–10 días para actividades normales, 4–6 semanas recuperación total.",
      notes: [
        "Se requiere exámenes prequirúrgicos",
        "Tamaño del implante se define según proporciones del cuerpo y en común acuerdo contigo en la consulta preoperatoria"
      ]
    },
    {
      title: "Mastopexia (Levantamiento de Senos)",
      description: "Levantamiento de los senos, retiro de piel excedente.",
      recovery: "21 días antes de volver a la rutina, 12 semanas de recuperación total.",
      notes: [
        "Uso obligatorio de brassier",
        "No corrige la flacidez de la piel",
        "Puede realizarse con o sin implantes",
        "Normalmente requiere una cicatriz en T invertida"
      ]
    },
    {
      title: "Explantación Mamaria",
      description: "Retiro de la prótesis mamaria y uso de los tejidos propios para reconstruir los senos.",
      recovery: "21 días antes de volver a la rutina, 12 semanas de recuperación total.",
      notes: [
        "Uso obligatorio de brassier",
        "No corrige la flacidez de la piel",
        "Normalmente requiere una cicatriz en T invertida",
        "Puede requerir inyección de grasa"
      ]
    },
    {
      title: "Reducción Mamaria",
      description: "Disminución del tamaño de los senos, acompañado de levantamiento y retiro de piel excedente.",
      recovery: "21 días antes de volver a la rutina, 12 semanas de recuperación total.",
      notes: [
        "Uso obligatorio de brassier",
        "No corrige la flacidez de la piel",
        "Puede realizarse con o sin implantes",
        "Normalmente requiere una cicatriz en T invertida"
      ]
    }
  ],
  "ROSTRO": [
    {
      title: "Ritidoplastia (Lifting Facial)",
      description: "Rejuvenecimiento facial reconstituyendo los tejidos profundos faciales. Técnica híbrida DEEP PLANE Y SUBSMAS.",
      recovery: "15 días para actividades normales y retiro de puntos, 12 semanas de recuperación total. Un año para el resultado definitivo.",
      notes: [
        "Se requiere exámenes prequirúrgicos, te recomiendo dos meses antes de la cirugía",
        "Debes realizarte una escanografía doppler facial para determinar la presencia de sustancias previas",
        "Tendrás cita con el anestesiólogo y conmigo presencial antes de tu cirugía",
        "Es importante que tu IMC sea menor a 30 por seguridad quirúrgica",
        "No elimina la necesidad de usar Toxina Botulínica BOTOX"
      ]
    },
    {
      title: "Blefaroplastia",
      description: "Rejuvenecimiento de la mirada, eliminando la piel en exceso y las bolsas grasas.",
      recovery: "15 días para actividades normales y retiro de puntos, 12 semanas de recuperación total. Un año para el resultado definitivo.",
      notes: [
        "Se requiere exámenes prequirúrgicos, te recomiendo dos meses antes de la cirugía",
        "Tendrás cita con el anestesiólogo y conmigo presencial un día antes de tu cirugía",
        "Es recomendable acompañarla de una frontoplastia para elevación de las cejas",
        "No elimina la necesidad de usar Toxina Botulínica BOTOX"
      ]
    },
    {
      title: "Frontoplastia",
      description: "Rejuvenecimiento de la frente, cejas y región lateral de la órbita. Corrige el déficit frontotemporal y eleva las cejas.",
      recovery: "15 días para actividades normales y retiro de puntos, 12 semanas de recuperación total. Un año para el resultado definitivo.",
      notes: [
        "Se requiere exámenes prequirúrgicos, te recomiendo dos meses antes de la cirugía",
        "Tendrás cita con el anestesiólogo y conmigo presencial un día antes de tu cirugía",
        "Es recomendable acompañarla de blefaroplastia",
        "No elimina la necesidad de usar Toxina Botulínica BOTOX"
      ]
    },
    {
      title: "Rinoplastia",
      description: "Moldeamiento de los huesos y cartílagos nasales para lograr una nariz más armónica con el rostro.",
      recovery: "10 días antes de volver a la rutina, 12 semanas de recuperación total. Un año para los resultados definitivos.",
      notes: [
        "Uso obligatorio de férulas intranasales",
        "Puede requerir manejo funcional de la nariz"
      ]
    },
    {
      title: "Armonización Facial con Implantes",
      description: "Uso de implantes faciales en mandíbula, región malar y otros para armonizar las proporciones del rostro.",
      recovery: "15 días antes de volver a la rutina, 12 semanas de recuperación total. Un año para los resultados definitivos.",
      notes: [
        "Riesgo de infección de los implantes por las heridas en cavidad oral"
      ]
    }
  ],
  "ÍNTIMA": [
    {
      title: "Rejuvenecimiento Vaginal",
      description: "Manejo de los labios menores y mayores, pubis y zona vaginal.",
      recovery: "14 días.",
      notes: [
        "Es un procedimiento sin incapacidad pero hay inflamación de las zonas",
        "Las suturas y heridas se deben cuidar muy bien dado el alto riesgo de infección por la zona"
      ]
    }
  ],
  "NO QUIRÚRGICOS": [
    {
      title: "Botox",
      description: "Uso de toxina botulínica para disminuir la contracción muscular y de esta manera tratar las líneas de expresión facial.",
      recovery: "5 horas, 14 días para ver el resultado, 6 semanas de duración del efecto.",
      notes: [
        "Las primeras 5 horas posterior a la aplicación no puedes acostarte, no masajear las zonas, no agacharse, no ejercicio durante ese día",
        "El efecto puede irse antes de este tiempo debido a factores genéticos o ambientales como por ejemplo personas que hacen ejercicio"
      ]
    },
    {
      title: "Ácido Hialurónico",
      description: "Uso de ácido hialurónico para armonizar el rostro.",
      recovery: "3 días, 14 días para ver el resultado, un año de duración del efecto.",
      notes: [
        "Es un procedimiento sin incapacidad pero hay inflamación de las zonas inyectadas por lo menos tres días",
        "El efecto puede irse antes de este tiempo debido a factores genéticos o ambientales"
      ]
    },
    {
      title: "Definición de Labios",
      description: "Uso de ácido hialurónico para armonizar los labios, definir o dar aumento.",
      recovery: "3 días, 14 días para ver el resultado, un año de duración del efecto.",
      notes: [
        "Es un procedimiento sin incapacidad pero hay inflamación de las zonas inyectadas por lo menos tres días",
        "El efecto puede irse antes de este tiempo debido a factores genéticos o ambientales"
      ]
    },
    {
      title: "Bioestimuladores de Colágeno",
      description: "Aplicación de sustancias en el rostro: SCULPTRA, RADIESSE, HARMONICA para favorecer la producción de colágeno.",
      recovery: "3 días, 14 días a 3 meses para ver el resultado, un año de duración del efecto.",
      notes: [
        "Es un procedimiento sin incapacidad pero hay inflamación de las zonas inyectadas por lo menos tres días",
        "El efecto puede irse antes de este tiempo debido a factores genéticos o ambientales",
        "Si la flacidez es moderada a severa puede no verse ningún efecto ya que la indicación es quirúrgica"
      ]
    }
  ]
};

export const Services = () => {
  const [activeTab, setActiveTab] = useState<string>("CUERPO");

  const handleTabChange = (tab: string) => {
    const grid = document.getElementById('procedures-grid');
    
    if (grid) {
      // Fade out
      gsap.to(grid, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setActiveTab(tab);
          // Fade in will happen in useEffect
        }
      });
    } else {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    const grid = document.getElementById('procedures-grid');
    if (grid) {
      gsap.to(grid, { opacity: 1, duration: 0.3 });
      gsap.from("#procedures-grid .flip-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  }, [activeTab]);

  return (
    <section className="relative py-32 bg-luxury-black border-t border-white/5">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="font-sans text-gold tracking-[0.3em] text-sm font-bold block mb-4">
          PORTAFOLIO EXCLUSIVO
        </span>
        <h2 className="font-serif text-4xl md:text-7xl font-bold mb-4 text-white">
          Nuestros <span className="text-gold italic">Procedimientos</span>
        </h2>
        <div className="w-24 h-px bg-gold mx-auto mt-8"></div>
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 border-b border-white/10 pb-4">
          {Object.keys(proceduresData).map((category) => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`font-sans text-sm md:text-lg uppercase tracking-widest font-bold px-4 py-2 cursor-pointer transition-all duration-300 ${
                activeTab === category 
                  ? 'text-gold border-b-2 border-gold' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-6">
        <div 
          id="procedures-grid" 
          className={`grid gap-8 min-h-[500px] ${
            proceduresData[activeTab].length === 4 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {proceduresData[activeTab].map((procedure, index) => (
            <FlipCard key={index} procedure={procedure} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FlipCard({ procedure }: { procedure: Procedure }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flip-card h-[500px] w-full cursor-pointer group"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="flip-card-inner w-full h-full relative transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div 
          className="flip-card-front absolute inset-0 bg-luxury-black/60 backdrop-blur-md border border-gold/10 rounded-lg p-6 flex flex-col justify-between overflow-y-auto"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-white text-center">
              {procedure.title}
            </h3>
            
            <div className="mb-4">
              <h4 className="font-sans text-gold text-xs uppercase tracking-widest font-bold mb-2">Descripción</h4>
              <p className="font-sans text-gray-300 text-sm leading-relaxed">
                {procedure.description}
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-sans text-gold text-xs uppercase tracking-widest font-bold mb-2">Tiempo de Recuperación</h4>
              <p className="font-sans text-gray-300 text-sm leading-relaxed">
                {procedure.recovery}
              </p>
            </div>
          </div>

          <button 
            className="font-sans text-gold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-white transition-colors self-center mt-4"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(true);
            }}
          >
            Notas Importantes +
          </button>
        </div>

        {/* Back */}
        <div 
          className="flip-card-back absolute inset-0 bg-gradient-to-br from-gold/20 to-luxury-black/80 backdrop-blur-md border border-gold/30 rounded-lg p-6 flex flex-col justify-between overflow-y-auto"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            <h3 className="font-serif text-lg text-gold mb-4 text-center">
              {procedure.title}
            </h3>
            
            <h4 className="font-sans text-white text-xs uppercase tracking-widest font-bold mb-3">
              Notas Importantes para Pacientes
            </h4>
            
            <ul className="space-y-3">
              {procedure.notes.map((note, index) => (
                <li key={index} className="font-sans text-gray-300 text-sm leading-relaxed flex items-start">
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
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
