import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  title: string;
  description: string;
  image: string;
  button?: string;
};

type CarouselProps = {
  slides: Slide[];
  className?: string;
  height?: string; // ex: "h-[500px]"
};

// Variants pour le parallaxe
const backgroundVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({
    y: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
};

const textVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({
    y: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
};

export function Carousel({ slides, className = "", height = "h-[500px]" }: CarouselProps) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  if (slides.length === 0) return null;

  const nextSlide = () => {
    setIndex(([prev]) => [
      (prev + 1) % slides.length,
      1,
    ]);
  };

  const prevSlide = () => {
    setIndex(([prev]) => [
      (prev - 1 + slides.length) % slides.length,
      -1,
    ]);
  };

  const slide = slides[index];

  return (
    <div className={`relative w-full overflow-hidden rounded-3xl ${height} ${className}`}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Fond avec mouvement vers le haut */}
          <motion.img
            src={slide.image}
            alt="slide background"
            custom={direction}
            variants={backgroundVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Texte avec mouvement vers le bas */}
          <motion.div
            custom={direction}
            variants={textVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-10 flex flex-col justify-center h-full px-12 md:px-20 text-white max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {slide.title}
            </h2>
            <p className="text-base md:text-lg mb-6 opacity-90">
              {slide.description}
            </p>
            {slide.button && (
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-fit shadow-lg hover:bg-gray-100 transition">
                {slide.button}
              </button>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Contrôles */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-20">
        <button
          onClick={prevSlide}
          className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
}

/*
Exemple d'utilisation :

const slides: Slide[] = [
  {
    title: "Pilotez votre croissance en toute sérénité.",
    description:
      "Notre solution allie puissance technologique et expertise comptable. Bénéficiez de clôtures accélérées, de rapprochements automatiques et d'une conformité OHADA garantie pour une direction financière agile et sécurisée.",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4c4cde1b29?auto=format&fit=crop&w=1600&q=80",
    button: "En savoir plus",
  },
  {
    title: "Optimisez vos processus d'achat.",
    description:
      "Maîtrisez vos coûts et simplifiez vos approvisionnements grâce à nos solutions innovantes.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
    button: "Découvrir",
  },
];

<Carousel slides={slides} height="h-[600px]" />
*/
