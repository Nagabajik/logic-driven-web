import { Card } from "@/components/ui/card";
import { Target, Shield, TrendingUp, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Accuracy",
      description: "Security by design. Robust solutions that stand the test of time and rigorous validation."
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Every engagement is tied to metrics that matter—latency, uptime, cost savings, and MTTR."
    },
    {
      icon: Target,
      title: "Precision Delivery",
      description: "We don't just build systems. We deliver outcomes on time, on budget, and on target."
    },
    {
      icon: Users,
      title: "Partnership Mindset",
      description: "We embed with your teams, align to your goals, and transfer knowledge every step of the way."
    }
  ];

  const leadership = [
    {
      title: "Program Delivery",
      description: "Veteran PMO leaders with deep experience in public-sector programs, biometric platforms, and regulated environments."
    },
    {
      title: "Platform & SRE",
      description: "Cloud-native architects who've built and operated mission-critical systems at scale across AWS, Azure, and GCP."
    },
    {
      title: "QA & Performance",
      description: "Test automation specialists and performance engineers who ensure reliability under real-world loads."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">About iLOGIC Systems</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Enterprise discipline meets startup speed. We bring deep public-sector and regulated-industry expertise to every engagement.
            </p>
            <div className="pt-4">
              <p className="text-lg text-cyan italic">
                "insight to impact."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <Card className="p-8 shadow-medium border-2">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                We exist to help organizations navigate complex IT transformations with confidence. 
                Whether you're migrating to the cloud, hardening your security posture, or modernizing 
                legacy systems, we deliver solutions that are technically sound, operationally resilient, 
                and measurably better than the status quo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project, every decision, every line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 group border-2 hover:border-accent"
                >
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Led by seasoned professionals with decades of combined experience across critical domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card 
                key={index} 
                className="p-8 shadow-medium hover:shadow-strong transition-all duration-300 text-center border-2 hover:border-accent group"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">{leader.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-sky">Outcome-Driven</h3>
                <p className="text-gray-300">
                  We don't sell hours. We deliver results: lower latency, higher uptime, reduced costs, faster MTTR.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-sky">Security-First</h3>
                <p className="text-gray-300">
                  Every solution is designed with security in mind—from zero-trust architectures to SOC 2 readiness.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-sky">Battle-Tested Tools</h3>
                <p className="text-gray-300">
                  We leverage industry-standard platforms: Azure, AWS, GCP, Terraform, GitHub Actions, ServiceNow.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-sky">Regulated Industry Experience</h3>
                <p className="text-gray-300">
                  Public sector, healthcare, finance—we understand compliance requirements and operational constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
