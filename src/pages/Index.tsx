import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Defis from "@/components/DefisSection";
import { MetricsSection } from "@/components/MetriqueSection";
import Screenshots from "@/components/ScreenshotsSection";
import QuiSommesNousSection from "@/components/QuiAdonsNousSection";

const Index = () => {
  return (
    <div className="min-h-screen max-w-screen relative overflow-hidden bg-[#efefef]">
      <Navbar />
      <div className="relative">
        <HeroSection />
        <Screenshots />
      </div>
      <div className="my-2">
        <MetricsSection />
      </div>
      <Defis />
      <QuiSommesNousSection />
      <Footer />
    </div>
  );
};

export default Index;
