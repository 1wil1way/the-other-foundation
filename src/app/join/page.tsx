import type { Metadata } from "next";
import MembershipIntro from "@/components/sections/join/MembershipIntro";
import WhatYouGet from "@/components/sections/join/WhatYouGet";
import MembershipForm from "@/components/sections/join/MembershipForm";
import NotSureYet from "@/components/sections/join/NotSureYet";
import BusinessMembership from "@/components/sections/join/BusinessMembership";
import GiveOnce from "@/components/sections/join/GiveOnce";

export const metadata: Metadata = {
  title: "Join — The Other Foundation",
  description: "Become a member and help decide who gets funded next.",
};

export default function JoinPage() {
  return (
    <div className="flex flex-1 flex-col">
      <MembershipIntro />
      <WhatYouGet />
      <MembershipForm />
      <NotSureYet />
      <BusinessMembership />
      <GiveOnce />
    </div>
  );
}
