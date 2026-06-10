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
          <a href="/about" className="hover:opacity-100 opacity-70 transition">About</a>
        </div>
      </div>
    </nav>
  );
}

type Tier = {
  name: string;
  price: string;
  per: string;
  desc: string;
  features: string[];
  cta: string;
  buyHref: string;
  highlight?: boolean;
  badge?: string;
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    desc: "Solo use of both products.",
    features: [
      "Aleph: full single-project experience — build, serve, all single-project MCP tools",
      "Null: full personal memory — identity, recall, reflections, CLI + MCP",
      "No license file, no nagging, no feature decay",
      "Open source: Aleph is MIT, Null is AGPL-3.0",
    ],
    cta: "Get Started Free",
    buyHref: "/aleph#install",
  },
  {
    name: "Aleph Pro",
    price: "$99",
    per: "per seat, one-time",
    desc: "The multi-repo workspace layer.",
    features: [
      "Everything in Free",
      "Workspace build & status across many repos",
      "Workspace search, brief, and status MCP tools",
      "Perpetual license + 12 months of updates",
    ],
    cta: "Buy Aleph Pro",
    buyHref: "mailto:licensing@alephnull.ai?subject=License%20-%20Aleph%20Pro",
  },
  {
    name: "Null Team",
    price: "$149",
    per: "per seat, one-time",
    desc: "Shared memory for teams.",
    features: [
      "Everything in Free",
      "Team sync — shared memory across your team's agents",
      "Perpetual license + 12 months of updates",
    ],
    cta: "Buy Null Team",
    buyHref: "mailto:licensing@alephnull.ai?subject=License%20-%20Null%20Team",
  },
  {
    name: "Bundle",
    price: "$249",
    per: "per seat, one-time",
    desc: "Aleph Pro + Null Team in one license.",
    features: [
      "Everything in Aleph Pro",
      "Everything in Null Team",
      "One license file covers both products",
      "Perpetual license + 12 months of updates",
    ],
    cta: "Buy the Bundle",
    buyHref: "mailto:licensing@alephnull.ai?subject=License%20-%20Aleph%20%2B%20Null%20Bundle",
    highlight: true,
    badge: "Complete",
  },
];

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className="border rounded-lg p-6 flex flex-col"
      style={{
        borderColor: tier.highlight ? "var(--fg)" : "var(--border)",
        background: tier.highlight ? "color-mix(in srgb, var(--fg) 4%, transparent)" : "transparent",
      }}
    >
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-bold" style={{ color: "var(--fg)" }}>{tier.name}</h3>
        {tier.badge && (
          <span className="text-xs uppercase tracking-wider px-2 py-1 rounded" style={{ background: "var(--fg)", color: "var(--bg)" }}>
            {tier.badge}
          </span>
        )}
      </div>
      <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>{tier.desc}</p>
      <div className="mb-6">
        <span className="text-4xl font-black" style={{ color: "var(--fg)" }}>{tier.price}</span>
        <span className="text-sm ml-2" style={{ color: "var(--fg-muted)" }}>{tier.per}</span>
      </div>
      <ul className="text-sm space-y-2 mb-6 flex-grow" style={{ color: "var(--fg-muted)" }}>
        {tier.features.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>
      <a
        href={tier.buyHref}
        className="block w-full text-center py-3 rounded font-semibold transition hover:opacity-90"
        style={{
          background: tier.highlight ? "var(--fg)" : "transparent",
          color: tier.highlight ? "var(--bg)" : "var(--fg)",
          border: `1px solid var(--fg)`,
        }}
      >
        {tier.cta}
      </a>
    </div>
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
            Pricing
          </h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--fg-muted)" }}>
            Pay once. Own it forever. No subscriptions — ever.
            Solo use is free for both products. A per-seat license unlocks the
            team layer: Aleph&apos;s multi-repo workspace and Null&apos;s team sync.
          </p>

          {/* Tier cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tiers.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </div>

          {/* What you get */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--fg)" }}>
              What every license includes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Perpetual</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Pay once. The version you license keeps working forever. No subscription,
                  no monthly fee, no auto-renew, no payment trap.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>12 months of updates</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Every release shipped within 12 months of purchase is yours.
                  After that, your installed version keeps working — renewal is optional
                  if you want another year of updates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Offline licenses</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Your license is a small Ed25519-signed JSON file. Validation is fully
                  offline — no phone-home, works air-gapped.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Open source underneath</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Aleph is MIT. Null is AGPL-3.0 (modifications to network-deployed copies
                  must be shared under the same license). The code is open — the license
                  funds the project and unlocks the team features.
                </p>
              </div>
            </div>
          </section>

          {/* How licensing works */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              How licensing works
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              The free features have no license checks anywhere in their code paths —
              no nagging, no telemetry, no feature decay. Solo and single-project use
              is free by design, not by loophole.
            </p>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              The paid features (Aleph&apos;s workspace layer, Null&apos;s team sync) unlock with
              a signed license file. You purchase, we sign a license for your organization,
              and you drop the file in place. That file <em>is</em> your license — validation
            never leaves your machine.
            </p>
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              Purchasing is currently handled by email. Write to{" "}
              <a href="mailto:licensing@alephnull.ai" className="underline" style={{ color: "var(--fg)" }}>licensing@alephnull.ai</a>{" "}
              and we&apos;ll get you set up the same day.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--fg)" }}>FAQ</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Is this a subscription?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  No. You pay once and the license is perpetual. It includes 12 months of
                  updates from the purchase date. No auto-renew, no recurring charge.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  What happens after the 12 months of updates?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Nothing breaks. Your installed version keeps working forever.
                  If you want another year of updates, renewing is optional.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Who counts as a &quot;seat&quot;?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Each person on your team who uses the licensed team features —
                  Aleph&apos;s workspace tools or Null&apos;s team sync. Solo single-project
                  and personal use never needs a seat.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Can I try before buying?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Yes — both products are open source, and the solo experience is free
                  with no time limit. Use them for as long as you need to be sure they
                  fit your team, then license the team features when you adopt them.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Do I need a license for personal projects?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  No. Personal projects, learning, open source contributions, and
                  single-project work are free. The license covers the team layer only.
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
              Questions before you buy?
            </h2>
            <p className="text-base mb-6" style={{ color: "var(--fg-muted)" }}>
              We&apos;d rather answer them than have you guess.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:licensing@alephnull.ai"
                className="px-6 py-3 border rounded font-semibold transition hover:opacity-90"
                style={{
                  borderColor: "var(--fg)",
                  color: "var(--fg)",
                }}
              >
                licensing@alephnull.ai
              </a>
              <a
                href="mailto:support@alephnull.ai"
                className="px-6 py-3 border rounded font-semibold transition hover:opacity-90"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-muted)",
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
            <a href="mailto:licensing@alephnull.ai" className="hover:underline">Licensing</a>
            <a href="mailto:support@alephnull.ai" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
