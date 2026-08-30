export type Interview = {
  /** Link to an audio/video recording or full transcript, if hosted elsewhere. */
  url?: string;
  /** A short pull-quote or excerpt from the interview to show inline. */
  excerpt?: string;
};

export type Awardee = {
  slug: string;
  projectName: string;
  recipientName: string;
  /** e.g. "August 2026" — used for grouping and display. */
  monthFunded: string;
  /** Optional — only set if the amount is disclosable. */
  amount?: string;
  /** One line, shown in the list view. */
  shortDescription: string;
  /** The problem the recipient saw, in their own words where possible. */
  whatTheySaw: string;
  /** What the money bought, specifically. */
  whatTheyBuilt: string;
  /** The outcome, any follow-on, anything replicable. */
  whatHappenedNext: string;
  quote: string;
  /** Photo paths. Most entries will start with none — that's expected. */
  photos: string[];
  interview?: Interview;
  outboundLink?: string;
  /** Must be true for the entry to appear anywhere on the site. */
  consentFlag: boolean;
};

// Placeholder entries so the templates render correctly — replace with real
// grants as they're funded. Keep newest-first; the list/grouping code does
// not re-sort for you.
export const AWARDEES: Awardee[] = [
  {
    slug: "example-with-photo",
    projectName: "Project Name",
    recipientName: "Recipient Name",
    monthFunded: "August 2026",
    amount: "$1,000",
    shortDescription: "One line on what this project actually is.",
    whatTheySaw: "The problem they saw, in their own words.",
    whatTheyBuilt: "What the money specifically bought.",
    whatHappenedNext: "The outcome, and anything replicable from it.",
    quote: "One quote from the recipient.",
    photos: ["/images/photos/awardee-example.jpg"],
    interview: {
      excerpt: "A short pull-quote from the recorded interview.",
    },
    consentFlag: true,
  },
  {
    slug: "example-without-photo",
    projectName: "Project Name",
    recipientName: "Recipient Name",
    monthFunded: "July 2026",
    shortDescription: "One line on what this project actually is.",
    whatTheySaw: "The problem they saw, in their own words.",
    whatTheyBuilt: "What the money specifically bought.",
    whatHappenedNext: "The outcome, and anything replicable from it.",
    quote: "One quote from the recipient.",
    photos: [],
    consentFlag: true,
  },
];

export function getVisibleAwardees(): Awardee[] {
  return AWARDEES.filter((a) => a.consentFlag);
}

export function getAwardeeBySlug(slug: string): Awardee | undefined {
  return getVisibleAwardees().find((a) => a.slug === slug);
}

export function getRelatedAwardees(current: Awardee, count = 2): Awardee[] {
  return getVisibleAwardees()
    .filter(
      (a) => a.slug !== current.slug && a.monthFunded === current.monthFunded,
    )
    .slice(0, count);
}

export function groupByMonth(
  awardees: Awardee[],
): { month: string; entries: Awardee[] }[] {
  const groups: { month: string; entries: Awardee[] }[] = [];
  for (const awardee of awardees) {
    const group = groups.find((g) => g.month === awardee.monthFunded);
    if (group) {
      group.entries.push(awardee);
    } else {
      groups.push({ month: awardee.monthFunded, entries: [awardee] });
    }
  }
  return groups;
}

// Editable stats for "The numbers" — update as real totals come in.
export const AWARDEE_STATS = {
  grantsAwardedToDate: 0,
  dollarsDistributed: "$0",
  monthsRunning: 0,
  targetMonthly: "$10,000",
  targetMembers: 100,
};
