import FadeIn from "../../FadeIn";

export default function ReadyCTA() {
  return (
    <section className="flex flex-col items-center justify-center bg-brand-teal px-6 py-32 text-center sm:px-10 sm:py-44">
      <FadeIn>
        <h2 className="font-heading text-5xl font-bold text-brand-cream sm:text-6xl">
          Ready.
        </h2>
      </FadeIn>
      <FadeIn delay={150}>
        <p className="mt-10 text-2xl text-brand-cream/90">
          Start your application now.
        </p>
      </FadeIn>
      <FadeIn delay={300}>
        <a
          href="https://apply.otherfoundationbham.org/apply"
          className="mt-16 inline-flex items-center justify-center rounded-full bg-brand-coral px-10 py-5 text-center font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
        >
          Go to the application
        </a>
      </FadeIn>
    </section>
  );
}
