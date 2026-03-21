import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { languageId } = await request.json();

    if (!languageId) {
      return NextResponse.json({ error: "Missing languageId" }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS votes (
        id SERIAL PRIMARY KEY,
        language_id TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`INSERT INTO votes (language_id) VALUES (${languageId})`;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Vote error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      CREATE TABLE IF NOT EXISTS votes (
        id SERIAL PRIMARY KEY,
        language_id TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    const rows = await sql`
      SELECT language_id, COUNT(*)::int as count
      FROM votes
      GROUP BY language_id
    `;

    const counts: Record<string, number> = {};
    for (const row of rows) {
      counts[row.language_id] = row.count;
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("Vote fetch error:", error);
    return NextResponse.json({});
  }
}
