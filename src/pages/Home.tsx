import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cloud, ShieldCheck, Zap, Database, Activity, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Landing zones, IaC, CI/CD pipelines, and SRE practices that scale.",
      outcome: "40% faster deployments"
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity & Compliance",
      description: "Zero-trust architecture, IAM/PAM, and SOC 2/ISO 27001 readiness.",
      outcome: "99.95% security uptime"
    },
    {
      icon: Zap,
      title: "Quality Engineering",
      description: "Automated testing, performance optimization, and end-to-end QA.",
      outcome: "42% latency reduction"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Modern data stacks with governance, dbt, Airflow, and BI tools.",
      outcome: "28% compute savings"
    },
    {
      icon: Activity,
      title: "Managed Services 24×7",
      description: "SLAs/OLAs, on-call support, incident management, and dashboards.",
      outcome: "38% lower MTTR"
    }
  ];

  const outcomes = [
    {
      metric: "99.95%",
      label: "Platform Uptime",
      context: "State biometric platform"
    },
    {
      metric: "42%",
      label: "Latency Reduction",
      context: "Payment API performance"
    },
    {
      metric: "28%",
      label: "Cost Savings",
      context: "HIPAA-ready data lake"
    }
  ];

  const partners = [
    "AWS · Azure · GCP",
    "ISO 27001 mindset",
    "HIPAA/PCI aware",
    "ServiceNow certified"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11, 18, 32, 0.95), rgba(11, 18, 32, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-white leading-snug">
              Modern IT consulting for results — Innovate, Identify, Integrate and Implement.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Cloud, DevOps, QA & performance, cybersecurity, and 24×7 operations for regulated U.S. industries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button className="gradient-primary text-white border-0 rounded-full px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button className="gradient-primary text-white border-0 rounded-full px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                  See Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-secondary border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span className="font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services That Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise discipline + startup speed. Measurable outcomes, not just deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer border-2 hover:border-accent"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-accent">{service.outcome}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:border-accent hover:text-accent transition-all">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Outcomes Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Outcomes</h2>
            <p className="text-xl text-muted-foreground">
              Real results from real projects. Metrics that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <Card 
                key={index} 
                className="p-8 text-center shadow-medium hover:shadow-strong transition-all duration-300 border-2 hover:border-accent group"
              >
                <div className="mb-4">
                  <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky to-cyan bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                    {outcome.metric}
                  </p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{outcome.label}</h3>
                <p className="text-sm text-muted-foreground">{outcome.context}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button className="gradient-primary text-white border-0 rounded-full px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to modernize your IT infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve measurable results.
          </p>
          <Link to="/contact">
            <Button className="gradient-primary text-white border-0 rounded-full px-8 py-6 text-lg hover:opacity-90 transition-opacity">
              Book a 30-min Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
