import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CarteLocalisation } from "@/components/CarteLocalisation";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection showButtons={false} title="Nous contacter" description="Vous souhaitez-nous contacter ? Voici ce dont vous avez besoin"/>
      <ContactForm />
      <CarteLocalisation />
      <Footer />
    </div>
  );
};

export default Contact;
