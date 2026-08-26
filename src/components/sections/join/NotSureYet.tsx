import PlaceholderPhoto from "../../PlaceholderPhoto";
import FadeIn from "../../FadeIn";

export default function NotSureYet() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-24 sm:px-10 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[560px] w-[560px] translate-x-1/3 translate-y-1/3 rounded-full bg-brand-coral"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
              Not sure yet?
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-10 max-w-md text-lg leading-relaxed text-brand-teal/90">
              Come to a meeting first and see.
              <br />
              Or read about business membership below.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <a
              href="#business"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
            >
              Read about business membership
            </a>
          </FadeIn>
        </div>

        <FadeIn
          delay={150}
          className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full"
        >
          <PlaceholderPhoto label="Meeting photo — swap in real asset" />
        </FadeIn>
      </div>
    </section>
  );
}
