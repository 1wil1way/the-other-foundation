import FadeIn from "../../FadeIn";

export default function MembershipIntro() {
  return (
    <section className="relative overflow-hidden bg-brand-teal px-6 py-32 sm:px-10 sm:py-44 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute right-16 top-16 hidden h-64 w-64 rounded-full bg-brand-cream sm:right-24 sm:block sm:h-80 sm:w-80"
      />

      <div className="relative z-10 max-w-2xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            Your $100 buys a vote and an evening.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-brand-cream/90">
            $100 a month gets you a vote, a meeting, and a handshake with the
            person you funded. You are expected to read applications and
            vote. If you would rather set up a donation and not think about
            it, we are honestly not the right fit.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
