import { Check, TrendingDown, Home, Globe } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Energy Bills",
    description: "Cut your electricity costs by up to 80% with solar power",
    stat: "80%",
    statLabel: "Avg. Savings",
  },
  {
    icon: Home,
    title: "Increase Property Value",
    description: "Homes with solar panels sell for more and faster",
    stat: "4.1%",
    statLabel: "Value Increase",
  },
  {
    icon: Globe,
    title: "Reduce Carbon Footprint",
    description: "Clean energy that helps protect our planet for future generations",
    stat: "3 Tons",
    statLabel: "CO₂ Saved/Year",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Why Choose Solar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Benefits That
              <span className="text-gradient"> Pay Off</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Investing in solar energy isn't just good for the environment—it's 
              smart for your wallet. Discover the advantages that thousands of 
              homeowners are already enjoying.
            </p>

            <ul className="space-y-4">
              {[
                "25-year performance warranty",
                "Federal tax credit eligible",
                "Professional installation included",
                "Free energy monitoring app",
                "Financing options available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {benefit.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{benefit.stat}</p>
                  <p className="text-xs text-muted-foreground">{benefit.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
