import Image from "next/image";
import FadeIn from "../../FadeIn";

export default function NotSureYet() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-32 sm:px-10 sm:py-44 lg:px-16">
      {/* Two circles sharing one center point (different sizes) so the rim
          reads as an uneven crescent, not a uniform border */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden lg:block">
        <div className="absolute right-0 top-0 h-[1100px] w-[1100px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral" />
        <div className="absolute right-0 top-0 h-[900px] w-[900px] translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
          <Image
            src="/images/photos/meeting.png"
            alt="Members at a meeting"
            fill
            sizes="900px"
            className="-scale-x-100 object-cover object-left"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-sm">
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

      {/* Mobile fallback — the offset-circle version above is hidden below lg */}
      <div className="relative z-10 mt-16 flex justify-center lg:hidden">
        <FadeIn className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full border-[20px] border-brand-coral">
          <Image
            src="/images/photos/meeting.png"
            alt="Members at a meeting"
            fill
            sizes="300px"
            className="-scale-x-100 object-cover object-left"
          />
        </FadeIn>
      </div>
    </section>
  );
}
