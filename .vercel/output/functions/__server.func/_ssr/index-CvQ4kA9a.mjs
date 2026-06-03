import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
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
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
function useScrambleText({
  text,
  speed = 50,
  duration = 1e3,
  delay = 0,
  playOnMount = true
}) {
  const [displayText, setDisplayText] = reactExports.useState(text.replace(/./g, " "));
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const play = () => {
    setIsPlaying(true);
    let startTimestamp = null;
    let timeoutId;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const fraction = Math.min(progress / duration, 1);
      const nextText = text.split("").map((char, index) => {
        if (char === " ") return " ";
        if (index / text.length < fraction) {
          return char;
        }
        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      }).join("");
      setDisplayText(nextText);
      if (progress < duration) {
        timeoutId = setTimeout(() => {
          requestAnimationFrame(step);
        }, speed);
      } else {
        setDisplayText(text);
        setIsPlaying(false);
      }
    };
    if (delay > 0) {
      setTimeout(() => requestAnimationFrame(step), delay);
    } else {
      requestAnimationFrame(step);
    }
    return () => clearTimeout(timeoutId);
  };
  reactExports.useEffect(() => {
    if (playOnMount) {
      play();
    }
  }, [text]);
  return { displayText, play, isPlaying };
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
  const containerRef = reactExports.useRef(null);
  const scramble1 = useScrambleText({
    text: "Transform your business with",
    delay: 100,
    speed: 40
  });
  const scramble2 = useScrambleText({
    text: "smart digital solutions",
    delay: 600,
    speed: 50
  });
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      gsapWithCSS.from(".hero-desc", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out"
      });
      gsapWithCSS.from(".hero-btns", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
      });
      gsapWithCSS.from(".hero-stats div", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.8,
        ease: "power3.out"
      });
      gsapWithCSS.from(".service-card-horiz", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".services-slide",
          start: "top 80%"
        }
      });
      gsapWithCSS.from(".why-card-horiz", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".why-slide",
          start: "top 80%"
        }
      });
      gsapWithCSS.from(".cta-box", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "pb-20 relative overflow-x-hidden w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative flex min-h-[95vh] items-center justify-center pt-28 pb-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-4xl px-6 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hero-badge inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6 animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 }),
        " Next-Gen · Intelligent · Unique"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-bold leading-[1.1] md:text-7xl lg:text-8xl drop-shadow-lg text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground/90", children: scramble1.displayText }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient mt-2", children: scramble2.displayText })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-desc mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground/90 font-medium text-center", children: "Websites, mobile apps, business software and digital innovation — engineered for Sri Lankan businesses ready to scale." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-btns mt-10 flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.72_0.18_235/0.6)]", children: [
          "Get a Free Quote",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-lg glass glow-border px-8 py-4 text-sm font-bold text-foreground hover:text-primary transition-colors", children: "View Services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-stats mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8 w-full max-w-2xl justify-items-center", children: [["50+", "Projects"], ["20+", "Clients"], ["100%", "On-time"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-black text-gradient", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1", children: l })
      ] }, l)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "services-slide w-full min-h-[90vh] flex flex-col justify-center py-20 px-6 md:px-16 lg:px-24 box-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full glass px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-4", children: "What we do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl font-bold md:text-5xl drop-shadow-md leading-tight text-foreground", children: "Engineering across every digital surface" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed text-sm md:text-base", children: "We build highly customized, premium web applications, websites, mobile apps, and custom business systems utilizing modern tech stacks." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors", children: [
          "Explore all services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 grid gap-6 md:grid-cols-2 w-full", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "service-card-horiz group relative rounded-2xl glass p-8 transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_oklch(0.72_0.18_235/0.3)] hover:bg-background/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-xl bg-gradient-primary p-4 text-primary-foreground shadow-glow mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 28 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "why-slide w-full min-h-[90vh] flex flex-col justify-center py-20 px-6 md:px-16 lg:px-24 box-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full glass px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-4", children: "Why NIURO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl font-bold md:text-5xl drop-shadow-md leading-tight text-foreground", children: "Built different. Built for results." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed text-sm md:text-base", children: "We blend fast delivery, modern tech stacks, and start-up friendly pricing with long-term post-launch support for Sri Lankan businesses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors", children: [
          "More about our team ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 w-full", children: whyUs.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "why-card-horiz flex flex-col gap-4 rounded-2xl glass p-6 hover:bg-background/40 transition-colors text-left h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 rounded-lg bg-primary/20 p-4 text-primary self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { size: 24 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-foreground", children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: w.desc })
        ] })
      ] }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "cta-section relative z-10 mx-auto max-w-5xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-box relative overflow-hidden rounded-[2.5rem] glass p-12 text-center shadow-elegant md:p-20 backdrop-blur-2xl bg-background/30 border border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero opacity-30 mix-blend-screen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-black md:text-6xl drop-shadow-lg leading-tight", children: [
          "Ready to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient block mt-2", children: "build something brilliant?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground/90 font-medium", children: "Tell us about your project. We'll get back within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-10 py-5 text-base font-bold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.72_0.18_235/0.7)]", children: [
          "Start your project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
