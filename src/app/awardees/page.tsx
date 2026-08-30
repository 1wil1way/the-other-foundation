import type { Metadata } from "next";
import RecentGrants from "@/components/sections/awardees/RecentGrants";
import TheNumbers from "@/components/sections/awardees/TheNumbers";

export const metadata: Metadata = {
  title: "Awardees — The Other Foundation",
  description: "Every funded project, and the numbers behind them.",
};

export default function AwardeesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <RecentGrants />
      <TheNumbers />
    </div>
  );
}
