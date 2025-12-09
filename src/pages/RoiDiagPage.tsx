import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import QuestionComponent from "@/components/ui/roi-calculator";


const RoiDiagPage = () => {
  return (
    <div className="min-h-screen max-w-screen relative overflow-hidden bg-[#efefef]">
      {/*<Navbar />
      <div className="relative">
        <HeroSection 
        title="Calculateur de ROI" 
        description="Veuillez répondre aux questions afin d'avoir votre diagnostique gratuit" 
        showButtons={false}
        />
      </div>*/}
      <QuestionComponent />
      <Footer />
    </div>
  );
};

export default RoiDiagPage;