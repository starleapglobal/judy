import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Heart4Souls + HeartBEat | Rev. Dr. Judi Weaver",
  description:
    "Official site of Rev. Dr. Judi Weaver – Doctor of Metaphysics, Healing Modalities & Shamanic Practitioner, founder of Heart 4 Souls Inc., and spiritual guide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-[#effcee] text-slate-900`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-pink-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-semibold">
                  4
                </div>
                <div>
                  <div className="font-heading text-xl md:text-2xl text-pink-700">
                    Heart4Souls + HeartBEat
                  </div>
                  <p className="text-xs md:text-sm text-emerald-700">
                    by Rev. Dr. Judi Weaver
                  </p>
                </div>
              </div>
              <nav className="hidden gap-6 text-sm font-medium text-pink-800 md:flex">
                <Link href="/" className="hover:text-pink-600">
                  Home
                </Link>
                <Link href="/events" className="hover:text-pink-600">
                  Events
                </Link>
                <Link href="/spiritual-travel" className="hover:text-pink-600">
                  SOUL Spiritual Travel
                </Link>
                <Link href="/about" className="hover:text-pink-600">
                  About
                </Link>
                <Link href="/contact" className="hover:text-pink-600">
                  Contact
                </Link>
                <Link href="/heartbeat" className="hover:text-pink-600">
                  HeartBEat
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 bg-gradient-to-b from-[#effcee] via-white to-[#ffe0f1]">
            {children}
          </main>
          <footer className="border-t border-pink-200 bg-white/80 py-6 text-center text-xs text-pink-800">
            © {new Date().getFullYear()} Rev. Dr. Judi Weaver · Heart 4 Souls
          </footer>
        </div>
      </body>
    </html>
  );
}
