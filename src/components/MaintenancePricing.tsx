import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, Shield, Wrench, Zap } from "lucide-react";
import familyImg from "@/assets/family-comfort.webp";

const plans = [
  {
    name: "Essential Care",
    price: "$12.99",
    period: "/month",
    description: "Perfect for single-system homes",
    popular: false,
    features: [
      "Annual furnace tune-up",
      "Annual AC tune-up",
      "Priority scheduling",
      "10% off all repairs",
      "No overtime charges",
      "Filter reminders",
    ],
  },
  {
    name: "Comfort Plus",
    price: "$18.99",
    period: "/month",
    description: "Our most popular plan for families",
    popular: true,
    features: [
      "Everything in Essential Care",
      "Bi-annual system inspections",
      "15% off all repairs",
      "24/7 emergency priority",
      "Parts & labour warranty extension",
      "Duct inspection included",
      "Indoor air quality check",
    ],
  },
  {
    name: "Total Comfort",
    price: "$29.99",
    period: "/month",
    description: "Complete coverage & peace of mind",
    popular: false,
    features: [
      "Everything in Comfort Plus",
      "Quarterly inspections",
      "20% off all repairs",
      "Free diagnostic calls",
      "Priority emergency (under 2 hrs)",
      "Annual duct cleaning",
      "Smart thermostat monitoring",
      "Transferable to new homeowner",
    ],
  },
];

const MaintenancePricing = () => (
  <section id="maintenance" className="section-padding relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-electric text-sm font-semibold tracking-widest uppercase mb-4 block">Maintenance Plans</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Monthly Plans at <span className="gradient-text-electric">Competitive Rates</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Save up to 30% on repairs and extend the life of your HVAC system by up to 15 years. 
          Plans start at just $12.99/month — lower than most competitors.
        </p>
      </motion.div>

      {/* Image + Plans grid */}
      <div className="grid lg:grid-cols-4 gap-6 items-start">
        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <img
            src={familyImg}
            alt="Happy family enjoying comfortable home climate"
            className="rounded-xl w-full h-full max-h-[520px] object-cover shadow-lg"
            loading="lazy"
          />
          <div className="mt-4 glass-card p-4 text-center">
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-warning text-warning" />)}
            </div>
            <p className="text-sm text-foreground font-medium">"Saves us over $500/year"</p>
            <p className="text-xs text-muted-foreground mt-1">— Sarah M., Toronto</p>
          </div>
        </motion.div>

        {/* Pricing cards */}
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-6 relative ${plan.popular ? 'ring-2 ring-electric shadow-glow' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
            )}
            <h3 className="font-display font-bold text-lg text-foreground mb-1">{plan.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-display font-bold text-electric">{plan.price}</span>
              <span className="text-muted-foreground text-sm">{plan.period}</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "hero" : "outline"}
              className="w-full"
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Trust row */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {[
          { icon: Shield, text: "No contracts — cancel anytime" },
          { icon: Wrench, text: "All work by certified technicians" },
          { icon: Zap, text: "Average $400/year savings" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon className="w-4 h-4 text-electric" />
            {text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MaintenancePricing;
