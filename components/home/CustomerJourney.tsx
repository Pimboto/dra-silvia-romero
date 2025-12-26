"use client";

import { User, Calendar, MagicStar, TickCircle } from "iconsax-reactjs";

export const CustomerJourney = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-gray-100 to-luxury-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-luxury-black">Tu Viaje de Transformación</h2>
        </div>

        <div className="relative border-l border-gold/30 ml-4 md:ml-12 space-y-12">
          <JourneyStep
            number="01"
            title="Valoración"
            desc="Evaluación personalizada virtual o presencial para entender tus deseos."
            icon={<User className="text-black" size={20} />}
            textColor="text-luxury-black"
            descColor="text-gray-600"
          />
          <JourneyStep
            number="02"
            title="Planificación"
            desc="Diseño detallado de tu procedimiento y preparación pre-quirúrgica."
            icon={<Calendar className="text-black" size={20} />}
            textColor="text-luxury-black"
            descColor="text-gray-600"
          />
          <JourneyStep
            number="03"
            title="Tu Gran Día"
            desc="Cirugía en quirófanos de Nivel III con los más altos estándares de seguridad."
            icon={<MagicStar className="text-black" size={20} />}
            textColor="text-white"
            descColor="text-gray-300"
          />
          <JourneyStep
            number="04"
            title="Seguimiento"
            desc="Acompañamiento cercano 24/7 durante tu recuperación."
            icon={<TickCircle className="text-black" size={20} />}
            textColor="text-white"
            descColor="text-gray-300"
          />
        </div>
      </div>
    </section>
  );
};

function JourneyStep({ number, title, desc, icon, textColor, descColor }: { number: string, title: string, desc: string, icon: React.ReactNode, textColor: string, descColor: string }) {
  return (
    <div className="relative pl-12">
      {/* Dot/Icon on the line */}
      <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center border-4 border-luxury-black z-10">
        {icon}
      </div>

      <div className="mb-2">
        <span className="text-gold text-sm font-bold tracking-widest block mb-1">PASO {number}</span>
        <h3 className={`text-2xl font-serif ${textColor}`}>{title}</h3>
      </div>
      <p className={`${descColor} max-w-md`}>{desc}</p>
    </div>
  );
}
