import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANRessourcesHumaines = () => {
    const heroText:HeroText = {
        title: "Direction Ressources Humaines",
        description: "De la paperasse aux talents : digitalisez vos RH",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "Dossier RH Zéro papier",
        items: [
            "Numérisation des dossiers des collaborateurs",
            "Gestion des demandes et génération des documents",
            "Signature électronique des contrats",
            "Accès sécurisé et centralisé"
        ],
        badge: "Gain de 60% de temps administratif",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Recrutement & onboarding express",
        items: [
            "Workflows de validation automatisés",
            "Notifications IA aux managers",
            "Portails candidats/employés",
        ],
        badge: "Intégration complète en moins de 48h",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Pilotage social intelligent",
        items: [
            "Tableaux de bords RH temps réel",
            "IA pour prévisions d’absentéisme et besoins en formation",
            "Rapports légaux automatisés",
        ],
        badge: "Conformité et anticipation",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client DRH",
      quote:
        "Nous avons réduit de moitié le temps de traitement administratif et augmenté la satisfaction des collaborateurs dès leur arrivée",
      author: "DRH",
      role: "Responsable Production",
      company: ", Banque Ouest-Africaine",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Gestion manuelle et dispersée des dossiers du personnel",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Retards dans les recrutements et l’onboarding",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Suivi inefficace des performances et des formations",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Multiplication des outils et absence de données consolidées",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Conformité au Code du travail et obligations légales chronophages",
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

export default QANRessourcesHumaines;