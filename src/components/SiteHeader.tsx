import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const headerRef = useRef<HTMLElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".logo-anim", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "back.out(1.7)",
      });

      gsap.from(navLinksRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const handleNavEnter = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, { y: -3, scale: 1.05, duration: 0.3, ease: "back.out(2)" });
  };

  const handleNavLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: "back.out(2)" });
  };

  const handleBtnEnter = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, { 
      scale: 1.05, 
      boxShadow: "0 0 30px oklch(0.72 0.18 235 / 0.8)", 
      y: -3,
      duration: 0.4, 
      ease: "back.out(2)" 
    });
  };

  const handleBtnLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, { 
      scale: 1, 
      boxShadow: "0 0 40px oklch(0.72 0.18 235 / 0.4)", 
      y: 0,
      duration: 0.4, 
      ease: "back.out(2)" 
    });
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 logo-anim">
          <img src={logo} alt="NIURO Digital" className="h-9 w-9 rounded-md object-cover drop-shadow-md" />
          <span className="font-display text-lg font-bold tracking-tight">
            <span className="text-foreground">NIURO</span>{" "}
            <span className="text-gradient">Digital</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n, i) => {
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                ref={(el) => (navLinksRef.current[i] = el)}
                onMouseEnter={handleNavEnter}
                onMouseLeave={handleNavLeave}
                className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm transition-colors hover:text-primary ${active ? "text-primary" : "text-muted-foreground"}`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            ref={(el) => (navLinksRef.current[nav.length] = el)}
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
            className="ml-3 inline-flex items-center justify-center rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Get a Quote
          </Link>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 px-6 py-4">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
