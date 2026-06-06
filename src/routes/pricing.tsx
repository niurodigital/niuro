import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/Section";
import { Check, Clock, Sparkles } from "lucide-react";

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
      { property: "og:url", content: "https://www.niurodigital.lk/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://www.niurodigital.lk/pricing" }],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Starter Website",
    price: "LKR 12,000",
    oldPrice: "LKR 15,000",
    featured: false,
    description:
      "Perfect for startups and small businesses like restaurants, cafes, salons, small service businesses and Portfolio websites.",
    bestFor: "Restaurants, Salons, Tuition Classes, Portfolios",
    delivery: "3 - 5 Working Days",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "SEO Setup",
      "Social Media Links",
    ],
    footer: "Domain Registration (.lk) - LKR 4,000/year",
    free: [
      "Free Consultation",
      "Free .lk Domain (1st Year)",
      "1 Week Technical Support for updates any time",
    ],
    note: "Less than LKR 33/day for the first year",
  },
  {
    name: "Business Website",
    price: "LKR 25,000",
    oldPrice: "LKR 35,000",
    featured: true,
    description: "Most popular choice for small shops, stores and E-commerce businesses.",
    bestFor: "Shops, Online Stores, Growing Businesses",
    delivery: "1 - 2 Weeks",
    badge: "Save LKR 10,000",
    features: [
      "Up to 10 Pages",
      "Admin Panel to update content",
      "Blog / News Section",
      "Photo Gallery",
      "WhatsApp Integration",
      "Advanced SEO Setup",
      "Speed Optimization",
      "Social Media Integration",
    ],
    footer: "Domain Registration (.lk) - LKR 4,000/year",
    free: ["Free Consultation", "2 Week Technical Support for updates any time"],
    note: "Less than LKR 70/day for the first year",
  },
  {
    name: "Premium Business Website",
    price: "LKR 40,000",
    oldPrice: "LKR 50,000",
    featured: false,
    description: "For established brands that want premium polish.",
    bestFor: "Shops, Hotels, Restaurants, Real Estate, Corporate Brands",
    delivery: "2 - 4 Weeks",
    features: [
      "Everything in Business Package",
      "Unlimited Pages",
      "Premium UI/UX Design",
      "Admin Panel",
      "Blog / News Section",
      "Photo Gallery",
      "Booking Forms",
      "Customer Inquiry Management",
      "Advanced SEO",
      "Analytics Dashboard",
      "Lead Generation Setup",
      "Performance Optimization",
    ],
    footer: "Domain Registration (.lk) - LKR 4,000/year",
    free: [
      "Free Consultation",
      "Hosting Setup",
      "Google Analytics Setup",
      "1 Month Support",
    ],
    note: "Less than LKR 125/day for the first year",
  },
];

const packages = [
  {
    name: "Custom Web System",
    price: "From LKR 60,000",
    description:
      "Custom software built specifically for your business.(Inventory Management Systems, CRM Systems, School Management Systems, Restaurant Management Systems and more.)",
    bestFor: "Shops, Hotels, Restaurants, Real Estate, Corporate Brands",
    delivery: "Depends on project scope",
    features: [
      "Custom Login System",
      "Admin Dashboard",
      "Reports & Analytics",
      "Staff Management",
      "Customer Management",
      "Secure Database",
      "Business Process Automation",
      "Future Expansion Ready",
    ],
    footer: "Hosting - LKR 10 000/year",
    free: ["Free Consultation", "1 Month Support"],
  },
  {
    name: "Mobile App Development",
    price: "From LKR 80,000",
    description: "Android & iOS applications with modern UI and support.",
    delivery: "Depends on project scope",
    features: [
      "Custom Mobile App Development (Android & iOS)",
      "Modern UI Design",
      "API Integration",
      "Push Notifications",
      "Ongoing Support",
    ],
    footer: "Hosting - LKR 10 000/year",
    free: ["Free Consultation", "1 Month Support"],
    note: "Custom solutions built to your exact requirements. Perfect for businesses needing unique workflows, internal tools, or specialized functionality not covered by standard website packages.",
  },
  {
    name: "Desktop Software",
    price: "From LKR 60,000",
    description: "Business desktop applications for workflow, POS, and management.",
    delivery: "Depends on project scope",
    features: [
      "POS Systems",
      "Inventory Management",
      "Accounting Tools",
      "Barcode Integration",
      "Printer Integration",
      "Offline Data Storage",
    ],
    free: ["Free Consultation", "1 Month Support"],
  },
];

