import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, a as SectionHeader, R as Reveal } from "./Section-DpXDcXiL.mjs";
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
  price: "LKR 12,000",
  oldPrice: "LKR 15,000",
  featured: false,
  description: "Perfect for startups and small businesses.",
  features: ["Up to 5 Pages", "Mobile Responsive Design", "Contact Form", "WhatsApp Integration", "Google Maps Integration", "Basic SEO Setup", "Social Media Links", "1 Revision Round"],
  footer: "Domain Registration (.lk) – LKR 4,000/year",
  extra: ["Hosting from LKR 6,000/year"]
}, {
  name: "Business Website",
  price: "LKR 25,000",
  oldPrice: "LKR 35,000",
  featured: true,
  description: "Most popular choice for growing businesses.",
  badge: "Save LKR 10,000",
  features: ["Up to 15 Pages", "Admin Panel to update content", "Blog / News Section", "Photo Gallery", "Advanced SEO Setup", "Speed Optimization", "Social Media Integration", "Google Analytics Setup", "3 Revision Rounds"],
  footer: "Domain Registration (.lk) – LKR 4,000/year",
  free: ["1 Month Technical Support"],
  note: "Less than LKR 70/day for the first year"
}, {
  name: "Premium Business Website",
  price: "LKR 45,000",
  featured: false,
  description: "For established brands that want premium polish.",
  features: ["Unlimited Pages", "Premium UI/UX Design", "Booking Forms", "Customer Inquiry Management", "Advanced SEO", "Analytics Dashboard", "Lead Generation Setup", "Performance Optimization", "Priority Support"],
  footer: "Domain Registration (.lk) – LKR 4,000/year",
  free: ["Hosting Setup", "3 Months Support"]
}];
const packages = [{
  name: "Custom Web System",
  price: "From LKR 50,000",
  description: "Custom software built specifically for your business.",
  features: ["User Authentication", "Dashboards", "Reports", "Role Management", "Database Design", "API Development", "Security Features", "Scalable Architecture"]
}, {
  name: "Mobile App Development",
  price: "From LKR 80,000",
  description: "Android & iOS applications with modern UI and support.",
  features: ["Modern UI Design", "API Integration", "Push Notifications", "App Store Publishing", "Google Play Publishing", "Ongoing Support"]
}, {
  name: "Desktop Software",
  price: "From LKR 60,000",
  description: "Business desktop applications for workflow, POS, and management.",
  features: ["POS Systems", "Inventory Management", "Accounting Tools", "Barcode Integration", "Printer Integration", "Offline Data Storage"]
}];
const addOns = [{
  label: ".lk Domain",
  value: "LKR 4,000/year"
}, {
  label: "Hosting Setup",
  value: "LKR 6,000/year"
}, {
  label: "Business Email Setup",
  value: "LKR 2,500"
}, {
  label: "Additional Page",
  value: "LKR 1,500"
}, {
  label: "Logo Design",
  value: "LKR 5,000"
}, {
  label: "SEO Package",
  value: "LKR 10,000"
}];
const guarantees = ["Free bug fixes for 30 days", "Mobile friendly guarantee", "SEO ready launch", "No hidden charges"];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "pricing", className: "pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Pricing built for Sri Lankan businesses", subtitle: "Premium website, app and business system packages with clear LKR pricing and honest value tiers." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 xl:grid-cols-3 mb-10", children: tiers.map((tier, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-3xl glass border border-white/10 p-8 transition-all hover:-translate-y-1 hover:shadow-glow ${tier.featured ? "ring-1 ring-primary/20 bg-white/10" : "bg-white/5"}`, children: [
      tier.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14 }),
        " Most popular"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: tier.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: tier.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
          tier.oldPrice ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground line-through", children: tier.oldPrice }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-foreground", children: tier.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: tier.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "mt-1 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
        ] }, feature)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: tier.footer }),
        tier.extra && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Optional: ",
          tier.extra.join(" • ")
        ] }),
        tier.free && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
          "Free: ",
          tier.free.join(" • ")
        ] }),
        tier.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tier.note })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/contact?package=${encodeURIComponent(tier.name)}`, className: `mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105`, children: "Contact us" })
    ] }) }, tier.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 lg:grid-cols-3 mb-10", children: packages.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass border border-white/10 p-8 shadow-glow hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-foreground", children: pkg.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: pkg.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl font-bold text-foreground", children: pkg.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex-1 space-y-3 text-sm text-muted-foreground", children: pkg.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "mt-1 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
      ] }, feature)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/contact?package=${encodeURIComponent(pkg.name)}`, className: "mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105", children: "Contact us" })
    ] }) }, pkg.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1.3fr_0.7fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass border border-white/10 p-8 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-foreground", children: "Add-ons for launch and growth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Boost value with clear extras that customers can add to their package." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: addOns.map((addOn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/contact?package=Add-on: ${encodeURIComponent(addOn.label)}`, className: "rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: addOn.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: addOn.value })
        ] }, addOn.label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass border border-white/10 p-8 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-foreground", children: "Trust signals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "These guarantees make the pricing page feel more confident and reduce buyer hesitation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: guarantees.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 h-2.5 w-2.5 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
        ] }, item)) })
      ] }) })
    ] })
  ] });
}
export {
  Pricing as component
};
