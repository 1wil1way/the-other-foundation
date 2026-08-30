import FadeIn from "../../FadeIn";
import PlaceholderPhoto from "../../PlaceholderPhoto";
import { TopLeftCircles } from "../../CornerCircles";

const BOARD = [
  { name: "Board Member Name", title: "Title" },
  { name: "Board Member Name", title: "Title" },
  { name: "Board Member Name", title: "Title" },
];

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
            Board members appear here with photographs, so you can see who
            is deciding where the money goes.
          </p>
        </FadeIn>
      </div>

      <div className="relative z-10 mt-24">
        <FadeIn>
          <div className="flex flex-col items-start gap-6 text-left sm:flex-row sm:items-center">
            <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full sm:h-48 sm:w-48">
              <PlaceholderPhoto label="Founder photo — swap in real asset" />
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-brand-cream">
                Founder Name
              </p>
              <p className="mt-1 text-lg text-brand-cream/80">
                Founder &amp; Executive Director
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {BOARD.map((member, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="flex flex-col items-start gap-4 text-left">
                <div className="aspect-square w-full max-w-[220px] overflow-hidden rounded-full">
                  <PlaceholderPhoto label="Board member photo — swap in real asset" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-brand-cream">
                    {member.name}
                  </p>
                  <p className="text-sm text-brand-cream/70">
                    {member.title}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
