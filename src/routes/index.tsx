import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NIURO Digital — Smart Digital Solutions for Sri Lankan Businesses" },
      {
        name: "description",
        content:
          "Websites, Mobile Apps, Business Software & Digital Innovation. Transform your business with next-gen intelligent solutions.",
      },
    ],
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
    const ctx = gsap.context(() => {
      // Hero Elements Entrance
      gsap.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-desc", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-btns", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out",
      });

      gsap.from(".hero-stats div", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.8,
        ease: "power3.out",
      });

      // Services entrance
      gsap.from(".service-card-horiz", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".services-slide",
          start: "top 80%",
        }
      });

      // Why Us entrance
      gsap.from(".why-card-horiz", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".why-slide",
          start: "top 80%",
        }
      });

      // CTA ScrollTrigger
      gsap.from(".cta-box", {
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
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pb-20 relative overflow-x-hidden w-full">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center py-20 text-center px-6 sm:px-8">
        <div className="mx-auto w-full max-w-5xl flex flex-col items-center justify-center gap-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              <span className="block">{scramble1.displayText}</span>
              <span className="block text-gradient mt-3">{scramble2.displayText}</span>
            </h1>
            <p className="hero-desc mt-6 text-base md:text-lg text-muted-foreground/90 font-medium leading-8">
              Websites, mobile apps, business software and digital innovation — engineered for Sri Lankan businesses ready to scale.
            </p>
          </div>
          <div className="hero-btns mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_oklch(0.72_0.18_235/0.6)]"
            >
              Connect with us
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="hero-stats mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 border-t border-border/50 pt-8">
            {[
              ["12", "Projects completed"],
              ["8", "Satisfied clients"],
              ["95%", "On-time delivery"],
              ["1", "Year in business"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-3xl bg-white/5 px-6 py-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <div className="text-3xl font-black text-gradient">{n}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-slide w-full py-20 px-6 md:px-16 lg:px-24 box-border bg-background/70">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center justify-center rounded-full glass px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-4">
              What we do
            </span>
            <h3 className="text-4xl font-bold md:text-5xl drop-shadow-md leading-tight text-foreground">
              Engineering across every digital surface
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              We build highly customized, premium web applications, websites, mobile apps, and custom business systems using modern tech stacks that deliver growth for your business.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-accent"
              >
                Explore all services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="why-slide w-full min-h-[90vh] flex flex-col justify-center py-20 px-6 md:px-16 lg:px-24 box-border bg-background/10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading Content */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <span className="inline-block rounded-full glass px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-4">
              Why NIURO
            </span>
            <h3 className="text-4xl font-bold md:text-5xl drop-shadow-md leading-tight text-foreground">
              Built different. Built for results.
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              We blend fast delivery, modern tech stacks, and start-up friendly pricing with long-term post-launch support for Sri Lankan businesses.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                More about our team <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 w-full">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card-horiz flex flex-col gap-4 rounded-2xl glass p-6 hover:bg-background/40 transition-colors text-left h-full">
                <div className="shrink-0 rounded-lg bg-primary/20 p-4 text-primary self-start">
                  <w.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{w.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="cta-box relative overflow-hidden rounded-[2.5rem] glass p-12 text-center shadow-elegant md:p-20 backdrop-blur-2xl bg-background/30 border border-primary/20">
          <div className="absolute inset-0 bg-gradient-hero opacity-30 mix-blend-screen" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black md:text-6xl drop-shadow-lg leading-tight">
              Ready to <span className="text-gradient block mt-2">build something brilliant?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground/90 font-medium">
              Tell us about your project. We'll get back within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-10 py-5 text-base font-bold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.72_0.18_235/0.7)]"
            >
              Start your project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}