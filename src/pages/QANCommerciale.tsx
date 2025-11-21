import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANCommerciale = () => {
    const heroText:HeroText = {
        title: "Direction Commerciale",
        description: "Transformez vos leads en chiffre d’affaires avec l’IA",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "CRM Augmenté",
        items: [
            "Intégration Salesforce/ERP",
            "Enrichissement automatique des leads (IA)",
            "Scoring prédictif",
        ],
        badge: "+30% de taux de conversion",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Commande Zero erreur",
        items: [
            "Portail B2B digitalisé",
            "Validation automatique selon règles commerciales",
            "Facturation et relance automatisées",
        ],
        badge: "-70% d’erreurs et retards",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Pilotage Commercial en direct",
        items: [
            "Tableaux de bord multicanal",
            "IA pour prévisions de ventes",
            "Alertes sur opportunités prioritaires",
        ],
        badge: "Meilleure allocation des ressources",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client D. Commerciale",
      quote:
        "Avec SENYONE, nos commerciaux passent moins de temps à saisir et plus de temps à vendre.",
      author: "Directeur Commercial",
      role: "Responsable Production",
      company: "Groupe Agroalimentaire",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Prospection chronophage et peu qualifiée",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Saisie manuelle des commandes → erreurs et retards",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Suivi insuffisant des performances par canal",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Difficulté à prévoir les ventes et gérer les stocks associés",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Pression concurrentielle accrue",
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

export default QANCommerciale;