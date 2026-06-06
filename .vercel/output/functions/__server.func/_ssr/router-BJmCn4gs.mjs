import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { X, M as Menu, F as Facebook, L as Linkedin, a as Mail, P as Phone, b as MessageCircle } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-CC6U_57B.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logo = "/assets/logo-CsLW8ZZF.png";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const headerRef = reactExports.useRef(null);
  const navLinksRef = reactExports.useRef([]);
  const [isTouchDevice, setIsTouchDevice] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const hasTouchOrCoarse = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    setIsTouchDevice(!hasFinePointer || hasTouchOrCoarse);
  }, []);
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      gsapWithCSS.from(".logo-anim", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "back.out(1.7)"
      });
      gsapWithCSS.from(navLinksRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out"
      });
    }, headerRef);
    return () => ctx.revert();
  }, [isTouchDevice]);
  const handleNavEnter = (e) => {
    if (isTouchDevice) return;
    gsapWithCSS.to(e.currentTarget, { y: -3, scale: 1.05, duration: 0.3, ease: "back.out(2)" });
  };
  const handleNavLeave = (e) => {
    if (isTouchDevice) return;
    gsapWithCSS.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: "back.out(2)" });
  };
  const handleBtnEnter = (e) => {
    if (isTouchDevice) return;
    gsapWithCSS.to(e.currentTarget, {
      scale: 1.05,
      boxShadow: "0 0 30px oklch(0.72 0.18 235 / 0.8)",
      y: -3,
      duration: 0.4,
      ease: "back.out(2)"
    });
  };
  const handleBtnLeave = (e) => {
    if (isTouchDevice) return;
    gsapWithCSS.to(e.currentTarget, {
      scale: 1,
      boxShadow: "0 0 40px oklch(0.72 0.18 235 / 0.4)",
      y: 0,
      duration: 0.4,
      ease: "back.out(2)"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { ref: headerRef, className: "sticky top-0 z-50 glass", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 sm:gap-3 logo-anim flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logo,
            alt: "NIURO Digital",
            className: "h-8 sm:h-9 w-8 sm:w-9 rounded-md object-cover drop-shadow-md"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base sm:text-lg font-bold tracking-tight hidden xs:inline-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "NIURO" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Digital" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-0.5 md:gap-1 md:flex", children: [
        nav.map((n, i) => {
          const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              ref: (el) => navLinksRef.current[i] = el,
              onMouseEnter: handleNavEnter,
              onMouseLeave: handleNavLeave,
              className: `inline-flex items-center justify-center rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm transition-colors hover:text-primary ${active ? "text-primary" : "text-muted-foreground"}`,
              children: n.label
            },
            n.to
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            ref: (el) => navLinksRef.current[nav.length] = el,
            onMouseEnter: handleBtnEnter,
            onMouseLeave: handleBtnLeave,
            className: "ml-2 sm:ml-3 inline-flex items-center justify-center rounded-md bg-gradient-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow",
            children: "Get a Quote"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "md:hidden text-foreground p-2 -mr-2",
          onClick: () => setOpen(!open),
          "aria-label": "Menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-t border-border bg-background/95 px-4 sm:px-6 py-3", children: [
      nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "block py-2 text-sm text-muted-foreground hover:text-primary",
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "mt-3 block w-full rounded-md bg-gradient-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-glow",
          children: "Get a Quote"
        }
      )
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-32 border-t border-border bg-background/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-10 w-10 rounded-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-bold", children: [
            "NIURO ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Digital" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground", children: "Next-Gen Intelligent Solutions for Business Optimization. Building smart digital products for Sri Lankan businesses and beyond." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.facebook.com/niurodigital",
              target: "_blank",
              rel: "noreferrer",
              className: "rounded-md glass p-2 hover:text-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-md glass p-2 hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:niurodigital@gmail.com",
              className: "rounded-md glass p-2 hover:text-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-primary", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "hover:text-primary", children: "Pricing" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "hover:text-primary", children: "Portfolio" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
            " +94 769 626 733"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14 }),
            " WhatsApp +94 769 626 733"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
            " niurodigital@gmail.com"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border py-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " NIURO Digital. All rights reserved."
    ] })
  ] });
}
function VantaBackground() {
  const [vantaEffect, setVantaEffect] = reactExports.useState(null);
  const myRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    let intervalId;
    let cancelled = false;
    const initVanta = () => {
      if (cancelled || vantaEffect || !myRef.current) return;
      if (window.VANTA?.NET) {
        setVantaEffect(
          window.VANTA.NET({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 4188927,
            backgroundColor: 328965,
            points: 15,
            maxDistance: 25,
            spacing: 20
          })
        );
      }
    };
    initVanta();
    if (!window.VANTA?.NET) {
      intervalId = window.setInterval(() => {
        if (window.VANTA?.NET) {
          initVanta();
          if (intervalId) {
            window.clearInterval(intervalId);
            intervalId = void 0;
          }
        }
      }, 250);
    }
    return () => {
      cancelled = true;
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: myRef,
      style: {
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }
    }
  );
}
function CustomCursor() {
  const outerRef = reactExports.useRef(null);
  const innerRef = reactExports.useRef(null);
  const activeRef = reactExports.useRef(false);
  const positionRef = reactExports.useRef({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isTouchDevice = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    if (!supportsHover || isTouchDevice) {
      setIsSupported(false);
      return;
    }
    setIsSupported(true);
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) {
      return;
    }
    const updatePosition = (clientX, clientY) => {
      positionRef.current = { x: clientX, y: clientY };
      const scale = activeRef.current ? 1.25 : 1;
      outer.style.transform = `translate3d(${clientX - 18}px, ${clientY - 18}px, 0) scale(${scale})`;
      inner.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0) scale(${scale})`;
    };
    const handleMove = (event) => {
      updatePosition(event.clientX, event.clientY);
    };
    const handleDown = () => {
      activeRef.current = true;
      updatePosition(positionRef.current.x, positionRef.current.y);
      outer.classList.add("cursor-active");
      inner.classList.add("cursor-active");
    };
    const handleUp = () => {
      activeRef.current = false;
      updatePosition(positionRef.current.x, positionRef.current.y);
      outer.classList.remove("cursor-active");
      inner.classList.remove("cursor-active");
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [isSupported]);
  return isSupported ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: outerRef, className: "custom-cursor-outer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: innerRef, className: "custom-cursor-inner" })
  ] }) : null;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NIURO Digital — Next-Gen Intelligent Solutions" },
      {
        name: "description",
        content: "NIURO Digital builds websites, mobile apps and business software for Sri Lankan companies. Next-gen intelligent solutions for business optimization."
      },
      { name: "author", content: "NIURO Digital" },
      {
        name: "keywords",
        content: "Web Development Sri Lanka, Software Company Sri Lanka, Software Development Sri Lanka, Website Development Sri Lanka, Website Design Sri Lanka, Custom Software Development Sri Lanka, Web Application Development Sri Lanka, Mobile App Development Sri Lanka, IT Solutions Sri Lanka, Digital Solutions Sri Lanka, Web Development Colombo, Software Company Colombo, E-Commerce Website Development Sri Lanka, Next.js Development Services, React Development Services, Android App Development, iOS App Development, Cross Platform App Development, Progressive Web App Development, API Development Services, Headless CMS Integration, AI Solutions Sri Lanka, Machine Learning Development Sri Lanka, Chatbot Development Sri Lanka, Affordable Website Development in Sri Lanka, Hire Web Developer Sri Lanka"
      },
      { property: "og:title", content: "NIURO Digital — Next-Gen Intelligent Solutions" },
      {
        property: "og:description",
        content: "Websites, Mobile Apps, Business Software & Digital Innovation."
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.niurodigital.lk/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.niurodigital.lk/og-image.png" },
      { name: "google-site-verification", content: "E_ZgQbOkG6Tq0qqs-ojlH_4wm-O-PU82WLSuwFOt4aU" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#000000" }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.png",
        type: "image/png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon.png"
      }
    ],
    scripts: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NIURO Digital",
          url: "https://www.niurodigital.lk",
          logo: "https://www.niurodigital.lk/favicon.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+94 769 626 733",
              contactType: "customer service",
              areaServed: "LK"
            }
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "LK",
            addressLocality: "Sri Lanka"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VantaBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] })
  ] });
}
const BASE_URL = "https://www.niurodigital.lk";
const paths = ["/", "/about", "/services", "/pricing", "/portfolio", "/contact"];
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./services-CofJWghj.mjs");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — NIURO Digital"
    }, {
      name: "description",
      content: "Website development, web & mobile apps, desktop and POS software from NIURO Digital."
    }, {
      property: "og:title",
      content: "Services — NIURO Digital"
    }, {
      property: "og:description",
      content: "Full-stack digital services for modern businesses."
    }, {
      property: "og:url",
      content: "https://www.niurodigital.lk/services"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.niurodigital.lk/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./pricing-XWrdfD4V.mjs");
const Route$4 = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — NIURO Digital"
    }, {
      name: "description",
      content: "Straightforward LKR pricing for premium websites, apps, and business systems with strong package differentiation."
    }, {
      property: "og:title",
      content: "Pricing — NIURO Digital"
    }, {
      property: "og:description",
      content: "Premium digital packages built for Sri Lankan businesses with transparent pricing and clear value tiers."
    }, {
      property: "og:url",
      content: "https://www.niurodigital.lk/pricing"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.niurodigital.lk/pricing"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./portfolio-sgyceYvS.mjs");
const Route$3 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio — NIURO Digital"
    }, {
      name: "description",
      content: "Selected projects by NIURO Digital — websites, web apps and mobile experiences."
    }, {
      property: "og:title",
      content: "Portfolio — NIURO Digital"
    }, {
      property: "og:description",
      content: "Selected work by NIURO Digital."
    }, {
      property: "og:url",
      content: "https://www.niurodigital.lk/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.niurodigital.lk/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-C1QkemLW.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — NIURO Digital"
    }, {
      name: "description",
      content: "Get in touch with NIURO Digital. Call, WhatsApp or email to start your project."
    }, {
      property: "og:title",
      content: "Contact — NIURO Digital"
    }, {
      property: "og:description",
      content: "Let's build something together."
    }, {
      property: "og:url",
      content: "https://www.niurodigital.lk/contact"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.niurodigital.lk/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  validateSearch: (search) => ({
    package: search.package || void 0
  })
});
const $$splitComponentImporter$1 = () => import("./about-BtZvnP73.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — NIURO Digital"
    }, {
      name: "description",
      content: "Meet NIURO Digital — a Sri Lankan software studio building next-gen intelligent solutions."
    }, {
      property: "og:title",
      content: "About NIURO Digital"
    }, {
      property: "og:description",
      content: "Sri Lankan software studio building next-gen intelligent solutions."
    }, {
      property: "og:url",
      content: "https://www.niurodigital.lk/about"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.niurodigital.lk/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-gIXzCpgf.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "NIURO Digital | Web Development & Software Company in Sri Lanka"
    }, {
      name: "description",
      content: "NIURO Digital provides professional web development, mobile app development, custom software solutions, and digital services for businesses in Sri Lanka."
    }, {
      name: "keywords",
      content: "Web Development Sri Lanka, Website Development Sri Lanka, Software Company Sri Lanka, Custom Software Development Sri Lanka, Mobile App Development Sri Lanka, Web Application Development Sri Lanka, Website Design Sri Lanka, E-Commerce Website Development Sri Lanka, Next.js Development Services, React Development Services, API Development Services, AI Solutions Sri Lanka, Affordable Website Development in Sri Lanka, Hire Web Developer Sri Lanka"
    }, {
      property: "og:url",
      content: "https://www.niurodigital.lk/"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.niurodigital.lk/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const PricingRoute = Route$4.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$7
});
const PortfolioRoute = Route$3.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  PricingRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
