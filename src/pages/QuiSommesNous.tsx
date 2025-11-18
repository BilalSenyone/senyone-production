import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ValuesSection } from "@/components/ValuesSection";
import { NotreMissionSection } from "@/components/NotreMissionsSection";
import { MissionsSection } from "@/components/MissionSection";
import Footer from "@/components/Footer";


const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection 
        title="Senyone, votre partenaire de transformation digitale en Afrique de l'Ouest" 
        description="Depuis 2021, SENYONE accompagne les entreprises dans leur révolution numérique. Spécialistes de la digitalisation, de l'automatisation intelligente et de l'IA, nous transformons vos défis opérationnels en avantages concurrentiels durables."
        showButtons={false}
        maxWidth="max-w-8xl"
      />
      
      <MissionsSection />
      <ValuesSection />
      <NotreMissionSection />
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
