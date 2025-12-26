"use client";

import { Card, CardBody } from "@heroui/card";
import { User, Health, MagicStar, Scissor } from "iconsax-reactjs";

export const Services = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-white">
      {/* Degradado superior desde Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/5 to-transparent"></div>
      
      {/* Degradado inferior hacia Results */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-luxury-black/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Nuestras Especialidades</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-4 text-luxury-black">Procedimientos <span className="text-gold italic">Exclusivos</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<User size="32" variant="Bulk" className="text-gold" />}
            title="ROSTRO"
            subtitle="Rinoplastia, Lifting, Blefarocirugía"
            image="/img/muestra/muestra-cara.png"
          />
          <ServiceCard
            icon={<Health size="32" variant="Bulk" className="text-gold" />}
            title="CUERPO"
            subtitle="Lipoescultura, Abdominoplastia"
            image="/img/muestra/abdomenmuestra.png"
          />
          <ServiceCard
            icon={<MagicStar size="32" variant="Bulk" className="text-gold" />}
            title="SENOS"
            subtitle="Mamoplastia de Aumento, Levantamiento"
            image="/img/muestra/muestramamoplastia-1.jpg"
          />
          <ServiceCard
            icon={<Scissor size="32" variant="Bulk" className="text-gold" />}
            title="NO QUIRÚRGICOS"
            subtitle="Botox, Ácido Hialurónico, Radiesse"
            image="/img/muestra/muestraacido.webp"
          />
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ icon, title, subtitle, image }: { icon: React.ReactNode, title: string, subtitle: string, image: string }) {
  return (
    <Card className="h-[450px] border-none rounded-3xl overflow-hidden group relative shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
      </div>

      <CardBody className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
        <div className="mb-8 p-6 rounded-full bg-black/20 backdrop-blur-md border border-white/10 group-hover:border-gold/50 transition-all duration-500">
          {icon}
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-serif text-white tracking-wider group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-200 text-sm font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
            {subtitle}
          </p>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-10 w-12 h-[1px] bg-gold/50 group-hover:w-24 transition-all duration-500"></div>
      </CardBody>
    </Card>
  );
}
