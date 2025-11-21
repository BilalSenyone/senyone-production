import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANOperationProduction = () => {
    const heroText:HeroText = {
        title: "Direction des Opérations/Production",
        description: "Du pilotage à la production en temps réel",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "Production connectée",
        items: [
            "Internet des Objets et capteurs connectés",
            "Collecte automatique des données machine",
            "Alertes en cas de dérive",
        ],
        badge: "-30% d’arrêts non planifiés",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Plannification intelligente",
        items: [
            "Optimisation de la planification",
            "Synchronisation avec la chaine d’approvisionnement",
            "Simulation de scénarios",
        ],
        badge: "Gains de productivité de 15%",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Qualité garantie",
        items: [
            "Workflows de validation qualité automatisés",
            "Traçabilité complète des lots",
            "Reporting réglementaire automatisé",
        ],
        badge: "Conformité ISO & industrie",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Production",
      quote:
        "Nous avons gagné en visibilité et réduit drastiquement nos coûts liés aux arrêts machines.",
      author: "Responsable Production",
      role: "Responsable Production",
      company: "Industrie Textile",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Saisie manuelle de données de production",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Retards dans la planification et la logistique",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Manque de visibilité sur les goulots d’étranglement",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Coûts élevés liés aux arrêts de production",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Difficulté à assurer la traçabilité et la qualité",
      color: "#1F8BFF",
      align: "right",
      visible: true,
      delayClass: "delay-1000",
    },
  ];

    return (
        <QuiAidonsNous heroText={heroText} solutionsCards={solutionsCards} cases={cases} cards={cards} />
    );
};

export default QANOperationProduction;