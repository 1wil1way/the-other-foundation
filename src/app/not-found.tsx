import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-brand-teal px-6 py-24 text-center sm:px-10">
      <h1 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
        Page not found.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-cream/90">
        If you are here to become a member, join. If you want to apply for a
        grant, apply. If you want to see who we have funded, look at the
        awardees.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/join"
          className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
        >
          Join
        </Link>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
        >
          Apply
        </Link>
        <Link
          href="/awardees"
          className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
        >
          Awardees
        </Link>
      </div>
    </section>
  );
}
