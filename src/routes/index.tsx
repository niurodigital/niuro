import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Bot,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Zap,
  Users,
  Rocket,
} from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NIURO Digital — Smart Digital Solutions for Sri Lankan Businesses" },
      {
        name: "description",
        content:
          "Websites, Mobile Apps, Business Software & Digital Innovation. Transform your business with next-gen intelligent solutions.",
      },
      { property: "og:url", content: "https://www.niurodigital.lk/" },
    ],
    links: [{ rel: "canonical", href: "https://www.niurodigital.lk/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Static, business, portfolio & e-commerce sites built with modern stacks.",
  },
  {
    icon: Bot,
    title: "Web Applications",
    desc: "Booking, CRM, inventory and custom business software.",
  },
  { icon: Smartphone, title: "Mobile Apps", desc: "React Native, Android and iOS applications." },
  {
    icon: BarChart3,
    title: "Desktop & POS",
    desc: "Java desktop, POS systems and management software.",
  },
];

const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Ship in weeks, not months." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Battle-tested architectures." },
  { icon: Sparkles, title: "Modern Tech", desc: "React, Next.js, AI-ready stacks." },
  { icon: Users, title: "Sri Lankan Team", desc: "Local team, global standards." },
  { icon: Rocket, title: "Affordable Pricing", desc: "Startup-friendly LKR pricing." },
  { icon: Bot, title: "Dedicated Support", desc: "We stay with you post-launch." },
];

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hero texts for scramble effect
  const scramble1 = useScrambleText({ text: "Transform your business with", delay: 100, speed: 40 });
  const scramble2 = useScrambleText({ text: "smart digital solutions", delay: 600, speed: 50 });

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    const initGsap = async () => {
      const gsapModule = (await import("gsap")).default as any;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsapModule.registerPlugin(ScrollTrigger);

      if (cancelled) return;

      ctx = gsapModule.context(() => {
        // Hero Elements Entrance
        gsapModule.from(".hero-badge", {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsapModule.from(".hero-desc", {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 1.2,
          ease: "power3.out",
        });

        gsapModule.from(".hero-btns", {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 1.5,
          ease: "power3.out",
        });

        gsapModule.from(".hero-stats div", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 1.8,
          ease: "power3.out",
        });

        // Services entrance
        gsapModule.from(".service-card-horiz", {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".services-slide",
            start: "top 80%",
          },
        });

        // Why Us entrance
        gsapModule.from(".why-card-horiz", {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".why-slide",
            start: "top 80%",
          },
        });

        // CTA ScrollTrigger
        gsapModule.from(".cta-box", {
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }, containerRef);
    };

    initGsap();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="pb-20 relative overflow-x-hidden w-full">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[calc(100vh-80px)] sm:min-h-screen items-center justify-center py-12 sm:py-20 text-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl flex flex-col items-center justify-center gap-6 sm:gap-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground drop-shadow-lg">
              <span className="block">{scramble1.displayText}</span>
              <span className="block text-gradient mt-2 sm:mt-3">{scramble2.displayText}</span>
            </h1>
            <p className="hero-desc mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg text-muted-foreground/90 font-medium leading-7 sm:leading-8">
              Websites, mobile apps, business software and digital innovation — engineered for Sri Lankan businesses ready to scale.
            </p>
          </div>
          <div className="hero-btns mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/pricing#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_oklch(0.72_0.18_235/0.6)]"
            >
              Pricing
              <ArrowRight size={16} className="sm:size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="hero-stats mt-8 sm:mt-12 grid w-full max-w-4xl grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 border-t border-border/50 pt-6 sm:pt-8">
            {[
              ["12", "Projects completed"],
              ["8", "Satisfied clients"],
              ["95%", "On-time delivery"],
              ["1", "Year in business"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-3xl bg-white/5 px-4 sm:px-6 py-4 sm:py-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <div className="text-2xl sm:text-3xl font-black text-gradient">{n}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-slide w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-16 box-border bg-background/70">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center justify-center rounded-full glass px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-4">
              What we do
            </span>
            <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold drop-shadow-md leading-tight text-foreground">
              Engineering across every digital surface
            </h3>
            <p className="mt-4 sm:mt-6 text-muted-foreground leading-relaxed text-xs xs:text-sm md:text-base">
              We build highly customized, premium web applications, websites, mobile apps, and custom business systems using modern tech stacks that deliver growth for your business.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-accent"
              >
                Explore all services <ArrowRight size={14} className="sm:size-[16px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="why-slide w-full min-h-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-16 box-border bg-background/10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start lg:items-center">

          {/* Left Column: Heading Content */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <span className="inline-block rounded-full glass px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-4">
              Why NIURO
            </span>
            <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold drop-shadow-md leading-tight text-foreground">
              Built different. Built for results.
            </h3>
            <p className="mt-4 sm:mt-6 text-muted-foreground leading-relaxed text-xs xs:text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              We blend fast delivery, modern tech stacks, and start-up friendly pricing with long-term post-launch support for Sri Lankan businesses.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                More about our team <ArrowRight size={14} className="sm:size-[16px]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 w-full">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card-horiz flex flex-col gap-3 sm:gap-4 rounded-2xl glass p-4 sm:p-6 hover:bg-background/40 transition-colors text-left h-full">
                <div className="shrink-0 rounded-lg bg-primary/20 p-3 sm:p-4 text-primary self-start">
                  <w.icon size={20} className="sm:size-[24px]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">{w.title}</h4>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="cta-box relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] glass p-6 sm:p-12 md:p-20 text-center shadow-elegant backdrop-blur-2xl bg-background/30 border border-primary/20">
          <div className="absolute inset-0 bg-gradient-hero opacity-30 mix-blend-screen" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black drop-shadow-lg leading-tight">
              Ready to <span className="text-gradient block mt-1 sm:mt-2">build something brilliant?</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground/90 font-medium">
              Tell us about your project. We'll get back within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-6 sm:mt-10 inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-gradient-primary px-6 sm:px-10 py-3 sm:py-5 text-xs sm:text-base font-bold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.72_0.18_235/0.7)]"
            >
              Start your project <ArrowRight size={16} className="sm:size-[20px]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}