import FadeIn from "../../FadeIn";
import type { Interview as InterviewData } from "@/lib/awardees";

export default function Interview({
  interview,
}: {
  interview?: InterviewData;
}) {
  if (!interview || (!interview.url && !interview.excerpt)) return null;

  return (
    <section className="bg-brand-cream px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
      <div className="max-w-2xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
            The interview
          </h2>
        </FadeIn>

        {interview.excerpt && (
          <FadeIn delay={150}>
            <p className="mt-10 text-2xl leading-relaxed text-brand-teal sm:text-3xl">
              &ldquo;{interview.excerpt}&rdquo;
            </p>
          </FadeIn>
        )}

        {interview.url && (
          <FadeIn delay={300}>
            <a
              href={interview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-teal hover:text-brand-cream"
            >
              Watch or listen to the full interview
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