const addOns = [
  { label: "Additional Page", value: "LKR 1,500" },
  { label: ".lk Domain", value: "LKR 4,000/year" },
  { label: "Website Hosting", value: "From LKR 6,000/year" },
  { label: "Cloud Hosting for Custom Systems", value: "From LKR 10,000/year" },
  { label: "Logo Design", value: "LKR 2,000" },
  { label: "Business Email Setup", value: "LKR 3,500" },
  { label: "SEO Package", value: "LKR 5,000" },
  { label: "Social Media Setup", value: "From LKR 5,000" },
  { label: "Google Business Profile Setup", value: "LKR 3,000" },
  { label: "Monthly Website Maintenance", value: "From LKR 2,000/month" },
];

const guarantees = [
  "30 Days Free Bug Fixes",
  "100% Mobile Responsive",
  "SEO Ready Launch",
  "No Hidden Charges",
  "Fast & Secure Website",
  "Dedicated Technical Support",
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
              className={`relative rounded-3xl glass border border-white/10 p-8 transition-all hover:-translate-y-1 hover:shadow-glow ${
                tier.featured ? "ring-1 ring-primary/20 bg-white/10" : "bg-white/5"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  <Sparkles size={14} /> Most popular
                </span>
              )}

              {tier.name === "Starter Website" && (
                <div className="absolute top-4 right-4 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gradient-primary text-[10px] font-extrabold text-primary-foreground shadow-glow animate-pulse text-center leading-tight select-none border border-primary/20">
                  <span>FREE</span>
                  <span className="text-[9px] font-semibold opacity-90">.LK</span>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                  {tier.bestFor && (
                    <p className="mt-2 text-xs font-semibold text-primary/95">
                      Best for:{" "}
                      <span className="text-foreground/90 font-medium">{tier.bestFor}</span>
                    </p>
                  )}
                  {tier.delivery && (
                    <p className="mt-1.5 text-xs font-semibold text-primary/95 flex items-center gap-1">
                      <Clock size={12} className="text-primary" />
                      Delivery:{" "}
                      <span className="text-muted-foreground font-normal">{tier.delivery}</span>
                    </p>
                  )}
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
                {tier.free && (
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                      Free Inclusions:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {tier.free.map((item) => {
                        const isDomain = item.toLowerCase().includes(".lk");
                        return (
                          <span
                            key={item}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                              isDomain
                                ? "bg-primary/20 text-primary border border-primary/30 shadow-glow"
                                : "bg-white/10 text-foreground border border-white/5"
                            }`}
                          >
                            {isDomain && (
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                              </span>
                            )}
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
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
            <div className="rounded-3xl glass border border-white/10 p-8 shadow-glow hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-foreground">{pkg.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                {pkg.bestFor && (
                  <p className="mt-2 text-xs font-semibold text-primary/95">
                    Best for: <span className="text-foreground/90 font-medium">{pkg.bestFor}</span>
                  </p>
                )}
                {pkg.delivery && (
                  <p className="mt-1.5 text-xs font-semibold text-primary/95 flex items-center gap-1">
                    <Clock size={12} className="text-primary" />
                    Delivery:{" "}
                    <span className="text-muted-foreground font-normal">{pkg.delivery}</span>
                  </p>
                )}
                <div className="mt-4 text-3xl font-bold text-foreground">{pkg.price}</div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={16} className="mt-1 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {pkg.footer && <p>{pkg.footer}</p>}
                  {pkg.free && (
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                        Free Inclusions:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {pkg.free.map((item) => {
                          const isDomain = item.toLowerCase().includes(".lk");
                          return (
                            <span
                              key={item}
                              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                                isDomain
                                  ? "bg-primary/20 text-primary border border-primary/30 shadow-glow"
                                  : "bg-white/10 text-foreground border border-white/5"
                              }`}
                            >
                              {isDomain && (
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                              )}
                              {item}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {pkg.note && <p className="text-sm text-muted-foreground">{pkg.note}</p>}
                </div>

                <Link
                  to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105 w-full"
                >
                  Contact us
                </Link>
              </div>
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
              These guarantees make the pricing page feel more confident and reduce buyer
              hesitation.
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
