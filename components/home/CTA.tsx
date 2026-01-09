"use client";

import { Link } from "@heroui/link";
import { useLanguage } from "@/context/LanguageContext";

export const CTA = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="py-32 relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#1a1500] to-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="font-sans text-gold tracking-[0.5em] text-sm font-bold mb-6">
            {t.cta.tag}
          </p>
          <h2 className="font-serif text-5xl md:text-8xl font-bold mb-10 leading-tight text-white">
            {t.cta.title} <br />
            <span className="text-gold italic font-serif">{t.cta.subtitle}</span>
          </h2>
          <div className="flex justify-center">
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-sans font-bold text-white transition-all duration-300 border border-gold rounded-xl shadow-lg hover:border-yellow-400 hover:bg-yellow-900/20 hover:shadow-yellow-900/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <span className="relative tracking-[0.2em] group-hover:text-yellow-400 transition-colors z-10">
                {t.cta.button}
              </span>
            </Link>
          </div>
          <p className="font-sans mt-8 text-gray-500 text-sm tracking-widest uppercase">
            {t.cta.spots}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-center py-20 border-t border-white/10">
        <p className="font-serif text-gold text-xl md:text-2xl mb-4 tracking-widest">
          {t.cta.footer.excellence}
        </p>
        <p className="font-sans text-gray-500 text-sm">
          {currentYear} {t.cta.footer.rights}
        </p>
      </footer>
    </>
  );
};
