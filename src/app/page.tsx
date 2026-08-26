import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import TheOtherAwardees from "@/components/sections/TheOtherAwardees";
import Quote from "@/components/sections/Quote";
import WhoCanApply from "@/components/sections/WhoCanApply";
import AboutStory from "@/components/sections/AboutStory";
import SplitMembershipCTA from "@/components/sections/SplitMembershipCTA";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <HowItWorks />
      <TheOtherAwardees />
      <WhoCanApply />
      <Quote />
      <AboutStory />
      <SplitMembershipCTA />
    </div>
  );
}
