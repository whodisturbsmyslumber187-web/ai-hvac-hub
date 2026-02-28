import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Toronto",
    text: "ArcticComfort installed our new furnace in the middle of January. They were fast, professional, and the price was very fair. Our home has never been warmer!",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Property Manager, Vancouver",
    text: "We manage 12 commercial properties and ArcticComfort handles all our HVAC needs. Their preventive maintenance program has saved us thousands in emergency repairs.",
    rating: 5,
  },
  {
    name: "Linda Tremblay",
    role: "Restaurant Owner, Montreal",
    text: "When our AC failed on the hottest day of the year, ArcticComfort's emergency team was at our restaurant within 45 minutes. Lifesavers!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding relative">
    <div className="absolute top-1/2 left-0 w-72 h-72 bg-electric/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-electric text-sm font-semibold tracking-widest uppercase mb-4 block">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">
          Trusted by Thousands
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Hear from the families and businesses that count on us year after year.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-6 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-6 flex-1">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
