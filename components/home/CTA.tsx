"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Whatsapp, Calendar } from "iconsax-reactjs";

export const CTA = () => {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center bg-luxury-black text-center">
      <h2 className="font-serif text-5xl md:text-7xl mb-8 text-white">¿Lista para el cambio?</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Button
          as={Link}
          href="https://wa.me/573118324191"
          isExternal
          className="font-sans bg-[#25D366] text-white font-semibold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          startContent={<Whatsapp variant="Bold" />}
        >
          Escribir por WhatsApp
        </Button>
        <Button
          as={Link}
          href="/contact"
          className="font-sans bg-luxury-black text-white font-semibold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          startContent={<Calendar variant="Bold" />}
        >
          Reserva Online
        </Button>
      </div>
    </section>
  );
};
