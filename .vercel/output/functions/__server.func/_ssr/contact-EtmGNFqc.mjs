import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, R as Reveal } from "./Section-DzcRWewI.mjs";
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
      parsed.error.issues.forEach((i) => {
        errs[i.path[0]] = i.message;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-5xl font-bold md:text-6xl", children: [
        "Let's build ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "something brilliant." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Tell us about your project — we'll respond within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, className: "flex items-center gap-4 rounded-xl glass p-4 transition-all hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-gradient-primary p-2.5 text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: c.value })
        ] })
      ] }, c.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5 rounded-2xl glass p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", maxLength: 100, className: "mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" }),
        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "email", type: "email", maxLength: 255, className: "mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" }),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Project details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, maxLength: 1e3, className: "mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" }),
        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]", children: [
        "Send via WhatsApp ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
      ] })
    ] }) })
  ] }) });
}
export {
  Contact as component
};
