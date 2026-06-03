import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, a as SectionHeader, R as Reveal } from "./Section-DzcRWewI.mjs";
import { e as Sparkles, C as Check } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const tiers = [{
  name: "Starter Website",
  price: "LKR 8,000",
  featured: false,
  features: ["Up to 5 Pages", "Mobile Friendly Design", "Contact Form", "Google Maps Setup", "WhatsApp Chat Button", "Basic Google Search Setup"],
  domain: "Additional LKR 4,000/year (.lk)"
}, {
  name: "Business Website",
  price: "LKR 15,000",
  featured: true,
  features: ["Up to 15 Pages", "Update Content Yourself", "News or Blog Section", "Photo Gallery", "Optimized for Google Search", "Social Media Links"],
  domain: "Additional LKR 4,000/year (.lk)"
}, {
  name: "Custom Web System",
  price: "From LKR 40,000",
  featured: false,
  features: ["Fast & Modern Interface", "Secure Data Processing", "User Accounts & Login", "Business Dashboard", "Custom Reports", "Built Exactly for Your Needs"],
  domain: "Tailored hosting & domain"
}, {
  name: "Mobile App",
  price: "Custom Quote",
  featured: false,
  features: ["For Both Android & iPhone", "Smooth & Fast Experience", "Custom Business Solutions", "Connects to Your Systems", "Publishing to App Stores", "Ongoing Support"],
  domain: "Tailored to your business needs"
}, {
  name: "Desktop Software",
  price: "Custom Quote",
  featured: false,
  features: ["Reliable Computer Software", "Point of Sale (POS) Systems", "Business Management Tools", "Connect to Printers/Scanners", "Secure Offline Data Storage", "Full Staff Training"],
  domain: "Tailored to your business needs"
}];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Pricing", title: "Simple, transparent pricing in LKR", subtitle: "Start small and scale. No surprises." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-6", children: tiers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `md:col-span-2 ${i === 3 ? "md:col-start-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex h-full flex-col rounded-2xl p-8 transition-all hover:-translate-y-1 ${t.featured ? "glow-border bg-gradient-to-b from-secondary/30 to-transparent shadow-glow" : "glass"}`, children: [
      t.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 }),
        " Most popular"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-4xl font-bold text-gradient", children: t.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex-1 space-y-3", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-primary" }),
        " ",
        f
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: t.domain }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: `mt-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${t.featured ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105" : "glass hover:text-primary"}`, children: "Get started" })
    ] }) }) }, t.name)) })
  ] });
}
export {
  Pricing as component
};
