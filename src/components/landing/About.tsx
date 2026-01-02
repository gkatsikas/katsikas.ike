import { Users, Award, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "50+", label: "Cities Served" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            About Katsikas-IKE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Powering a Greener Tomorrow
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Since 2021, Katsikas-IKE has been at the forefront of the renewable energy revolution.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
