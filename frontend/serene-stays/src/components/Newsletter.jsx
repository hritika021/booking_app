import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="gold-gradient rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "hsl(36,33%,97%)", transform: "translate(30%,-30%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: "hsl(36,33%,97%)", transform: "translate(-30%,30%)" }} />

          <div className="relative z-10">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Subscribe For Exclusive Offers
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Get the latest deals and luxury travel inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-6 py-3 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 text-sm"
              />
              <Button className="rounded-full px-8 py-3 bg-primary-foreground text-foreground font-semibold hover:bg-primary-foreground/90 border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
