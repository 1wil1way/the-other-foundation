import type { Metadata } from "next";
import NameOrigin from "@/components/sections/about/NameOrigin";
import HowVotingWorks from "@/components/sections/about/HowVotingWorks";
import WhoRunsIt from "@/components/sections/about/WhoRunsIt";
import TheLogo from "@/components/sections/about/TheLogo";

export const metadata: Metadata = {
  title: "About — The Other Foundation",
  description: "Where the name comes from, how voting works, and who runs it.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NameOrigin />
      <HowVotingWorks />
      <WhoRunsIt />
      <TheLogo />
    </div>
  );
}
