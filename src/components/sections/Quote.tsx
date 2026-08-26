import FadeIn from "../FadeIn";

export default function Quote({
  text = "We started by celebrating the people that make this city incredible.",
}: {
  text?: string;
}) {
  return (
    <section className="bg-brand-teal px-6 py-24 sm:px-10 lg:px-16">
      <FadeIn>
        <p className="mx-auto max-w-3xl text-center font-heading text-3xl font-bold leading-snug text-brand-cream sm:text-4xl">
          &ldquo;{text}&rdquo;
        </p>
      </FadeIn>
    </section>
  );
}
