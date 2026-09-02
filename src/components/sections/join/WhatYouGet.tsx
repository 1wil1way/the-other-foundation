import Image from "next/image";
import FadeIn from "../../FadeIn";
import { BottomLeftCircles } from "../../CornerCircles";

export default function WhatYouGet() {
  return (
    <section className="relative overflow-hidden bg-brand-coral px-6 py-32 sm:px-10 sm:py-44 lg:px-16">
      <BottomLeftCircles light="bg-brand-coral-light" dark="bg-brand-coral-deep" />
      <div className="absolute right-16 top-16 hidden h-64 w-64 overflow-hidden rounded-full sm:right-24 sm:block sm:h-80 sm:w-80">
        <Image
          src="/images/photos/handshake.jpg"
          alt="Two people shaking hands"
          fill
          sizes="320px"
          className="object-cover object-[50%_68%]"
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            What you get
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-brand-cream/90">
            Your $100 does not disappear into a fund. You read the
            applications, you argue for one, and you shake the winner&apos;s
            hand. You see exactly where the money went every month, not in an
            annual report.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
