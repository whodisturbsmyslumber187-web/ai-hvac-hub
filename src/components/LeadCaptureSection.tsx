import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCaptureSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Quote Request Sent!", description: "We'll get back to you within 1 business hour." });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-electric text-sm font-semibold tracking-widest uppercase mb-4 block">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Get Your<br />
              <span className="gradient-text-electric">Quote Today</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fill out the form and one of our certified HVAC specialists will contact you within 1 hour 
              with a detailed, competitive quote.
            </p>
            <div className="space-y-4">
              {[
                "Professional on-site assessment",
                "Transparent pricing — no hidden fees",
                "Financing options available",
                "Same-day emergency service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-xl p-10 text-center shadow-lg">
                <CheckCircle2 className="w-16 h-16 text-electric mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We've received your request and will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-4 shadow-lg">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">Request a Quote</h3>
                <Input placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <div className="grid grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <Input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full h-10 rounded-lg border border-border bg-background text-foreground px-3 text-sm"
                  required
                >
                  <option value="">Select Service</option>
                  <option>Furnace Installation</option>
                  <option>AC Installation</option>
                  <option>Heat Pump</option>
                  <option>Duct Cleaning</option>
                  <option>Maintenance Plan</option>
                  <option>Commercial HVAC</option>
                  <option>Emergency Repair</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background text-foreground px-3 py-2 text-sm placeholder:text-muted-foreground resize-none"
                />
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Request
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
