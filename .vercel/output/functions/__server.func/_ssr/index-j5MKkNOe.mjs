import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, a as SectionHeader, R as Reveal } from "./Section-DzcRWewI.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as Sparkles, h as ArrowRight, i as CodeXml, B as Bot, S as Smartphone, j as ChartColumn, Z as Zap, k as ShieldCheck, U as Users, R as Rocket } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function NeuralHero() {
  const nodes = reactExports.useMemo(() => {
    const seed = [
      [50, 50],
      [120, 80],
      [80, 150],
      [160, 130],
      [220, 70],
      [200, 180],
      [110, 220],
      [260, 140],
      [300, 80],
      [320, 200],
      [180, 260],
      [260, 260],
      [60, 280],
      [380, 140],
      [350, 280],
      [140, 330],
      [240, 330],
      [320, 350]
    ];
    return seed.map(([x, y], i) => ({ id: i, x, y, r: 3 + i % 3 }));
  }, []);
  const links = reactExports.useMemo(() => {
    const out = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.hypot(dx, dy) < 110) out.push([i, j]);
      }
    }
    return out;
  }, [nodes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square w-full max-w-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-full bg-gradient-glow blur-3xl opacity-60",
        style: { background: "var(--gradient-glow)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.svg,
      {
        viewBox: "0 0 420 400",
        className: "relative h-full w-full",
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "lineGrad", x1: "0", x2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.72 0.18 235)", stopOpacity: "0.8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.88 0.14 210)", stopOpacity: "0.3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "nodeGrad", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.95 0.14 210)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.18 235)" })
            ] })
          ] }),
          links.map(([a, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.line,
            {
              x1: nodes[a].x,
              y1: nodes[a].y,
              x2: nodes[b].x,
              y2: nodes[b].y,
              stroke: "url(#lineGrad)",
              strokeWidth: "0.8",
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 0.6 },
              transition: { duration: 1.5, delay: i * 0.02 }
            },
            i
          )),
          nodes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx: n.x,
              cy: n.y,
              r: n.r,
              fill: "url(#nodeGrad)",
              initial: { scale: 0 },
              animate: { scale: [1, 1.4, 1] },
              transition: { duration: 2.5, delay: i * 0.08, repeat: Infinity, repeatDelay: 1 },
              style: { filter: "drop-shadow(0 0 6px oklch(0.72 0.18 235))" }
            },
            n.id
          ))
        ]
      }
    )
  ] });
}
function Particles() {
  const items = Array.from({ length: 24 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: items.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      className: "absolute h-1 w-1 rounded-full bg-primary",
      style: {
        left: `${i * 37 % 100}%`,
        top: `${i * 53 % 100}%`,
        boxShadow: "0 0 10px oklch(0.72 0.18 235)"
      },
      animate: { y: [0, -30, 0], opacity: [0.2, 1, 0.2] },
      transition: { duration: 4 + i % 5, repeat: Infinity, delay: i * 0.2 }
    },
    i
  )) });
}
const services = [{
  icon: CodeXml,
  title: "Website Development",
  desc: "Static, business, portfolio & e-commerce sites built with modern stacks."
}, {
  icon: Bot,
  title: "Web Applications",
  desc: "Booking, CRM, inventory and custom business software."
}, {
  icon: Smartphone,
  title: "Mobile Apps",
  desc: "React Native, Android and iOS applications."
}, {
  icon: ChartColumn,
  title: "Desktop & POS",
  desc: "Java desktop, POS systems and management software."
}];
const whyUs = [{
  icon: Zap,
  title: "Fast Delivery",
  desc: "Ship in weeks, not months."
}, {
  icon: ShieldCheck,
  title: "Secure & Reliable",
  desc: "Battle-tested architectures."
}, {
  icon: Sparkles,
  title: "Modern Tech",
  desc: "React, Next.js, AI-ready stacks."
}, {
  icon: Users,
  title: "Sri Lankan Team",
  desc: "Local team, global standards."
}, {
  icon: Rocket,
  title: "Affordable Pricing",
  desc: "Startup-friendly LKR pricing."
}, {
  icon: Bot,
  title: "Dedicated Support",
  desc: "We stay with you post-launch."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 md:grid-cols-2 md:pt-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 }),
            " Next-Gen · Intelligent · Unique · Reliable · Optimization"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.1
          }, className: "mt-6 text-5xl font-bold leading-[1.05] md:text-7xl", children: [
            "Transform your business with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "smart digital solutions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.2
          }, className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Websites, mobile apps, business software and digital innovation — engineered for Sri Lankan businesses ready to scale." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.3
          }, className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
              "Get a Free Quote",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition-transform group-hover:translate-x-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-lg glass glow-border px-6 py-3 text-sm font-semibold text-foreground hover:text-primary", children: "View Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8", children: [["50+", "Projects"], ["20+", "Clients"], ["100%", "On-time"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gradient", children: n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: l })
          ] }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralHero, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What we do", title: "Engineering across every digital surface", subtitle: "From a single landing page to enterprise platforms." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
      ] }) }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Why NIURO", title: "Built different. Built for results." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: whyUs.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full gap-4 rounded-2xl glass p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 rounded-lg bg-primary/10 p-3 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: w.desc })
        ] })
      ] }) }, w.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl glass p-12 text-center shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold md:text-5xl", children: [
          "Ready to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "build something brilliant?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Tell us about your project. We'll get back within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
          "Start your project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
