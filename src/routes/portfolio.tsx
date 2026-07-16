import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/Section";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import glowBeautyImg from "@/assets/glow-beauty.png";
import ceylontheadImg from "@/assets/ceylon-threads.png";
import ceylonEleganceImg from "@/assets/ceylon-elegance.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — NIURO Digital" },
      {
        name: "description",
        content: "Selected projects by NIURO Digital — websites, web apps and mobile experiences.",
      },
      { property: "og:title", content: "Portfolio — NIURO Digital" },
      { property: "og:description", content: "Selected work by NIURO Digital." },
      { property: "og:url", content: "https://www.niurodigital.lk/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://www.niurodigital.lk/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  {
    name: "Glow Beauty Saloon",
    tag: "Website",
    category: "Starter Website",
    desc: "A leading luxury beauty saloon in Colombo, Sri Lanka. Expert care, premium products, and unforgettable results.",
    link: "https://glow-beauty-saloon.vercel.app/",
    image: glowBeautyImg,
  },
  {
    name: "Ceylon Threads",
    tag: "Website",
    category: "Business Website",
    desc: "A premium online store for Sri Lankan Handloom products.",
    link: "https://ceylon-threads.vercel.app/",
    image: ceylontheadImg,
  },
  {
    name: "Ceylon Elegance",
    tag: "Website",
    category: "Premium Business Website",
    desc: "A e-commerce store for handmade products in Sri Lanka.",
    link: "https://ceylon-elegance.vercel.app",
    image: ceylonEleganceImg,
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <Section className="pt-28">
      <SectionHeader
        eyebrow="Portfolio"
        title="Selected work"
        subtitle="A snapshot of products we've shipped recently."
      />

      <Reveal delay={0.1}>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <a
              href={p.link || "#"}
              className="group relative block overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative mb-5 aspect-video overflow-hidden rounded-lg bg-gradient-hero">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-gradient">
                    {p.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">{p.category}</div>
                  <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <ArrowUpRight
                  className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  size={20}
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
