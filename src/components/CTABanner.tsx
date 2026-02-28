import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-electric to-electric-glow p-10 md:p-16 text-center rounded-2xl shadow-glow-xl"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Book your free inspection today and discover how we can improve your comfort and save on energy costs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="xl" className="text-foreground">
            Book Free Inspection
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Phone className="w-5 h-5" />
            Call Now: 1-800-555-1234
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
