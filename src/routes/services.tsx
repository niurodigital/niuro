import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/Section";
import { Globe, Layers, Smartphone, Monitor, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NIURO Digital" },
      {
        name: "description",
        content:
          "Website development, web & mobile apps, desktop and POS software from NIURO Digital.",
      },
      { property: "og:title", content: "Services — NIURO Digital" },
      { property: "og:description", content: "Full-stack digital services for modern businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const groups = [
  {
    icon: Globe,
    title: "Website Development",
    items: ["Static Websites", "Business Websites", "Portfolio Websites", "E-Commerce Websites"],
  },
  {
    icon: Layers,
    title: "Web Applications",
    items: [
      "Booking Systems",
      "Employee Management",
      "Inventory Management",
      "CRM Solutions",
      "Custom Business Software",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    items: ["React Native Apps", "Android Applications", "iOS Applications"],
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    items: ["Java Desktop Applications", "POS Systems", "Management Systems"],
  },
];

function Services() {
  return (
    <Section className="pt-28">
      <SectionHeader
        eyebrow="Services"
        title="Everything you need to ship software"
        subtitle="Pick a single service or let us own your whole digital stack."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl glass p-8 transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
                  <g.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-6 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
