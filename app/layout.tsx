import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Disable browser scroll restoration at module load time (client-side)
if (typeof window !== "undefined") {
  history.scrollRestoration = "manual";
}

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Chaudhary — Founder & AI Builder",
  description:
    "Building AI products from London. Shipping production ML at Roche; founding PlacementOS to fix how UK students break into tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // scroll-smooth removed from className — it causes the browser's scroll
    // restoration to visually animate to the saved position on refresh,
    // which looks like an autoscroll. Smooth scrolling for anchor links is
    // handled by `scroll-behavior: smooth` in globals.css which only applies
    // to user-initiated scrolls, not browser scroll restoration.
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        {/* Inline script: runs synchronously before the browser can restore
            the saved scroll offset. The module-level guard above covers
            subsequent client-side navigations. */}
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';" }} />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
