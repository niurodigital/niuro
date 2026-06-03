import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader, R as Reveal } from "./Section-DpXDcXiL.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const nugithaPortfolioImg = "/assets/nugitha-portfolio-Dhcf3rqv.png";
const projects = [{
  name: "Portfolio of Nugitha",
  tag: "Website",
  desc: "A portfolio website for showcasing projects and skills.",
  link: "https://nugi-dev.vercel.app/",
  image: nugithaPortfolioImg
}];
const tags = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))];
function Portfolio() {
  const [activeTag, setActiveTag] = reactExports.useState("All");
  const filteredProjects = activeTag === "All" ? projects : projects.filter((p) => p.tag === activeTag);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Portfolio", title: "Selected work", subtitle: "A snapshot of products we've shipped recently." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex flex-wrap items-center justify-center gap-3", children: tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTag(tag), className: `rounded-full px-5 py-2 text-sm font-medium transition-all ${activeTag === tag ? "bg-primary text-primary-foreground shadow-glow scale-105" : "glass text-muted-foreground hover:text-foreground hover:bg-white/5"}`, children: tag }, tag)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: filteredProjects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.link || "#", className: "group relative block overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-5 aspect-video overflow-hidden rounded-lg bg-gradient-hero", children: p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-5xl font-bold text-gradient", children: p.name.split(" ").map((w) => w[0]).join("") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: p.tag }),
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
