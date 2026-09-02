import Image from "next/image";
import Link from "next/link";
import FadeIn from "../FadeIn";
import { getVisibleAwardees } from "@/lib/awardees";

export default function RecentAwardeesHome() {
  const cards = getVisibleAwardees().slice(0, 3);

  return (
    <section className="bg-brand-cream px-6 py-24 sm:px-10 lg:px-16">
      <FadeIn>
        <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
          The <span className="text-brand-coral">other</span> awardees.
        </h2>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {cards.map((awardee, i) => (
          <FadeIn key={awardee.slug} delay={i * 120}>
            <Link href={`/awardees/${awardee.slug}`} className="group block">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                {awardee.photos[0] ? (
                  <Image
                    src={awardee.photos[0]}
                    alt=""
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-teal">
                    <span className="font-heading text-4xl font-bold text-brand-cream">
                      {awardee.projectName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-5 font-heading text-lg font-semibold text-brand-teal">
                {awardee.projectName}
              </p>
              <p className="mt-1 text-sm font-medium text-brand-coral">
                {awardee.recipientName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-teal/70">
                {awardee.shortDescription}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <Link
          href="/awardees"
          className="mt-16 inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-teal hover:text-brand-cream"
        >
          See what we have funded
        </Link>
      </FadeIn>
    </section>
  );
}
