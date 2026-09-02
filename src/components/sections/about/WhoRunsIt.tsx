import FadeIn from "../../FadeIn";
import { TopLeftCircles } from "../../CornerCircles";

export default function WhoRunsIt() {
  return (
    <section className="relative overflow-hidden bg-brand-teal px-6 py-32 sm:px-10 sm:py-44 lg:px-16">
      <TopLeftCircles light="bg-brand-teal-light" dark="bg-brand-teal-deep" />

      <div className="relative z-10 max-w-2xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            Who runs it.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-12 text-lg leading-relaxed text-brand-cream/90">
            Right now, that&apos;s one person.
          </p>
        </FadeIn>
      </div>

      <div className="relative z-10 mt-20">
        <FadeIn>
          <p className="font-heading text-2xl font-bold text-brand-cream">
            Max Rykov
          </p>
          <p className="mt-1 text-lg text-brand-cream/80">Founder &amp; Chair</p>
        </FadeIn>
      </div>
    </section>
  );
}
