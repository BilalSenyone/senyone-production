import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANMarketing = () => {
    const heroText:HeroText = {
        title: "Direction Marketing",
        description: "De la donnée brute à des campagnes ciblées et performantes",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "Automatisaiton du Marketing",
        items: [
            "Segmentation dynamique des clients par IA",
            "Campagnes multicanales automatisées",
            "Personnalisation en temps réel",
        ],
        badge: "+40% d’engagement client",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Tableaux de bords Marketing",
        items: [
            "KPIs consolidés en temps réel",
            "Analyse ROI par campagne",
            "Scoring de performance",
        ],
        badge: "Allocation optimale du budget marketing",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Vue 360° du client et KYC",
        items: [
            "Enrichissement des profils clients",
            "Tracking du parcours client",
            "Intégration CRM/ERP",
        ],
        badge: "Meilleure expérience et fidélisation",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Marketing",
      quote:
        "Nous avons doublé notre taux de conversion en quelques mois grâce aux campagnes automatisées.",
      author: "Directrice Marketing",
      role: "Directeur Logistique",
      company: "Retail Ouest-Africain",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Données des clients éparpillées et non exploitables",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Campagnes massives peu personnalisées",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Mesure difficile du ROI marketing et du revenu influencé",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Multiplicité des canaux digitaux (WhatsApp, email, réseaux sociaux…)",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Besoin de réactivité face aux concurrents",
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

export default QANMarketing;