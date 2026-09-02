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

// Transcribed from the campaign interview video (public/videos/interview.mp4).
// monthFunded is a placeholder — swap in the real funded month once known.
// No photos yet — replace photos: [] as pictures come in.
export const AWARDEES: Awardee[] = [
  {
    slug: "grayson-valley-free-food-pantry",
    projectName: "Grayson Valley Free Food Pantry",
    recipientName: "Amanda Williams",
    monthFunded: "September 2026",
    shortDescription: "A free, always-stocked food pantry for neighbors in Grayson Valley.",
    whatTheySaw: "Families nearby needed easier, no-questions-asked access to groceries close to home.",
    whatTheyBuilt: "The Grayson Valley Free Food Pantry — a stocked, always-open pantry box for the neighborhood.",
    whatHappenedNext: "The pantry stays stocked for anyone in the neighborhood who needs it.",
    quote: "I heard about The Other Foundation on social media.",
    photos: [],
    interview: {
      url: "/videos/interview.mp4",
    },
    consentFlag: true,
  },
  {
    slug: "jubilee-orchard-community-garden",
    projectName: "Jubilee Orchard Community Garden",
    recipientName: "Dr. Amanda Clark",
    monthFunded: "September 2026",
    shortDescription: "A community garden in North Titusville building food access and neighborhood stewardship.",
    whatTheySaw: "North Titusville needed a shared green space — somewhere for food access, beautification, and neighbors to gather and heal together.",
    whatTheyBuilt: "The Jubilee Orchard Community Garden: a peaceful site for reconciliation and education, working toward community food sovereignty in the neighborhood.",
    whatHappenedNext: "The garden continues to grow as part of a wider push in Titusville toward beautification and community-led stewardship.",
    quote: "I saw on Facebook that The Other Foundation was funding projects, so I took the chance and put in an application.",
    photos: [],
    interview: {
      url: "/videos/interview.mp4",
    },
    consentFlag: true,
  },
  {
    slug: "the-way-out-program",
    projectName: "The Way Out Program",
    recipientName: "Jessic Evans",
    monthFunded: "September 2026",
    shortDescription: "A 12-week life-coaching rehabilitation program reducing barriers to homelessness and relapse.",
    whatTheySaw: "People coming out of hard circumstances needed more than a program — they needed tools to make better decisions and build stability.",
    whatTheyBuilt: "The Way Out Program (TWOP): a 12-week life-coaching rehabilitation program that helps reduce homelessness, relapse, and recidivism.",
    whatHappenedNext: "TWOP continues equipping people with the tools to build healthier relationships and long-term stability, not just short-term fixes.",
    quote: "The Other Foundation is a great place for people like myself who have an idea to do a job. We're all together — that's the kind of place I want to live in.",
    photos: [],
    interview: {
      url: "/videos/interview.mp4",
    },
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
