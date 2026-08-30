"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Join", href: "/join", accent: true },
  { label: "Apply", href: "/apply", accent: true },
  { label: "Awardees", href: "/awardees", accent: false },
  { label: "About", href: "/about", accent: false },
];

const FADE_DISTANCE = 240;

export default function Header() {
  const [opacity, setOpacity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(Math.max(0, 1 - window.scrollY / FADE_DISTANCE));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ opacity, pointerEvents: opacity === 0 ? "none" : "auto" }}
      className="fixed inset-x-0 top-0 z-50 bg-brand-teal px-6 py-6 sm:px-10 lg:px-16"
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-10 font-heading text-lg font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.accent
                  ? "text-brand-coral transition-colors hover:text-brand-coral-dark"
                  : "text-brand-cream transition-colors hover:text-brand-cream/80"
              }
            >
              {link.label}
            </Link>
          ))}

          <span className="h-6 w-px bg-brand-cream/25" aria-hidden />

          <Link
            href="/login"
            className="text-base font-medium text-brand-cream/70 transition-colors hover:text-brand-cream"
          >
            Member login
          </Link>

          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-full bg-brand-coral px-6 py-3 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
          >
            Become a member
          </Link>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-full bg-brand-coral px-5 py-2.5 font-heading text-sm font-semibold text-white"
          >
            Become a member
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-0.5 w-6 bg-brand-cream" />
            <span className="h-0.5 w-6 bg-brand-cream" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mt-6 flex flex-col gap-5 font-heading text-lg font-medium md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                link.accent
                  ? "text-brand-coral"
                  : "text-brand-cream"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-base font-medium text-brand-cream/70"
          >
            Member login
          </Link>
        </nav>
      )}
    </header>
  );
}
