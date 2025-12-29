"use client";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-center py-20 border-t border-white/10">
      <p className="font-serif text-gold text-xl md:text-2xl mb-4 tracking-widest">
        EXCELENCIA MÉDICA
      </p>
      <p className="font-sans text-gray-500 text-sm">
        © {currentYear} Todos los derechos reservados.
      </p>
    </footer>
  );
};
