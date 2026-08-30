import Image from "next/image";
import FadeIn from "../FadeIn";

const PANELS = [
  {
    heading: "A vote, a room full of neighbors, a handshake.",
    button: "Become a member",
    href: "/join",
    photoSrc: "/images/split-left.jpg",
  },
  {
    heading: "Individuals and community projects welcome.",
    button: "Apply for a grant",
    href: "/apply",
    photoSrc: "/images/photos/storefront.jpg",
  },
];

export default function SplitMembershipCTA() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      {PANELS.map((panel, i) => (
        <div
          key={panel.heading}
          className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-24 sm:min-h-[600px] sm:px-10"
        >
          <Image
            src={panel.photoSrc}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-brand-teal/75" />

          <FadeIn
            delay={i * 150}
            className="relative z-10 flex flex-col items-center gap-10 text-center"
          >
            <h3 className="max-w-sm font-heading text-3xl font-bold text-brand-cream sm:text-4xl">
              {panel.heading}
            </h3>
            <a
              href={panel.href}
              className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
            >
              {panel.button}
            </a>
          </FadeIn>
        </div>
      ))}
    </section>
  );
}
