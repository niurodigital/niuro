import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, R as Reveal, a as SectionHeader } from "./Section-DzcRWewI.mjs";
import { T as Target, E as Eye, H as Heart } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-primary", children: "About us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-5xl font-bold md:text-6xl", children: [
        "We build the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "digital backbone" }),
        " of modern Sri Lankan business."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "NIURO — Nextgen, Intelligent, Unique, Reliable, Optimization. Five principles that shape every product we ship." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [{
      icon: Target,
      title: "Our Mission",
      desc: "Make world-class software accessible to every business in Sri Lanka."
    }, {
      icon: Eye,
      title: "Our Vision",
      desc: "Be the catalyst for digital transformation across South Asia."
    }, {
      icon: Heart,
      title: "Our Values",
      desc: "Craft, transparency, speed, and lifetime client partnerships."
    }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-8 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: b.desc })
    ] }) }, b.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "The acronym", title: "N · I · U · R · O" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-5", children: [["N", "Nextgen"], ["I", "Intelligent"], ["U", "Unique"], ["R", "Reliable"], ["O", "Optimization"]].map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-gradient", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground", children: v })
      ] }) }, k)) })
    ] })
  ] });
}
export {
  About as component
};
