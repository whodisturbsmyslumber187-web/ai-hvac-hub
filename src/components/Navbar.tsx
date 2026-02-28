import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Maintenance Plans", href: "#maintenance" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-8 left-0 right-0 z-50 glass-card border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">AC</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-lg text-foreground">ArcticComfort</span>
            <span className="block text-xs text-muted-foreground -mt-1">HVAC Solutions</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">1-800-555-1234</span>
          </a>
          <Button variant="hero" size="default">
            Contact Now
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-card"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2">
                Contact Now
              </Button>
              <a href="tel:+18005551234" className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                1-800-555-1234
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
