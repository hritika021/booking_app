import suiteStudent from "@/assets/suite-student.jpg";
import suiteFamily from "@/assets/suite-family.jpg";
import suiteProfessional from "@/assets/suite-professional.jpg";
import suiteCouple from "@/assets/suite-couple.jpg";

const suites = [
  { label: "Student", image: suiteStudent },
  { label: "Family", image: suiteFamily },
  { label: "Professional", image: suiteProfessional },
  { label: "Couple", image: suiteCouple },
];

const SuiteCategories = () => {
  return (
    <section id="suites" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-3">Categories</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Choose Your Suite
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {suites.map((suite) => (
            <div
              key={suite.label}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={suite.image}
                alt={`${suite.label} suite`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: "hsl(36,33%,97%)" }}>
                  {suite.label}
                </h3>
                <p className="text-sm mt-1" style={{ color: "hsl(36,30%,80%)" }}>
                  Explore →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuiteCategories;
