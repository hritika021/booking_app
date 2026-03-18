import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import BestRecommendations from "@/components/BestRecommendations";
import BrandPartners from "@/components/BrandPartners";

import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Featured from "../components/featured";
import PropertyType from "../components/Propertytype";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Featured/>
      <BestRecommendations />
      <BrandPartners />
      <PropertyType />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
