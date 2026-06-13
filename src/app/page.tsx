"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border hover:scale-110 transition-transform"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      aria-label="Toggle dark mode"
    >
      {dark ? "\u2600" : "\u25CF"}
    </button>
  );
}

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          ALEPH NULL
        </a>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "var(--fg-muted)" }}>
          <a href="/aleph" className="hover:opacity-100 opacity-70 transition">Aleph</a>
          <a href="/null" className="hover:opacity-100 opacity-70 transition">Null Memory</a>
          <a href="/pricing" className="hover:opacity-100 opacity-70 transition">Pricing</a>
          <a href="/about" className="hover:opacity-100 opacity-70 transition">About</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20">
      <Image
        src="/logo.jpg"
        alt="Aleph Null"
        width={160}
        height={160}
        className="mb-8 rounded-2xl"
        priority
      />
      <h1
        className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
        style={{ color: "var(--fg)" }}
      >
        Two tools. One smarter AI.
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        Aleph Null builds the infrastructure that makes AI agents actually useful.
        Code comprehension and persistent memory &mdash; the two halves your AI is missing.
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full mb-16">
        {/* Aleph card */}
        <a
          href="/aleph"
          className="p-8 rounded-xl border text-left transition-transform hover:scale-[1.02]"
          style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
        >
          <h2 className="text-2xl font-black mb-2">Aleph</h2>
          <p className="text-lg font-semibold mb-3" style={{ color: "var(--fg)" }}>
            The compiler your AI has been waiting for.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            Up to 96% token reduction on real codebases. 33 MCP tools. Your LLM navigates code instead of drowning in it.
          </p>
        </a>
        {/* Null Memory card */}
        <a
          href="/null"
          className="p-8 rounded-xl border text-left transition-transform hover:scale-[1.02]"
          style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
        >
          <h2 className="text-2xl font-black mb-2">Null Memory</h2>
          <p className="text-lg font-semibold mb-3" style={{ color: "var(--fg)" }}>
            Give your AI a brain that persists.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            Facts, decisions, mistakes, reflections. Your agent remembers and grows across sessions
            &mdash; and now scales into a whole organization of them.
          </p>
        </a>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section
      style={{ background: "var(--bg-alt)" }}
      className="!max-w-none"
    >
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl md:text-4xl font-black italic tracking-tight" style={{ color: "var(--fg)" }}>
          &ldquo;Aleph gives it eyes. Null gives it a brain.&rdquo;
        </blockquote>
        <p className="mt-4 text-base" style={{ color: "var(--fg-muted)" }}>
          &mdash; Atlas
        </p>
      </div>
    </section>
  );
}

