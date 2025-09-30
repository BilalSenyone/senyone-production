import { Carousel, Slide } from "./ui/carousel-full-width";
const slides: Slide[] = [
  {
    title: "Pilotez votre croissance en toute sérénité.",
    description:
      "Notre solution allie puissance technologique et expertise comptable. Bénéficiez de clôtures accélérées, de rapprochements automatiques et d'une conformité OHADA garantie pour une direction financière agile et sécurisée.",
    image:
      "/images",
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

export default function QuiSommesNousSection() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Qui sommes-nous ?</h2>
      <Carousel slides={slides} height="h-[600px]" />
    </section>
  );
}
