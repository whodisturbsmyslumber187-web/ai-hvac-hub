import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Gift, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// ─── First-time offer popup (shows after 5 seconds) ───
export const FirstTimePopup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const { toast } = useToast();

  useEffect(() => {
    const seen = sessionStorage.getItem("popup-seen");
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(t);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("popup-seen", "1");
    setOpen(false);
    toast({ title: "Discount Claimed! 🎉", description: "We'll send your 15% discount code to your email." });
  };

  const close = () => {
    sessionStorage.setItem("popup-seen", "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-border"
          >
            <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-electric" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                First-Time Customer?
              </h3>
              <p className="text-electric font-display font-bold text-xl mb-1">Get 15% OFF</p>
              <p className="text-muted-foreground text-sm">
                Your first HVAC service. Limited time offer!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Claim My 15% Discount
              </Button>
              <p className="text-xs text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Exit-intent popup ───
export const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const seen = sessionStorage.getItem("exit-popup-seen");
    if (seen) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setOpen(true);
        sessionStorage.setItem("exit-popup-seen", "1");
        document.removeEventListener("mouseout", handler);
      }
    };
    document.addEventListener("mouseout", handler);
    return () => document.removeEventListener("mouseout", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    toast({ title: "You're in! 🎉", description: "Check your email for your exclusive offer." });
  };

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card rounded-2xl shadow-2xl max-w-sm w-full p-8 relative border border-border"
      >
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-display font-bold text-xl text-foreground mb-2 text-center">Wait! Don't Leave Yet</h3>
        <p className="text-muted-foreground text-sm text-center mb-6">
          Speak with an <span className="text-electric font-bold">HVAC specialist today</span> — get a competitive quote in minutes!
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" variant="hero" className="w-full">
            Contact a Specialist
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
};

// ─── Emergency sticky banner ───
export const EmergencyBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[55] bg-destructive text-primary-foreground py-2">
      <div className="container flex items-center justify-center gap-3 text-sm">
        <AlertTriangle className="w-4 h-4 animate-pulse" />
        <span className="font-medium">🔥 HVAC Emergency? We're available 24/7 — Call now!</span>
        <a href="tel:+18005551234" className="font-bold underline flex items-center gap-1">
          <Phone className="w-3.5 h-3.5" />
          1-800-555-1234
        </a>
        <button onClick={() => setVisible(false)} className="ml-4 hover:opacity-70">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
