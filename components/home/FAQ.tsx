"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { useLanguage } from "@/context/LanguageContext";

export const FAQ = () => {
  const { t } = useLanguage();
  return (
    <section id="faq" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-luxury-black">
          {t.faq.title} <span className="text-gold italic font-serif">{t.faq.subtitle}</span>
        </h2>

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
          {t.faq.items.map((item, index) => (
            <AccordionItem
              key={String(index)}
              aria-label={item.question}
              title={item.question}
              className="!bg-white"
              classNames={{
                base: "!bg-white",
                title: "!text-luxury-black",
                trigger: "!bg-white",
                content: "!bg-white !text-gray-600"
              }}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
