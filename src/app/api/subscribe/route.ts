import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, votedFor } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        voted_for TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Insert (ignore duplicates)
    await sql`
      INSERT INTO subscribers (email, voted_for)
      VALUES (${email}, ${votedFor || null})
      ON CONFLICT (email) DO NOTHING
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
