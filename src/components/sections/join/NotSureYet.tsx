import PlaceholderPhoto from "../../PlaceholderPhoto";
import FadeIn from "../../FadeIn";

export default function NotSureYet() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-24 sm:px-10 lg:px-16">
      <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="max-w-sm">
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

        <div className="flex justify-center lg:justify-end lg:pr-8">
          <FadeIn
            delay={150}
            className="relative aspect-square w-full max-w-[460px] overflow-hidden rounded-full border-[20px] border-brand-coral sm:border-[28px]"
          >
            <PlaceholderPhoto label="Meeting photo — swap in real asset" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
