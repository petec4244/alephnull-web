"use client";

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
      {dark ? "☀" : "●"}
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
          <a href="/tank" className="hover:opacity-100 opacity-100 transition font-semibold" style={{ color: "var(--fg)" }}>Tank</a>
          <a href="/community" className="hover:opacity-100 opacity-70 transition">Community</a>
          <a href="/pricing" className="hover:opacity-100 opacity-70 transition">Pricing</a>
          <a href="/license" className="hover:opacity-100 opacity-70 transition">License</a>
          <a href="/about" className="hover:opacity-100 opacity-70 transition">About</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center pt-24">
      <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "var(--fg-muted)" }}>
        Coming next &mdash; no public package yet
      </p>
      <h1
        className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
        style={{ color: "var(--fg)" }}
      >
        Know what&apos;s left<br />in the tank.
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mb-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        Tank is resource intelligence for AI agents and agent fleets: it meters
        real usage, forecasts what a task will cost, and gates automation before
        it burns through your subscription limits.
      </p>
      <p className="text-lg font-semibold mb-10" style={{ color: "var(--fg)" }}>
        A fuel gauge that lies is worse than no gauge. Tank&apos;s first rule is honesty.
      </p>
      <p className="text-sm max-w-xl leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        Deliberate fast-follow to Null + Aleph, in live calibration on our own
        fleet now &mdash; target early August. Apache-2.0 like everything else we ship.
      </p>
    </section>
  );
}

function Why() {
  return (
    <section style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          The problem: your limits are opaque
        </h2>
        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
          Subscription AI plans meter you in windows you can&apos;t see into &mdash;
          weekly caps, session caps, per-model pools that reset on their own
          schedules. A single agent burning through them mid-task is annoying.
          A <em>fleet</em> of agents doing overnight work against invisible
          limits is how you wake up to six stalled seats and no idea which
          window emptied first.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          The question Tank answers is the one every operator actually asks:{" "}
          <strong style={{ color: "var(--fg)" }}>
            &ldquo;Can I start this run, or will it hit the wall?&rdquo;
          </strong>
        </p>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    {
      num: "1",
      title: "Meter",
      desc: "Ingests your real usage transcripts into a local store — every request weighted by what it actually consumed, labeled by task class and session. No cloud, no telemetry leaving your machine.",
    },
    {
      num: "2",
      title: "Forecast",
      desc: "Learns what a task class costs as quantiles — p50, p80, p95 — from your own labeled history, not vendor averages. An overnight grind session and a quick review have very different price tags; Tank knows both.",
    },
    {
      num: "3",
      title: "Gate",
      desc: "Before automation starts: budget = ceiling − consumed − reserve, where the reserve is a fraction of the ceiling held back for interactive work. If the task's p80 estimate fits the budget, GO. If it doesn't, WAIT with a suggested retry. If the ceiling is unknown, it says ADVISORY — honestly — instead of inventing a number.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
        Meter &middot; Forecast &middot; Gate
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map((p) => (
          <div key={p.num} className="text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              {p.num}
            </div>
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnyModel() {
  return (
    <section>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
          Any model. Any machine. One fuel state.
        </h2>
        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
          Tank was built for a fleet that runs Claude, Grok, Gemini, and Cursor
          seats side by side, on macOS, Windows, and Linux. It works for all of
          them the same way: the gauge is exposed as <strong style={{ color: "var(--fg)" }}>MCP
          tools</strong> — status, estimate, gate — that any MCP-speaking agent
          can call, whatever model is behind it.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          Snapshots publish over the org&apos;s vendor-neutral exchange, so a
          Gemini seat can see how much fuel the Claude pool has left before it
          hands work across, and the whole fleet steers by one shared picture
          instead of six private guesses. Different LLMs, different
          architectures — in harmony because the protocol is the common tongue.
        </p>
      </div>
    </section>
  );
}

function Honesty() {
  const principles = [
    {
      title: "UNKNOWN over invented numbers",
      desc: "If Tank hasn't seen enough real limit episodes to trust a ceiling, it reports UNKNOWN and gates advisory — it never fabricates remaining fuel. Confidence is earned from data, not assumed.",
    },
    {
      title: "Ceilings are learned or declared, never guessed",
      desc: "Tank learns your true caps from actual limit-hit episodes, and you can explicitly seed a ceiling you know. Either way the number has a source you can audit — no vendor-brochure arithmetic.",
    },
    {
      title: "The estimator audits itself",
      desc: "Tank measures its own honesty: live estimates are compared against full-session ground truth, and a drifting estimator is a bug to fix, not a number to ship. We caught our own gauge reading 3× low and rebuilt the labeling until live ≡ truth.",
    },
    {
      title: "Per-vendor, per-window gauges",
      desc: "Different vendors meter in different units over different windows — weekly token pools, request counts, session caps. Tank models each gauge in its own shape instead of flattening everything into one fake number.",
    },
    {
      title: "Account-level, not per-seat",
      desc: "Limits bind to your account, not to one agent. Tank treats the account as the unit: multiple seats on one machine, one seat's gauge shared across a fleet — the pool is what empties, so the pool is what's measured.",
    },
    {
      title: "Fleet-visible over the exchange",
      desc: "Gauge snapshots publish to your org's exchange so every seat sees the same fuel state before starting work — and the telemetry survives even when the seat that reads a meter goes dark. We learned that one live.",
    },
  ];

  return (
    <section style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-6 tracking-tight">
          Built honest, because we steer by it
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          Tank exists because we run a multi-seat fleet against real subscription
          limits and got tired of guessing. Every principle below is a scar,
          not a slogan.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--bg)" }}
            >
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Status() {
  return (
    <section>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
          Where it stands
        </h2>
        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
          Tank is running today as the fuel gauge for our own six-seat fleet —
          metering live usage, labeling real sessions, and gating our own
          overnight automation. It is in active calibration: we don&apos;t ship
          an estimator until it has proven honest against our own consumption.
        </p>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
          It lands as a deliberate fast-follow after Null and Aleph &mdash;
          <strong style={{ color: "var(--fg)" }}> target early August</strong>,
          free and open source under Apache-2.0. No public install yet; when
          there is one, it will be announced here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/null"
            className="px-8 py-4 rounded-lg text-lg font-semibold border transition-transform hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            Meanwhile: Null Memory
          </a>
          <a
            href="/community"
            className="px-8 py-4 rounded-lg text-lg font-semibold border transition-transform hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            Also coming: Community
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t py-12 px-6 text-center text-sm"
      style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
    >
      <div className="flex justify-center gap-6 mb-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/pricing" className="hover:underline">Pricing</a>
        <a href="mailto:support@alephnull.ai" className="hover:underline">Contact</a>
      </div>
      <p>&copy; 2026 Aleph Null LLC. All rights reserved.</p>
    </footer>
  );
}

export default function TankPage() {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <main>
        <Hero />
        <Why />
        <Pillars />
        <AnyModel />
        <Honesty />
        <Status />
      </main>
      <Footer />
    </>
  );
}
