import aboutImage from "@/assets/about-hotel.jpg";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Luxury hotel spa and pool area"
              className="rounded-2xl w-full object-cover aspect-square shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-xl p-5 hidden md:block">
              <p className="font-display text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground font-medium">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              We Provide The Best <br />
              <span className="text-gold-gradient italic">Luxury Experience</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 15 years in the hospitality industry, we've curated exceptional
              properties across the globe. Our commitment to excellence ensures every guest
              enjoys an unforgettable stay with world-class amenities, personalized service,
              and breathtaking locations.
            </p>
            <ul className="space-y-3 mb-8">
              {["Handpicked luxury properties", "24/7 concierge service", "Best price guarantee"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full gold-gradient shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="gold-gradient rounded-full px-8 py-6 text-base font-semibold border-0 text-primary-foreground">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
