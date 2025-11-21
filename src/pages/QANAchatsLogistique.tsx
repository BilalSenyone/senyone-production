import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANAchatsLogistique = () => {
    const heroText:HeroText = {
        title: "Direction Achats & Logistique",
        description: "De la commande à la livraison, sans rupture ni erreur",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "Approvisionnement automatisé",
        items: [
            "Portails fournisseurs digitalisés",
            "Workflows d’approbation intégrés",
            "Classement et suivi automatisés des contrats",
        ],
        badge: "-30% de temps de traitement",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Gestion logistique en temps réel",
        items: [
            "Traçabilité automatisée des livraisons",
            "Tableaux de bords stocks et flux logistiques",
            "IA pour prévisions d’approvisionnement",
        ],
        badge: "Zéro rupture critique",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Optimisation des coûts",
        items: [
            "Analyse comparative des achats via IA",
            "Suivi automatisé des coûts logistiques",
            "Alertes sur anomalies et surcoûts",
        ],
        badge: "économies de 10 à 15%",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Achat/Logistique",
      quote:
        "Directeur LogistiqueNous avons éliminé les ruptures de stock et réduit nos coûts d’approvisionnement de 12%.",
      author: "Directeur Logistique",
      role: "Directeur Logistique",
      company: "Groupe Agro-industriel",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Saisie manuelle des bons de commande",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Retards et erreurs de livraison",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Stocks mal synchronisés",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Difficultés de suivi des fournisseurs et contrats",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Coûts de transport et d’approvisionnement élevés",
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

export default QANAchatsLogistique;