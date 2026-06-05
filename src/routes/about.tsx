import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/Section";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NIURO Digital" },
      {
        name: "description",
        content:
          "Meet NIURO Digital — a Sri Lankan software studio building next-gen intelligent solutions.",
      },
      { property: "og:title", content: "About NIURO Digital" },
      {
        property: "og:description",
        content: "Sri Lankan software studio building next-gen intelligent solutions.",
      },
      { property: "og:url", content: "https://www.niurodigital.lk/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.niurodigital.lk/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section className="pt-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-6 text-5xl font-bold md:text-6xl">
              We build the <span className="text-gradient">digital backbone</span> of modern Sri
              Lankan business.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              NIURO — Nextgen, Intelligent, Unique, Reliable, Optimization. Five principles that
              shape every product we ship.
            </p>
          </div>
        </Reveal>
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "Make world-class software accessible to every business in Sri Lanka.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "Be the catalyst for digital transformation across South Asia.",
            },
            {
              icon: Heart,
              title: "Our Values",
              desc: "Craft, transparency, speed, and lifetime client partnerships.",
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="rounded-2xl glass p-8 h-full">
                <div className="inline-flex rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
                  <b.icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="The acronym" title="N · I · U · R · O" />
        <div className="grid gap-4 md:grid-cols-5">
          {[
            ["N", "Nextgen"],
            ["I", "Intelligent"],
            ["U", "Unique"],
            ["R", "Reliable"],
            ["O", "Optimization"],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.06}>
              <div className="rounded-2xl glass p-6 text-center">
                <div className="text-5xl font-bold text-gradient">{k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {v}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