function OrgTeaser() {
  return (
    <section>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--fg-muted)" }}>
          New in Null Memory
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          Build your AI organization
        </h2>
        <p className="text-lg leading-relaxed mb-4 max-w-3xl mx-auto" style={{ color: "var(--fg-muted)" }}>
          One agent that remembers was the start. Null now ships the toolkit to run a
          whole org of AI seats: personalities with their own growing identities,
          identity tiers, typed knowledge edges between seats, onboarding packets,
          decision authority &mdash; riding on multi-machine sync that is conflict-free
          by construction.
        </p>
        <p className="text-base font-semibold mb-8" style={{ color: "var(--fg)" }}>
          Built and battle-tested running our own multi-seat org.
        </p>
        <a
          href="/null#org"
          className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-transform hover:scale-105"
          style={{ background: "var(--fg)", color: "var(--bg)" }}
        >
          See the org toolkit
        </a>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: " forever",
      desc: "Solo use of both products.",
      features: [
        "Aleph: full single-project experience",
        "Null: full personal memory",
        "All languages, CLI + MCP",
        "No license file, no feature decay",
      ],
      cta: "Get Started Free",
      href: "/aleph#install",
      highlight: false,
    },
    {
      name: "Aleph Pro",
      price: "$99",
      period: " per seat, one-time",
      desc: "Multi-repo workspace layer.",
      features: [
        "Everything in Free",
        "Cross-repo workspace build & search",
        "Perpetual license",
        "12 months of updates",
      ],
      cta: "See Pricing",
      href: "/pricing",
      highlight: false,
    },
    {
      name: "Null Team",
      price: "$149",
      period: " per seat, one-time",
      desc: "Shared memory for teams.",
      features: [
        "Everything in Free",
        "Team sync — shared agent memory",
        "Perpetual license",
        "12 months of updates",
      ],
      cta: "See Pricing",
      href: "/pricing",
      highlight: false,
    },
    {
      name: "Bundle",
      price: "$249",
      period: " per seat, one-time",
      desc: "Aleph Pro + Null Team together.",
      features: [
        "Everything in Aleph Pro",
        "Everything in Null Team",
        "Perpetual license",
        "12 months of updates",
      ],
      cta: "See Pricing",
      href: "/pricing",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
          Pay once. Own it forever.
        </h2>
        <p className="text-center mb-12 text-lg" style={{ color: "var(--fg-muted)" }}>
          No subscriptions — ever. Solo use is free. A per-seat perpetual license unlocks the team layer.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-xl border flex flex-col ${t.highlight ? "ring-2" : ""}`}
              style={{
                borderColor: t.highlight ? "var(--fg)" : "var(--border)",
                background: "var(--bg)",
              }}
            >
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-black">{t.price}</span>
                <span className="text-sm" style={{ color: "var(--fg-muted)" }}>{t.period}</span>
              </div>
              <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>{t.desc}</p>
              <ul className="flex-1 mb-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2">
                    <span className="mt-0.5">+</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={t.href}
                className="block text-center py-3 rounded-lg font-semibold transition-transform hover:scale-105"
                style={{
                  background: t.highlight ? "var(--fg)" : "transparent",
                  color: t.highlight ? "var(--bg)" : "var(--fg)",
                  border: t.highlight ? "none" : "1px solid var(--border)",
                }}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm" style={{ color: "var(--fg-muted)" }}>
          After 12 months your version keeps working forever — renewal is optional for continued updates.{" "}
          <a href="/pricing" className="underline">Full details on the pricing page</a>.
        </p>
      </div>
    </section>
  );
}

function Subscribe() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("aleph-subscribed") === "true");
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch(() => {});
    setSubscribed(true);
    localStorage.setItem("aleph-subscribed", "true");
  };

  return (
    <section>
      <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
        Stay in the loop
      </h2>
      <p className="text-center mb-10 text-lg" style={{ color: "var(--fg-muted)" }}>
        Release notifications only &mdash; new features, new languages, major milestones.
      </p>
      {!subscribed ? (
        <>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border text-sm outline-none"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg text-sm font-semibold transition-transform hover:scale-105 whitespace-nowrap"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              Get Updates
            </button>
          </form>
          <p className="text-center mt-3 text-xs" style={{ color: "var(--fg-muted)" }}>
            We will never email you marketing content or sell your data.
          </p>
        </>
      ) : (
        <p className="text-center text-sm font-semibold" style={{ color: "var(--fg)" }}>
          You&apos;re on the list. We&apos;ll notify you when something ships.
        </p>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t py-12 px-6 text-center text-sm"
      style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
    >
      <p className="mb-2 font-semibold" style={{ color: "var(--fg)" }}>
        Aleph Null LLC
      </p>
      <p className="mb-4">Patent Pending</p>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/alephnullai/aleph" target="_blank" className="hover:underline">GitHub (Aleph)</a>
        <a href="https://github.com/alephnullai/null" target="_blank" className="hover:underline">GitHub (Null)</a>
        <a href="mailto:licensing@alephnull.ai" className="hover:underline">Licensing</a>
        <a href="mailto:support@alephnull.ai" className="hover:underline">Support</a>
      </div>
      <p>&copy; 2026 Aleph Null LLC. All rights reserved.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <main>
        <Hero />
        <QuoteBanner />
        <OrgTeaser />
        <Pricing />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
