import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="p-8 shadow-soft border-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At iLOGIC Systems, we take your privacy seriously. This policy outlines how we collect, 
                use, and protect your information when you visit our website or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Contact information (name, email, phone) provided through our contact forms</li>
                <li>Company information and project details you share with us</li>
                <li>Website usage data through cookies and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To respond to your inquiries and provide requested information</li>
                <li>To improve our website and services</li>
                <li>To communicate about our services (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information. 
                All data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. 
                Contact us at info@ilogicsys.com to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this privacy policy, please contact us at info@ilogicsys.com
              </p>
            </section>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
