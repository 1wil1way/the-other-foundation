"use client";

import { useRouter } from "next/navigation";
import FadeIn from "../../FadeIn";
import FormField from "../../FormField";

export default function BusinessMembership() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/thanks?interested");
  }

  return (
    <section
      id="business"
      className="bg-brand-teal px-6 py-32 sm:px-10 sm:py-44 lg:px-16"
    >
      <div className="max-w-3xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            Most company giving ends with an annual report.
            <br />
            Ours ends with your team in a room.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-10 text-lg leading-relaxed text-brand-cream/90">
            Your team reads applications from people in your city, votes, and
            decides who gets funded. You see exactly where the money went,
            every month, and you can bring your people to meet the person you
            funded.
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto mt-32 flex max-w-xl flex-col items-center text-center sm:mt-40">
        <FadeIn className="flex flex-col items-center">
          <h3 className="font-heading text-3xl font-bold text-brand-cream">
            Tell us you are interested.
          </h3>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-cream/90">
            Leave your name, company, and email, and we will follow up when
            business membership is ready.
          </p>
        </FadeIn>

        <FadeIn delay={150} className="mt-12 w-full max-w-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <FormField label="Name" name="name" type="text" required />
            <FormField label="Company" name="company" type="text" required />
            <FormField label="Email" name="email" type="email" required />
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center self-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
            >
              I&apos;m interested
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
