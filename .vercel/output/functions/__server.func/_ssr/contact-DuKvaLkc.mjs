import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, R as Reveal } from "./Section-DpXDcXiL.mjs";
import { P as Phone, b as MessageCircle, a as Mail, f as MapPin, g as Send } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const schema = objectType({
  name: stringType().trim().min(1, "Name required").max(100),
  email: stringType().trim().email("Invalid email").max(255),
  message: stringType().trim().min(10, "Tell us a little more").max(1e3)
});
function Contact() {
  const [errors, setErrors] = reactExports.useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message")
    });
    if (!parsed.success) {
      const errs = {};
      parsed.error.issues.forEach((issue) => {
        errs[issue.path[0]] = issue.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Name: ${parsed.data.name}
Email: ${parsed.data.email}

${parsed.data.message}`;
    window.location.href = `https://wa.me/94769626733?text=${encodeURIComponent(text)}`;
  };
  const contacts = [{
    icon: Phone,
    label: "Call",
    value: "+94 769 626 733",
    href: "tel:+94769626733"
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+94 769 626 733",
    href: "https://wa.me/94769626733"
  }, {
    icon: Mail,
    label: "Email",
    value: "niurodigital@gmail.com",
    href: "mailto:niurodigital@gmail.com"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: "#"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 xl:grid-cols-[1.15fr_0.85fr] items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.35em] text-primary-foreground/80", children: "Start your digital journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-bold leading-tight text-white sm:text-6xl", children: [
          "Let's build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "something brilliant." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg", children: "Share your vision and we’ll turn it into a standout digital experience with thoughtful design, clear strategy, and fast execution." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2", children: contacts.map((contact) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: contact.href, className: "group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 transition-colors group-hover:from-primary/90 group-hover:to-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(contact.icon, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground", children: contact.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-white", children: contact.value })
        ] })
      ] }, contact.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, noValidate: true, className: "rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/80", children: "Let’s talk" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold text-white", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-slate-400", children: "Use WhatsApp to start a quick conversation or leave the details below and we’ll reach out shortly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "text-sm font-medium text-slate-100", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", name: "name", maxLength: 100, "aria-describedby": errors.name ? "name-error" : void 0, className: "mt-2 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", placeholder: "Your name" }),
          errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "name-error", className: "mt-2 text-xs text-destructive", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "text-sm font-medium text-slate-100", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", name: "email", type: "email", maxLength: 255, "aria-describedby": errors.email ? "email-error" : void 0, className: "mt-2 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", placeholder: "you@example.com" }),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "email-error", className: "mt-2 text-xs text-destructive", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "text-sm font-medium text-slate-100", children: "Project details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 6, maxLength: 1e3, "aria-describedby": errors.message ? "message-error" : void 0, className: "mt-2 min-h-42.5 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none", placeholder: "Tell us what you want to build, your budget, or your timeline." }),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "message-error", className: "mt-2 text-xs text-destructive", children: errors.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-linear-to-r from-primary to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl", children: [
          "Send via WhatsApp ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  Contact as component
};
