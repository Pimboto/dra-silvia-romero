"use client";

import { Card, CardBody } from "@heroui/card";
import { User, Health, MagicStar, Scissor } from "iconsax-reactjs";

export const Services = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">Nuestras Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-2">Procedimientos Exclusivos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={<User size="32" variant="Bulk" className="text-gold" />} title="ROSTRO" subtitle="Rinoplastia, Lifting, Blefarocirugía" />
          <ServiceCard icon={<Health size="32" variant="Bulk" className="text-gold" />} title="CUERPO" subtitle="Lipoescultura, Abdominoplastia" />
          <ServiceCard icon={<MagicStar size="32" variant="Bulk" className="text-gold" />} title="SENOS" subtitle="Mamoplastia de Aumento, Levantamiento" />
          <ServiceCard icon={<Scissor size="32" variant="Bulk" className="text-gold" />} title="NO QUIRÚRGICOS" subtitle="Botox, Ácido Hialurónico, Radiesse" />
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/50 backdrop-blur-sm group">
      <CardBody className="py-10 flex flex-col items-center text-center gap-6">
        <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors">{title}</h3>
          <p className="text-gray-500 text-sm px-4">{subtitle}</p>
        </div>
      </CardBody>
    </Card>
  );
}
