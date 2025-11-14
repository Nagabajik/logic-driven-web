import { useState, ChangeEvent, FormEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = `Contact request from ${form.name || 'Website'}`;
    const body = [
      `Name: ${form.name || ''}`,
      `Email: ${form.email || ''}`,
      `Company: ${form.company || ''}`,
      `Budget: ${form.budget || ''}`,
      '',
      'Message:',
      form.message || '',
    ].join('\n');

    const mailto = `mailto:info@ilogicsys.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setForm({ name: '', email: '', company: '', budget: '', message: '' });
    setSending(false);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">Let's Talk</h1>
            <p className="text-xl md:text-2xl text-gray-300">Ready to modernize your IT infrastructure? Book a consultation or send us a message.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">We're here to help you navigate your IT transformation. Reach out to discuss your project.</p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 shadow-soft border-2 hover:border-accent transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                      <a href="mailto:info@ilogicsys.com" className="text-accent hover:underline">info@ilogicsys.com</a>
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
                      <a href="tel:+19169001009" className="text-accent hover:underline">916-900-1009</a>
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

            <div className="lg:col-span-2">
              <Card className="p-8 shadow-medium border-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name">Name *</label>
                      <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className="rounded-lg" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email">Email *</label>
                      <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required className="rounded-lg" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company">Company</label>
                      <Input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your Organization" className="rounded-lg" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget">Budget Range</label>
                      <select id="budget" name="budget" value={form.budget} onChange={handleChange} className="w-full rounded-lg border px-3 py-2">
                        <option value="">Select budget</option>
                        <option value="under-50k">Under $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k-250k">$100k - $250k</option>
                        <option value="250k-500k">$250k - $500k</option>
                        <option value="over-500k">$500k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message">Message *</label>
                    <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project, challenges, and goals..." required className="min-h-[150px] rounded-lg" />
                  </div>

                  <Button type="submit" disabled={sending} className="w-full gradient-primary text-white border-0 rounded-full py-6 text-lg hover:opacity-90 transition-opacity">
                    {sending ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">We typically respond within 24 hours. Your information is kept confidential.</p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prefer to schedule a call?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Book a 30-minute consultation to discuss your IT challenges and how we can help.</p>
          <Button className="gradient-primary text-white border-0 rounded-full px-8 py-4 text-lg hover:opacity-90 transition-opacity">Book a 30-min Consultation</Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
