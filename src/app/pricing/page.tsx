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
          <a href="/pricing" className="hover:opacity-100 opacity-100 transition font-semibold" style={{ color: "var(--fg)" }}>Pricing</a>
          <a href="/license" className="hover:opacity-100 opacity-70 transition">License</a>
          <a href="/about" className="hover:opacity-100 opacity-70 transition">About</a>
        </div>
      </div>
    </nav>
  );
}

export default function Pricing() {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-center">
            It&apos;s free
          </h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--fg-muted)" }}>
            Both products are free and open source under the Apache License 2.0.
            Every feature, for everyone — individuals, teams, and companies of any size.
          </p>

          {/* The one statement */}
          <section className="mb-16 max-w-3xl mx-auto">
            <div
              className="border rounded-lg p-8 text-center"
              style={{
                borderColor: "var(--fg)",
                background: "color-mix(in srgb, var(--fg) 4%, transparent)",
              }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
                Free &amp; Open Source
              </h2>
              <ul className="text-sm space-y-2 mb-8 inline-block text-left" style={{ color: "var(--fg-muted)" }}>
                <li>✓ Everything included — Aleph and Null Memory, all features</li>
                <li>✓ Open source under Apache-2.0 (OSI-approved), with an express patent grant</li>
                <li>✓ No seat licenses, no tiers, no feature gates, no thresholds</li>
                <li>✓ Use it personally, in your team, or across your whole company</li>
              </ul>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/alephnullai/aleph"
                  target="_blank"
                  className="px-6 py-3 rounded font-semibold transition hover:opacity-90 text-center"
                  style={{ background: "var(--fg)", color: "var(--bg)" }}
                >
                  Aleph on GitHub
                </a>
                <a
                  href="https://github.com/alephnullai/null"
                  target="_blank"
                  className="px-6 py-3 rounded font-semibold transition hover:opacity-90 text-center"
                  style={{ background: "var(--fg)", color: "var(--bg)" }}
                >
                  Null on GitHub
                </a>
                <a
                  href="/license"
                  className="px-6 py-3 border rounded font-semibold transition hover:opacity-90 text-center"
                  style={{ borderColor: "var(--fg)", color: "var(--fg)" }}
                >
                  Read the license
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--fg)" }}>FAQ</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Is it really free?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Yes. Both products are free for everyone under the Apache License 2.0.
                  There are no paid tiers, no seat licenses, and no size or revenue
                  thresholds. Nothing to buy, nothing to unlock.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Is the source available?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Yes — it&apos;s open source under Apache-2.0, an OSI-approved license.
                  You can read it, build it, modify it, and redistribute it.{" "}
                  <a href="/license" className="underline" style={{ color: "var(--fg)" }}>Full terms on the license page</a>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Can my company use it?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Yes. Companies of any size can use both products free of charge,
                  including all team features. Apache-2.0 also includes an express
                  patent grant, so you&apos;re covered there too.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Is this a subscription?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  No. There&apos;s nothing to pay and nothing to renew. Install it and use it.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            className="border-t pt-12 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--fg)" }}>
              Questions?
            </h2>
            <p className="text-base mb-6" style={{ color: "var(--fg-muted)" }}>
              We&apos;d rather answer them than have you guess.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:support@alephnull.ai"
                className="px-6 py-3 border rounded font-semibold transition hover:opacity-90"
                style={{
                  borderColor: "var(--fg)",
                  color: "var(--fg)",
                }}
              >
                support@alephnull.ai
              </a>
            </div>
          </section>

        </article>
      </main>

      <footer
        className="border-t py-12 px-6 text-sm"
        style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <div>© 2026 Aleph Null LLC</div>
          <div className="flex gap-6">
            <a href="https://github.com/alephnullai/aleph" target="_blank" className="hover:underline">GitHub (Aleph)</a>
            <a href="https://github.com/alephnullai/null" target="_blank" className="hover:underline">GitHub (Null)</a>
            <a href="mailto:support@alephnull.ai" className="hover:underline">Contact</a>
            <a href="mailto:support@alephnull.ai" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
