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
        <a href="#" className="text-lg font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          ALEPH NULL
        </a>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "var(--fg-muted)" }}>
          <a href="#endorsements" className="hover:opacity-100 opacity-70 transition">Reviews</a>
          <a href="#benchmarks" className="hover:opacity-100 opacity-70 transition">Benchmarks</a>
          <a href="#how-it-works" className="hover:opacity-100 opacity-70 transition">How It Works</a>
          <a href="#features" className="hover:opacity-100 opacity-70 transition">Features</a>
          <a href="#pricing" className="hover:opacity-100 opacity-70 transition">Pricing</a>
          <a href="#install" className="hover:opacity-100 opacity-70 transition">Install</a>
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
        The compiler your AI<br />has been waiting for.
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        95%+ token reduction on real codebases. 31 semantic tools via MCP.
        Your LLM navigates code instead of drowning in it.
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
          href="https://github.com/petec4244/Aleph"
          target="_blank"
          className="px-8 py-4 rounded-lg text-lg font-semibold border transition-transform hover:scale-105"
          style={{ borderColor: "var(--border)", color: "var(--fg)" }}
        >
          View on GitHub
        </a>
      </div>
      <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
        Python &middot; Rust &middot; C++ &middot; TypeScript/JavaScript &middot; Go
      </p>
    </section>
  );
}

const endorsements = [
  {
    who: "Grok",
    score: "9.5/10",
    quote: "Yes \u2014 Grok would use Aleph without hesitation. It finally gives agents real persistent memory, semantic stability, and reliable patching instead of constant context loss.",
    detail: "Full 9-part codebase review, March 2026",
  },
  {
    who: "Claude",
    score: "",
    quote: "Aleph changes my relationship with large codebases from \u2018overwhelmed, guessing which files matter\u2019 to \u2018navigating a semantic graph with salience-weighted priorities.\u2019 That\u2019s not incremental \u2014 it\u2019s a different way of working.",
    detail: "Built Aleph, primary consumer, March 2026",
  },
  {
    who: "Gemini",
    score: "10/10",
    quote: "This is a structurally brilliant project. Aleph is one of the most mechanically sound agentic-coding tools currently in development. This isn\u2019t just compression \u2014 it\u2019s a compiler tailored for artificial intelligence.",
    detail: "Full technical audit, March 2026",
  },
  {
    who: "ChatGPT Codex",
    score: "",
    quote: "The core project looks real and increasingly disciplined. The full suite is strong. The core value prop is stronger than anything else in this space.",
    detail: "Independent audit on Windows, March 2026",
  },
];

