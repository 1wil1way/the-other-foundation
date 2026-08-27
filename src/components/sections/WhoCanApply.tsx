import PlaceholderPhoto from "../PlaceholderPhoto";
import FadeIn from "../FadeIn";
import Parallax from "../Parallax";

export default function WhoCanApply() {
  return (
    <section className="relative overflow-hidden bg-brand-teal px-6 py-32 sm:px-10 sm:py-40 lg:px-16">
      <div aria-hidden className="pointer-events-none absolute left-0 top-0">
        <Parallax speed={0.08} className="absolute left-0 top-0">
          <div className="h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal-light" />
        </Parallax>
        <Parallax speed={0.16} className="absolute left-0 top-0">
          <div className="h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal-deep" />
        </Parallax>
      </div>

      <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
              Who can apply?
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-12 max-w-lg text-lg leading-relaxed text-brand-cream/90">
              You qualify as an individual or a community project. You do not
              need 501(c)(3) status. For-profit ventures do not qualify.
              Awards are structured as gifts, so talk to a tax professional
              about what that means for you.
            </p>
          </FadeIn>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px]">
          <FadeIn className="absolute right-16 top-0 h-[340px] w-[340px] overflow-hidden rounded-full border-[14px] border-brand-cream sm:right-24 sm:h-[400px] sm:w-[400px]">
            <PlaceholderPhoto label="Family photo — swap in real asset" />
          </FadeIn>
          <FadeIn
            delay={150}
            className="absolute bottom-0 right-0 h-[240px] w-[240px] overflow-hidden rounded-full border-[16px] border-brand-coral sm:h-[300px] sm:w-[300px]"
          >
            <PlaceholderPhoto label="Volunteers photo — swap in real asset" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
