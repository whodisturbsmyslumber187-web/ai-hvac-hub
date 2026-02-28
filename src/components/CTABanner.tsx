import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-electric/5 to-transparent pointer-events-none" />
    <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-10 md:p-16 text-center rounded-2xl border-electric/20"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
          Book your free inspection today and discover how we can improve your comfort and save on energy costs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl">
            Book Free Inspection
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="hero-outline" size="xl">
            <Phone className="w-5 h-5" />
            Call Now: 1-800-555-1234
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
