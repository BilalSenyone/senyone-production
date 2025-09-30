import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Defis from "@/components/DefisSection";
import { MetricsSection } from "@/components/MetriqueSection";
import Screenshots from "@/components/ScreenshotsSection";

const Index = () => {
  return (
    <div className="min-h-screen max-w-screen relative overflow-hidden">
      <Navbar />
      <div className="relative">
        <HeroSection />
        <Screenshots />
      </div>
      <div className="my-2">
        <MetricsSection />
      </div>
      <Defis />
      <Footer />
    </div>
  );
};

export default Index;
