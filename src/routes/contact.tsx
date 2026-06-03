import { createFileRoute } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/Section";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NIURO Digital" },
      {
        name: "description",
        content: "Get in touch with NIURO Digital. Call, WhatsApp or email to start your project.",
      },
      { property: "og:title", content: "Contact — NIURO Digital" },
      { property: "og:description", content: "Let's build something together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`;
    window.location.href = `https://wa.me/94769626733?text=${encodeURIComponent(text)}`;
  };

  const contacts = [
    { icon: Phone, label: "Call", value: "+94 769 626 733", href: "tel:+94769626733" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+94 769 626 733",
      href: "https://wa.me/94769626733",
    },
    {
      icon: Mail,
      label: "Email",
      value: "niurodigital@gmail.com",
      href: "mailto:niurodigital@gmail.com",
    },
    { icon: MapPin, label: "Location", value: "Sri Lanka", href: "#" },
  ];

  return (
    <Section className="pt-28">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-primary">
            Contact
          </span>
          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Let's build <span className="text-gradient">something brilliant.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project — we'll respond within one business day.
          </p>
          <div className="mt-10 space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 rounded-xl glass p-4 transition-all hover:shadow-glow"
              >
                <div className="rounded-lg bg-gradient-primary p-2.5 text-primary-foreground shadow-glow">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl glass p-8">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                maxLength={100}
                className="mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                maxLength={255}
                className="mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Project details</label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                className="mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Send via WhatsApp <Send size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
