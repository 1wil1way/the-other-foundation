import FadeIn from "../FadeIn";

export default function TheOtherAwardees() {
  return (
    <section className="bg-brand-cream px-6 py-24 sm:px-10 lg:px-16">
      <FadeIn>
        <h2 className="font-heading text-4xl font-medium sm:text-5xl">
          <span className="text-brand-teal">The </span>
          <span className="text-brand-coral">Other</span>
          <span className="text-brand-teal"> Awardees</span>
        </h2>
      </FadeIn>

      <div className="mt-24 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="mx-auto aspect-square w-full max-w-[300px] rounded-full bg-zinc-200" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
