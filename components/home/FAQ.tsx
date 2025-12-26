"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const FAQ = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Preguntas Frecuentes</h2>
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Recuperación" title="¿Cuánto tiempo es la recuperación?" classNames={{ title: "font-serif text-lg" }}>
            Depende del procedimiento, pero generalmente recomendamos de 7 a 14 días de reposo relativo. Para cirugías mayores como abdominoplastia, puede requerirse hasta 21 días para retomar actividades exigentes.
          </AccordionItem>
          <AccordionItem key="2" aria-label="Financiación" title="¿Aceptan planes de financiación?" classNames={{ title: "font-serif text-lg" }}>
            Sí, trabajamos con aliados financieros que ofrecen tasas preferenciales para procedimientos estéticos. Contáctanos para más detalles.
          </AccordionItem>
          <AccordionItem key="3" aria-label="Ubicación" title="¿Dónde se realizan las cirugías?" classNames={{ title: "font-serif text-lg" }}>
            Todas nuestras cirugías se realizan en la Clínica del Rosario o Quirófanos El Tesoro, instituciones de Nivel III que garantizan la máxima seguridad para nuestros pacientes.
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <Button as={Link} href="/faq" variant="flat" className="text-gold bg-gold/5 font-semibold uppercase tracking-widest">
            Ver todas las preguntas frecuentes
          </Button>
        </div>
      </div>
    </section>
  );
};
