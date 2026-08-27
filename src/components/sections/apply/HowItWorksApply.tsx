import FadeIn from "../../FadeIn";

export default function HowItWorksApply() {
  return (
    <section className="relative overflow-hidden bg-brand-teal px-6 py-32 sm:px-10 sm:py-44 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 h-[560px] w-[560px] translate-x-1/4 translate-y-1/4 rounded-full bg-brand-coral sm:h-[680px] sm:w-[680px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-16 top-20 hidden h-64 w-64 rounded-full bg-brand-cream sm:right-28 sm:block sm:h-80 sm:w-80"
      />

      <div className="relative z-10 max-w-2xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            How it works and when you will hear.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-12 max-w-xl text-lg leading-relaxed text-brand-cream/90">
            Members read every application and vote monthly. Awards are
            structured as gifts, so talk to a tax professional about what
            that means for you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
