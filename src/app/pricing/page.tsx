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
  users: string;
  single: string;
  bundle: string;
  buyHref: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Team",
    users: "5–19 users",
    single: "$999",
    bundle: "$1,499",
    // Replace with real Stripe payment link once it's created
    buyHref: "mailto:licensing@alephnull.ai?subject=License%20-%20Team%20Tier",
  },
  {
    name: "Growth",
    users: "20–99 users",
    single: "$3,999",
    bundle: "$5,999",
    buyHref: "mailto:licensing@alephnull.ai?subject=License%20-%20Growth%20Tier",
    highlight: true,
  },
  {
    name: "Enterprise",
    users: "100+ users",
    single: "$11,999",
    bundle: "$17,999",
    buyHref: "mailto:licensing@alephnull.ai?subject=License%20-%20Enterprise%20Tier",
  },
];

function TierCard({ tier, product }: { tier: Tier; product: "single" | "bundle" }) {
  const price = product === "single" ? tier.single : tier.bundle;
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
        {tier.highlight && (
          <span className="text-xs uppercase tracking-wider px-2 py-1 rounded" style={{ background: "var(--fg)", color: "var(--bg)" }}>
            Common
          </span>
        )}
      </div>
      <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>{tier.users}</p>
      <div className="mb-6">
        <span className="text-4xl font-black" style={{ color: "var(--fg)" }}>{price}</span>
        <span className="text-sm ml-1" style={{ color: "var(--fg-muted)" }}>/ year</span>
      </div>
      <ul className="text-sm space-y-2 mb-6 flex-grow" style={{ color: "var(--fg-muted)" }}>
        <li>✓ Perpetual license — version never expires</li>
        <li>✓ 1 year of updates included</li>
        <li>✓ Mid-year tier upgrade prorated</li>
        {product === "bundle" && <li>✓ Aleph + Null together (1.5× single)</li>}
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
        Buy {tier.name}
      </a>
    </div>
  );
}

export default function Pricing() {
  const [product, setProduct] = useState<"single" | "bundle">("single");

  return (
    <>
      <ThemeToggle />
      <Nav />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-center">
            Pricing
          </h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--fg-muted)" }}>
            Free for individual developers, teams under 5 users, and non-commercial use.
            A yearly license is required when an organization with 5+ users uses Aleph or Null
            to build, ship, or operate revenue-generating products.
          </p>

          {/* Single vs Bundle toggle */}
          <div className="flex justify-center mb-12">
            <div
              className="inline-flex border rounded-lg p-1"
              style={{ borderColor: "var(--border)" }}
            >
              <button
                onClick={() => setProduct("single")}
                className="px-6 py-2 rounded text-sm font-semibold transition"
                style={{
                  background: product === "single" ? "var(--fg)" : "transparent",
                  color: product === "single" ? "var(--bg)" : "var(--fg-muted)",
                }}
              >
                Single product
              </button>
              <button
                onClick={() => setProduct("bundle")}
                className="px-6 py-2 rounded text-sm font-semibold transition"
                style={{
                  background: product === "bundle" ? "var(--fg)" : "transparent",
                  color: product === "bundle" ? "var(--bg)" : "var(--fg-muted)",
                }}
              >
                Suite (Aleph + Null)
              </button>
            </div>
          </div>

          {product === "single" && (
            <p className="text-center text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
              Prices apply to either <a href="/aleph" className="underline">Aleph</a> or <a href="/null" className="underline">Null</a> separately.
            </p>
          )}
          {product === "bundle" && (
            <p className="text-center text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
              Bundle = both Aleph + Null at <strong>1.5× the single-product price</strong>, not 2×.
            </p>
          )}

          {/* Tier cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {tiers.map((t) => (
              <TierCard key={t.name} tier={t} product={product} />
            ))}
          </div>

          {/* Free tier */}
          <section
            className="border rounded-lg p-8 mb-16"
            style={{ borderColor: "var(--border)" }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--fg)" }}>
              Free
            </h2>
            <p className="text-base mb-3" style={{ color: "var(--fg-muted)" }}>
              <strong style={{ color: "var(--fg)" }}>Individual developers, teams under 5 users, and non-commercial use.</strong>{" "}
              No license required.
            </p>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
              Includes everything in the GitHub repos. Open source. Aleph is MIT.
              Null is AGPL-3.0 (modifications to network-deployed copies must be shared under the same license).
            </p>
          </section>

          {/* What you get */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--fg)" }}>
              What every license includes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Perpetual</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Pay once. The version you license never expires. No subscription, no monthly fee, no auto-renew.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>One year of updates</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Every release shipped within 12 months of purchase is yours.
                  After that, your installed version keeps working — renew for the next year of updates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Prorated upgrades</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Cross a tier boundary mid-year? You pay the delta prorated to the remaining months of your update window.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Bundle discount</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  License both Aleph and Null together at 1.5× the single-product tier price.
                  Cheaper than buying them separately.
                </p>
              </div>
            </div>
          </section>

          {/* How licensing works */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>
              How licensing works
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              Neither Aleph nor Null check license status at runtime. Both work identically whether
              licensed or unlicensed. The license is a legal commitment between your organization
              and Aleph Null LLC.
            </p>
            <p className="text-base mb-4" style={{ color: "var(--fg-muted)" }}>
              If an audit reveals unlicensed commercial use over the 5-user threshold, the organization
              owes <strong style={{ color: "var(--fg)" }}>3× the license fee they should have paid</strong> for
              the period of unlicensed use, plus reasonable legal costs.
            </p>
            <p className="text-base" style={{ color: "var(--fg-muted)" }}>
              Companies that come forward and license up before being audited pay only the standard rate,
              no penalty. We&apos;d much rather you self-report than discover us via audit.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--fg)" }}>FAQ</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Who counts as a &quot;user&quot;?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Anyone on your team who interacts with the tool directly (CLI, IDE, MCP host)
                  plus anyone whose workflow consumes its output. CI pipelines count as 1 user per integration.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Is this a subscription?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  No. You pay once, the license is perpetual. The yearly fee covers one year of updates.
                  Skip a year? Your installed version keeps working. No auto-renew, no payment trap.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  What if my team is exactly 5 users?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  5 is the bottom of the Team tier. 1–4 users = free, 5+ commercial = Team tier.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Can I try before buying?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Yes — both products are open source and free to evaluate.
                  Use them for as long as you need to be sure they fit your team.
                  License once they&apos;re part of your commercial workflow.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                  Do I need a license for personal projects?
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  No. Personal projects, learning, open source contributions, and any work
                  that isn&apos;t building revenue for an organization are free under the open-source license.
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
