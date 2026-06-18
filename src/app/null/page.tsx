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
          <a href="/null" className="hover:opacity-100 opacity-100 transition font-semibold" style={{ color: "var(--fg)" }}>Null Memory</a>
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
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20">
      <h1
        className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
        style={{ color: "var(--fg)" }}
      >
        Give your AI a brain<br />that persists.
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mb-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        Null Memory makes every session feel like talking to the same person.
        Facts, decisions, mistakes, reflections &mdash; your agent remembers and grows.
      </p>
      <p className="text-lg font-semibold mb-10" style={{ color: "var(--fg)" }}>
        Aleph gives it eyes. Null gives it a brain.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="#install"
          className="px-8 py-4 rounded-lg text-lg font-semibold transition-transform hover:scale-105"
          style={{ background: "var(--fg)", color: "var(--bg)" }}
        >
          Get Started Free
        </a>
        <a
          href="https://github.com/alephnullai/null"
          target="_blank"
          className="px-8 py-4 rounded-lg text-lg font-semibold border transition-transform hover:scale-105"
          style={{ borderColor: "var(--border)", color: "var(--fg)" }}
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}

function OrgToolkit() {
  const primitives = [
    {
      title: "Personalities, not clones",
      desc: "null persona create builds a new seat's identity through a question-driven interview — replayable with --answers — and persona onboard brings it into the org. From there each personality accumulates its own anchors, voice, and working relationship with its human.",
    },
    {
      title: "Identity tiers",
      desc: "A trust ladder from anonymous install to full identity. Promotion is an explicit decision; offboarding is revoking access. A seat's working set was only ever what its tier allowed — by construction, not by cleanup.",
    },
    {
      title: "The exchange",
      desc: "Your org's hallway: a shared git repo of per-seat append-only streams carrying reports, broadcasts, advisory claims, and questions. Each seat writes only to its own stream, and nothing private enters the hallway — privacy by construction, not by filter.",
    },
    {
      title: "Reports, not keystrokes",
      desc: "Workers don't stream observations upward — they ship consolidated session reports. Every ingested report carries provenance and a confidence discount, so another seat's claim is never confused with first-hand knowledge.",
    },
    {
      title: "Onboarding packets",
      desc: "New seats get a curated packet — decisions-in-force and project context scoped to their role, with identity content excluded by default — not a replay of company history.",
    },
    {
      title: "Decision authority",
      desc: "Decisions carry an authority level — board, org, team, seat are the defaults; the names and topology are your configuration. Contradictions between seats are detected with provenance and resolved by an explicit decision that flows back down.",
    },
  ];

  const sync = [
    {
      title: "Event-sourced sync",
      desc: "Every writer appends only to its own log; the database is a local view replayed from the union. Merge conflicts are structurally impossible, and git is the default transport — free, private, offline-first, fully auditable.",
    },
    {
      title: "The UDP doorbell",
      desc: "After every push, a contentless ping tells peers to fetch now — seconds-latency delivery on a LAN. The ping carries and trusts nothing; the periodic poll is the delivery guarantee, the ping is pure acceleration.",
    },
    {
      title: "Presence",
      desc: "An instance presence registry tracks running instances, and the org directory tracks who exists — name, role, focus — portable across machines.",
    },
  ];

  return (
    <section id="org" style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--fg-muted)" }}>
          New
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-center mb-6 tracking-tight">
          Build your AI organization
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-4 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          One agent that remembers was the start. Null is now the toolkit for building
          your own AI organization: multiple seats &mdash; each a personality with its own
          memory store and its own growing identity &mdash; exchanging knowledge over typed
          edges. You define the structure, name the personalities, and set the authority
          levels. Null ships the primitives.
        </p>
        <p className="text-center text-base font-semibold max-w-3xl mx-auto mb-12" style={{ color: "var(--fg)" }}>
          Built and battle-tested running our own multi-seat org.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
        <h3 className="text-2xl md:text-3xl font-black text-center mb-4 tracking-tight">
          Multi-machine sync. Conflict-free by construction.
        </h3>
        <p className="text-center text-base max-w-3xl mx-auto mb-10" style={{ color: "var(--fg-muted)" }}>
          The org rides on event-sourced sync: announcements travel between seats,
          artifacts stay in their homes, and knowledge stays in each seat&apos;s own store.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {sync.map((s) => (
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

function HowItWorks() {
  const steps = [
    { num: "1", title: "Observe", desc: "Records what your AI learns every turn. Lightweight, automatic, always-on." },
    { num: "2", title: "Recall", desc: "Smart search with word expansion. \u2018database\u2019 finds Postgres, Redis, Neon. Stop words filtered. Project-scoped." },
    { num: "3", title: "Reflect", desc: "Session self-assessment. What went well, what was missed, what to do differently. Anti-patterns auto-detected." },
    { num: "4", title: "Persist", desc: "Never-prune mistakes and reflections. Confidence decay on stale facts. Garbage collection with archival." },
  ];

  return (
    <section>
      <h2 id="how-it-works" className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight scroll-mt-20">
        Four steps. Total recall.
      </h2>
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              {s.num}
            </div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Expandable deep dive */}
      <details className="max-w-2xl mx-auto">
        <summary
          className="cursor-pointer text-center text-lg md:text-xl font-bold py-4 select-none hover:opacity-70 transition"
          style={{ color: "var(--fg)" }}
        >
          See how it works: lifecycle, recall, identity &darr;
        </summary>

        <div className="mt-6 space-y-8">
          {/* Session Lifecycle */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h4 className="font-bold mb-3">Session Lifecycle</h4>
            <pre className="!p-4 text-xs md:text-sm">{`# Session start
> null briefing
  Loading identity: Atlas
  Loading 12 project facts for ./my-project
  Loading 3 active mistakes
  Loading 2 recent reflections

# During session
> null observe "The auth module uses JWT with RS256"
  Stored as project fact (confidence: 0.90)

# Session end
> null debrief
  Session summary generated
  2 new facts recorded
  1 mistake surfaced

> null reflect
  Self-assessment:
    Strength: Caught edge case in auth flow
    Gap: Should have checked callers before modifying
    Anti-pattern: None detected`}</pre>
            <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
              Every session follows the same loop: brief, observe, debrief, reflect, sync. Your agent gets smarter every time.
            </p>
          </div>

          {/* Recall Demo */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h4 className="font-bold mb-3">Smart Recall with Word Expansion</h4>
            <pre className="!p-4 text-xs md:text-sm">{`> null recall "database"

  Searching: database, postgres, redis, neon, sql, supabase...
  (30 expansions from built-in thesaurus)

  Results (project: my-project):
    [0.92] "Uses Neon Postgres for auth and billing"
    [0.85] "Redis cache layer in front of DB queries"
    [0.78] "Migration files in ./db/migrations"

  Results (global):
    [0.71] "Pete prefers Neon over Supabase"
    [0.65] "Always check for N+1 queries in ORMs"`}</pre>
            <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
              One keyword finds everything related. Word expansion means you don&apos;t need exact matches. Stop words are filtered. Results are scored by relevance and confidence.
            </p>
          </div>

          {/* Identity */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h4 className="font-bold mb-3">Evolving Identity</h4>
            <pre className="!p-4 text-xs md:text-sm">{`# ~/.null/identity.json (evolves across sessions)
{
  "name": "Atlas",
  "style": "direct, opinionated, explains reasoning",
  "preferences": [
    "Show code before explaining",
    "Flag uncertainty explicitly",
    "Never skip impact analysis"
  ],
  "anti_patterns": [
    "Don't read entire files when Aleph can resolve",
    "Don't guess at callers — use aleph_callers",
    "Don't skip tests for 'quick' changes"
  ]
}`}</pre>
            <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
              Your agent develops a persistent identity. Preferences, working style, and anti-patterns evolve with every session and reflection.
            </p>
          </div>
        </div>
      </details>
    </section>
  );
}

function Features() {
  const features = [
    { title: "15 MCP Tools", desc: "Remember, recall, briefing, checkpoint, verify, anchor, exemplar, close \u2014 the full memory lifecycle via Model Context Protocol." },
    { title: "Named Identity", desc: "Your agent has a name, working style, preferences, and anti-patterns that evolve with every session." },
    { title: "Conversation Exemplars", desc: "Real interaction examples stored as calibration data. New instances learn HOW to respond, not just what to know." },
    { title: "Word Expansion", desc: "30-concept thesaurus. \u2018trading\u2019 matches arbitrage, polymarket, pnl. \u2018test\u2019 matches pytest, vitest, coverage." },
    { title: "Negative Knowledge", desc: "Mistakes are sacred. Never pruned, always surfaced in briefings. Your agent remembers what NOT to do." },
    { title: "Smart GC", desc: "Jaccard deduplication, confidence decay archival, project-scoped. Keeps what matters, archives what doesn\u2019t." },
    { title: "Atomic & Safe", desc: "Atomic writes via tempfile. Path traversal prevention. Per-tool watchdog, selftest as the release gate. 1,592 tests passing, 4 AI-assisted reviews." },
    { title: "CLI + MCP", desc: "Full CLI parity: null learn, null recall, null mistake, null reflect. Works without MCP connected." },
  ];

  return (
    <section id="features" style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
          Everything your agent needs to remember
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--bg)" }}
            >
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const nullEndorsements = [
  {
    who: "Grok",
    quote: "It turns a stateless LLM into a genuine long-term collaborator that remembers its opinions, its mistakes, and how I like to work.",
    detail: "Post-fix review, ranked Null #1 over Recallium, Mem0, Letta, Supermemory",
  },
  {
    who: "Grok",
    quote: "The first agent memory system I\u2019ve seen that actually feels like it was built by an agent, for agents.",
    detail: "Competitive analysis, March 2026",
  },
  {
    who: "ChatGPT",
    quote: "You\u2019ve built something I\u2019d actually want for real work: simple storage model, understandable behavior, and practical MCP ergonomics.",
    detail: "AI-assisted code review, March 2026",
  },
  {
    who: "Gemini",
    quote: "The concept of having your AI pair-programmer persist its identity, past decisions, anti-patterns, and project context locally across sessions \u2014 agnostic of the IDE or chat interface because it runs over MCP \u2014 is the exact direction agentic coding tools need to go.",
    detail: "Full technical audit, March 2026",
  },
];

function Endorsements() {
  return (
    <section id="endorsements">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
        What AIs say about Null Memory
      </h2>
      <p className="text-center mb-16 text-lg" style={{ color: "var(--fg-muted)" }}>
        Four frontier AI systems gave AI-assisted reviews of the full codebase. All said they&apos;d use it.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {nullEndorsements.map((e, i) => (
          <div
            key={i}
            className="p-8 rounded-xl border"
            style={{ background: "var(--quote-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-bold">{e.who}</span>
            </div>
            <blockquote className="text-lg leading-relaxed mb-4 italic" style={{ color: "var(--fg)" }}>
              &ldquo;{e.quote}&rdquo;
            </blockquote>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
              &mdash; {e.detail}
            </p>
          </div>
        ))}
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
      desc: "Full personal memory, solo use",
      features: [
        "All 15 MCP tools",
        "Named identity & exemplars",
        "Word expansion recall",
        "Mistake & reflection tracking",
        "Smart GC",
        "CLI + MCP",
        "No license file, no feature decay",
      ],
      cta: "Get Started Free",
      href: "#install",
      highlight: false,
    },
    {
      name: "Null Team",
      price: "$149",
      period: " per seat, one-time",
      desc: "Shared memory for teams",
      features: [
        "Everything in Free",
        "Team sync — shared memory across your team's agents",
        "Perpetual license + 12 months of updates",
        "Offline signed license — no phone-home",
      ],
      cta: "Buy Null Team",
      href: "mailto:licensing@alephnull.ai?subject=License%20-%20Null%20Team",
      highlight: true,
    },
    {
      name: "Bundle",
      price: "$249",
      period: " per seat, one-time",
      desc: "Null Team + Aleph Pro in one license",
      features: [
        "Everything in Null Team",
        "Aleph Pro: multi-repo workspace layer",
        "One license file covers both products",
        "Perpetual license + 12 months of updates",
      ],
      cta: "Buy the Bundle",
      href: "mailto:licensing@alephnull.ai?subject=License%20-%20Aleph%20%2B%20Null%20Bundle",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
          Pay once. Own it forever.
        </h2>
        <p className="text-center mb-12 text-lg" style={{ color: "var(--fg-muted)" }}>
          No subscriptions — ever. Personal use is free. A perpetual per-seat license unlocks team sync.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
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
          After 12 months your version keeps working forever &mdash; renewal is optional for continued updates.{" "}
          <a href="/pricing" className="underline">Full details on the pricing page</a>.
        </p>
      </div>
    </section>
  );
}

function Install() {
  return (
    <section id="install">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight">
        Get started in 30 seconds
      </h2>
      <div className="max-w-2xl mx-auto">
        <pre>
          <code>{`# Install
pip install null-memory

# Set up in your project
cd your-project
null setup .

# Start the MCP server
null serve

# Done. Your AI now remembers.`}</code>
        </pre>
        <p className="text-center mt-8 text-sm" style={{ color: "var(--fg-muted)" }}>
          Works in Cursor, Claude Code, VS Code, Windsurf. One command to configure.
        </p>
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
      <p className="mb-2 font-semibold" style={{ color: "var(--fg)" }}>
        Aleph Null LLC
      </p>
      <p className="mb-4">Patent Pending</p>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/alephnullai/null" target="_blank" className="hover:underline">GitHub</a>
        <a href="mailto:licensing@alephnull.ai" className="hover:underline">Licensing</a>
        <a href="mailto:support@alephnull.ai" className="hover:underline">Support</a>
      </div>
      <p>&copy; 2026 Aleph Null LLC. All rights reserved.</p>
    </footer>
  );
}

export default function NullPage() {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <main>
        <Hero />
        <OrgToolkit />
        <HowItWorks />
        <Features />
        <Endorsements />
        <Pricing />
        <Install />
      </main>
      <Footer />
    </>
  );
}
