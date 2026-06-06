import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, a as SectionHeader, R as Reveal } from "./Section-DpXDcXiL.mjs";
import { e as Sparkles, f as Clock, C as Check } from "../_libs/lucide-react.mjs";
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
  description: "Perfect for startups and small businesses like restaurants, cafes, salons, small service businesses and Portfolio websites.",
  bestFor: "Restaurants, Salons, Tuition Classes, Portfolios",
  delivery: "3 - 5 Working Days",
  features: ["Up to 5 Pages", "Mobile Responsive Design", "Contact Form", "WhatsApp Integration", "Google Maps Integration", "SEO Setup", "Social Media Links"],
  footer: "Domain Registration (.lk) - LKR 4,000/year",
  free: ["Free Consultation", "Free .lk Domain (1st Year)", "1 Week Technical Support for updates any time"],
  note: "Less than LKR 33/day for the first year"
}, {
  name: "Business Website",
  price: "LKR 25,000",
  oldPrice: "LKR 35,000",
  featured: true,
  description: "Most popular choice for small shops, stores and E-commerce businesses.",
  bestFor: "Shops, Online Stores, Growing Businesses",
  delivery: "1 - 2 Weeks",
  badge: "Save LKR 10,000",
  features: ["Up to 10 Pages", "Admin Panel to update content", "Blog / News Section", "Photo Gallery", "WhatsApp Integration", "Advanced SEO Setup", "Speed Optimization", "Social Media Integration"],
  footer: "Domain Registration (.lk) - LKR 4,000/year",
  free: ["Free Consultation", "2 Week Technical Support for updates any time"],
  note: "Less than LKR 70/day for the first year"
}, {
  name: "Premium Business Website",
  price: "LKR 40,000",
  oldPrice: "LKR 50,000",
  featured: false,
  description: "For established brands that want premium polish.",
  bestFor: "Shops, Hotels, Restaurants, Real Estate, Corporate Brands",
  delivery: "2 - 4 Weeks",
  features: ["Everything in Business Package", "Unlimited Pages", "Premium UI/UX Design", "Admin Panel", "Blog / News Section", "Photo Gallery", "Booking Forms", "Customer Inquiry Management", "Advanced SEO", "Analytics Dashboard", "Lead Generation Setup", "Performance Optimization"],
  footer: "Domain Registration (.lk) - LKR 4,000/year",
  free: ["Free Consultation", "Hosting Setup", "Google Analytics Setup", "1 Month Support"],
  note: "Less than LKR 125/day for the first year"
}];
const packages = [{
  name: "Custom Web System",
  price: "From LKR 60,000",
  description: "Custom software built specifically for your business.(Inventory Management Systems, CRM Systems, School Management Systems, Restaurant Management Systems and more.)",
  bestFor: "Shops, Hotels, Restaurants, Real Estate, Corporate Brands",
  delivery: "Depends on project scope",
  features: ["Custom Login System", "Admin Dashboard", "Reports & Analytics", "Staff Management", "Customer Management", "Secure Database", "Business Process Automation", "Future Expansion Ready"],
  footer: "Hosting - LKR 10 000/year",
  free: ["Free Consultation", "1 Month Support"]
}, {
  name: "Mobile App Development",
  price: "From LKR 80,000",
  description: "Android & iOS applications with modern UI and support.",
  delivery: "Depends on project scope",
  features: ["Custom Mobile App Development (Android & iOS)", "Modern UI Design", "API Integration", "Push Notifications", "Ongoing Support"],
  footer: "Hosting - LKR 10 000/year",
  free: ["Free Consultation", "1 Month Support"],
  note: "Custom solutions built to your exact requirements. Perfect for businesses needing unique workflows, internal tools, or specialized functionality not covered by standard website packages."
}, {
  name: "Desktop Software",
  price: "From LKR 60,000",
  description: "Business desktop applications for workflow, POS, and management.",
  delivery: "Depends on project scope",
  features: ["POS Systems", "Inventory Management", "Accounting Tools", "Barcode Integration", "Printer Integration", "Offline Data Storage"],
  free: ["Free Consultation", "1 Month Support"]
}];
const addOns = [{
  label: "Additional Page",
  value: "LKR 1,500"
}, {
  label: ".lk Domain",
  value: "LKR 4,000/year"
}, {
  label: "Website Hosting",
  value: "From LKR 6,000/year"
}, {
  label: "Cloud Hosting for Custom Systems",
  value: "From LKR 10,000/year"
}, {
  label: "Logo Design",
  value: "LKR 2,000"
}, {
  label: "Business Email Setup",
  value: "LKR 3,500"
}, {
  label: "SEO Package",
  value: "LKR 5,000"
}, {
  label: "Social Media Setup",
  value: "From LKR 5,000"
}, {
  label: "Google Business Profile Setup",
  value: "LKR 3,000"
}, {
  label: "Monthly Website Maintenance",
  value: "From LKR 2,000/month"
}];
const guarantees = ["30 Days Free Bug Fixes", "100% Mobile Responsive", "SEO Ready Launch", "No Hidden Charges", "Fast & Secure Website", "Dedicated Technical Support"];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "pricing", className: "pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Pricing built for Sri Lankan businesses", subtitle: "Premium website, app and business system packages with clear LKR pricing and honest value tiers." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 xl:grid-cols-3 mb-10", children: tiers.map((tier, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-3xl glass border border-white/10 p-8 transition-all hover:-translate-y-1 hover:shadow-glow ${tier.featured ? "ring-1 ring-primary/20 bg-white/10" : "bg-white/5"}`, children: [
      tier.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14 }),
        " Most popular"
      ] }),
      tier.name === "Starter Website" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gradient-primary text-[10px] font-extrabold text-primary-foreground shadow-glow animate-pulse text-center leading-tight select-none border border-primary/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "FREE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold opacity-90", children: ".LK" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: tier.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: tier.description }),
          tier.bestFor && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs font-semibold text-primary/95", children: [
            "Best for:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: tier.bestFor })
          ] }),
          tier.delivery && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-xs font-semibold text-primary/95 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, className: "text-primary" }),
            "Delivery:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: tier.delivery })
          ] })
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
        tier.free && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground/80 uppercase tracking-wider", children: "Free Inclusions:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: tier.free.map((item) => {
            const isDomain = item.toLowerCase().includes(".lk");
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${isDomain ? "bg-primary/20 text-primary border border-primary/30 shadow-glow" : "bg-white/10 text-foreground border border-white/5"}`, children: [
              isDomain && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
              ] }),
              item
            ] }, item);
          }) })
        ] }),
        tier.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tier.note })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/contact?package=${encodeURIComponent(tier.name)}`, className: `mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105`, children: "Contact us" })
    ] }) }, tier.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 lg:grid-cols-3 mb-10", children: packages.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass border border-white/10 p-8 shadow-glow hover:-translate-y-1 transition-all flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-foreground", children: pkg.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: pkg.description }),
        pkg.bestFor && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs font-semibold text-primary/95", children: [
          "Best for: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: pkg.bestFor })
        ] }),
        pkg.delivery && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-xs font-semibold text-primary/95 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, className: "text-primary" }),
          "Delivery:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: pkg.delivery })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl font-bold text-foreground", children: pkg.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: pkg.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "mt-1 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
        ] }, feature)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: [
          pkg.footer && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pkg.footer }),
          pkg.free && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground/80 uppercase tracking-wider", children: "Free Inclusions:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: pkg.free.map((item) => {
              const isDomain = item.toLowerCase().includes(".lk");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${isDomain ? "bg-primary/20 text-primary border border-primary/30 shadow-glow" : "bg-white/10 text-foreground border border-white/5"}`, children: [
                isDomain && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
                ] }),
                item
              ] }, item);
            }) })
          ] }),
          pkg.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: pkg.note })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/contact?package=${encodeURIComponent(pkg.name)}`, className: "mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105 w-full", children: "Contact us" })
      ] })
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
