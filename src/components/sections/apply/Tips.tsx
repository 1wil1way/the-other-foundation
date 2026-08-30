import FadeIn from "../../FadeIn";

const TIPS = [
  "Be specific.",
  "Name what the money buys.",
  "Say who it serves.",
  "Keep it short.",
];

export default function Tips() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[85%] max-w-[1100px] translate-x-1/4 rounded-full bg-brand-teal"
      />

      <div className="relative z-10 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div className="max-w-sm">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
              Tips for a strong application.
            </h2>
          </FadeIn>
        </div>

        <div className="flex justify-center py-8 lg:justify-end">
          <ol className="flex w-full max-w-md flex-col gap-14">
            {TIPS.map((tip, i) => (
              <FadeIn key={tip} delay={300 + i * 150}>
                <li className="flex gap-5 border-t border-brand-cream/25 pt-10">
                  <span className="font-heading text-2xl font-bold text-brand-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-brand-cream">
                    {tip}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
