"use client";

import { useRouter } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import FormField from "@/components/FormField";

export default function ApplyStartPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/thanks?applied");
  }

  return (
    <section className="flex flex-1 flex-col items-center bg-brand-teal px-6 pb-24 pt-40 sm:px-10 sm:pt-48">
      <div className="w-full max-w-xl">
        <FadeIn>
          <h1 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            Start your application.
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-6 text-lg leading-relaxed text-brand-cream/90">
            Tell us who you are and what you want to build. Members read
            every application and vote monthly.
          </p>
        </FadeIn>

        <FadeIn delay={250}>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
            <FormField label="Your name" name="name" type="text" required />
            <FormField label="Email" name="email" type="email" required />
            <FormField label="Phone" name="phone" type="tel" required />

            <label className="flex flex-col gap-2 text-left">
              <span className="font-heading text-sm font-semibold text-brand-cream/90">
                Applying as
              </span>
              <select
                name="applicantType"
                required
                defaultValue=""
                className="rounded-lg border border-brand-cream/25 bg-brand-cream/10 px-4 py-3 text-brand-cream outline-none transition-colors focus:border-brand-coral"
              >
                <option value="" disabled className="text-black">
                  Select one
                </option>
                <option value="individual" className="text-black">
                  An individual
                </option>
                <option value="community-project" className="text-black">
                  A community project or group
                </option>
              </select>
            </label>

            <FormField
              label="Project name"
              name="projectName"
              type="text"
              required
            />

            <label className="flex flex-col gap-2 text-left">
              <span className="font-heading text-sm font-semibold text-brand-cream/90">
                Amount requested
              </span>
              <input
                name="amountRequested"
                type="number"
                min="1"
                placeholder="Typically $1,500–$2,000"
                required
                className="rounded-lg border border-brand-cream/25 bg-brand-cream/10 px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 outline-none transition-colors focus:border-brand-coral"
              />
            </label>

            <label className="flex flex-col gap-2 text-left">
              <span className="font-heading text-sm font-semibold text-brand-cream/90">
                What do you want to build?
              </span>
              <textarea
                name="projectDescription"
                rows={4}
                required
                placeholder="What the money buys, specifically."
                className="rounded-lg border border-brand-cream/25 bg-brand-cream/10 px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 outline-none transition-colors focus:border-brand-coral"
              />
            </label>

            <label className="flex flex-col gap-2 text-left">
              <span className="font-heading text-sm font-semibold text-brand-cream/90">
                Who does this serve?
              </span>
              <textarea
                name="whoItServes"
                rows={3}
                required
                placeholder="Be specific about who benefits and how."
                className="rounded-lg border border-brand-cream/25 bg-brand-cream/10 px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 outline-none transition-colors focus:border-brand-coral"
              />
            </label>

            <FormField
              label="Website or social link (optional)"
              name="link"
              type="url"
            />

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center self-start rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
            >
              Submit application
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
