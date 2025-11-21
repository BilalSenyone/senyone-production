import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANInformatique = () => {
    const heroText:HeroText = {
        title: "Direction Informatique",
        description: "Réduisez vos tickets, augmentez vos performances",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "Support IT automatisé",
        items: [
            "Automatisation du cycle de vie des contrats",
            "Réduction des délais de résolution "
        ],
        badge: "-60% de charge helodesk",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Environnement intégré",
        items: [
            "Connecteurs ERP/CRM/Cloud",
            "API & middleware automatisés",
            "Gouvernance des données",
        ],
        badge: "Système unifié et cohérent",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Sécurité et surveillance proactive",
        items: [
            "Détection d’anomalies via IA ",
            "Alertes temps réel sur menaces",
            "Reporting cybersécurité",
        ],
        badge: "Incidents divisés par 3",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client IT",
      quote:
        "Nous avons automatisé 70% des tickets de support et recentré l’IT sur l’innovation.",
      author: "DSI",
      role: "DSI",
      company: "Société de Services",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Trop de tickets répétitifs et chronophages",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Systèmes hétérogènes peu intégrés",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Manque de visibilité sur les performances IT",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Projets retardés par les tâches de support",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Cybersécurité sous pression constante",
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

export default QANInformatique;