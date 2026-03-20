import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alephnull.ai"),
  title: "Aleph Null — The Compiler Your AI Has Been Waiting For",
  description:
    "Universal semantic compression for LLMs. 95%+ token reduction on real codebases. 31 MCP tools. Works with Cursor, Claude Code, VS Code, Windsurf.",
  openGraph: {
    title: "Aleph Null — The Compiler Your AI Has Been Waiting For",
    description: "95%+ token reduction. 31 MCP tools. 6 languages. The semantic compiler for AI agents.",
    images: ["/logo.jpg"],
    url: "https://alephnull.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleph Null",
    description: "The compiler your AI has been waiting for.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('theme');
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
