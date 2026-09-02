import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAwardeeBySlug, getRelatedAwardees, getVisibleAwardees } from "@/lib/awardees";
import StoryHero from "@/components/sections/awardee-story/StoryHero";
import StorySection from "@/components/sections/awardee-story/StorySection";
import Interview from "@/components/sections/awardee-story/Interview";
import Quote from "@/components/sections/Quote";
import WhatsNext from "@/components/sections/awardee-story/WhatsNext";
import RelatedAwardees from "@/components/sections/awardee-story/RelatedAwardees";

export function generateStaticParams() {
  return getVisibleAwardees().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const awardee = getAwardeeBySlug(slug);
  if (!awardee) return {};

  const title = `${awardee.projectName} — The Other Foundation`;
  const description = awardee.shortDescription;
  const photo = awardee.photos[0];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: photo ? [{ url: photo }] : undefined,
    },
    twitter: {
      card: photo ? "summary_large_image" : "summary",
      title,
      description,
      images: photo ? [photo] : undefined,
    },
  };
}

export default async function AwardeeStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const awardee = getAwardeeBySlug(slug);
  if (!awardee) notFound();

  const related = getRelatedAwardees(awardee);

  return (
    <div className="flex flex-1 flex-col">
      <StoryHero awardee={awardee} />
      <StorySection heading="What they saw." body={awardee.whatTheySaw} theme="cream" />
      <StorySection heading="What they built." body={awardee.whatTheyBuilt} theme="coral" />
      <StorySection heading="What happened next." body={awardee.whatHappenedNext} theme="teal" />
      <Interview interview={awardee.interview} />
      {awardee.quote && <Quote text={awardee.quote} />}
      <WhatsNext />
      <RelatedAwardees month={awardee.monthFunded} related={related} />
    </div>
  );
}
