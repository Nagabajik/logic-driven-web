import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Users, TrendingUp, Award } from "lucide-react";

const Careers = () => {
  const openRoles = [
    {
      title: "Senior Cloud Architect",
      location: "Remote (US)",
      type: "Full-time",
      description: "Design and implement cloud-native solutions for public sector and healthcare clients."
    },
    {
      title: "DevOps Engineer",
      location: "Remote (US)",
      type: "Full-time",
      description: "Build and maintain CI/CD pipelines, IaC, and SRE practices for enterprise clients."
    },
    {
      title: "QA Automation Engineer",
      location: "Remote (US)",
      type: "Full-time",
      description: "Develop comprehensive test automation frameworks using Playwright and performance testing tools."
    },
    {
      title: "Cybersecurity Consultant",
      location: "Remote (US)",
      type: "Full-time",
      description: "Lead security assessments, compliance initiatives, and zero-trust architecture implementations."
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Impact",
      description: "Work on mission-critical systems for government, healthcare, and finance."
    },
    {
      icon: Users,
      title: "Culture",
      description: "Remote-first, collaborative team that values outcomes over hours."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous learning budget, certifications, and conference attendance."
    },
    {
      icon: Award,
      title: "Benefits",
      description: "Competitive compensation, health insurance, 401k, and flexible PTO."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Build your career solving complex challenges for the world's most important organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why iLOGIC Systems?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building something special. Join us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 border-2 hover:border-accent group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              See something that fits? Let's talk.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openRoles.map((role, index) => (
              <Card 
                key={index} 
                className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 border-2 hover:border-accent"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{role.title}</h3>
                    <p className="text-muted-foreground mb-3">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                        {role.location}
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Button className="gradient-primary text-white border-0 rounded-full px-6 hover:opacity-90 transition-opacity">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see the right role? We're always looking for talented people.
            </p>
            <a
              href="mailto:careers@ilogicsys.com"
              className="text-accent hover:underline font-medium"
            >
              Send us your resume at careers@ilogicsys.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
