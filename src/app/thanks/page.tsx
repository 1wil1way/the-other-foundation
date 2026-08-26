import Link from "next/link";

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const interested = "interested" in params;

  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-brand-teal px-6 py-24 text-center sm:px-10">
      <h1 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
        {interested ? "Thanks — we'll be in touch." : "You're in."}
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-cream/90">
        {interested
          ? "We'll follow up as soon as business membership is ready."
          : "Check your email for your meeting details and this month's applications to read beforehand."}
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
