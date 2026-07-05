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
            Both products are free and open source under the Apache License 2.0.
            For everyone. No tiers, no thresholds, nothing to buy.
          </p>

          {/* The license */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              The license
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              Aleph and Null Memory are both open source under the{" "}
              <a
                href="https://www.apache.org/licenses/LICENSE-2.0"
                target="_blank"
                className="underline"
                style={{ color: "var(--fg)" }}
              >
                Apache License 2.0
              </a>{" "}
              (SPDX <code>Apache-2.0</code>). This is genuinely open source &mdash; an
              OSI-approved license. You can read the source, build it, run it, modify
              it, and redistribute it, for any purpose, free of charge.
            </p>
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              Notice: <span style={{ color: "var(--fg)" }}>Copyright 2026 Aleph Null LLC</span>.
            </p>
          </section>

          {/* Free for everyone */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              Free for everyone
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              Individuals, teams, and companies of any size may use both products
              free of charge. There are no size or revenue thresholds, no seat
              licenses, no feature gates, and nothing to buy. Self-hosting and
              building from source are fully covered by the license &mdash; no
              separate agreement is needed.
            </p>
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              Apache-2.0 also includes an express patent grant from contributors to
              users. The products are Patent Pending, and that grant composes with
              it: every user receives a license to practice the covered claims as
              embodied in the software.
            </p>
          </section>

          {/* Prior releases */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              Prior releases
            </h2>
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              Earlier releases of Null Memory published under{" "}
              <code>AGPL-3.0-only</code> remain under the AGPL, and earlier releases
              of Aleph published under <code>MIT</code> remain under MIT. The
              Apache-2.0 relicensing applies to current and future releases.
            </p>
          </section>

          {/* Footer note */}
          <section
            className="border-t pt-12 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              The full license terms are the{" "}
              <a
                href="https://www.apache.org/licenses/LICENSE-2.0"
                target="_blank"
                className="underline"
                style={{ color: "var(--fg)" }}
              >
                Apache License 2.0
              </a>{" "}
              as published. Questions? Write to{" "}
              <a href="mailto:support@alephnull.ai" className="underline" style={{ color: "var(--fg)" }}>
                support@alephnull.ai
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
            <a href="mailto:support@alephnull.ai" className="hover:underline">Contact</a>
            <a href="mailto:support@alephnull.ai" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
