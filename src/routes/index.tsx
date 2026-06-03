import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
import { NeuralHero, Particles } from "@/components/NeuralHero";
import { Section, SectionHeader, Reveal } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NIURO Digital — Smart Digital Solutions for Sri Lankan Businesses" },
      {
        name: "description",
        content:
          "Websites, Mobile Apps, Business Software & Digital Innovation. Transform your business with next-gen intelligent solutions.",
      },
      { property: "og:title", content: "NIURO Digital" },
      {
        property: "og:description",
        content: "Next-Gen Intelligent Solutions for Business Optimization.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <Particles />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 md:grid-cols-2 md:pt-28">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary"
            >
              <Sparkles size={12} /> Next-Gen · Intelligent · Unique · Reliable · Optimization
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl"
            >
              Transform your business with{" "}
              <span className="text-gradient">smart digital solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Websites, mobile apps, business software and digital innovation — engineered for Sri
              Lankan businesses ready to scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Get a Free Quote{" "}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg glass glow-border px-6 py-3 text-sm font-semibold text-foreground hover:text-primary"
              >
                View Services
              </Link>
            </motion.div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["50+", "Projects"],
                ["20+", "Clients"],
                ["100%", "On-time"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-gradient">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <NeuralHero />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="Engineering across every digital surface"
          subtitle="From a single landing page to enterprise platforms."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="inline-flex rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section>
        <SectionHeader eyebrow="Why NIURO" title="Built different. Built for results." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl glass p-6">
                <div className="shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                  <w.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass p-12 text-center shadow-elegant">
            <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            <div className="relative">
              <h2 className="text-4xl font-bold md:text-5xl">
                Ready to <span className="text-gradient">build something brilliant?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your project. We'll get back within one business day.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Start your project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
