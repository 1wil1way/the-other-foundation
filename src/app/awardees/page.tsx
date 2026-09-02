import type { Metadata } from "next";
import InterviewFeature from "@/components/sections/awardees/InterviewFeature";
import RecentGrants from "@/components/sections/awardees/RecentGrants";
import TheNumbers from "@/components/sections/awardees/TheNumbers";

export const metadata: Metadata = {
  title: "Awardees — The Other Foundation",
  description: "Every funded project, and the numbers behind them.",
};

export default function AwardeesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <InterviewFeature />
      <RecentGrants />
      <TheNumbers />
    </div>
  );
}
