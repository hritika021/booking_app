import hotelImg from '../assets/hotel-room-1.jpg'
import apartment from '../assets/Apartment.png' ;
import resort from '../assets/resort.png';
import villa from '../assets/villa.png';
import cabin from '../assets/cabin.png';
const suites = [
  { label: "Hotels", count: "233 hotels", image: hotelImg },
  { label: "Apartments", count: "150 family-friendly", image: apartment },
  { label: "Resorts", count: "100 beachfront properties", image: resort },
  { label: "Villas", count: "80 luxury retreats", image: villa },
  { label: "Cabins", count: "60 nature retreats", image: cabin },
];

const PropertyType = () => {
  return (
    <section id="suites" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-3">Categories</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Browse by property type
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {suites.map((suite) => (
            <div
              key={suite.label}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={suite.image}
                alt={`${suite.label} suite`}
                className="w-full h-[250px] object-cover transition-transform duration-700 overflow-hidden group-hover:scale-110"
                loading="lazy"
              />
              <div className=" inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className=" bottom-0 left-0 right-0 p-3">
                <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: "hsl(36, 90%, 16%)" }}>
                  {suite.label}
                </h3>
                <p className="text-sm mt-1" style={{ color: "hsl(36, 97%, 12%)" }}>
                  {suite.count} →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyType;