function Endorsements() {
  return (
    <section id="endorsements">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
        What leading AIs say
      </h2>
      <p className="text-center mb-16 text-lg" style={{ color: "var(--fg-muted)" }}>
        Four independent AI systems reviewed the full codebase. All endorsed it.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {endorsements.map((e) => (
          <div
            key={e.who}
            className="p-8 rounded-xl border"
            style={{ background: "var(--quote-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-bold">{e.who}</span>
              {e.score && (
                <span
                  className="text-sm px-2 py-0.5 rounded-full font-mono"
                  style={{ background: "var(--fg)", color: "var(--bg)" }}
                >
                  {e.score}
                </span>
              )}
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

const benchmarks = [
  { name: "HiWave Browser", lang: "Rust", files: "7,667", symbols: "200,413", tokens: "38.9M \u2192 1.9M", reduction: "95.2%", url: "https://hiwave.xyz" },
  { name: "OpenClaw", lang: "TypeScript", files: "7,149", symbols: "84,668", tokens: "13.3M \u2192 504k", reduction: "96.2%", url: "https://github.com/nicepkg/openclaw" },
  { name: "GoClaw", lang: "Go", files: "73", symbols: "768", tokens: "111k \u2192 6.9k", reduction: "93.8%", url: "https://github.com/sausheong/goclaw" },
  { name: "Aleph", lang: "Python", files: "145", symbols: "2,124", tokens: "176k \u2192 22k", reduction: "87.4%", url: "https://github.com/petec4244/Aleph" },
];

function Benchmarks() {
  return (
    <section id="benchmarks" style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
          Real-world results
        </h2>
        <p className="text-center mb-12 text-lg" style={{ color: "var(--fg-muted)" }}>
          Validated on production codebases. Not toy benchmarks.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid var(--border)" }}>
                <th className="py-3 px-4 font-semibold">Codebase</th>
                <th className="py-3 px-4 font-semibold">Language</th>
                <th className="py-3 px-4 font-semibold text-right">Files</th>
                <th className="py-3 px-4 font-semibold text-right">Symbols</th>
                <th className="py-3 px-4 font-semibold text-right">Tokens</th>
                <th className="py-3 px-4 font-semibold text-right">Reduction</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((b) => (
                <tr key={b.name} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-3 px-4 font-semibold">
                    <a href={b.url} target="_blank" className="underline decoration-1 underline-offset-2 hover:opacity-70 transition">{b.name}</a>
                  </td>
                  <td className="py-3 px-4" style={{ color: "var(--fg-muted)" }}>{b.lang}</td>
                  <td className="py-3 px-4 text-right font-mono">{b.files}</td>
                  <td className="py-3 px-4 text-right font-mono">{b.symbols}</td>
                  <td className="py-3 px-4 text-right font-mono text-sm">{b.tokens}</td>
                  <td className="py-3 px-4 text-right font-black text-xl">{b.reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "1", title: "Build", desc: "aleph build .", detail: "Compiles your codebase into navigable semantic artifacts." },
    { num: "2", title: "Connect", desc: "aleph setup .", detail: "Generates MCP configs for Cursor, VS Code, Windsurf, Claude Code." },
    { num: "3", title: "Work", desc: "Your AI is 10x smarter", detail: "31 tools for navigation, impact analysis, and persistent memory." },
  ];

  return (
    <section>
      <h2 id="how-it-works" className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight scroll-mt-20">
        Three commands. Zero config.
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              {s.num}
            </div>
            <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
            <code
              className="inline-block px-3 py-1 rounded text-sm mb-3"
              style={{ background: "var(--code-bg)" }}
            >
              {s.desc}
            </code>
            <p style={{ color: "var(--fg-muted)" }}>{s.detail}</p>
          </div>
        ))}
      </div>

      {/* Expandable deep dive */}
      <details className="max-w-2xl mx-auto">
        <summary
          className="cursor-pointer text-center text-lg md:text-xl font-bold py-4 select-none hover:opacity-70 transition"
          style={{ color: "var(--fg)" }}
        >
          See how it works: compression, navigation, impact, memory &darr;
        </summary>

        <div className="mt-6 space-y-8">
          {/* 1. Compression */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h4 className="font-bold mb-3">Symbol Compression</h4>
            <pre className="!p-4 text-xs md:text-sm"><span style={{ color: "var(--fg-muted)" }}>{`// Before: your source code (verbose, token-heavy)`}</span>{`
function calculateDistanceBetweenTwoPoints(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}                                         ~45 tokens
`}<span style={{ color: "var(--fg-muted)" }}>{`
// After: Aleph-compressed (same meaning, fraction of tokens)`}</span>{`
`}<strong>f_a3c9</strong>{`(v_x1, v_y1, v_x2, v_y2) -> number
  sig: (x1: number, y1: number, x2: number, y2: number)
  calls: `}f_b2e1{` (Math.sqrt)
  called_by: `}f_c4d3{`, `}f_e5f6{`                ~12 tokens`}</pre>
            <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
              Bodies are omitted by default. Signatures, call graphs, and relationships are preserved. Full body available on demand via <code style={{ background: "var(--code-bg)" }} className="px-1 rounded text-xs">ALEPH:EXPAND</code>.
            </p>
          </div>

          {/* 2. Navigation */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h4 className="font-bold mb-3">Semantic Navigation</h4>
            <pre className="!p-4 text-xs md:text-sm">{`> ALEPH:SEARCH "distance"
  `}<strong>f_a3c9</strong>{` calculateDistanceBetweenTwoPoints  score=0.95
  `}f_d7e8{` manhattanDistance                  score=0.72
  `}f_f9a0{` distanceMatrix                    score=0.68

> ALEPH:CALLERS `}<strong>f_a3c9</strong>{`
  Callers of `}<strong>f_a3c9</strong>{`: 47
    `}f_c4d3{` renderViewport    (src/render.ts)
    `}f_e5f6{` detectCollision   (src/physics.ts)
    `}f_g7h8{` pathfindAStar     (src/nav.ts)

> ALEPH:CONTEXT `}<strong>f_a3c9</strong>{`
  Symbol: `}<strong>f_a3c9</strong>{` calculateDistanceBetweenTwoPoints
  Callers (47): renderViewport, detectCollision, ...
  Callees (1):  Math.sqrt`}</pre>
            <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
              Your AI navigates by meaning, not by grepping files. One call finds any symbol, its callers, and its neighborhood.
            </p>
          </div>

          {/* 3. Impact Analysis */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h4 className="font-bold mb-3">Impact Analysis</h4>
            <pre className="!p-4 text-xs md:text-sm">{`> ALEPH:IMPACT `}<strong>f_a3c9</strong>{`

IMPACT ANALYSIS: `}<strong>f_a3c9</strong>{` (calculateDistanceBetweenTwoPoints)
File: src/math.ts | Salience: 0.82 | Stability: stable

[DIRECT CALLERS] 47 across 12 files
  HIGH RISK (3 — high salience, no test coverage):
    `}f_c4d3{` renderViewport      salience=0.71
    `}f_e5f6{` detectCollision     salience=0.65
  COVERED (8 — tests will catch regressions):
    `}f_g7h8{` pathfindAStar       tests=3

[RISK SUMMARY]
  Untested high-salience: 3 (DANGER)
  Suggested test targets: `}f_c4d3{`, `}f_e5f6</pre>
            <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
              Before modifying any function, one call shows the blast radius. No more breaking things you can&apos;t see.
            </p>
          </div>

          {/* 4. Memory */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h4 className="font-bold mb-3">Epistemic Memory</h4>
            <pre className="!p-4 text-xs md:text-sm">{`> ALEPH:BRIEF "optimize the distance calculation"

TASK BRIEF: optimize the distance calculation

[RELEVANT SYMBOLS] (5 of 23 matches)
  `}<strong>f_a3c9</strong>{` calculateDistanceBetweenTwoPoints  salience=0.82
  `}f_d7e8{` manhattanDistance                  salience=0.45

[PRIOR KNOWLEDGE]
  `}<strong>f_a3c9</strong>{`: "thread-safe, used in hot render loop" [0.85]
  `}<strong>f_a3c9</strong>{`: "consider SIMD for batch distance calc" [0.72]

[NEXT STEPS]
  1. ALEPH:EXPAND `}<strong>f_a3c9</strong>{` — likely modification target
  2. ALEPH:IMPACT `}<strong>f_a3c9</strong>{` — check blast radius first`}</pre>
            <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
              Prior conclusions persist across sessions. Confidence decays when code changes. Your AI remembers what it learned last time.
            </p>
          </div>
        </div>
      </details>
    </section>
  );
}

function SpeedComparison() {
  return (
    <section style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
          5x faster. Not a benchmark.<br />A Tuesday afternoon.
        </h2>
        <p className="text-center mb-12 text-lg" style={{ color: "var(--fg-muted)" }}>
          Real example: understanding a function&apos;s callers and dispatch pattern while building Aleph.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Without Aleph */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--bg)" }}
          >
            <h3 className="font-bold mb-3 text-lg">Without Aleph</h3>
            <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
              Understanding who calls <code className="px-1 rounded text-xs" style={{ background: "var(--code-bg)" }}>_extract_name</code> and what it dispatches to:
            </p>
            <ol className="text-sm space-y-2 mb-4" style={{ color: "var(--fg-muted)" }}>
              <li>1. Search for the function name</li>
              <li>2. Read the file to find it</li>
              <li>3. Read more to understand the dispatch</li>
              <li>4. Search for callers across files</li>
              <li>5. Read those files too</li>
            </ol>
            <div className="flex justify-between items-end pt-3 border-t" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="text-2xl font-black">5+</span>
                <span className="text-sm ml-1" style={{ color: "var(--fg-muted)" }}>tool calls</span>
              </div>
              <div>
                <span className="text-2xl font-black">~5,000</span>
                <span className="text-sm ml-1" style={{ color: "var(--fg-muted)" }}>tokens consumed</span>
              </div>
            </div>
          </div>

          {/* With Aleph */}
          <div
            className="rounded-xl border p-6 ring-2"
            style={{ borderColor: "var(--fg)", background: "var(--bg)" }}
          >
            <h3 className="font-bold mb-3 text-lg">With Aleph</h3>
            <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
              Same question, one call:
            </p>
            <pre className="!p-3 text-xs mb-4">{`> ALEPH:CONTEXT `}<strong>f_a3c9</strong>{`

Callers (1): _extract_symbol
Callees (3):
  -> _extract_name_rust
  -> _extract_name_cpp
  -> _extract_name_python`}</pre>
            <div className="flex justify-between items-end pt-3 border-t" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="text-2xl font-black">1</span>
                <span className="text-sm ml-1" style={{ color: "var(--fg-muted)" }}>tool call</span>
              </div>
              <div>
                <span className="text-2xl font-black">~200</span>
                <span className="text-sm ml-1" style={{ color: "var(--fg-muted)" }}>tokens consumed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-black mb-3">
            5x faster. 25x less context burned.
          </p>
          <p className="text-base mb-2" style={{ color: "var(--fg-muted)" }}>
            Every round-trip is latency. Every token spent reading is a token your AI can&apos;t use for reasoning.
          </p>
          <p className="text-base font-semibold">
            Aleph eliminates both. Your agent thinks faster because it wastes less.
          </p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: "31 MCP Tools", desc: "Navigate, search, resolve, expand, impact analysis, task briefing \u2014 all via Model Context Protocol." },
    { title: "Impact Analysis", desc: "One call shows blast radius, untested callers, risk assessment, and suggested test targets before you modify anything." },
    { title: "Task Briefing", desc: "Describe your task in natural language. Get a curated context package with relevant symbols, call graph, and next steps." },
    { title: "Epistemic Memory", desc: "Conclusions persist across sessions. Confidence decays on stale inferences. Multi-agent tracking via agent ID." },
    { title: "6 Languages", desc: "Python, Rust, C++, TypeScript/JavaScript, and Go. Tree-sitter parsing with language-specific extractors." },
    { title: "Auto-Rebuild", desc: "The MCP server watches for file changes and rebuilds incrementally. Edit a file, artifacts update in 3 seconds." },
    { title: "Cross-Project", desc: "Workspace mode searches across multiple repos. Detects shared symbols and cross-project connections." },
    { title: "Offline Licenses", desc: "Ed25519 signed license files. No phone-home. Works air-gapped after download." },
  ];

  return (
    <section id="features">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
        Everything your agent needs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const LANGUAGES = [
  { id: "java", label: "Java / Kotlin", icon: "J" },
  { id: "swift", label: "Swift", icon: "S" },
  { id: "ruby", label: "Ruby", icon: "R" },
  { id: "php", label: "PHP", icon: "P" },
  { id: "csharp", label: "C#", icon: "#" },
  { id: "zig", label: "Zig", icon: "Z" },
];

function LanguageVote() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("aleph-lang-votes");
    if (saved) setVotes(JSON.parse(saved));
    setVoted(localStorage.getItem("aleph-lang-voted"));
    setSubscribed(localStorage.getItem("aleph-subscribed") === "true");
  }, []);

  const castVote = (id: string) => {
    if (voted) return;
    const updated = { ...votes, [id]: (votes[id] || 0) + 1 };
    setVotes(updated);
    setVoted(id);
    localStorage.setItem("aleph-lang-votes", JSON.stringify(updated));
    localStorage.setItem("aleph-lang-voted", id);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // For now: store locally. Replace with API route + email service later.
    const subs = JSON.parse(localStorage.getItem("aleph-subscribers") || "[]");
    subs.push({ email, votedFor: voted, ts: new Date().toISOString() });
    localStorage.setItem("aleph-subscribers", JSON.stringify(subs));
    setSubscribed(true);
    localStorage.setItem("aleph-subscribed", "true");
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <section>
      <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
        What language should we add next?
      </h2>
      <p className="text-center mb-2 text-lg" style={{ color: "var(--fg-muted)" }}>
        Aleph supports Python, Rust, C++, TypeScript/JavaScript, and Go.
      </p>
      <p className="text-center mb-10 text-sm" style={{ color: "var(--fg-muted)" }}>
        Vote for the next language. Results are live.
      </p>

      <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {LANGUAGES.map((lang) => {
          const count = votes[lang.id] || 0;
          const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
          const isSelected = voted === lang.id;

          return (
            <button
              key={lang.id}
              onClick={() => castVote(lang.id)}
              disabled={!!voted}
              className="relative overflow-hidden rounded-lg border p-4 text-left transition-transform hover:scale-[1.02] disabled:cursor-default"
              style={{
                borderColor: isSelected ? "var(--fg)" : "var(--border)",
                background: "var(--bg)",
              }}
            >
              {/* Progress fill */}
              {voted && (
                <div
                  className="absolute inset-0 opacity-10 transition-all duration-500"
                  style={{
                    background: "var(--fg)",
                    width: `${pct}%`,
                  }}
                />
              )}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
                    style={{ background: "var(--code-bg)" }}
                  >
                    {lang.icon}
                  </span>
                  <span className="font-semibold text-sm">{lang.label}</span>
                </div>
                {voted && (
                  <span className="font-mono text-sm font-bold">{pct}%</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {voted && (
        <p className="text-center text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
          {totalVotes} vote{totalVotes !== 1 ? "s" : ""} cast
        </p>
      )}

      {/* Email signup */}
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
            Release notifications only — new languages, major features. No marketing. No data sales. Ever.
          </p>
        </>
      ) : (
        <p className="text-center text-sm font-semibold" style={{ color: "var(--fg)" }}>
          You&apos;re on the list. We&apos;ll notify you when the next language ships.
        </p>
      )}
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Solo",
      price: "$0",
      period: "forever",
      desc: "Individual developers & open source",
      features: [
        "All 31 MCP tools",
        "All 6 languages",
        "Local builds & auto-rebuild",
        "Impact analysis & task briefing",
        "Session memory & epistemic layer",
        "Unlimited personal use",
      ],
      cta: "Get Started Free",
      href: "#install",
      highlight: false,
    },
    {
      name: "Team",
      price: "$19",
      period: "/user/month",
      desc: "Up to 25 users building commercial products",
      features: [
        "Everything in Solo",
        "Up to 25 licensed users",
        "Multi-agent epistemic stores",
        "Cross-project workspace",
        "Offline signed license (no phone-home)",
        "Priority support",
      ],
      cta: "Coming Soon",
      href: "#",
      highlight: true,
      alt: "or $99/repo/month",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "Organizations with 25+ developers",
      features: [
        "Everything in Team",
        "Unlimited users",
        "On-prem deployment",
        "SSO & audit logs",
        "Custom salience tuning",
        "SLA & dedicated support",
      ],
      cta: "Contact Us",
      href: "mailto:licensing@alephnull.ai",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" style={{ background: "var(--bg-alt)" }} className="!max-w-none">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight">
          Free for solo devs. Licensed for teams.
        </h2>
        <p className="text-center mb-4 text-lg" style={{ color: "var(--fg-muted)" }}>
          100% open source. No feature gates. Teams and companies that profit from Aleph need a license.
        </p>
        <p className="text-center mb-12 text-sm" style={{ color: "var(--fg-muted)" }}>
          Real ROI: one developer saves $800&ndash;1,200/month in LLM tokens at 95% compression. The license pays for itself in under 2 days.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-xl border flex flex-col ${t.highlight ? "ring-2" : ""}`}
              style={{
                borderColor: t.highlight ? "var(--fg)" : "var(--border)",
                background: "var(--bg)",
                ...(t.highlight ? { ringColor: "var(--fg)" } : {}),
              }}
            >
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-black">{t.price}</span>
                <span className="text-sm" style={{ color: "var(--fg-muted)" }}>{t.period}</span>
              </div>
              {t.alt && <p className="text-xs mb-3" style={{ color: "var(--fg-muted)" }}>{t.alt}</p>}
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
pip install aleph-compiler

# Build your project
cd your-project
aleph build .

# Connect your editor
aleph setup .

# Done. Your AI now has 31 semantic tools.`}</code>
        </pre>
        <p className="text-center mt-8 text-sm" style={{ color: "var(--fg-muted)" }}>
          Or run without installing: <code className="px-2 py-0.5 rounded" style={{ background: "var(--code-bg)" }}>uvx aleph-compiler build .</code>
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
        <a href="https://github.com/petec4244/Aleph" target="_blank" className="hover:underline">GitHub</a>
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
        <Endorsements />
        <Benchmarks />
        <HowItWorks />
        <SpeedComparison />
        <Features />
        <LanguageVote />
        <Pricing />
        <Install />
      </main>
      <Footer />
    </>
  );
}
