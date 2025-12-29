"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";

export const FAQ = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-luxury-black">Preguntas Frecuentes</h2>

        <Accordion
          variant="splitted"
          className="[&>div]:!bg-white"
          itemClasses={{
            base: "!bg-white !shadow-xl !rounded-[24px] !mb-6 !border !border-gray-100",
            title: "font-serif !text-luxury-black text-xl py-6",
            trigger: "px-8 !bg-white hover:!bg-gray-50",
            content: "px-8 pb-8 !text-gray-600 font-sans font-light leading-relaxed text-lg !bg-white",
            indicator: "text-luxury-black"
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Costo de cirugía"
            title="¿Cuánto cuesta mi cirugía?"
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            En tu consulta médica te entrego el presupuesto completo de tu cirugía, ya que según el diagnóstico y tratamiento indicado establezco el costo de tu cirugía.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Resultados"
            title="¿En cuánto tiempo veré los resultados finales de mi procedimiento?"
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            A los tres meses verás el resultado parcial, y al año obtendrás el resultado final completo de tu transformación.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Pacientes internacionales"
            title="¿Se puede operar pacientes internacionales?"
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            La mayoría de mis pacientes son internacionales, así que tengo una amplia experiencia en el manejo desde la primera consulta hasta el cuidado y seguimiento postoperatorio.
          </AccordionItem>
        </Accordion>

        <div className="mt-16 text-center">
          <Link
            href="/faq"
            className="font-sans text-gold font-bold uppercase tracking-[0.2em] text-xs hover:opacity-70 transition-opacity"
          >
            Ver todas las preguntas frecuentes
          </Link>
        </div>
      </div>
    </section>
  );
};
