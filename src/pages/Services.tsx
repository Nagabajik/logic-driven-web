import { Card } from "@/components/ui/card";
import { Cloud, TestTube, ShieldCheck, Database, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      tagline: "Build, deploy, and scale with confidence",
      benefits: [
        "Landing zones designed for compliance and governance",
        "Infrastructure as Code (Terraform, Bicep) for reproducibility",
        "CI/CD pipelines that reduce deployment risk",
        "SRE practices: monitoring, alerting, incident response",
        "FinOps: optimize cloud spend without sacrificing performance"
      ],
      toolchain: "Azure, AWS, GCP, Terraform, Bicep, GitHub Actions, Azure DevOps, Kubernetes",
      outcomes: [
        "40% faster deployments",
        "30% reduction in infrastructure costs",
        "99.9% service availability"
      ]
    },
    {
      icon: TestTube,
      title: "Quality Engineering & Test Automation",
      tagline: "Confidence through comprehensive testing",
      benefits: [
        "End-to-end test automation with Playwright and Selenium",
        "Performance testing: LoadRunner, JMeter, K6",
        "API testing and contract validation",
        "Traceability reporting tied to requirements",
        "Shift-left QA integrated into CI/CD pipelines"
      ],
      toolchain: "Playwright, Selenium, JMeter, LoadRunner, Postman, K6, Azure Test Plans",
      outcomes: [
        "42% latency reduction",
        "95% test coverage",
        "<0.2% error rate at peak load"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity & Compliance",
      tagline: "Security by design, compliance by default",
      benefits: [
        "Zero-trust architecture and microsegmentation",
        "Identity & Access Management (IAM/PAM)",
        "Hardening baselines for Windows, Linux, containers",
        "SOC/SIEM integration and threat response",
        "ISO 27001, SOC 2, HIPAA, PCI readiness assessments"
      ],
      toolchain: "Azure Sentinel, Splunk, CrowdStrike, Okta, Azure AD, Terraform, Ansible",
      outcomes: [
        "99.95% security uptime",
        "50% faster threat response",
        "Zero critical vulnerabilities in production"
      ]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      tagline: "Turn data into actionable insights",
      benefits: [
        "Modern data stack: ingestion, transformation, governance",
        "Data lake and warehouse architecture",
        "dbt for data modeling, Airflow for orchestration",
        "BI and visualization: Power BI, Looker, Tableau",
        "Data quality monitoring and lineage tracking"
      ],
      toolchain: "Azure Synapse, Snowflake, dbt, Airflow, Power BI, Looker, Databricks",
      outcomes: [
        "28% compute savings",
        "60% faster analytics queries",
        "PHI/PII masking automated"
      ]
    },
    {
      icon: Headphones,
      title: "Managed Services (24×7) & ServiceNow",
      tagline: "Always-on operations, always improving",
      benefits: [
        "SLAs/OLAs tailored to your business requirements",
        "24×7 on-call support and incident management",
        "Problem management: root cause analysis, preventive actions",
        "Change management with risk assessment and rollback plans",
        "ServiceNow ITSM implementation and optimization"
      ],
      toolchain: "ServiceNow, PagerDuty, Azure Monitor, Grafana, Datadog, Splunk",
      outcomes: [
        "38% lower MTTR",
        "99.5% SLA adherence",
        "50% reduction in P1 incidents"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Comprehensive IT solutions designed for measurable impact. Enterprise discipline + startup agility.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card 
                  key={index} 
                  className={`shadow-medium hover:shadow-strong transition-all duration-300 border-2 hover:border-accent overflow-hidden ${
                    isEven ? 'bg-white' : 'bg-secondary'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Icon & Title */}
                    <div className={`lg:col-span-4 p-8 ${isEven ? 'bg-secondary' : 'bg-white'} flex flex-col justify-center`}>
                      <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-3 text-foreground">{service.title}</h2>
                      <p className="text-lg text-accent font-medium">{service.tagline}</p>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 p-8 space-y-6">
                      {/* Benefits */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">What We Deliver</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-accent mr-2 mt-1">•</span>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Toolchain */}
                      <div className="pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold mb-2 text-foreground">Toolchain</h4>
                        <p className="text-sm text-muted-foreground">{service.toolchain}</p>
                      </div>

                      {/* Outcomes */}
                      <div className="pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold mb-3 text-foreground">Measurable Outcomes</h4>
                        <div className="flex flex-wrap gap-4">
                          {service.outcomes.map((outcome, idx) => (
                            <div key={idx} className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                              <span className="text-sm font-semibold text-accent">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your IT operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can deliver measurable value for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-block gradient-primary text-white border-0 rounded-full px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
