import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member login — The Other Foundation",
};

export default function LoginPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-brand-teal px-6 py-32 text-center sm:px-10">
      <h1 className="font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
        Coming soon.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-cream/90">
        Member login isn&apos;t live yet. Check back shortly.
      </p>
    </section>
  );
}
