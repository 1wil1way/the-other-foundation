import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Join", href: "/join" },
  { label: "Apply", href: "/apply" },
  { label: "Awardees", href: "/awardees" },
  { label: "About", href: "/about" },
  { label: "Give", href: "/join#give" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-teal-dark px-6 py-16 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-brand-cream/70">
            A Birmingham giving collective. Members put in $100 a month and
            decide together where it goes.
          </p>
          <p className="mt-4 text-sm text-brand-cream/50">Birmingham, AL</p>
        </div>

        <div className="flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand-cream/80 transition-colors hover:text-brand-cream"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm text-brand-cream/80">
          <a
            href="mailto:hello@theotherfoundation.org"
            className="transition-colors hover:text-brand-cream"
          >
            hello@theotherfoundation.org
          </a>
          <a
            href="https://www.instagram.com/otherfoundationbham/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-cream"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/otherfoundationbham/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-cream"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-brand-cream/10 pt-8 text-xs text-brand-cream/50">
        <p>
          &copy; {new Date().getFullYear()} The Other Foundation. The
          Storyteller fountain logo is used with permission from the estate
          of Frank Fleming.
        </p>
      </div>
    </footer>
  );
}
