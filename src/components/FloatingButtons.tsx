import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href="https://wa.me/18005551234?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20HVAC%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </motion.a>
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      href="tel:+18005551234"
      className="w-14 h-14 rounded-full bg-electric flex items-center justify-center shadow-glow-lg animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="Call us now"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  </div>
);

export default FloatingButtons;
