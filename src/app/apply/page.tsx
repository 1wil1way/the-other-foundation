import type { Metadata } from "next";
import EligibilityCheck from "@/components/sections/apply/EligibilityCheck";
import HowItWorksApply from "@/components/sections/apply/HowItWorksApply";
import Tips from "@/components/sections/apply/Tips";
import ReadyCTA from "@/components/sections/apply/ReadyCTA";

export const metadata: Metadata = {
  title: "Apply — The Other Foundation",
  description: "See if you're eligible to apply for a grant.",
};

export default function ApplyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <EligibilityCheck />
      <HowItWorksApply />
      <Tips />
      <ReadyCTA />
    </div>
  );
}
