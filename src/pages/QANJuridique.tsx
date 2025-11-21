import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANJuridique = () => {
    const heroText:HeroText = {
        title: "Direction Juridique",
        description: "De la gestion manuelle à la conformité digitale continue",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "Gestion du cycle de vie des contrats",
        items: [
            "•	Automatisation du cycle de vie des contrats",
            "Signatures électroniques certifiées",
            "Alertes d’échéance",
        ],
        badge: "Réduction de 50% des délais de traitement",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Conformité automatisée",
        items: [
            "Archivage numérique sécuris",
            "Contrôles de conformité intégrés (OHADA, RGPD, etc.)",
            "Historique et piste d’audit",
        ],
        badge: "100% conformité en continu",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Pilotage des risques",
        items: [
            "Tableau de bord litiges et contentieux",
            "IA pour analyser clauses & risques juridiques",
            "Reporting automatisé",
        ],
        badge: "Réduction des litiges récurrents",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Juridique",
      quote:
        "“Nous avons sécurisé l’ensemble de nos contrats et gagné en réactivité sur les négociations.”",
      author: "Directrice Juridique",
      role: "",
      company: "Holding Financière",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Contrats dispersés, difficilement traçables",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Manque de visibilité sur les litiges et échéances",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Délais de validation et de signature",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Risque de non-conformité aux normes OHADA/Locales",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Charges administratives lourdes liées à l’archivage légal",
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

export default QANJuridique;