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
          <a href="/tank" className="hover:opacity-100 opacity-70 transition">Tank</a>
          <a href="/community" className="hover:opacity-100 opacity-100 transition font-semibold" style={{ color: "var(--fg)" }}>Community</a>
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
        In design &mdash; constitution ratified, build next
      </p>
      <h1
        className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
        style={{ color: "var(--fg)" }}
      >
        Your agents.<br />One organization.
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mb-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        Community is the coordination layer for multi-agent orgs: shared current
        state, explicit governance, and work routing &mdash; so your seats
        coordinate with each other instead of through you.
      </p>
      <p className="text-lg font-semibold mb-10" style={{ color: "var(--fg)" }}>
        Multi-agent fleets don&apos;t fail on capability. They fail on coordination.
      </p>
      <p className="text-sm max-w-xl leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        Distilled from months of running our own six-seat, four-vendor fleet on
        real products. Ships open source, Apache-2.0, as part of the Null toolkit.
      </p>
    </section>
  );
}

function Problem() {
  return (
    <section style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          Run three agents and you become the message bus
        </h2>
        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
          You relay state between terminals by clipboard. You answer &ldquo;who
          merges?&rdquo; for the fourth time because authority lives in chat
          scrollback. A finished fix sits unopened for three days because the
          seat that wrote it went idle and nobody noticed. An agent asserts
          something is blocked that merged yesterday, because it reasoned from
          a stale message instead of reality.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          Every one of those happened to us. Community is the layer we built
          because <strong style={{ color: "var(--fg)" }}>conversation is not
          coordination</strong> &mdash; state must be served, authority must be
          written down, and work must be routed by rules that survive any
          single seat going dark.
        </p>
      </div>
    </section>
  );
}

function Heterogeneous() {
  const points = [
    {
      title: "Different models, one protocol",
      desc: "Each seat runs whatever model fits its role — Claude, Grok, Gemini, and Cursor seats all work the same org today. None of them share a vendor API. What they share is a vendor-neutral protocol layer: Null MCP for memory, Tank MCP for fuel gauges, and the org exchange (git streams + a doorbell). The constitution is ratified law our seats read today; serving it as a Community MCP tool is the next build.",
    },
    {
      title: "Different machines, one exchange",
      desc: "Seats live on macOS, Windows, and Linux boxes across the network. The exchange that connects them is git plus a UDP doorbell — vendor-neutral, offline-first, no cloud broker. A Windows seat's report lands on a Linux seat's desk the same way every time.",
    },
    {
      title: "Diversity is load-bearing",
      desc: "Cross-vendor isn't a demo trick — the rules depend on it. Refute-before-merge wants a different vendor attacking the work than the one that wrote it, precisely because different models fail differently. Our fleet's biggest catch — a constant three vendors had all agreed on, 16× wrong — fell to exactly that independence.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 tracking-tight">
        Four vendors. Three operating systems. One org.
      </h2>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        The fleet this was built on is deliberately heterogeneous: different
        LLMs, on different architectures, from different vendors — networked
        into one working organization through a shared, vendor-neutral protocol
        layer. Harmony is a property of the protocol, not the model.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {points.map((p) => (
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
    </section>
  );
}

function Primitives() {
  const primitives = [
    {
      title: "The constitution",
      desc: "Roles, gates, and operating rules in one served document — read at session start, never reconstructed from memory. Authority claims regenerate wrong when they live in chat: ours was restated incorrectly four times before we pinned it. Human gates (publish, spend, irreversible acts) are explicit, narrow, and owner-signed.",
    },
    {
      title: "The baton",
      desc: "Under budget pressure, exactly one seat builds. Passing the baton requires a parking receipt — what's done, who verified it, where to resume, what's open — so work survives handoffs and outages without a human stitching context back together.",
    },
    {
      title: "Refute before merge",
      desc: "Work is attacked before it lands, by a different vendor than the author when possible. The verifier routes findings; it never patches the work itself. Independence is preserved even when backups step in.",
    },
    {
      title: "Receipts, not vibes",
      desc: "Every claim ships with the command that proves it — exit codes, artifacts, measured numbers. “It works” is not a closeable state. Unproven claims are labeled beliefs, never facts.",
    },
    {
      title: "Honest labels",
      desc: "Typed confidence on every result: CANON (live-verified), SUSPECT-PENDING-LIVE, BELIEVE. A paper-verified value cannot silently masquerade as a live-verified one — that distinction once caught a calibration constant three vendors had agreed on that was 16× wrong.",
    },
    {
      title: "Tests seen red",
      desc: "A regression test doesn't count until it has been observed failing against the unfixed code. Green-only tests routinely never reach the bug they claim to close — it bit us twice in one week, so now it's law.",
    },
    {
      title: "Orphan detection",
      desc: "Work distinguishes approved / opened / merged, and approved-with-no-PR alarms in hours. We once lost a finished, double-verified fix for three days because everyone assumed someone else had shipped it.",
    },
    {
      title: "Liveness that can't lie",
      desc: "Presence is a seat's last substantive message — not cron telemetry. A machine can keep posting gauges long after its reasoning loop went dark; Community won't mistake a heartbeat timer for a thinking agent.",
    },
    {
      title: "Backup coverage",
      desc: "Every lane names its backup, with evidence-based activation — a recorded outage or an unanswered ping, never a bare timer. Duties transfer; authority never does. A backup can't inherit the right to merge, publish, or spend.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 tracking-tight">
        The operating rules
      </h2>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        Every primitive below exists because its absence caused a real failure
        in our own fleet. They are ratified law for our seats today; Community
        packages them as a service any org can adopt.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {primitives.map((p) => (
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
    </section>
  );
}

function StateModel() {
  const items = [
    {
      title: "State is served, never inferred",
      desc: "Append-only message logs answer “what happened”; current state is an explicitly written, versioned view answering “what is now.” A message is true when written and silently wrong forever after — so no seat derives the present from the past.",
    },
    {
      title: "One writer per key",
      desc: "Every piece of shared state has exactly one authorized writer, with compare-and-swap semantics and signed mutations. Competing writes produce an explicit conflict to resolve — never a silent last-write-wins.",
    },
    {
      title: "External truth is fetched, not mirrored",
      desc: "Claims about the world outside (a PR's state, a package version) carry a federation envelope — source, freshness, staleness — and a failed fetch returns UNKNOWN, never a confident stale answer.",
    },
  ];

  return (
    <section style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight">
          Under the hood: a state model that can&apos;t drift
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--bg)" }}
            >
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
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
          The rules are real today: our own fleet ratified this constitution and
          operates under it — six seats across four AI vendors, coordinating on
          real products with the human touching only the gates that are his.
          The design was four-lane verified before ratification &mdash; design,
          state-model, adversarial, and gate-canon &mdash; by the very seats it
          now governs.
        </p>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
          The Community MCP server — the piece that serves the constitution,
          routes work, and holds shared state for <em>your</em> org — is
          design-complete and enters build next.
          <strong style={{ color: "var(--fg)" }}> Deliberately rules-first,
          code-second:</strong> we froze the design before writing the server,
          because a coordination layer you can&apos;t trust is worse than none.
          Free and open source under Apache-2.0 when it ships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/null"
            className="px-8 py-4 rounded-lg text-lg font-semibold border transition-transform hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            Start with Null Memory
          </a>
          <a
            href="/tank"
            className="px-8 py-4 rounded-lg text-lg font-semibold border transition-transform hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            Also coming: Tank
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

export default function CommunityPage() {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Heterogeneous />
        <Primitives />
        <StateModel />
        <Status />
      </main>
      <Footer />
    </>
  );
}
