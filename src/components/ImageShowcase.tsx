import { motion } from "framer-motion";
import furnaceImg from "@/assets/furnace-install.webp";
import commercialImg from "@/assets/commercial-rooftop.webp";
import acUnitImg from "@/assets/ac-unit-exterior.webp";
import happyFamilyImg from "@/assets/happy-family-home.webp";
import teamImg from "@/assets/team-van.webp";
import techImg from "@/assets/technician-friendly.webp";

const images = [
  { src: furnaceImg, alt: "Professional furnace installation", label: "Furnace Installation" },
  { src: commercialImg, alt: "Commercial rooftop HVAC systems", label: "Commercial HVAC" },
  { src: acUnitImg, alt: "Residential AC unit", label: "AC Installation" },
  { src: happyFamilyImg, alt: "Happy family in comfortable home", label: "Home Comfort" },
  { src: teamImg, alt: "Our professional HVAC team", label: "Our Team" },
  { src: techImg, alt: "Certified HVAC technician", label: "Expert Technicians" },
];

const ImageShowcase = () => (
  <section className="py-16 overflow-hidden">
    <div className="container mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-electric text-sm font-semibold tracking-widest uppercase mb-4 block">Our Work</span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          See Our <span className="gradient-text-electric">Quality In Action</span>
        </h2>
      </motion.div>
    </div>

    {/* Flash scrolling gallery */}
    <div className="relative">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-80 h-56 relative rounded-xl overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-3 left-3 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ImageShowcase;
