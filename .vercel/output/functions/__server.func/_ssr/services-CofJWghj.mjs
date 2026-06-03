import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader, R as Reveal } from "./Section-DpXDcXiL.mjs";
import { G as Globe, c as Layers, S as Smartphone, d as Monitor, C as Check } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const groups = [{
  icon: Globe,
  title: "Website Development",
  items: ["Static Websites", "Business Websites", "Portfolio Websites", "E-Commerce Websites"]
}, {
  icon: Layers,
  title: "Web Applications",
  items: ["Booking Systems", "Employee Management", "Inventory Management", "CRM Solutions", "Custom Business Software"]
}, {
  icon: Smartphone,
  title: "Mobile Applications",
  items: ["React Native Apps", "Android Applications", "iOS Applications"]
}, {
  icon: Monitor,
  title: "Desktop Applications",
  items: ["Java Desktop Applications", "POS Systems", "Management Systems"]
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Everything you need to ship software", subtitle: "Pick a single service or let us own your whole digital stack." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: groups.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl glass p-8 transition-all hover:-translate-y-1 hover:shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: g.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-primary" }),
        " ",
        it
      ] }, it)) })
    ] }) }, g.title)) })
  ] });
}
export {
  Services as component
};
