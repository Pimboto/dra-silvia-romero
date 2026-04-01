"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { useLanguage } from "@/context/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  time_en: string;
  time_es: string;
  rating: number;
  text_en: string;
  text_es: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  // --- Testimonials mentioning Dra. Silvia Romero first ---
  {
    id: 1,
    name: "Carolina Zamorano",
    time_en: "9 months ago",
    time_es: "Hace 9 meses",
    rating: 5,
    text_en: "I recently visited Dr. Silvia Romero and was very impressed with both the doctor and the entire staff. Dr. Silvia Romero was professional, compassionate, and took the time to thoroughly explain everything during my consultation. I have now been two weeks post-surgery, and the results are better than I expected. I'm extremely happy with the progress and feel great.",
    text_es: "Recientemente visité a la Dra. Silvia Romero y quedé muy impresionada tanto con la doctora como con todo el personal. La Dra. Silvia Romero fue profesional, compasiva y se tomó el tiempo para explicar todo en detalle durante mi consulta. Ya llevo dos semanas de postoperatorio y los resultados son mejores de lo que esperaba. Estoy extremadamente feliz con el progreso y me siento genial.",
    avatar: "CZ"
  },
  {
    id: 2,
    name: "Hermes Galiano",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "I cannot recommend this exceptional plastic surgeon Dr. Silvia Romero and her outstanding team highly enough. With unparalleled skill and a compassionate, patient-centered approach, they provide an extraordinary level of care. I am very satisfied with the results of my double blepharoplasty and facelift. Dr. Romero's expertise is evident in every detail.",
    text_es: "No puedo recomendar lo suficiente a esta excepcional cirujana plástica, la Dra. Silvia Romero, y a su destacado equipo. Con una habilidad incomparable y un enfoque compasivo centrado en el paciente, brindan un nivel extraordinario de atención. Estoy muy satisfecho con los resultados de mi doble blefaroplastia y lifting facial. La experiencia de la Dra. Romero es evidente en cada detalle.",
    avatar: "HG"
  },
  {
    id: 3,
    name: "Angela Maria Espinal",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "The best of the best in plastic surgery, Dr. SILVIA ROMERO is excellent at her work. I had surgery with her and I am super happy and grateful, because I feel beautiful and my self-esteem has risen to the maximum with this great change. Her team is phenomenal, the facilities are beautiful and very comfortable.",
    text_es: "Lo mejor de lo mejor en cirugía plástica, la Dra. SILVIA ROMERO es excelente en su trabajo, me realicé una cirugía con ella y quedé súper feliz y agradecida, porque me siento linda y mi autoestima se ha elevado al máximo con este gran cambio. Su equipo de trabajo es fenomenal, las instalaciones son preciosas y muy confortables.",
    avatar: "AE"
  },
  {
    id: 4,
    name: "Rodolfo Núñez",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "The best plastic surgery clinic. Dr. Silvia Romero is the best plastic surgeon I know. My surgery was exceptional and the team and facilities are unique. HIGHLY RECOMMENDED!!",
    text_es: "La mejor clínica de cirugía plástica, La Dra Silvia Romero es la mejor cirujana plástica que conozco, mi cirugía fue excepcional y el equipo de trabajo y las instalaciones son únicos. SÚPER RECOMENDADOS!!",
    avatar: "RN"
  },
  {
    id: 5,
    name: "Marcela Botero",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "I want to express my deepest gratitude to Dr. Silvia Romero and her wonderful team in Medellín, Colombia for the extraordinary surgery they performed on me. The human quality and professionalism they demonstrated have made this experience unforgettable. They not only provided me with impeccable surgery, but managed to combine health and beauty perfectly.",
    text_es: "Quiero expresar mi más profundo agradecimiento a la doctora Silvia Romero y a su maravilloso equipo en Medellín, Colombia por la extraordinaria cirugía que me realizaron. La calidad humana y profesionalismo que demostraron han hecho de esta experiencia algo inolvidable. No solo me brindaron una cirugía impecable, sino que lograron combinar salud y belleza de manera perfecta.",
    avatar: "MB"
  },
  {
    id: 6,
    name: "Andrea Sanchez",
    time_en: "10 months ago",
    time_es: "Hace 10 meses",
    rating: 5,
    text_en: "A WONDERFUL EXPERIENCE!!! Dr. Silvia Romero is an excellent professional! A beautiful work team full of professionalism and human quality!! HIGHLY RECOMMENDED!",
    text_es: "Una EXPERIENCIA MARAVILLOSA !!! La Dra Silvia Romero excelente profesional ! Un equipo de trabajo precioso lleno de profesionalismo y calidad humana !! SUPER RECOMENDADO !",
    avatar: "AS"
  },
  {
    id: 7,
    name: "Rafael D Nunez",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "Excellent service, staff amazing, Dr. Silvia Romero outstanding!",
    text_es: "Excelente servicio, personal increíble, ¡Dra. Silvia Romero excepcional!",
    avatar: "RD"
  },
  {
    id: 8,
    name: "Melissa Quinchia-Rios",
    time_en: "4 months ago",
    time_es: "Hace 4 meses",
    rating: 5,
    text_en: "Choosing Dr. Silvia Romero in Medellín was one of the best decisions I've ever made. From my very first consultation, she made me feel heard and understood. Dr. Romero is not only a talented surgeon but also an artist. The results are everything I hoped for — natural, balanced, and exactly what I envisioned. This experience has been life-changing.",
    text_es: "Elegir a la Dra. Silvia Romero en Medellín fue una de las mejores decisiones que he tomado. Desde mi primera consulta, me hizo sentir escuchada y comprendida. La Dra. Romero no solo es una cirujana talentosa sino también una artista. Los resultados son todo lo que esperaba: naturales, equilibrados y exactamente lo que imaginé. Esta experiencia ha cambiado mi vida.",
    avatar: "MQ"
  },
  {
    id: 9,
    name: "Paola Alomia",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "I am absolutely thrilled with the results of my Double chin liposuction procedure with Dr. Silvia Romero! Not only did she deliver exceptional results, but her professionalism, care, and dedication to her patients are truly outstanding. From the initial consultation to the post-operative follow-up, Dr. Romero and her team exceeded my expectations in every way. 5 stars aren't enough - I'd give them 10 stars if I could!",
    text_es: "¡Estoy absolutamente encantada con los resultados de mi procedimiento de liposucción de papada con la Dra. Silvia Romero! No solo entregó resultados excepcionales, sino que su profesionalismo, cuidado y dedicación hacia sus pacientes son verdaderamente sobresalientes. Desde la consulta inicial hasta el seguimiento postoperatorio, la Dra. Romero y su equipo superaron mis expectativas en todos los sentidos. ¡5 estrellas no son suficientes, les daría 10 si pudiera!",
    avatar: "PA"
  },
  {
    id: 10,
    name: "Martha Gomez",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "Two months ago Dr. Silvia Romero performed a facelift surgery on me. I am very satisfied with the result because it is very natural, now I feel very happy with my appearance and with the excellent work that Dr. Silvia did. I completely recommend her work, she is an extremely integral professional and a great person.",
    text_es: "Hace 2 meses la Dra. Silvia Romero me realizó una cirugía de lifting facial. Estoy muy satisfecha con el resultado porque es muy natural, ahora me siento muy feliz con mi apariencia y con el excelente trabajo que realizó la Dra. Silvia, recomiendo completamente su trabajo, es una profesional demasiado íntegra y una gran persona.",
    avatar: "MG"
  },
  {
    id: 11,
    name: "Carolina Hellal",
    time_en: "4 months ago",
    time_es: "Hace 4 meses",
    rating: 5,
    text_en: "I had the pleasure of visiting Dr. Silvia Romero's clinic and my experience from the moment I arrived was wonderful. Dr. Silvia Romero not only answered each of my questions, but also explained step by step each procedure. In addition to her professionalism, she is a woman with a huge heart and a lot of charisma. I 100% recommend!",
    text_es: "Tuve el placer de visitar la clínica de la Dra. Silvia Romero y mi experiencia desde el instante que llegué fue maravillosa. La Dra. Silvia Romero no solo respondió a cada una de mis dudas, sino que también me explicó paso a paso cada procedimiento. Además de su profesionalismo, es una mujer con un corazón gigante y mucho carisma. ¡Recomiendo 100%!",
    avatar: "CH"
  },
  {
    id: 12,
    name: "Carolina Perez",
    time_en: "2 months ago",
    time_es: "Hace 2 meses",
    rating: 5,
    text_en: "I want to deeply thank Dr. Silvia Romero for her excellent care. Her professionalism, dedication and warmth made me feel very well cared for and safe throughout the entire process. Highly recommended!",
    text_es: "Quiero agradecer profundamente a la Dra. Silvia Romero por su excelente atención. Su profesionalismo, dedicación y calidez hicieron que me sintiera muy bien atendida y segura durante todo el proceso. ¡Altamente recomendado!",
    avatar: "CP"
  },
  {
    id: 13,
    name: "Julia Maria Florez",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "I recently had the pleasure of undergoing surgery with Dr. Silvia, and I can't recommend her highly enough! From the initial consultation to my post-operative care, the experience was exceptional. Dr. Silvia was incredible. She took the time to answer all my questions and made me feel completely comfortable throughout the entire process. Her expertise and compassion really stood out.",
    text_es: "Recientemente tuve el placer de someterme a una cirugía con la Dra. Silvia, ¡y no puedo recomendarla lo suficiente! Desde la consulta inicial hasta mi cuidado postoperatorio, la experiencia fue excepcional. La Dra. Silvia fue increíble. Se tomó el tiempo para responder todas mis preguntas y me hizo sentir completamente cómoda durante todo el proceso. Su experiencia y compasión realmente se destacaron.",
    avatar: "JF"
  },
  {
    id: 14,
    name: "Yohana Patricia Sepúlveda Mejía",
    time_en: "7 months ago",
    time_es: "Hace 7 meses",
    rating: 5,
    text_en: "Thank you Dr. Silvia and team!! My process was beautiful because Dr. Silvia listened and interpreted my fears and insecurities and fulfilled my dream. My surgery makes me very happy, the support was impeccable, I only have gratitude for everyone. I will continue using their services which are also very extensive and with high-quality technology.",
    text_es: "Gracias Dra. Silvia y equipo!! Mi proceso fue muy hermoso porque la Dra Silvia escuchó e interpretó mis miedos e inseguridades y cumplió mi sueño, mi cirugía me deja muy feliz, fue un acompañamiento impecable, solo tengo agradecimiento para todos. Seguiré utilizando sus servicios que además son muy amplios y con tecnología de alta calidad.",
    avatar: "YS"
  },
  {
    id: 15,
    name: "Monica Martinez",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "Dr. Silvia is a great person and excellent professional and her team is very friendly. The best care and excellent service.",
    text_es: "La Dra. Silvia es una gran persona y excelente profesional, y su equipo es muy amable. La mejor atención y excelente servicio.",
    avatar: "MM"
  },
  {
    id: 16,
    name: "Astrid Cortes",
    time_en: "3 months ago",
    time_es: "Hace 3 meses",
    rating: 5,
    text_en: "Excellent attention, Dr. Silvia is the best, a great human being.",
    text_es: "Excelente atención, la doctora Silvia es la mejor, un gran ser humano",
    avatar: "AC"
  },
  {
    id: 17,
    name: "Christopher S",
    time_en: "7 months ago",
    time_es: "Hace 7 meses",
    rating: 5,
    text_en: "Great experience from the consultation, surgery, aftercare. Dr. Romero and the entire staff helped each step along the way.",
    text_es: "Gran experiencia desde la consulta, la cirugía y el cuidado posterior. La Dra. Romero y todo el personal ayudaron en cada paso del camino.",
    avatar: "CS"
  },
  {
    id: 18,
    name: "Marco Valdes",
    time_en: "10 months ago",
    time_es: "Hace 10 meses",
    rating: 5,
    text_en: "The best decision I could have made. Dr. Silvia is a great, great surgeon.. I am very happy with the change she made in me.. and her staff is first class.. thank you Doctor!",
    text_es: "La mejor decisión que pude tomar, La Doctora Silvia es una gran gran cirujana.. estoy muy contento del cambio que hizo en mí.. y su staff de primera.. gracias Doctora!",
    avatar: "MV"
  },
  {
    id: 19,
    name: "Manuela Angel",
    time_en: "2 months ago",
    time_es: "Hace 2 meses",
    rating: 5,
    text_en: "I recently had a procedure with Dr. Silvia and I am very grateful to her as she understood what I wanted. She is a person with incredible energy. A mention to the team as I felt very accompanied and at ease being in their hands. Overall I felt very well.",
    text_es: "Hace poco me hice un procedimiento con la Dra. Silvia y estoy muy agradecida con ella ya que comprendió lo que yo quería, ella es una persona con una energía increíble. Una mención al equipo ya que me sentí muy acompañada y tranquila de estar en sus manos. En general me sentí muy bien.",
    avatar: "MA"
  },
  {
    id: 20,
    name: "Natalia Carvajal",
    time_en: "2 months ago",
    time_es: "Hace 2 meses",
    rating: 5,
    text_en: "The team is characterized by their professionalism, kindness and attention to detail. They cared not only about my surgery but about my well-being, about resolving our concerns in a timely manner. From Dr. Silvia to all the girls that make up the operational, commercial and post-surgical area, the attention was clear, precise, timely and close. 10/10",
    text_es: "Se caracterizan por su profesionalismo, amabilidad y atención al detalle. Se preocuparon no solamente por mi cirugía sino por mi bienestar, por resolver nuestras inquietudes a tiempo. Desde la Doctora Silvia hasta todas las chicas que conforman el área operativa, comercial y postquirúrgica la atención fue clara, precisa, oportuna y cercana. 10/10",
    avatar: "NC"
  },
  {
    id: 21,
    name: "Sjarlaine De Windt",
    time_en: "A month ago",
    time_es: "Hace un mes",
    rating: 5,
    text_en: "I am very grateful to Dr. Silvia and her entire team. From the first appointment they have been by my side, always looking out for me and providing their support. It was not an easy road, but it was completely worth it. The results are truly wonderful.",
    text_es: "Estoy muy agradecida con la Dra. Silvia y todo su equipo. Desde la primera cita han estado a mi lado, siempre pendientes de mí y brindándome su apoyo. No fue un camino fácil, pero valió completamente la pena. Los resultados son realmente maravillosos.",
    avatar: "SD"
  },
  {
    id: 22,
    name: "Jordy Josue Pacheco Ramirez",
    time_en: "10 months ago",
    time_es: "Hace 10 meses",
    rating: 5,
    text_en: "The best experience thanks to the excellent work team with excellent professionals like Dr. Silvia. I was fascinated with the result of my operation thanks to that great team!",
    text_es: "La mejor experiencia gracias al excelente equipo de trabajo con excelentes profesionales como la doctora Silvia, quedé fascinado con el resultado de mi operación gracias a ese gran equipo!",
    avatar: "JP"
  },
  {
    id: 23,
    name: "Natalia Palacio",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "I loved the facilities, they are beautiful and welcoming. The staff is very attentive and Dr. Silvia is a sweetheart. Everything is beautiful and perfect.",
    text_es: "Me encantaron las instalaciones, son hermosas y acogedoras, el personal muy atento y la Dra Silvia es un amor, todo está divino y Perfecto",
    avatar: "NP"
  },
  {
    id: 24,
    name: "Carmen Alicia Garcia Lozano",
    time_en: "A year ago",
    time_es: "Hace un año",
    rating: 5,
    text_en: "My experience was excellent with super good attention from both the reception and customer service staff as well as the specialized care of Dr. Silvia Romero.",
    text_es: "Mi experiencia fue excelente con una atención súper buena tanto del personal de atención y recepción como la atención especializada de la Dra. Silvia Romero.",
    avatar: "CG"
  },
  {
    id: 25,
    name: "Itamar Nogueira",
    time_en: "7 months ago",
    time_es: "Hace 7 meses",
    rating: 5,
    text_en: "The best doctor in the city of Medellín.",
    text_es: "La mejor doctora en la ciudad de Medellín",
    avatar: "IN"
  }
];

