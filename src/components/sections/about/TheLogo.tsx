import Image from "next/image";
import FadeIn from "../../FadeIn";
import Logo from "../../Logo";
import { BottomLeftCircles } from "../../CornerCircles";

export default function TheLogo() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
      <BottomLeftCircles light="bg-brand-teal-light" dark="bg-brand-teal-deep" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="max-w-xl">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
              The logo.
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-brand-teal/80">
              The logo is the Storyteller fountain in Five Points South, used
              with permission from the estate of Frank Fleming.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-10 inline-block rounded-2xl bg-brand-teal px-8 py-6">
              <Logo className="h-20 sm:h-28" />
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={200}
          className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full border-[16px] border-brand-coral"
        >
          <Image
            src="/images/photos/storyteller-fountain.jpg"
            alt="The Storyteller fountain in Five Points South, Birmingham"
            fill
            sizes="420px"
            className="object-cover object-[center_8%]"
          />
        </FadeIn>
      </div>
    </section>
  );
}
