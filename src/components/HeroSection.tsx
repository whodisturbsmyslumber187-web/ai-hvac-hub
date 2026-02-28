import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bright.webp";

const badges = [
  { icon: Award, label: "40+ Years" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Emergency" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Background image - bright and visible */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Beautiful Canadian home with HVAC system" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
    </div>

    {/* Subtle accent orb */}
    <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map(({ icon: Icon, label }) => (
              <span key={label} className="glass-card px-4 py-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Icon className="w-4 h-4 text-electric" />
                {label}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-foreground">Canada's Trusted</span>
            <br />
            <span className="gradient-text-electric">HVAC Experts</span>
            <br />
            <span className="text-foreground">for Over 40 Years</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Residential &amp; commercial heating, cooling &amp; ventilation solutions. 
            Serving families and businesses across Canada with unmatched expertise.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              Contact Us Now
            </Button>
            <Button variant="emergency" size="xl">
              <Phone className="w-5 h-5" />
              Emergency Service 24/7
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-md">
            {[
              { value: "40+", label: "Years Experience" },
              { value: "15K+", label: "Projects Completed" },
              { value: "99%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-display font-bold text-electric">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