export const Testimonials = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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

  // Close modal on ESC
  useEffect(() => {
    if (!selectedTestimonial) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTestimonial(null);
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedTestimonial]);

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

  const getText = (t: Testimonial) => language === "en" ? t.text_en : t.text_es;
  const getTime = (t: Testimonial) => language === "en" ? t.time_en : t.time_es;

  // Check if text is likely truncated (rough heuristic: more than ~300 chars)
  const isLongText = (t: Testimonial) => getText(t).length > 200;

  return (
    <section id="testimonials" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            {t.testimonials.tag}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-luxury-black">
            {t.testimonials.title} <span className="text-gold italic font-serif">{t.testimonials.subtitle}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 text-gold fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-2xl font-bold text-luxury-black ml-2">5.0</span>
          </div>
          <p className="font-sans text-gray-600 text-lg">{t.testimonials.rating}</p>
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
                  <Card
                    className="h-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 rounded-[24px] cursor-pointer"
                    isPressable
                    onPress={() => setSelectedTestimonial(testimonial)}
                  >
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
                          <p className="font-sans text-sm text-gray-500">{getTime(testimonial)}</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Review Text */}
                      <div>
                        <p className="font-sans text-gray-700 leading-relaxed line-clamp-6">
                          {getText(testimonial)}
                        </p>
                        {isLongText(testimonial) && (
                          <span className="font-sans text-gold text-sm font-semibold mt-2 inline-block">
                            {t.testimonials.readMore} →
                          </span>
                        )}
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



      </div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedTestimonial(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              ref={modalRef}
              className="relative bg-white rounded-[24px] shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto border border-gold/20"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-luxury-black transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <Avatar
                    name={selectedTestimonial.avatar}
                    className="font-sans bg-luxury-black text-white font-bold"
                    size="lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-luxury-black font-bold">
                      {selectedTestimonial.name}
                    </h3>
                    <p className="font-sans text-sm text-gray-500">{getTime(selectedTestimonial)}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-gold fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Full Review Text */}
                <p className="font-sans text-gray-700 leading-relaxed text-base">
                  {getText(selectedTestimonial)}
                </p>



              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
