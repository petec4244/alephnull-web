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
          <a href="/pricing" className="hover:opacity-100 opacity-70 transition">Pricing</a>
          <a href="/license" className="hover:opacity-100 opacity-100 transition font-semibold" style={{ color: "var(--fg)" }}>License</a>
          <a href="/about" className="hover:opacity-100 opacity-70 transition">About</a>
        </div>
      </div>
    </nav>
  );
}

export default function License() {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-center">
            License
          </h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--fg-muted)" }}>
            Both products are source-available. Free for individuals and small
            businesses; a paid commercial license covers everyone above that line.
          </p>

          {/* The license */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              The license
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              Aleph and Null Memory are both source-available under the{" "}
              <a
                href="https://polyformproject.org/licenses/small-business/1.0.0/"
                target="_blank"
                className="underline"
                style={{ color: "var(--fg)" }}
              >
                PolyForm Small Business License 1.0.0
              </a>{" "}
              (SPDX <code>PolyForm-Small-Business-1.0.0</code>). The source is
              published and you can read it, build it, and run it &mdash; but this is
              <em> not</em> an OSI open-source license. Use is permitted free of charge
              within the size and revenue limits below; commercial use beyond them
              requires a paid license.
            </p>
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              Required Notice: <span style={{ color: "var(--fg)" }}>Copyright 2026 Aleph Null LLC</span>.
            </p>
          </section>

          {/* Free use */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              Free for small businesses and individuals
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              You may use both products free of charge if you are a company with fewer
              than 100 total individuals (employees plus independent contractors) and
              less than 1,000,000 USD (2019, inflation-adjusted via the US BLS CPI-U)
              total revenue in the prior tax year.
            </p>
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              Self-hosting and building from source for these permitted
              individual and small-business purposes is already covered by the license &mdash;
              no separate agreement is needed.
            </p>
          </section>

          {/* Commercial license */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              Commercial use above the threshold
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              Above that threshold, a paid commercial license is required. It is
              per-seat and perpetual, includes 12 months of updates, and is a one-time
              purchase &mdash; no subscriptions.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="mailto:licensing@alephnull.ai?subject=Commercial%20License"
                className="px-6 py-3 border rounded font-semibold transition hover:opacity-90 text-center"
                style={{ borderColor: "var(--fg)", color: "var(--fg)" }}
              >
                licensing@alephnull.ai
              </a>
              <a
                href="/pricing"
                className="px-6 py-3 border rounded font-semibold transition hover:opacity-90 text-center"
                style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
              >
                See pricing
              </a>
            </div>
          </section>

          {/* Footer note */}
          <section
            className="border-t pt-12 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              This page describes the licensing model. The full license terms are the{" "}
              <a
                href="https://polyformproject.org/licenses/small-business/1.0.0/"
                target="_blank"
                className="underline"
                style={{ color: "var(--fg)" }}
              >
                PolyForm Small Business License 1.0.0
              </a>{" "}
              as published. Questions? Write to{" "}
              <a href="mailto:licensing@alephnull.ai" className="underline" style={{ color: "var(--fg)" }}>
                licensing@alephnull.ai
              </a>.
            </p>
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
            <a href="mailto:licensing@alephnull.ai" className="hover:underline">Licensing</a>
            <a href="mailto:support@alephnull.ai" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
