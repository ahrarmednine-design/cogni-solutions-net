import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Training from "@/components/Training";
import Subscriptions from "@/components/Subscriptions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Training />
      <Subscriptions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
