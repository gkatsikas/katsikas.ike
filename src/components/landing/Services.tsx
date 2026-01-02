import { Sun, Battery, Wrench, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description:
      "Premium solar panels professionally installed on your roof or property, optimized for maximum energy capture.",
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description:
      "Store excess energy for use during peak hours or outages. Complete energy independence for your home.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "24/7 monitoring and maintenance services to ensure your system operates at peak efficiency year-round.",
  },
  {
    icon: BarChart3,
    title: "Energy Consulting",
    description:
      "Expert analysis of your energy needs with customized solutions to maximize savings and efficiency.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Solar Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From installation to maintenance, we provide end-to-end solar energy 
            solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
