import Image from "next/image";
import Link from "next/link";
import FadeIn from "../../FadeIn";
import type { Awardee } from "@/lib/awardees";

export default function RelatedAwardees({
  month,
  related,
}: {
  month: string;
  related: Awardee[];
}) {
  if (related.length === 0) return null;

  return (
    <section className="bg-brand-teal px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
      <FadeIn>
        <h2 className="font-heading text-2xl font-semibold text-brand-cream">
          More from {month}
        </h2>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {related.map((awardee, i) => (
          <FadeIn key={awardee.slug} delay={i * 120}>
            <Link
              href={`/awardees/${awardee.slug}`}
              className="group flex items-center gap-5 transition-opacity hover:opacity-80"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
                {awardee.photos[0] ? (
                  <Image
                    src={awardee.photos[0]}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-coral">
                    <span className="font-heading text-2xl font-bold text-white">
                      {awardee.projectName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-brand-cream">
                  {awardee.projectName}
                </p>
                <p className="mt-1 text-sm text-brand-cream/70">
                  {awardee.shortDescription}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
