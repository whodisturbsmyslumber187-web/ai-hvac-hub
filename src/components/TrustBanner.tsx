import { motion } from "framer-motion";
import { Shield, Award, Clock, MapPin } from "lucide-react";

const items = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "40+ Years Experience" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: MapPin, label: "Serving All of Canada" },
];

const TrustBanner = () => (
  <section className="py-8 border-y border-border bg-card">
    <div className="container">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {items.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 text-foreground"
          >
            <Icon className="w-5 h-5 text-electric" />
            <span className="text-sm font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBanner;
