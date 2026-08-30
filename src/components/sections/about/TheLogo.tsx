import FadeIn from "../../FadeIn";

export default function TheLogo() {
  return (
    <section className="bg-brand-cream px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
      <div className="max-w-2xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
            The logo.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-10 text-lg leading-relaxed text-brand-teal/80">
            The logo is the Storyteller fountain in Five Points South, used
            with permission from the estate of Frank Fleming.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
