import FadeIn from "../../FadeIn";
import DrawLine from "../../DrawLine";
import { BottomLeftCircles } from "../../CornerCircles";

const ELIGIBLE = [
  "Individuals",
  "School groups",
  "Neighborhood efforts",
  "Community projects",
];

const NOT_ELIGIBLE = ["For-profit ventures"];

export default function EligibilityCheck() {
  return (
    <section className="relative overflow-hidden bg-brand-coral px-6 pb-32 pt-40 sm:px-10 sm:pb-44 sm:pt-48 lg:px-16">
      <BottomLeftCircles light="bg-brand-coral-light" dark="bg-brand-coral-deep" />

      <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="max-w-xl">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
              You do not need a 501(c)(3).
              <br />
              You do need a plan.
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-12 text-lg leading-relaxed text-brand-cream/90">
              Individuals, school groups, neighborhood efforts, and community
              projects with or without 501(c)(3) status can apply. Never
              for-profit ventures.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <DrawLine
            direction="vertical"
            className="absolute left-1/2 top-0 h-full -translate-x-1/2"
          />

          <div className="grid grid-cols-2">
            <div className="pb-6 text-center">
              <h3 className="font-heading text-2xl font-bold text-brand-cream sm:text-3xl">
                Eligible
              </h3>
            </div>
            <div className="pb-6 pl-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-brand-cream sm:text-3xl">
                Not Eligible
              </h3>
            </div>
          </div>

          <DrawLine direction="horizontal" />

          <div className="grid grid-cols-2 pt-10">
            <ul className="space-y-3 text-center text-brand-cream/90">
              {ELIGIBLE.map((item, i) => (
                <FadeIn key={item} delay={800 + i * 120}>
                  <li>{item}</li>
                </FadeIn>
              ))}
            </ul>
            <ul className="space-y-3 pl-8 text-center text-brand-cream/90">
              {NOT_ELIGIBLE.map((item, i) => (
                <FadeIn key={item} delay={800 + i * 120}>
                  <li>{item}</li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
