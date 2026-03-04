import heroImage from "@/assets/hero-hotel.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Luxury hotel with infinity pool at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager" />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/35"  />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="animate-fade-up text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(38,70%,65%)" }}>
          Premium Luxury Hotels
        </p>
        <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: "hsl(36,33%,97%)" }}>
          Choose The Best.{" "}
          <br className="hidden sm:block" />
          <span className="italic" style={{ color: "hsl(38,70%,65%)" }}>Stay Best</span> With Us.
        </h1>
        <p className="animate-fade-up-delay-2 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "hsl(36,30%,85%)" }}>
          Discover handpicked luxury accommodations around the world. Unforgettable experiences await at every destination.
        </p>
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="gold-gradient rounded-full px-10 md:py-6 text-base font-semibold border-0 text-primary-foreground shadow-lg">
            Book Now
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-10 py-4 md:py-6 text-base font-semibold border-2"
            style={{ borderColor: "hsl(36,30%,85%)", color: "hsl(36,30%,95%)", background: "transparent" }}>

            Learn More
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;