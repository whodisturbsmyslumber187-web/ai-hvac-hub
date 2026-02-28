import { motion } from "framer-motion";
import {
  Flame, Snowflake, Wind, Wrench, Thermometer, Zap,
  Building2, Factory, Fan, BarChart3, Settings, Leaf,
} from "lucide-react";

const residential = [
  { icon: Flame, title: "Furnace Installation", desc: "High-efficiency furnaces for Canadian winters." },
  { icon: Snowflake, title: "AC Installation", desc: "Central and ductless cooling systems." },
  { icon: Thermometer, title: "Heat Pumps", desc: "Year-round energy-efficient climate control." },
  { icon: Wind, title: "Duct Cleaning", desc: "Improve indoor air quality and efficiency." },
  { icon: Wrench, title: "Maintenance Plans", desc: "Preventive care to extend equipment life." },
  { icon: Zap, title: "Smart Thermostats", desc: "Wi-Fi enabled, AI-optimized comfort." },
];

const commercial = [
  { icon: Building2, title: "Commercial HVAC", desc: "Full-scale systems for offices & retail." },
  { icon: Factory, title: "Rooftop Units", desc: "Industrial-grade rooftop installations." },
  { icon: Fan, title: "Ventilation Systems", desc: "Code-compliant ventilation solutions." },
  { icon: Settings, title: "Industrial Climate", desc: "Warehouse & factory climate control." },
  { icon: BarChart3, title: "Preventive Maintenance", desc: "Minimize downtime with scheduled service." },
  { icon: Leaf, title: "Energy Efficiency", desc: "Cut costs with green HVAC solutions." },
];

const ServiceCard = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="glass-card-hover p-6 group cursor-pointer"
  >
    <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric/20 transition-colors duration-300">
      <Icon className="w-6 h-6 text-electric" />
    </div>
    <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const ServicesSection = () => (
  <section id="services" className="section-padding relative">
    <div className="absolute top-0 left-1/2 w-80 h-80 bg-electric/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-electric text-sm font-semibold tracking-widest uppercase mb-4 block">Our Services</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
          Complete HVAC Solutions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From single-room cooling to industrial climate control — we deliver expert service for every need.
        </p>
      </motion.div>

      {/* Residential */}
      <div className="mb-16">
        <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
          <Flame className="w-5 h-5 text-electric" /> Residential
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {residential.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>

      {/* Commercial */}
      <div>
        <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-electric" /> Commercial
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {commercial.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
