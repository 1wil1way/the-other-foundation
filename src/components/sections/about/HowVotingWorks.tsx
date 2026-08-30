import FadeIn from "../../FadeIn";
import { BottomLeftCircles } from "../../CornerCircles";

export default function HowVotingWorks() {
  return (
    <section className="relative overflow-hidden bg-brand-coral px-6 py-32 sm:px-10 sm:py-44 lg:px-16">
      <BottomLeftCircles light="bg-brand-coral-light" dark="bg-brand-coral-deep" />

      <div className="relative z-10 max-w-2xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            How voting actually works.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-12 text-lg leading-relaxed text-brand-cream/90">
            Members read every application and vote monthly. We notify
            winners before we announce publicly.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
