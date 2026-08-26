import FadeIn from "../FadeIn";

const STEPS = [
  { number: "1", label: "Applications come in" },
  { number: "2", label: "Members read them" },
  { number: "3", label: "Members vote" },
  { number: "4", label: "Somebody gets funded and we go meet them" },
];

export default function HowItWorks() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand-coral px-6 pb-48 pt-32 sm:px-10 sm:pb-64 sm:pt-40 lg:px-16">
      <div aria-hidden className="pointer-events-none absolute left-0 top-[62%]">
        <div className="absolute left-0 top-0 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral-light" />
        <div className="absolute left-0 top-0 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral-deep" />
      </div>

      <div className="relative z-10">
        <FadeIn>
          <h2 className="font-heading text-5xl font-bold text-brand-cream sm:text-6xl">
            What a month looks like
          </h2>
        </FadeIn>

        <div className="mt-32 grid grid-cols-2 gap-x-8 gap-y-20 sm:mt-40 sm:grid-cols-4 lg:gap-x-12">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 120}>
              <div className="flex flex-col items-center gap-6 text-center">
                <span className="font-heading text-6xl font-normal text-brand-cream sm:text-7xl">
                  {step.number}
                </span>
                <p className="max-w-[220px] text-lg text-brand-cream">
                  {step.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
