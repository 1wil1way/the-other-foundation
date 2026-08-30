import Image from "next/image";
import Link from "next/link";
import FadeIn from "../../FadeIn";
import { getVisibleAwardees, groupByMonth } from "@/lib/awardees";

export default function RecentGrants() {
  const groups = groupByMonth(getVisibleAwardees());

  return (
    <section className="bg-brand-cream px-6 pb-32 pt-40 sm:px-10 sm:pb-44 sm:pt-48 lg:px-16">
      <div className="max-w-3xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
            Recent grants.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-8 text-lg leading-relaxed text-brand-teal/80">
            Every funded project appears here, newest first, grouped by
            month.
          </p>
        </FadeIn>
      </div>

      <div className="mt-20 flex flex-col gap-16">
        {groups.map((group, gi) => (
          <div key={group.month}>
            <FadeIn delay={gi * 100}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-coral">
                {group.month}
              </h3>
            </FadeIn>

            <div className="mt-6 flex flex-col divide-y divide-brand-teal/10">
              {group.entries.map((awardee, i) => (
                <FadeIn key={awardee.slug} delay={gi * 100 + i * 80}>
                  <Link
                    href={`/awardees/${awardee.slug}`}
                    className="group flex items-center gap-6 py-6 transition-opacity hover:opacity-70"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full">
                      {awardee.photos[0] ? (
                        <Image
                          src={awardee.photos[0]}
                          alt=""
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-brand-teal">
                          <span className="font-heading text-xl font-bold text-brand-cream">
                            {awardee.projectName.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-lg font-semibold text-brand-teal">
                        {awardee.projectName}
                      </p>
                      <p className="mt-1 truncate text-sm text-brand-teal/70">
                        {awardee.shortDescription}
                      </p>
                    </div>

                    <span className="hidden shrink-0 font-heading text-sm font-semibold text-brand-coral sm:block">
                      Read the story →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
