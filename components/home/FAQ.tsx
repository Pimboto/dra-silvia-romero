"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";

export const FAQ = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-luxury-black">Preguntas Frecuentes</h2>

        <Accordion
          variant="splitted"
          className="[&>div]:!bg-white"
          itemClasses={{
            base: "!bg-white !shadow-xl !rounded-2xl !mb-6 !border !border-gray-100",
            title: "font-serif !text-luxury-black text-xl py-6",
            trigger: "px-8 !bg-white hover:!bg-gray-50",
            content: "px-8 pb-8 !text-gray-600 font-light leading-relaxed text-lg !bg-white",
            indicator: "text-luxury-black"
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Recuperación"
            title="¿Cuánto tiempo es la recuperación?"
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            Depende del procedimiento, pero generalmente recomendamos de 7 a 14 días de reposo relativo. Para cirugías mayores como abdominoplastia, puede requerirse hasta 21 días para retomar actividades exigentes.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Financiación"
            title="¿Aceptan planes de financiación?"
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            Sí, trabajamos con aliados financieros que ofrecen tasas preferenciales para procedimientos estéticos. Contáctanos para más detalles.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Ubicación"
            title="¿Dónde se realizan las cirugías?"
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            Todas nuestras cirugías se realizan en instituciones de Nivel III que garantizan la máxima seguridad para nuestros pacientes, cumpliendo con todos los estándares internacionales.
          </AccordionItem>
        </Accordion>

        <div className="mt-16 text-center">
          <Link
            href="/faq"
            className="text-gold font-bold uppercase tracking-[0.2em] text-xs hover:opacity-70 transition-opacity"
          >
            Ver todas las preguntas frecuentes
          </Link>
        </div>
      </div>
    </section>
  );
};
