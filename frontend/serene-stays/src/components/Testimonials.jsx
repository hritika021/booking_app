import { Star } from "lucide-react";
import { testimonials } from "@/data/hotels";

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-3">Reviews</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-card rounded-xl p-8 border border-border/50 hover-lift">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? "text-accent fill-accent" : "text-border"}
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
