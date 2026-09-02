import FadeIn from "../../FadeIn";
import { AWARDEE_STATS, getVisibleAwardees } from "@/lib/awardees";

export default function TheNumbers() {
  const RESULTS = [
    { value: String(getVisibleAwardees().length), label: "Grants awarded to date" },
    { value: AWARDEE_STATS.dollarsDistributed, label: "Distributed" },
    { value: String(AWARDEE_STATS.monthsRunning), label: "Months running" },
  ];

  return (
    <section className="bg-brand-teal px-6 py-32 sm:px-10 sm:py-44 lg:px-16">
      <FadeIn>
        <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
          The numbers
        </h2>
      </FadeIn>

      <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
        {RESULTS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 120}>
            <p className="font-heading text-6xl font-bold text-brand-cream sm:text-7xl">
              {stat.value}
            </p>
            <p className="mt-3 text-lg text-brand-cream/80">{stat.label}</p>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-20 max-w-2xl border-t border-brand-cream/20 pt-10">
          <p className="text-lg leading-relaxed text-brand-cream/90">
            We are working toward{" "}
            <span className="font-heading font-bold text-brand-coral">
              {AWARDEE_STATS.targetMonthly} a month
            </span>{" "}
            in grants and{" "}
            <span className="font-heading font-bold text-brand-coral">
              {AWARDEE_STATS.targetMembers} members
            </span>
            .
          </p>
          <p className="mt-3 text-lg italic text-brand-cream/60">
            We are not there yet.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
