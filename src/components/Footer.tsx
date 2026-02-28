import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-16 bg-secondary/20">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold">AC</span>
            </div>
            <span className="font-display font-bold text-foreground">ArcticComfort</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Canada's trusted HVAC experts for over 40 years. Residential & commercial solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Furnace Installation</li>
            <li>AC Installation</li>
            <li>Heat Pumps</li>
            <li>Commercial HVAC</li>
            <li>Maintenance Plans</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-electric" />
              1-800-555-1234
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-electric" />
              info@arcticcomfort.ca
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-electric mt-0.5" />
              123 Comfort Ave, Toronto, ON
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/30 mt-12 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ArcticComfort HVAC Solutions. All rights reserved. Licensed & Insured.
      </div>
    </div>
  </footer>
);

export default Footer;
