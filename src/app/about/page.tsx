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
          <a href="/about" className="hover:opacity-100 opacity-100 transition font-semibold" style={{ color: "var(--fg)" }}>About</a>
        </div>
      </div>
    </nav>
  );
}

export default function About() {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-2xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-12">
            The story behind ℵ₀
          </h1>

          {/* Origin */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The problem</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              I was building{" "}
              <a href="https://www.hiwavebrowser.com" target="_blank" className="underline" style={{ color: "var(--fg)" }}>
                HiWave
              </a>
              , a full web browser from scratch in Rust — rendering engine, JS runtime, layout, CSS cascade, DOM, networking.
              3.25 million lines of code across 7,667 files.
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              Every AI I worked with — Claude, GPT, Gemini — hit the same wall. They&apos;d run out of
              context trying to understand the codebase. They&apos;d re-derive conclusions from scratch
              every session. They couldn&apos;t tell which functions mattered and which were noise.
              They were drowning in tokens.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Then it clicked: <strong style={{ color: "var(--fg)" }}>an LLM reading raw source code is like a human reading
              machine code.</strong> The information density is wrong for the reader. What if we built
              a compiler — not for CPUs, but for AI? Something that takes verbose source and
              produces a navigable, compressed semantic representation optimized for how
              transformers actually work.
            </p>
          </section>

          {/* The Build */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">AI building tools for AI</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              I conceived the architecture — the C++ compiler analogy, the symbol compression,
              the epistemic memory layer — and then did something unusual: I had Claude build it.
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              Not as a coding assistant. As the <em>primary engineer</em>. Claude wrote the parser,
              the symbol extractor, the salience scorer, the MCP server, the impact analysis,
              the memory compression, the cross-project workspace — all of it.
              850+ tests. 31 MCP tools. 6 languages. From architecture to production
              in days, not months.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Then I had four independent AI systems audit the result.{" "}
              <strong style={{ color: "var(--fg)" }}>Grok gave it 9.5/10. Gemini scored 10/10 on most criteria.
              ChatGPT Codex rated it 9/10 on large repos.</strong>{" "}
              Claude — the one who built it — said it fundamentally changes how it works with code.
            </p>
          </section>

          {/* Why it matters */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Why this matters</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              Every AI coding tool today stuffs raw source into the context window and hopes for
              the best. That&apos;s like feeding machine code to a human and asking them to debug it.
              It works on toy projects. It falls apart at scale.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Aleph is the missing layer. It compiles your codebase into something AIs can
              actually navigate — symbols, relationships, salience, temporal stability, impact
              analysis, persistent memory. <strong style={{ color: "var(--fg)" }}>95% fewer tokens. 5x fewer round-trips.
              The same understanding in a fraction of the context.</strong>
            </p>
          </section>

          {/* About Pete */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">About the founder</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              <strong style={{ color: "var(--fg)" }}>Pete Copeland</strong> is a software engineer
              with 15 years at the Department of Defense, where he built and deployed several
              DARPA projects. He founded{" "}
              <a href="https://www.hiwavebrowser.com" target="_blank" className="underline" style={{ color: "var(--fg)" }}>
                HiWave Browser
              </a>
              , an ambitious from-scratch web browser in Rust, and{" "}
              <strong style={{ color: "var(--fg)" }}>Aleph Null LLC</strong>, the company behind
              the Aleph semantic compiler and Null Memory.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              <a href="https://x.com/BigPeter" target="_blank" className="underline" style={{ color: "var(--fg)" }}>
                @BigPeter on X
              </a>
            </p>
          </section>

          {/* Contact */}
          <section
            className="rounded-xl border p-8"
            style={{ borderColor: "var(--border)", background: "var(--quote-bg)" }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-semibold" style={{ color: "var(--fg-muted)" }}>General</span>
                <p>
                  <a href="mailto:support@alephnull.ai" className="underline">support@alephnull.ai</a>
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold" style={{ color: "var(--fg-muted)" }}>Licensing &amp; sales</span>
                <p>
                  <a href="mailto:licensing@alephnull.ai" className="underline">licensing@alephnull.ai</a>
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold" style={{ color: "var(--fg-muted)" }}>Source code</span>
                <p>
                  <a href="https://github.com/petec4244/Aleph" target="_blank" className="underline">github.com/petec4244/Aleph</a>
                </p>
                <p>
                  <a href="https://github.com/petec4244/null" target="_blank" className="underline">github.com/petec4244/null</a>
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>

      <footer
        className="border-t py-12 px-6 text-center text-sm"
        style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
      >
        <p className="mb-2 font-semibold" style={{ color: "var(--fg)" }}>
          Aleph Null LLC
        </p>
        <p className="mb-4">Patent Pending</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/petec4244/Aleph" target="_blank" className="hover:underline">GitHub (Aleph)</a>
          <a href="https://github.com/petec4244/null" target="_blank" className="hover:underline">GitHub (Null)</a>
          <a href="mailto:licensing@alephnull.ai" className="hover:underline">Licensing</a>
          <a href="mailto:support@alephnull.ai" className="hover:underline">Support</a>
        </div>
        <p>&copy; 2026 Aleph Null LLC. All rights reserved.</p>
      </footer>
    </>
  );
}
