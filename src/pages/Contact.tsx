import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">Let's Talk</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Ready to modernize your IT infrastructure? Book a consultation or send us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help you navigate your IT transformation. Reach out to discuss your project.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 shadow-soft border-2 hover:border-accent transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                      <a 
                        href="mailto:hello@ilogicsystems.example" 
                        className="text-accent hover:underline"
                      >
                        hello@ilogicsystems.example
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-soft border-2 hover:border-accent transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                      <a 
                        href="tel:+15550100" 
                        className="text-accent hover:underline"
                      >
                        +1 (555) 0100
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-soft border-2 hover:border-accent transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Location</h3>
                      <p className="text-muted-foreground">USA · Remote-first</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-medium border-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your Organization"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger id="budget" className="rounded-lg">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                          <SelectItem value="250k-500k">$250k - $500k</SelectItem>
                          <SelectItem value="over-500k">$500k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project, challenges, and goals..."
                      required
                      className="min-h-[150px] rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white border-0 rounded-full py-6 text-lg hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prefer to schedule a call?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a 30-minute consultation to discuss your IT challenges and how we can help.
          </p>
          <Button className="gradient-primary text-white border-0 rounded-full px-8 py-4 text-lg hover:opacity-90 transition-opacity">
            Book a 30-min Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
