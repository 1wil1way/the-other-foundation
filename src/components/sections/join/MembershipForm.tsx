"use client";

import { useRouter } from "next/navigation";
import FadeIn from "../../FadeIn";
import FormField from "../../FormField";
import { TopLeftCircles } from "../../CornerCircles";

export default function MembershipForm() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/thanks?joined");
  }

  return (
    <section
      id="membership-form"
      className="relative overflow-hidden bg-brand-teal px-6 py-24 sm:px-10 lg:px-16"
    >
      <TopLeftCircles light="bg-brand-teal-light" dark="bg-brand-teal-deep" />

      <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="max-w-xl">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
              Start your membership.
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-10 text-lg leading-relaxed text-brand-cream/90">
              Enter your name, email, and phone number, then set up your
              recurring $100 monthly payment. Your membership starts as soon
              as your payment is confirmed. Your next meeting is [date]. You
              will receive an email with the meeting details and the
              applications to read beforehand.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <FormField label="Name" name="name" type="text" required />
            <FormField label="Email" name="email" type="email" required />
            <FormField label="Phone" name="phone" type="tel" required />

            <div className="flex flex-col gap-2 rounded-lg border border-brand-cream/25 bg-brand-cream/10 px-4 py-3">
              <span className="font-heading text-sm font-semibold text-brand-cream/90">
                Payment
              </span>
              <p className="text-sm text-brand-cream/70">
                You&apos;ll be sent to a secure checkout to set up your
                $100/month membership after you submit this form.
              </p>
            </div>

            <div className="mt-4 flex flex-col items-start gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
              >
                Start your membership
              </button>
              <a
                href="#business"
                className="font-heading text-sm font-semibold text-brand-cream underline decoration-brand-cream/40 underline-offset-4 transition-colors hover:text-brand-coral"
              >
                Read about business membership
              </a>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
