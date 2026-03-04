import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import BestRecommendations from "@/components/BestRecommendations";
import BrandPartners from "@/components/BrandPartners";
import SuiteCategories from "@/components/SuiteCategories";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <BestRecommendations />
      <BrandPartners />
      <SuiteCategories />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
