import Image from "next/image";
import FadeIn from "../FadeIn";

export default function AboutStory() {
  return (
    <section className="bg-brand-cream px-6 py-24 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <FadeIn>
            <div className="h-1 w-full max-w-xl bg-brand-coral" />
            <p className="mt-10 max-w-xl text-2xl leading-relaxed text-brand-teal sm:text-3xl">
              The Other Foundation takes its name from The Other Awards, a
              2019 show celebrating Birmingham&apos;s bus drivers, parking
              attendants, and teachers. Now we fund them.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <a
              href="/about"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
            >
              Read the full history on the About page
            </a>
          </FadeIn>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[560px]">
          <FadeIn className="absolute right-0 top-0 h-[340px] w-[340px] overflow-hidden rounded-full border-[14px] border-brand-teal sm:h-[400px] sm:w-[400px]">
            <Image
              src="/images/photos/classroom.jpg"
              alt="A bus driver at the wheel"
              fill
              sizes="(min-width: 640px) 400px, 340px"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn
            delay={150}
            className="absolute bottom-0 left-4 h-[260px] w-[260px] overflow-hidden rounded-full border-[16px] border-brand-coral sm:h-[320px] sm:w-[320px]"
          >
            <Image
              src="/images/photos/storefront.jpg"
              alt="Volunteers handing out supplies"
              fill
              sizes="(min-width: 640px) 320px, 260px"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
