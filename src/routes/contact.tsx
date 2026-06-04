import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/Section";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
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
      { property: "og:url", content: "https://niurodigital.lk/contact" },
    ],
    links: [{ rel: "canonical", href: "https://niurodigital.lk/contact" }],
  }),
  component: Contact,
  validateSearch: (search: Record<string, unknown>) => ({
    package: (search.package as string) || undefined,
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function Contact() {
  const search = useSearch({ from: "/contact" }) as { package?: string };
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (search?.package) {
      setMessage(`Hi, I'm interested in the ${search.package} package. \n\nI'd like to discuss: `);
    }
  }, [search?.package]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        errs[issue.path[0] as string] = issue.message;
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
      <div className="grid gap-12 xl:grid-cols-[1.15fr_0.85fr] items-start">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary-foreground/80">
                Start your digital journey
              </p>
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
                Let's build <span className="text-gradient">something brilliant.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {"Share your vision and we’ll turn it into a standout digital experience with thoughtful " +
                  "design, clear strategy, and fast execution."}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 transition-colors group-hover:from-primary/90 group-hover:to-primary">
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/80">
                Let’s talk
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">Send us a message</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {"Use WhatsApp to start a quick conversation or leave the details below and we’ll " +
                  "reach out shortly."}
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-100">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  maxLength={100}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-100">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="mt-2 min-h-42.5 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Tell us what you want to build, your budget, or your timeline."
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-linear-to-r from-primary to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send via WhatsApp <Send size={16} />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
