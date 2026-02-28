import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import commercialImg from "@/assets/hero-commercial.webp";

const highlights = [
  "Family-owned & operated since 1984",
  "Licensed, insured & TSSA certified",
  "500+ certified technicians across Canada",
  "Canadian-owned with nationwide coverage",
  "24/7 emergency response team",
  "Industry-leading warranty programs",
];

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-electric text-sm font-semibold tracking-widest uppercase mb-4 block">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-6">
            Four Decades of<br />Trusted Excellence
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Since 1984, ArcticComfort has been the name Canadians trust for reliable HVAC solutions. 
            What started as a small family business has grown into one of Canada's leading 
            heating, ventilation, and air conditioning companies — without ever losing the personal 
            touch that built our reputation.
          </p>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass-card p-2 rounded-2xl">
            <img
              src={commercialImg}
              alt="Commercial HVAC systems on building rooftop"
              className="rounded-xl w-full h-80 lg:h-[28rem] object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating stat */}
          <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-glow-lg">
            <p className="text-3xl font-display font-bold text-electric">40+</p>
            <p className="text-sm text-muted-foreground">Years in Business</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
