import FadeIn from "../../FadeIn";

const THEMES = {
  cream: { bg: "bg-brand-cream", heading: "text-brand-teal", body: "text-brand-teal/80" },
  coral: { bg: "bg-brand-coral", heading: "text-brand-cream", body: "text-brand-cream/90" },
  teal: { bg: "bg-brand-teal", heading: "text-brand-cream", body: "text-brand-cream/90" },
} as const;

export default function StorySection({
  heading,
  body,
  theme,
}: {
  heading: string;
  body: string;
  theme: keyof typeof THEMES;
}) {
  const t = THEMES[theme];

  return (
    <section className={`${t.bg} px-6 py-28 sm:px-10 sm:py-36 lg:px-16`}>
      <div className="max-w-2xl">
        <FadeIn>
          <h2 className={`font-heading text-4xl font-bold sm:text-5xl ${t.heading}`}>
            {heading}
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className={`mt-10 text-lg leading-relaxed ${t.body}`}>{body}</p>
        </FadeIn>
      </div>
    </section>
  );
}
