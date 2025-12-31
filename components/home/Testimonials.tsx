"use client";

import { useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

const testimonials = [
  {
    id: 1,
    name: "Julia Maria Florez",
    time: "Hace un año",
    rating: 5,
    text: "I recently had the pleasure of undergoing surgery at Soma Plastic Surgery, and I can't recommend them highly enough! From the initial consultation to my post-operative care, the experience was exceptional. Dra. Silvia was incredible. She took the time to answer all my questions and made me feel completely comfortable throughout the entire process. Her expertise and compassion really stood out.",
    avatar: "JF"
  },
  {
    id: 2,
    name: "Yohana Patricia Sepúlveda Mejía",
    time: "Hace 7 meses",
    rating: 5,
    text: "Gracias Dra. Silvia y equipo!! Mi proceso fue muy hermoso porque la Dra Silvia escuchó e interpretó mis miedos e inseguridades y cumplió mi sueño, mi cirugía me deja muy feliz, fue un acompañamiento impecable, solo tengo agradecimiento para todos. Seguiré utilizando sus servicios que además son muy amplios y con tecnología de alta calidad.",
    avatar: "YS"
  },
  {
    id: 3,
    name: "Edward Celinz C.",
    time: "Hace 4 meses",
    rating: 5,
    text: "Me realicé un tratamiento con láser de diodo para eliminar algunos vellos y definir la barba en la zona de las mejillas. El equipo es muy profesional y la experiencia fue excelente. Natalia es muy amable y transmite mucha confianza; te hace sentir cómodo y seguro durante todo el procedimiento. ¡Gracias!",
    avatar: "EC"
  },
  {
    id: 4,
    name: "Carolina Zamorano",
    time: "Hace 9 meses",
    rating: 5,
    text: "I recently visited Dr. Silvia Romero and was very impressed with both the doctor and the entire staff. Dr. Silvia Romero was professional, compassionate, and took the time to thoroughly explain everything during my consultation. I have now been two weeks post-surgery, and the results are better than I expected. I'm extremely happy with the progress and feel great.",
    avatar: "CZ"
  },
  {
    id: 5,
    name: "Marcela Botero",
    time: "Hace un año",
    rating: 5,
    text: "Quiero expresar mi más profundo agradecimiento a la doctora Silvia Romero y a su maravilloso equipo en Soma Plastic Surgery Medellín, Colombia por la extraordinaria cirugía que me realizaron. La calidad humana y profesionalismo que demostraron han hecho de esta experiencia algo inolvidable. No solo me brindaron una cirugía impecable, sino que lograron combinar salud y belleza de manera perfecta.",
    avatar: "MB"
  },
  {
    id: 6,
    name: "Hermes Galiano",
    time: "Hace un año",
    rating: 5,
    text: "I cannot recommend this exceptional plastic surgeon Dr Silvia Romero and her outstanding team at Soma Plastic Surgery highly enough. With unparalleled skill and a compassionate, patient-centered approach, they provide an extraordinary level of care. I am very satisfied with the results of my double blepharoplasty and facelift. Dr. Romero expertise is evident in every detail.",
    avatar: "HG"
  },
  {
    id: 7,
    name: "Manuela Rodriguez Gomez",
    time: "Hace un año",
    rating: 5,
    text: "¡Una experiencia impecable! Soma plastic surgery no solo ofrece un ambiente elegante y acogedor, sino que también cuenta con un equipo de profesionales excepcionales. Cada miembro del personal demuestra un alto nivel de competencia y dedicación, haciendo que te sientas valorado y bien atendido en todo momento. La calidad del servicio es inigualable.",
    avatar: "MR"
  },
  {
    id: 8,
    name: "Angela Maria Espinal",
    time: "Hace un año",
    rating: 5,
    text: "Lo mejor de lo mejor en cirugía plástica, la Dra. SILVIA ROMERO es excelente en su trabajo, me realicé una cirugía con ella y quedé súper feliz y agradecida, porque me siento linda y mi autoestima se ha elevado al máximo con este gran cambio. El equipo de trabajo de Soma Plastic Surgery es fenomenal, sus instalaciones son preciosas y muy confortables.",
    avatar: "AE"
  },
  {
    id: 9,
    name: "Mariana Londoño",
    time: "Hace un año",
    rating: 5,
    text: "The team is highly professional and experienced, offering personalized and top-quality care. The facilities and equipment feature the latest technologies. Without a doubt, the best aesthetic surgery center in Medellin.",
    avatar: "ML"
  },
  {
    id: 10,
    name: "Martha Gomez",
    time: "Hace un año",
    rating: 5,
    text: "Hace 2 meses la Dra. Silvia Romero me realizó una cirugía de lifting facial en Soma Plastic Surgery. Estoy muy satisfecha con el resultado porque es muy natural, ahora me siento muy feliz con mi apariencia y con el excelente trabajo que realizó la Dra. Silvia, recomiendo completamente su trabajo, es una profesional demasiado íntegra y una gran persona.",
    avatar: "MG"
  },
  {
    id: 11,
    name: "Monica Ospina",
    time: "Hace 7 meses",
    rating: 5,
    text: "Me realicé un procedimiento maravilloso llamado Láser CO2, entre varios que me he hecho y los súper recomiendo, su profesionalismo y trato es increíble, y ni se diga de los resultados. Estoy absolutamente FELIZ!!!",
    avatar: "MO"
  },
  {
    id: 12,
    name: "Rodolfo Núñez",
    time: "Hace un año",
    rating: 5,
    text: "La mejor clínica de cirugía plástica, La Dra Silvia Romero es la mejor cirujana plástica que conozco, mi cirugía fue excepcional y el equipo de trabajo y las instalaciones son únicos. SÚPER RECOMENDADOS!!",
    avatar: "RN"
  },
  {
    id: 13,
    name: "Paola Alomia",
    time: "Hace un año",
    rating: 5,
    text: "I am absolutely thrilled with the results of my Double chin liposuction procedure with Dr. Silvia Romero! Not only did she deliver exceptional results, but her professionalism, care, and dedication to her patients are truly outstanding. From the initial consultation to the post-operative follow-up, Dr. Romero and her team at Soma Plastic Surgery exceeded my expectations in every way. 5 stars aren't enough - I'd give them 10 stars if I could!",
    avatar: "PA"
  },
  {
    id: 14,
    name: "Monica Martinez",
    time: "Hace un año",
    rating: 5,
    text: "Dr Silvia is a great person and excellent professional and her team is very friendly. The best care and excellent service at Soma Plastic Surgery.",
    avatar: "MM"
  },
  {
    id: 15,
    name: "Astrid Cortes",
    time: "Hace 3 meses",
    rating: 5,
    text: "Excelente atención, la doctora Silvia es la mejor, un gran ser humano",
    avatar: "AC"
  },
  {
    id: 16,
    name: "Andrea Sanchez",
    time: "Hace 10 meses",
    rating: 5,
    text: "Una EXPERIENCIA MARAVILLOSA !!! La Dra Silvia Romero excelente profesional ! Un equipo de trabajo precioso lleno de profesionalismo y calidad humana !! SUPER RECOMENDADO !",
    avatar: "AS"
  },
  {
    id: 17,
    name: "Christopher S",
    time: "Hace 7 meses",
    rating: 5,
    text: "Great experience from the consultation, surgery, aftercare. Dr. Romero and the entire staff helped each step along the way.",
    avatar: "CS"
  },
  {
    id: 18,
    name: "Marco Valdes",
    time: "Hace 10 meses",
    rating: 5,
    text: "La mejor decisión que pude tomar , La Doctora Silvia es una gran gran cirujana .. estoy muy contento del cambio que hizo en mí.. y su staff de primera .. gracias Doctora 💫",
    avatar: "MV"
  },
  {
    id: 19,
    name: "Andrea Rodriguez",
    time: "Hace 10 meses",
    rating: 5,
    text: "Muchas gracias por tan excelente atención ! Me sentí súper consentida por todo el equipo . Tienen tecnología de punta y personal capacitado para depositar en ellos toda confianza ✨",
    avatar: "AR"
  },
  {
    id: 20,
    name: "Jordy Josue Pacheco Ramirez",
    time: "Hace 10 meses",
    rating: 5,
    text: "La mejor experiencia gracias al excelente equipo de trabajo con excelentes profesionales como la doctora Silvia, quedé fascinado con el resultado de mi operación gracias a ese gran equipo 💗💗💗",
    avatar: "JP"
  },
  {
    id: 21,
    name: "Natalia Palacio",
    time: "Hace un año",
    rating: 5,
    text: "Me encantaron las instalaciones , son hermosas y acogedoras , el personal muy atento y la Dra Silvia es un amor ,, todo está divino y Perfecto",
    avatar: "NP"
  },
  {
    id: 22,
    name: "Carmen Alicia Garcia Lozano",
    time: "Hace un año",
    rating: 5,
    text: "Mi experiencia fue excelente con una atención súper buena tanto del personal de atención y recepción como la atención especializada de la Dra. Silvia Romero.",
    avatar: "CG"
  },
  {
    id: 23,
    name: "Felipe Alejandro Jurado Carmona",
    time: "Hace un año",
    rating: 5,
    text: "Excelente atención, mucha disposición del personal, mucha calidad humana, estuve acompañando a mi hermana y me sentí mejor que en casa.",
    avatar: "FJ"
  },
  {
    id: 24,
    name: "Rafael D Nunez",
    time: "Hace un año",
    rating: 5,
    text: "Excellent service, staff amazing, Dr Silvia Romero outstanding!",
    avatar: "RD"
  },
  {
    id: 25,
    name: "Itamar Nogueira",
    time: "Hace 7 meses",
    rating: 5,
    text: "La mejor doctora en la ciudad de Medellín",
    avatar: "IN"
  },
  {
    id: 26,
    name: "Jaime Montoya",
    time: "Hace un año",
    rating: 5,
    text: "Excelente",
    avatar: "JM"
  },
  {
    id: 27,
    name: "Chayis Cano",
    time: "Hace 4 meses",
    rating: 5,
    text: "¡Estoy feliz con mi experiencia en Radiance! 😍 Desde que llegué, quedé sorprendida por lo hermoso que es el lugar y la calidez con la que reciben. Me realicé un tratamiento láser en dos zonas y la tecnología que usan es de otro nivel. Todo fue increíble: el ambiente, los equipos y, sobre todo, el profesionalismo. ¡100% recomendado!",
    avatar: "CC"
  },
  {
    id: 28,
    name: "Manuela Angel",
    time: "Hace 2 meses",
    rating: 5,
    text: "Hace poco me hice un procedimiento con la Dra. Silvia y estoy muy agradecida con ella ya que comprendió lo que yo quería, ella es una persona con una energía increíble. Una mención al equipo ya que me sentí muy acompañada y tranquila de estar en sus manos. En general me sentí muy bien.",
    avatar: "MA"
  },
  {
    id: 29,
    name: "Carolina Hellal",
    time: "Hace 4 meses",
    rating: 5,
    text: "Tuve el placer de visitar Radiance Plastic Surgery y mi experiencia desde el instante que llegué fue maravillosa. La Dra Silvia Romero no solo respondió a cada una de mis dudas, sino que también me explicó paso a paso cada procedimiento. Además de su profesionalismo, es una mujer con un corazón gigante y mucho carisma. Recomiendo 100% el lugar!",
    avatar: "CH"
  },
  {
    id: 30,
    name: "Carolina Perez",
    time: "Hace 2 meses",
    rating: 5,
    text: "Quiero agradecer profundamente a la Dra. Silvia Romero por su excelente atención en Radiance Center. Su profesionalismo, dedicación y calidez hicieron que me sintiera muy bien atendida y segura durante todo el proceso. ¡Altamente recomendado!",
    avatar: "CP"
  },
  {
    id: 31,
    name: "Jaime Garcia",
    time: "Hace 2 meses",
    rating: 5,
    text: "Una experiencia muy positiva con la cámara hiperbárica. Me sorprendió gratamente el tratamiento. Desde la primera sesión noté una mejora en mi energía y recuperación física. El personal fue muy profesional, atento y explicó todo el proceso con claridad. ¡Definitivamente volveré!",
    avatar: "JG"
  },
  {
    id: 32,
    name: "Melissa Quinchia-Rios",
    time: "Hace 4 meses",
    rating: 5,
    text: "Choosing Dr. Silvia Romero at Radiance Plastic Surgery in Medellín was one of the best decisions I've ever made. From my very first consultation, she made me feel heard and understood. Dr. Romero is not only a talented surgeon but also an artist. The results are everything I hoped for — natural, balanced, and exactly what I envisioned. This experience has been life-changing.",
    avatar: "MQ"
  },
  {
    id: 33,
    name: "Natalia Carvajal",
    time: "Hace 2 meses",
    rating: 5,
    text: "En Radiance Plastic Surgery se caracterizan por su profesionalismo, amabilidad y atención al detalle. Se preocuparon no solamente por mi cirugía sino por mi bienestar, por resolver nuestras inquietudes a tiempo. Desde la Doctora Silvia hasta todas las chicas que conforman el área operativa, comercial y postquirúrgica la atención fue clara, precisa oportuna y cercana. 10/10",
    avatar: "NC"
  },
  {
    id: 34,
    name: "Sjarlaine De Windt",
    time: "Hace un mes",
    rating: 5,
    text: "Estoy muy agradecida con la Dra. Silvia y todo su equipo. Desde la primera cita han estado a mi lado, siempre pendientes de mí y brindándome su apoyo. No fue un camino fácil, pero valió completamente la pena. Los resultados son realmente maravillosos.",
    avatar: "SD"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Adjust cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + cardsPerView >= testimonials.length ? 0 : prev + cardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - cardsPerView < 0 ? Math.max(0, testimonials.length - cardsPerView) : prev - cardsPerView
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            Testimonios Reales
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-luxury-black">
            Lo que dicen <span className="text-gold italic font-serif">nuestras pacientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 text-gold fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <span className="font-sans text-2xl font-bold text-luxury-black ml-2">5.0</span>
          </div>
          <p className="font-sans text-gray-600 text-lg">Basado en más de 30 reseñas verificadas</p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 rounded-[24px]">
                    <CardBody className="p-8">
                      {/* Header with Avatar and Info */}
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar
                          name={testimonial.avatar}
                          className="font-sans bg-luxury-black text-white font-bold"
                          size="lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-serif text-lg text-luxury-black font-bold">
                            {testimonial.name}
                          </h3>
                          <p className="font-sans text-sm text-gray-500">{testimonial.time}</p>
                        </div>
                      </div>

                      {/* Stars - Estilo Google */}
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Review Text */}
                      <div>
                        <p className="font-sans text-gray-700 leading-relaxed line-clamp-6">
                          {testimonial.text}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <Button
              isIconOnly
              onClick={prevSlide}
              className="bg-luxury-black text-gold rounded-full hover:bg-gold hover:text-luxury-black transition-all"
              size="lg"
            >
              <ArrowLeft2 size={24} variant="Bold" />
            </Button>

            <div className="font-sans text-gold font-bold">
              {Math.floor(currentIndex / cardsPerView) + 1} / {Math.ceil(testimonials.length / cardsPerView)}
            </div>

            <Button
              isIconOnly
              onClick={nextSlide}
              className="bg-luxury-black text-gold rounded-full hover:bg-gold hover:text-luxury-black transition-all"
              size="lg"
            >
              <ArrowRight2 size={24} variant="Bold" />
            </Button>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 text-center">
          <p className="font-sans text-gray-500 mb-4">¿Ya eres paciente nuestra?</p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans inline-flex items-center gap-2 text-gold font-semibold hover:opacity-70 transition-opacity"
          >
            <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Déjanos tu reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
};
