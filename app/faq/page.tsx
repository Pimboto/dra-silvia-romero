"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            Preguntas Frecuentes
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Todo lo que necesitas saber
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Resuelve tus dudas sobre procedimientos, recuperación, costos y más.
          </p>
        </div>
        {/* Degradado inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Accordion
            defaultExpandedKeys={["1"]}
            itemClasses={{
              base: "!bg-white !shadow-xl !rounded-[24px] !mb-6 !border !border-gray-100",
              title: "font-serif !text-luxury-black text-xl py-6",
              trigger: "px-8 !bg-white hover:!bg-gray-50",
              content:
                "px-8 pb-8 !text-gray-600 font-light leading-relaxed text-lg !bg-white",
              indicator: "text-gold",
            }}
            variant="splitted"
          >
            <AccordionItem
              key="1"
              aria-label="Costo de cirugía"
              className="!bg-white"
              title="¿Cuánto cuesta mi cirugía?"
            >
              En tu consulta médica te entrego el presupuesto completo de tu
              cirugía, ya que según el diagnóstico y tratamiento indicado
              establezco el costo de tu cirugía.
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Ciudades"
              className="!bg-white"
              title="¿En qué ciudades realiza los procedimientos la Dra. Silvia Romero?"
            >
              Medellín.
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Tiempo en ciudad"
              className="!bg-white"
              title="¿Cuánto tiempo debo quedarme en la ciudad después del procedimiento?"
            >
              Idealmente 21 días para garantizar un seguimiento adecuado y una
              recuperación óptima.
            </AccordionItem>

            <AccordionItem
              key="4"
              aria-label="Anestesia"
              className="!bg-white"
              title="¿Qué tipo de anestesia se utiliza en los procedimientos?"
            >
              La más utilizada es la anestesia general, aplicada por
              anestesiólogos certificados en quirófanos de nivel III.
            </AccordionItem>

            <AccordionItem
              key="5"
              aria-label="Resultados"
              className="!bg-white"
              title="¿En cuánto tiempo veré los resultados finales de mi procedimiento?"
            >
              A los tres meses verás el resultado parcial, y al año obtendrás el
              resultado final completo de tu transformación.
            </AccordionItem>

            <AccordionItem
              key="6"
              aria-label="Cicatrices"
              className="!bg-white"
              title="¿Las cicatrices son muy visibles?"
            >
              No, uso una técnica precisa con suturas especiales, buscando
              siempre la armonía en la ubicación de las cicatrices. Mi objetivo
              es lograr cicatrices finas y bien ubicadas. Es importante recordar
              que el proceso de cicatrización está mediado por factores
              genéticos y ambientales, por lo que es fundamental seguir el
              protocolo de cuidado de la cicatriz.
            </AccordionItem>

            <AccordionItem
              key="7"
              aria-label="Pacientes internacionales"
              className="!bg-white"
              title="¿Se puede operar pacientes internacionales?"
            >
              La mayoría de mis pacientes son internacionales, así que tengo una
              amplia experiencia en el manejo desde la primera consulta hasta el
              cuidado y seguimiento postoperatorio.
            </AccordionItem>

            <AccordionItem
              key="8"
              aria-label="Acompañante"
              className="!bg-white"
              title="¿Necesito acompañante después de la cirugía?"
            >
              Sí, es importante que tengas a tu acompañante para que te cuide y
              esté pendiente de ti. Si no tienes acompañante, te puedo sugerir
              personal calificado para este fin. Según el tipo de cirugía, es
              recomendable tener acompañante entre 72 horas y una semana de
              postoperatorio.
            </AccordionItem>

            <AccordionItem
              key="9"
              aria-label="Hospedaje"
              className="!bg-white"
              title="¿Cuál lugar de hospedaje recomiendas?"
            >
              Dentro del centro comercial está el hotel Novotel, el cual tiene
              un descuento especial para pacientes en postoperatorio y se
              encuentra muy cerca a todo lo necesario.
            </AccordionItem>

            <AccordionItem
              key="10"
              aria-label="Financiación"
              className="!bg-white"
              title="¿Manejan financiación?"
            >
              No manejamos financiación directa, pero recibimos todos los medios
              de pago para tu comodidad.
            </AccordionItem>
          </Accordion>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-luxury-black to-gray-900 rounded-[32px] p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              ¿Tienes más preguntas?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Estoy aquí para ayudarte en cada paso de tu transformación.
            </p>
            <a
              className="inline-block bg-gold text-luxury-black font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform"
              href="https://wa.me/573118324191"
              rel="noopener noreferrer"
              target="_blank"
            >
              Contáctame por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
