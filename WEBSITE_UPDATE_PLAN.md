# alephnull-web — Update Plan (post claims-closure sprint)
**Date:** 2026-06-10 · Site: Next.js, pages: home / aleph / null / pricing / about

## P0 — Contradictions with locked decisions (fix before anything ships)
1. **Pricing model is wrong everywhere.** All pages show monthly subscription
   ("/mo" at home:146,162 · null:328,343 · aleph:504-544 · pricing page).
   Locked model (2026-06-10): **perpetual license + 12 months of updates, no
   subscription** — Aleph Team **$99/seat** · Null Team **$149/seat** ·
   Aleph Null Complete **$249/seat** · solo use free forever, never
   license-checked. Rewrite the pricing page + every pricing card. Copy
   source of truth: aleph repo `docs/LICENSING.md`.
2. **Stale claims.** aleph/page.tsx:435 still says "25x" — replace with the
   measured numbers: **5.71× median token reduction on navigation tasks,
   100% accuracy on resolve/callers/explain** (source: aleph `bench/BENCHMARK.md`),
   plus the honest line "use grep for content discovery" if a claims table
   exists. Sweep both product pages for: tool counts (Aleph **33**, Null
   **15**), "semantic" wording (now true — built with `--semantic`),
   test counts (Aleph 1111+, Null 1161+), schema/version refs.

## P1 — Reflect what now exists
3. **Feature truth pass, Aleph page:** SQLite storage engine, portable/
   committable indexes, workspace tools (the paid tier), hybrid semantic
   search, cross-platform CI badge (all 3 OS green).
4. **Feature truth pass, Null page:** 15-tool surface w/ kind=/mode=
   conventions, deterministic capture hooks (`null setup --hooks` — the
   answer to "depends on the model remembering"), RRF recall (+39 measured
   on live data), team master-sync (coming soon — design at null repo
   `docs/TEAM_MASTER_SYNC_DESIGN.md`), AGPL + commercial dual license.
5. **Testimonials**: if the site quotes the AI self-reviews, label them the
   same way the README now does ("AI model self-assessments during
   development") or replace with the measured benchmark table.

## P2 — Launch alignment
6. Buy-flow stub: "purchase" buttons → mailto/form for v1 manual issuance
   (no payment processor yet); alephnull.ai/license must resolve (it's the
   canonical URL baked into the refusal messages shipped in code).
7. Repo links: point at github.com/petec4244/* (or the org if created
   before launch — coordinate with the history-scrub decision).
8. Add a /benchmark page or section rendering bench/BENCHMARK.md content —
   the measured-claims story is the differentiator; show the methodology.

## Suggested execution
One agent pass for P0+P1 (copy edits, no design changes), Pete reviews visual
diff, then P2 with the launch decisions. Deploy via the existing Vercel setup
after review.
