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
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-brand-teal px-6 py-8 sm:px-10 lg:px-16"
    >
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
      </nav>
    </header>
  );
}
