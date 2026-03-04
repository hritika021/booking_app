import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotels } from "@/data/hotels";

const BestRecommendations = () => {
  return (
    <section id="rooms" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-3">Explore</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Best Recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group bg-card rounded-xl overflow-hidden hover-lift border border-border/50"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 flex items-center gap-1">
                  <Star size={12} className="text-accent fill-accent" />
                  <span className="text-xs font-semibold text-foreground">{hotel.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                  {hotel.location}
                </p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{hotel.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-foreground font-bold">
                    <span className="text-primary text-xl">${hotel.price}</span>
                    <span className="text-sm text-muted-foreground font-normal"> / night</span>
                  </p>
                  <Button size="sm" className="gold-gradient rounded-full text-xs border-0 text-primary-foreground">
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestRecommendations;
