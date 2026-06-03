import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/Section";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — NIURO Digital" },
      {
        name: "description",
        content:
          "Transparent LKR pricing for websites, business sites and premium web applications.",
      },
      { property: "og:title", content: "Pricing — NIURO Digital" },
      { property: "og:description", content: "Transparent LKR pricing for modern web products." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Starter Website",
    price: "LKR 8,000",
    featured: false,
    features: [
      "Up to 5 Pages",
      "Mobile Friendly Design",
      "Contact Form",
      "Google Maps Setup",
      "WhatsApp Chat Button",
      "Basic Google Search Setup",
    ],
    domain: "Additional LKR 4,000/year (.lk)",
  },
  {
    name: "Business Website",
    price: "LKR 15,000",
    featured: true,
    features: [
      "Up to 15 Pages",
      "Update Content Yourself",
      "News or Blog Section",
      "Photo Gallery",
      "Optimized for Google Search",
      "Social Media Links",
    ],
    domain: "Additional LKR 4,000/year (.lk)",
  },
  {
    name: "Custom Web System",
    price: "From LKR 40,000",
    featured: false,
    features: [
      "Fast & Modern Interface",
      "Secure Data Processing",
      "User Accounts & Login",
      "Business Dashboard",
      "Custom Reports",
      "Built Exactly for Your Needs",
    ],
    domain: "Tailored hosting & domain",
  },
  {
    name: "Mobile App",
    price: "Custom Quote",
    featured: false,
    features: [
      "For Both Android & iPhone",
      "Smooth & Fast Experience",
      "Custom Business Solutions",
      "Connects to Your Systems",
      "Publishing to App Stores",
      "Ongoing Support",
    ],
    domain: "Tailored to your business needs",
  },
  {
    name: "Desktop Software",
    price: "Custom Quote",
    featured: false,
    features: [
      "Reliable Computer Software",
      "Point of Sale (POS) Systems",
      "Business Management Tools",
      "Connect to Printers/Scanners",
      "Secure Offline Data Storage",
      "Full Staff Training",
    ],
    domain: "Tailored to your business needs",
  },
];

function Pricing() {
  return (
    <Section className="pt-28">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing in LKR"
        subtitle="Start small and scale. No surprises."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
        {tiers.map((t, i) => (
          <div key={t.name} className={`md:col-span-2 ${i === 3 ? "md:col-start-2" : ""}`}>
            <Reveal delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-all hover:-translate-y-1 ${t.featured ? "glow-border bg-gradient-to-b from-secondary/30 to-transparent shadow-glow" : "glass"}`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <Sparkles size={12} /> Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <div className="mt-4 text-4xl font-bold text-gradient">{t.price}</div>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">{t.domain}</p>
                <Link
                  to="/contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${t.featured ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105" : "glass hover:text-primary"}`}
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
