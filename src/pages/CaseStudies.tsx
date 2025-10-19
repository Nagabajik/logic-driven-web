import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "State Biometric Platform Modernization",
      industry: "Public Sector",
      stack: ["Azure", "AKS", "SSO", "NIST", "Redis"],
      challenge: "A state agency needed to modernize its legacy biometric identification system to meet NIST standards while handling millions of daily queries with minimal downtime.",
      solution: [
        "Migrated legacy ABIS to containerized microservices on Azure Kubernetes Service",
        "Implemented automated NIST validation pipelines with continuous compliance monitoring",
        "Built Redis-backed caching layer to reduce database load by 60%",
        "Established GitOps workflow with Infrastructure as Code (Terraform)",
        "Created comprehensive monitoring and alerting with Azure Monitor and Grafana"
      ],
      outcomes: [
        { metric: "99.95%", label: "platform uptime" },
        { metric: "38%", label: "lower MTTR" },
        { metric: "100%", label: "NIST compliance" }
      ]
    },
    {
      title: "Payment API Performance Optimization",
      industry: "Financial Services",
      stack: ["AWS", "Lambda", "DynamoDB", "JMeter", "CloudWatch"],
      challenge: "A fintech company's payment processing API was experiencing latency spikes during peak hours, resulting in transaction timeouts and poor customer experience.",
      solution: [
        "Conducted comprehensive performance testing with JMeter to identify bottlenecks",
        "Re-architected API to use AWS Lambda with DynamoDB Accelerator (DAX)",
        "Implemented request batching and asynchronous processing for non-critical operations",
        "Set up auto-scaling policies based on transaction volume patterns",
        "Deployed distributed tracing with AWS X-Ray for real-time diagnostics"
      ],
      outcomes: [
        { metric: "42%", label: "latency reduction" },
        { metric: "<0.2%", label: "error rate at 5k RPS" },
        { metric: "5x", label: "throughput increase" }
      ]
    },
    {
      title: "HIPAA-Ready Data Lake",
      industry: "Healthcare",
      stack: ["Azure Synapse", "dbt", "Power BI", "Databricks", "PHI Masking"],
      challenge: "A healthcare provider needed a scalable analytics platform that could handle PHI while maintaining HIPAA compliance and providing real-time insights to clinical teams.",
      solution: [
        "Designed multi-layer data lake architecture with PHI isolation zones",
        "Automated PHI masking and de-identification pipelines using Azure Purview",
        "Built dbt models for clinical analytics with role-based access controls",
        "Implemented Power BI dashboards with row-level security for different user roles",
        "Created audit logging and monitoring for all data access events"
      ],
      outcomes: [
        { metric: "28%", label: "compute savings" },
        { metric: "100%", label: "PHI masking automated" },
        { metric: "60%", label: "faster analytics queries" }
      ]
    },
    {
      title: "Cloud Migration for Government Agency",
      industry: "Public Sector",
      stack: ["AWS", "GovCloud", "Terraform", "GitHub Actions", "FedRAMP"],
      challenge: "A federal agency required migration of on-premises applications to AWS GovCloud while maintaining FedRAMP compliance and zero downtime during transition.",
      solution: [
        "Conducted security assessment and designed FedRAMP-compliant landing zones",
        "Implemented phased migration strategy with parallel run validation",
        "Built automated CI/CD pipelines with GitHub Actions for continuous deployment",
        "Established comprehensive disaster recovery with multi-region failover",
        "Delivered staff training and knowledge transfer documentation"
      ],
      outcomes: [
        { metric: "Zero", label: "downtime during migration" },
        { metric: "50%", label: "faster deployment cycles" },
        { metric: "35%", label: "infrastructure cost reduction" }
      ]
    },
    {
      title: "E-Commerce Platform Scaling",
      industry: "Retail",
      stack: ["GCP", "Kubernetes", "Redis", "LoadRunner", "BigQuery"],
      challenge: "A rapidly growing e-commerce company needed to scale their platform to handle 10x traffic during Black Friday without performance degradation or outages.",
      solution: [
        "Load tested current infrastructure with LoadRunner to establish baseline",
        "Implemented horizontal auto-scaling on Google Kubernetes Engine",
        "Deployed Redis cluster for session management and product catalog caching",
        "Set up CDN caching strategy for static assets and API responses",
        "Created real-time monitoring dashboards with BigQuery and Looker"
      ],
      outcomes: [
        { metric: "10x", label: "traffic handled" },
        { metric: "Zero", label: "downtime during Black Friday" },
        { metric: "45%", label: "page load time improvement" }
      ]
    },
    {
      title: "Startup MVP to Production Acceleration",
      industry: "Startup",
      stack: ["Azure", "GitHub Actions", "Playwright", "Terraform", "ServiceNow"],
      challenge: "A Series A startup needed to transition from a fragile MVP to production-grade infrastructure with robust CI/CD, monitoring, and incident management.",
      solution: [
        "Built production infrastructure from scratch using Terraform with best practices",
        "Implemented comprehensive test automation suite with Playwright",
        "Established CI/CD pipelines with automated testing and deployment gates",
        "Set up ServiceNow ITSM for incident, problem, and change management",
        "Created on-call rotation and runbooks for operational excellence"
      ],
      outcomes: [
        { metric: "70%", label: "faster feature delivery" },
        { metric: "$40k/mo", label: "cloud cost savings" },
        { metric: "90%", label: "reduction in production incidents" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">Case Studies</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Real projects. Real challenges. Real results. See how we deliver measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className="shadow-medium hover:shadow-strong transition-all duration-300 border-2 hover:border-accent overflow-hidden"
              >
                <div className="p-8 md:p-12 space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-accent text-white px-3 py-1">{study.industry}</Badge>
                      {study.stack.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {study.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Stack:</span> {study.stack.join(' · ')}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Solution</h3>
                    <ul className="space-y-3">
                      {study.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-xl font-bold mb-6 text-foreground">Outcomes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {study.outcomes.map((outcome, idx) => (
                        <div key={idx} className="text-center p-6 rounded-xl bg-secondary border-2 border-accent/20">
                          <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky to-cyan bg-clip-text text-transparent mb-2">
                            {outcome.metric}
                          </p>
                          <p className="text-sm text-muted-foreground">{outcome.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to write your own success story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver similar results for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-block gradient-primary text-white border-0 rounded-full px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
