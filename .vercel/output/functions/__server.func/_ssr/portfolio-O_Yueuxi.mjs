import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader, R as Reveal } from "./Section-DpXDcXiL.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const glowBeautyImg = "/assets/glow-beauty-D4O2xwJ-.png";
const ceylontheadImg = "/assets/ceylon-threads-BH93RBZX.png";
const ceylonEleganceImg = "/assets/ceylon-elegance-FQEvSV6u.png";
const projects = [{
  name: "Glow Beauty Saloon",
  tag: "Website",
  category: "Starter Website",
  desc: "A leading luxury beauty saloon in Colombo, Sri Lanka. Expert care, premium products, and unforgettable results.",
  link: "https://glow-beauty-saloon.vercel.app/",
  image: glowBeautyImg
}, {
  name: "Ceylon Threads",
  tag: "Website",
  category: "Business Website",
  desc: "A premium online store for Sri Lankan Handloom products.",
  link: "https://ceylon-threads.vercel.app/",
  image: ceylontheadImg
}, {
  name: "Ceylon Elegance",
  tag: "Website",
  category: "Premium Business Website",
  desc: "A e-commerce store for handmade products in Sri Lanka.",
  link: "https://ceylon-elegance.vercel.app",
  image: ceylonEleganceImg
}];
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
function Portfolio() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Portfolio", title: "Selected work", subtitle: "A snapshot of products we've shipped recently." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex flex-wrap items-center justify-center gap-3", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(category), className: `rounded-full px-5 py-2 text-sm font-medium transition-all ${activeCategory === category ? "bg-primary text-primary-foreground shadow-glow scale-105" : "glass text-muted-foreground hover:text-foreground hover:bg-white/5"}`, children: category }, category)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: filteredProjects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.link || "#", className: "group relative block overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-5 aspect-video overflow-hidden rounded-lg bg-gradient-hero", children: p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-5xl font-bold text-gradient", children: p.name.split(" ").map((w) => w[0]).join("") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary", size: 20 })
      ] })
    ] }) }, p.name)) })
  ] });
}
export {
  Portfolio as component
};
