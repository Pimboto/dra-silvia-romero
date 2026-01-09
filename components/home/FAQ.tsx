"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";
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
          <AccordionItem
            key="1"
            aria-label={t.faq.items[0].question}
            title={t.faq.items[0].question}
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            {t.faq.items[0].answer}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label={t.faq.items[1].question}
            title={t.faq.items[1].question}
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            {t.faq.items[1].answer}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label={t.faq.items[2].question}
            title={t.faq.items[2].question}
            className="!bg-white"
            classNames={{
              base: "!bg-white",
              title: "!text-luxury-black",
              trigger: "!bg-white",
              content: "!bg-white !text-gray-600"
            }}
          >
            {t.faq.items[2].answer}
          </AccordionItem>
        </Accordion>

        <div className="mt-16 text-center">
          <Link
            href="/#faq"
            className="font-sans text-gold font-bold uppercase tracking-[0.2em] text-xs hover:opacity-70 transition-opacity"
          >
            {t.faq.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};
