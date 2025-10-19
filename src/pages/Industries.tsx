import { Card } from "@/components/ui/card";
import { Building2, HeartPulse, Banknote, Fingerprint, ShoppingCart, Rocket } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Public Sector",
      description: "Federal, state, and local government agencies trust us with mission-critical systems.",
      expertise: [
        "FedRAMP and NIST compliance",
        "Biometric platform integration",
        "Legacy modernization at scale",
        "Interagency data sharing"
      ],
      caseExample: "State biometric platform: 99.95% uptime, automated NIST validation"
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "HIPAA-ready solutions that protect patient data while enabling innovation.",
      expertise: [
        "PHI masking and encryption",
        "HL7/FHIR integration",
        "EHR system optimization",
        "Telehealth infrastructure"
      ],
      caseExample: "HIPAA-ready data lake: PHI masking automated, 28% compute savings"
    },
    {
      icon: Banknote,
      title: "Financial Services",
      description: "Secure, compliant, and resilient systems for banking, payments, and fintech.",
      expertise: [
        "PCI-DSS compliance",
        "Real-time payment processing",
        "Fraud detection pipelines",
        "Core banking modernization"
      ],
      caseExample: "Payment API performance: 42% latency reduction, <0.2% error rate at 5k RPS"
    },
    {
      icon: Fingerprint,
      title: "Biometrics & Identity",
      description: "Precision-engineered systems for identity verification and access control.",
      expertise: [
        "ABIS/AFIS integration",
        "Liveness detection",
        "Multi-modal biometric fusion",
        "Performance at scale (millions of records)"
      ],
      caseExample: "NIST-certified matching accuracy with sub-second response times"
    },
    {
      icon: ShoppingCart,
      title: "Retail & eCommerce",
      description: "High-availability platforms that scale with demand and delight customers.",
      expertise: [
        "Headless commerce architectures",
        "Inventory and order management",
        "Personalization engines",
        "Omnichannel analytics"
      ],
      caseExample: "Black Friday readiness: 10x traffic handled with zero downtime"
    },
    {
      icon: Rocket,
      title: "Startups & Growth",
      description: "Fast-moving companies need infrastructure that scales without breaking the bank.",
      expertise: [
        "MVP-to-production acceleration",
        "Cost-optimized cloud architecture",
        "CI/CD from day one",
        "Growth-stage scaling strategies"
      ],
      caseExample: "Series A startup: 70% faster feature delivery, $40k/month cloud savings"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">Industries We Serve</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Deep domain expertise across regulated and mission-critical sectors. We speak your language.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 group border-2 hover:border-accent"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{industry.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3 text-foreground uppercase tracking-wide">
                      Our Expertise
                    </h3>
                    <ul className="space-y-2">
                      {industry.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-medium text-accent italic">
                      {industry.caseExample}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Compliance & Standards
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We understand the regulatory landscape and build systems that meet—or exceed—requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['FedRAMP', 'HIPAA', 'PCI-DSS', 'SOC 2', 'ISO 27001', 'NIST', 'GDPR', 'FISMA'].map((standard) => (
                <Card 
                  key={standard} 
                  className="p-6 text-center shadow-soft hover:shadow-medium transition-all border-2 hover:border-accent group"
                >
                  <p className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {standard}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your industry has unique challenges
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our domain expertise can accelerate your digital transformation.
          </p>
          <a 
            href="/contact" 
            className="inline-block gradient-primary text-white border-0 rounded-full px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;
