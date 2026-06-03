import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-background/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10 rounded-md" />
            <span className="font-display text-xl font-bold">
              NIURO <span className="text-gradient">Digital</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Next-Gen Intelligent Solutions for Business Optimization. Building smart digital
            products for Sri Lankan businesses and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/niurodigital"
              target="_blank"
              rel="noreferrer"
              className="rounded-md glass p-2 hover:text-primary"
            >
              <Facebook size={18} />
            </a>
            <a href="#" className="rounded-md glass p-2 hover:text-primary">
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:niurodigital@gmail.com"
              className="rounded-md glass p-2 hover:text-primary"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} /> +94 769 626 733
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} /> WhatsApp +94 769 626 733
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> niurodigital@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NIURO Digital. All rights reserved.
      </div>
    </footer>
  );
}
