import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-semibold mb-4">
            Zee <span className="text-gold">Aesthetics</span>
          </h3>
          <p className="font-body text-sm opacity-70 leading-relaxed">
            Premium beauty products crafted with care for the modern woman.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-gold">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/shop", label: "Shop" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-gold">Contact</h4>
          <div className="flex flex-col gap-2 font-body text-sm opacity-70">
            <span>info@zeeaesthetics.com</span>
            <span>+234 800 000 0000</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-gold">Follow Us</h4>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="opacity-70 hover:opacity-100 hover:text-gold transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="font-body text-xs opacity-50">
          © {new Date().getFullYear()} Zee Aesthetics. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
