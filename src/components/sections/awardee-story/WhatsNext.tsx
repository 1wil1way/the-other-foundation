import FadeIn from "../../FadeIn";

export default function WhatsNext() {
  return (
    <section className="flex flex-col items-center justify-center bg-brand-coral px-6 py-28 text-center sm:px-10 sm:py-36">
      <FadeIn>
        <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
          What&apos;s next.
        </h2>
      </FadeIn>
      <FadeIn delay={150}>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-brand-cream/90">
          If you have something to build, apply. If you want to fund the
          next one, become a member.
        </p>
      </FadeIn>
      <FadeIn delay={300}>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-brand-cream px-8 py-4 font-heading font-semibold text-brand-coral transition-all hover:scale-[1.02]"
          >
            Apply
          </a>
          <a
            href="/join"
            className="inline-flex items-center justify-center rounded-full bg-brand-cream px-8 py-4 font-heading font-semibold text-brand-coral transition-all hover:scale-[1.02]"
          >
            Become a member
          </a>
          <a
            href="/awardees"
            className="font-heading font-semibold text-brand-cream underline decoration-brand-cream/40 underline-offset-4 transition-colors hover:text-white"
          >
            Back to Awardees
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
