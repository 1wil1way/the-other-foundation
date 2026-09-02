import Image from "next/image";
import FadeIn from "../../FadeIn";
import type { Awardee } from "@/lib/awardees";

export default function StoryHero({ awardee }: { awardee: Awardee }) {
  const photo = awardee.photos[0];
  const fundedParts = [
    awardee.monthFunded ? `Funded ${awardee.monthFunded}` : null,
    awardee.amount,
  ].filter(Boolean);
  const fundedLine = fundedParts.length ? ` ${fundedParts.join(", ")}.` : "";

  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-brand-teal px-6 pb-16 pt-40 sm:px-10 sm:pt-48 lg:px-16">
      {photo && (
        <>
          <Image
            src={photo}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-teal/70" />
        </>
      )}

      <div className="relative z-10 max-w-3xl">
        <FadeIn>
          <h1 className="font-heading text-3xl font-medium leading-snug text-brand-cream sm:text-4xl">
            {awardee.projectName}.{fundedLine}
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-4 text-lg text-brand-cream/80">
            {awardee.recipientName}
          </p>
        </FadeIn>
        {awardee.outboundLink && (
          <FadeIn delay={250}>
            <a
              href={awardee.outboundLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-heading text-sm font-semibold text-brand-coral underline decoration-brand-coral/40 underline-offset-4 transition-colors hover:text-brand-cream"
            >
              Visit their site →
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
