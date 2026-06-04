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
          "Straightforward LKR pricing for premium websites, apps, and business systems with strong package differentiation.",
      },
      { property: "og:title", content: "Pricing — NIURO Digital" },
      {
        property: "og:description",
        content:
          "Premium digital packages built for Sri Lankan businesses with transparent pricing and clear value tiers.",
      },
      { property: "og:url", content: "https://niurodigital.lk/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://niurodigital.lk/pricing" }],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Starter Website",
    price: "LKR 12,000",
    oldPrice: "LKR 15,000",
    featured: false,
    description: "Perfect for startups and small businesses.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Basic SEO Setup",
      "Social Media Links",
      "1 Revision Round",
    ],
    footer: "Domain Registration (.lk) – LKR 4,000/year",
    extra: ["Hosting from LKR 6,000/year"],
  },
  {
    name: "Business Website",
    price: "LKR 25,000",
    oldPrice: "LKR 35,000",
    featured: true,
    description: "Most popular choice for growing businesses.",
    badge: "Save LKR 10,000",
    features: [
      "Up to 15 Pages",
      "Admin Panel to update content",
      "Blog / News Section",
      "Photo Gallery",
      "Advanced SEO Setup",
      "Speed Optimization",
      "Social Media Integration",
      "Google Analytics Setup",
      "3 Revision Rounds",
    ],
    footer: "Domain Registration (.lk) – LKR 4,000/year",
    free: ["1 Month Technical Support"],
    note: "Less than LKR 70/day for the first year",
  },
  {
    name: "Premium Business Website",
    price: "LKR 45,000",
    featured: false,
    description: "For established brands that want premium polish.",
    features: [
      "Unlimited Pages",
      "Premium UI/UX Design",
      "Booking Forms",
      "Customer Inquiry Management",
      "Advanced SEO",
      "Analytics Dashboard",
      "Lead Generation Setup",
      "Performance Optimization",
      "Priority Support",
    ],
    footer: "Domain Registration (.lk) – LKR 4,000/year",
    free: ["Hosting Setup", "3 Months Support"],
  },
];

const packages = [
  {
    name: "Custom Web System",
    price: "From LKR 50,000",
    description: "Custom software built specifically for your business.",
    features: [
      "User Authentication",
      "Dashboards",
      "Reports",
      "Role Management",
      "Database Design",
      "API Development",
      "Security Features",
      "Scalable Architecture",
    ],
  },
  {
    name: "Mobile App Development",
    price: "From LKR 80,000",
    description: "Android & iOS applications with modern UI and support.",
    features: [
      "Modern UI Design",
      "API Integration",
      "Push Notifications",
      "App Store Publishing",
      "Google Play Publishing",
      "Ongoing Support",
    ],
  },
  {
    name: "Desktop Software",
    price: "From LKR 60,000",
    description: "Business desktop applications for workflow, POS, and management.",
    features: [
      "POS Systems",
      "Inventory Management",
      "Accounting Tools",
      "Barcode Integration",
      "Printer Integration",
      "Offline Data Storage",
    ],
  },
];

const addOns = [
  { label: ".lk Domain", value: "LKR 4,000/year" },
  { label: "Hosting Setup", value: "LKR 6,000/year" },
  { label: "Business Email Setup", value: "LKR 2,500" },
  { label: "Additional Page", value: "LKR 1,500" },
  { label: "Logo Design", value: "LKR 5,000" },
  { label: "SEO Package", value: "LKR 10,000" },
];

const guarantees = [
  "Free bug fixes for 30 days",
  "Mobile friendly guarantee",
  "SEO ready launch",
  "No hidden charges",
];

function Pricing() {
  return (
    <Section id="pricing" className="pt-28">
      <SectionHeader
        title="Pricing built for Sri Lankan businesses"
        subtitle="Premium website, app and business system packages with clear LKR pricing and honest value tiers."
      />

      <div className="grid gap-6 xl:grid-cols-3 mb-10">
        {tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 0.08}>
            <div
              className={`relative rounded-3xl glass border border-white/10 p-8 transition-all hover:-translate-y-1 hover:shadow-glow ${tier.featured ? "ring-1 ring-primary/20 bg-white/10" : "bg-white/5"
                }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  <Sparkles size={14} /> Most popular
                </span>
              )}

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <div className="flex flex-wrap items-end gap-3">
                  {tier.oldPrice ? (
                    <span className="text-sm text-muted-foreground line-through">
                      {tier.oldPrice}
                    </span>
                  ) : null}
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={16} className="mt-1 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p>{tier.footer}</p>
                {tier.extra && <p>Optional: {tier.extra.join(" • ")}</p>}
                {tier.free && <p className="text-foreground">Free: {tier.free.join(" • ")}</p>}
                {tier.note && <p className="text-sm text-muted-foreground">{tier.note}</p>}
              </div>

              <Link
                to={`/contact?package=${encodeURIComponent(tier.name)}`}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105`}
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-10">
        {packages.map((pkg) => (
          <Reveal key={pkg.name}>
            <div className="rounded-3xl glass border border-white/10 p-8 shadow-glow hover:-translate-y-1 transition-all">
              <h4 className="text-lg font-semibold text-foreground">{pkg.name}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
              <div className="mt-4 text-3xl font-bold text-foreground">{pkg.price}</div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="mt-1 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal>
          <div className="rounded-3xl glass border border-white/10 p-8 shadow-glow">
            <h3 className="text-2xl font-semibold text-foreground">
              Add-ons for launch and growth
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Boost value with clear extras that customers can add to their package.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {addOns.map((addOn) => (
                <Link
                  key={addOn.label}
                  to={`/contact?package=Add-on: ${encodeURIComponent(addOn.label)}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5"
                >
                  <p className="font-medium text-foreground">{addOn.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{addOn.value}</p>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl glass border border-white/10 p-8 shadow-glow">
            <h3 className="text-2xl font-semibold text-foreground">Trust signals</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              These guarantees make the pricing page feel more confident and reduce buyer hesitation.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {guarantees.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
