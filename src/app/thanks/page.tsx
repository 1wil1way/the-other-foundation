import Link from "next/link";

const VARIANTS = {
  gave: {
    headline: "Thank you. Your gift funds the next grant.",
    body: "A receipt is on the way to your email. Your donation goes directly to the next person we fund.",
  },
  applied: {
    headline: "Thank you. We are reading.",
    body: "You will hear back soon. Members are looking for a specific project, a real plan for it, and clarity on who it serves.",
  },
  interested: {
    headline: "Thanks — we'll be in touch.",
    body: "We'll follow up as soon as business membership is ready.",
  },
  joined: {
    headline: "Welcome. Your membership starts now.",
    body: "Add the next meeting to your calendar as soon as it's confirmed. You will receive an email with the Zoom link and the applications to read before the meeting.",
  },
} as const;

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const variantKey =
    (Object.keys(VARIANTS) as (keyof typeof VARIANTS)[]).find(
      (key) => key in params,
    ) ?? "joined";
  const variant = VARIANTS[variantKey];

  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-brand-teal px-6 py-24 text-center sm:px-10">
      <h1 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
        {variant.headline}
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-cream/90">
        {variant.body}
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
      >
        Back home
      </Link>
    </section>
  );
}
