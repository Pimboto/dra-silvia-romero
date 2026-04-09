"use client";

import { Link } from "@heroui/link";
import NextLink from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";

export const CTA = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CTA Section */}
      <section
        className="py-32 relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#1a1500] to-black"
        id="contact"
      >
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="font-sans text-gold tracking-[0.5em] text-sm font-bold mb-6">
            {t.cta.tag}
          </p>
          <h2 className="font-serif text-5xl md:text-8xl font-bold mb-10 leading-tight text-white">
            {t.cta.title} <br />
            <span className="text-gold italic font-serif">
              {t.cta.subtitle}
            </span>
          </h2>
          <div className="flex justify-center">
            <Link
              className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-sans font-bold text-white transition-all duration-300 border border-gold rounded-xl shadow-lg hover:border-yellow-400 hover:bg-yellow-900/20 hover:shadow-yellow-900/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              href="https://wa.me/573118324191"
              target="_blank"
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
      <footer className="w-full bg-[#060606] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          {/* Logo */}
          <NextLink className="inline-flex items-center gap-3 mb-5" href="/">
            <div className="relative h-9 w-9 flex-shrink-0">
              <Image
                fill
                alt="Logo"
                className="object-contain"
                src="/img/logoaguila.png"
              />
            </div>
            <div className="relative h-5 w-24 flex-shrink-0">
              <Image
                fill
                alt="Dra. Silvia Romero"
                className="object-contain brightness-0 invert"
                src="/img/image.png"
              />
            </div>
          </NextLink>

          <p className="font-sans text-gray-500 text-sm mb-8">
            {t.cta.footer.description}
          </p>

          {/* Contact row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            <div className="flex items-center gap-2.5 text-gray-400">
              <svg
                className="h-4 w-4 text-gold/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
                <path
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
              <span className="font-sans text-sm">{t.cta.footer.location}</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-400">
              <svg
                className="h-4 w-4 text-gold/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
              <span className="font-sans text-sm">{t.cta.footer.schedule}</span>
            </div>
            <a
              className="flex items-center gap-2.5 text-gray-400 hover:text-gold transition-colors"
              href="https://wa.me/573118324191"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="h-4 w-4 text-gold/70"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span className="font-sans text-sm">+57 311 832 4191</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 text-gray-500 hover:text-gold"
              href="https://www.instagram.com/dra.silviaromero"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 text-gray-500 hover:text-gold"
              href="https://wa.me/573118324191"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.933 1.395 5.608L.054 23.463a.5.5 0 00.613.613l5.855-1.341A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.382-1.572l-.386-.232-3.478.796.796-3.478-.232-.386A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          </div>

          {/* Divider + copyright */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-sans text-gray-600 text-xs">
              &copy; {currentYear} Dra. Silvia Romero. {t.cta.footer.rights}
            </p>
            <p className="font-serif text-gold/30 text-xs tracking-[0.3em] uppercase">
              {t.cta.footer.excellence}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
