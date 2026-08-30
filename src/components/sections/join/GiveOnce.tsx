"use client";

import { useRouter } from "next/navigation";
import FadeIn from "../../FadeIn";
import FormField from "../../FormField";

export default function GiveOnce() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/thanks?gave");
  }

  return (
    <section
      id="give"
      className="bg-brand-cream px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-xl">
        <FadeIn>
          <h2 className="font-heading text-2xl font-semibold text-brand-teal">
            Not ready to join? A one-time gift still funds somebody&apos;s
            project.
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mt-6 text-base leading-relaxed text-brand-teal/70">
            A one-time gift funds next month&apos;s grant. If you want a vote
            in who gets it, membership is how you get one. The signup is at
            the top of this page.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <h3 className="mt-14 font-heading text-xl font-semibold text-brand-teal">
            Make a one-time gift.
          </h3>
          <p className="mt-3 text-base leading-relaxed text-brand-teal/70">
            Enter the amount you would like to give, your email, and your
            payment details. Your gift funds next month&apos;s grant.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-left">
              <span className="font-heading text-sm font-semibold text-brand-teal/80">
                Amount
              </span>
              <input
                name="amount"
                type="number"
                min="1"
                required
                className="rounded-lg border border-brand-teal/25 bg-white px-4 py-3 text-brand-teal outline-none transition-colors focus:border-brand-coral"
              />
            </label>
            <label className="flex flex-col gap-2 text-left">
              <span className="font-heading text-sm font-semibold text-brand-teal/80">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border border-brand-teal/25 bg-white px-4 py-3 text-brand-teal outline-none transition-colors focus:border-brand-coral"
              />
            </label>

            <div className="flex flex-col gap-1 rounded-lg border border-brand-teal/25 bg-white px-4 py-3">
              <span className="font-heading text-sm font-semibold text-brand-teal/80">
                Payment
              </span>
              <p className="text-sm text-brand-teal/60">
                You&apos;ll be sent to a secure checkout to complete your
                gift after you submit this form.
              </p>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-brand-teal/30 px-6 py-3 font-heading text-sm font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-cream"
            >
              Make a one-time gift
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
