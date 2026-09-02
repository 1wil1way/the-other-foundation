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
  /** e.g. "August 2026" — used for grouping and display. Leave unset until the real date is known. */
  monthFunded?: string;
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
  /** Only set when there's a real line to attribute — don't invent one. */
  quote?: string;
  /** Photo paths. Most entries will start with none — that's expected. */
  photos: string[];
  interview?: Interview;
  outboundLink?: string;
  /** Must be true for the entry to appear anywhere on the site. */
  consentFlag: boolean;
};

// Reconciled against the live grants list at otherfoundationbham.org/awardees/
// (real project names, real funded months, real outbound links) plus the
// campaign interview video (public/videos/interview.mp4) for the three
// recipients who appear in it. No photos yet — replace photos: [] as
// pictures come in.
export const AWARDEES: Awardee[] = [
  {
    slug: "project-bluebird",
    projectName: "Project Bluebird",
    recipientName: "Blue Bird Project",
    monthFunded: "June 2026",
    shortDescription: "Snack packs, hygiene kits, and steady relationships for people living unhoused in Birmingham.",
    whatTheySaw: "Daily encounters with people in need on their commutes, which grew into regular visits to encampments around the city.",
    whatTheyBuilt: "A grassroots outreach effort distributing snack packs, drinks, and hygiene kits, and connecting people to longer-term resources.",
    whatHappenedNext: "What started as supplies kept in a car has grown into an ongoing, named effort with real structure behind it.",
    quote: "We focus on dignity, connection, and compassion — not just transactions.",
    photos: [],
    outboundLink: "https://www.bhamsmog.org/bluebird",
    consentFlag: true,
  },
  {
    slug: "evergreen-roots-community-garden",
    projectName: "Evergreen Roots Community Garden",
    recipientName: "Evergreen Roots Community Garden",
    monthFunded: "June 2026",
    shortDescription: "A community garden bringing shared growing space to the Evergreen neighborhood.",
    whatTheySaw: "The Evergreen neighborhood needed a shared space to grow food together.",
    whatTheyBuilt: "Evergreen Roots Community Garden — a neighborhood growing space open to the community.",
    whatHappenedNext: "The garden continues serving as a shared growing space for Evergreen neighbors.",
    photos: [],
    consentFlag: true,
  },
  {
    slug: "girls-rock-birmingham",
    projectName: "Equipment for Girls Rock Camp",
    recipientName: "Girls Rock Birmingham",
    monthFunded: "June 2026",
    shortDescription: "Instruments and gear for Girls Rock Birmingham's summer camp.",
    whatTheySaw: "Girls and gender-expansive youth needed instruments and equipment to take part in camp.",
    whatTheyBuilt: "Equipment for Girls Rock Camp, a week of instrument lessons, songwriting, band practice, and performances for ages 10–16.",
    whatHappenedNext: "Girls Rock Birmingham continues running camp and community events for young musicians.",
    photos: [],
    outboundLink: "https://www.girlsrockbham.org/",
    consentFlag: true,
  },
  {
    slug: "redemptive-cycles",
    projectName: "Sliding Scale Repair Program",
    recipientName: "Redemptive Cycles",
    monthFunded: "May 2026",
    shortDescription: "Affordable bike repair for Birmingham through Redemptive Cycles' sliding scale program.",
    whatTheySaw: "Reliable transportation is out of reach for a lot of Birmingham if a bike repair costs full price.",
    whatTheyBuilt: "A sliding scale repair program, part of a shop that also runs earn-a-bike and weekly community rides.",
    whatHappenedNext: "Redemptive Cycles continues serving Birmingham with affordable, reliable transportation.",
    quote: "Our mission is to restore value in communities, in people, and in bicycles.",
    photos: [],
    outboundLink: "https://www.redemptivecycles.com/",
    consentFlag: true,
  },
  {
    slug: "the-way-out-program",
    projectName: "The Way Out Program",
    recipientName: "Jessic Evans",
    monthFunded: "May 2026",
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
  {
    slug: "neighborhood-food-pantry",
    projectName: "Neighborhood Food Pantry",
    recipientName: "Amanda Williams",
    monthFunded: "May 2026",
    shortDescription: "A free, always-stocked food pantry for neighbors in Grayson Valley, Northeast Birmingham.",
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
    slug: "jubilee-orchard",
    projectName: "Jubilee Orchard",
    recipientName: "Dr. Amanda Clark",
    monthFunded: "April 2026",
    shortDescription: "Neighborhood restoration in Titusville through a community garden building food access and stewardship.",
    whatTheySaw: "North Titusville needed a shared green space — somewhere for food access, beautification, and neighbors to gather and heal together.",
    whatTheyBuilt: "Jubilee Orchard: a peaceful site for reconciliation and education, working toward community food sovereignty in the neighborhood.",
    whatHappenedNext: "The garden continues to grow as part of a wider push in Titusville toward beautification and community-led stewardship.",
    quote: "I saw on Facebook that The Other Foundation was funding projects, so I took the chance and put in an application.",
    photos: [],
    interview: {
      url: "/videos/interview.mp4",
    },
    outboundLink: "https://www.instagram.com/dramandacphd/?hl=en",
    consentFlag: true,
  },
  {
    slug: "rooted-in-ensley",
    projectName: "Rooted in Ensley",
    recipientName: "Rooted In Ensley",
    monthFunded: "April 2026",
    shortDescription: "A community garden growing food and urban agriculture skills in Ensley.",
    whatTheySaw: "Ensley needed a shared space for community gardening and urban agriculture.",
    whatTheyBuilt: "Rooted in Ensley — a community garden run by neighbors, for neighbors.",
    whatHappenedNext: "The garden continues to grow as a hub for community gardening in Ensley.",
    photos: [],
    outboundLink: "https://www.instagram.com/rootedinensley/",
    consentFlag: true,
  },
  {
    slug: "movies-at-avondale-park",
    projectName: "Movies at Avondale Park",
    recipientName: "Friends of Avondale Park",
    monthFunded: "April 2026",
    shortDescription: "A free outdoor movie series in the Avondale Park amphitheater.",
    whatTheySaw: "Avondale needed a free, family-friendly way to gather outdoors as a community.",
    whatTheyBuilt: "A free community movie series in the Avondale Park amphitheater, with live music before each film.",
    whatHappenedNext: "The series continues each fall, bringing neighbors out to the park on Thursday nights.",
    photos: [],
    outboundLink: "https://avondalemoviesinthepark.lovable.app/",
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

export function getMonthsRunning(): number {
  const months = new Set(
    getVisibleAwardees()
      .map((a) => a.monthFunded)
      .filter((m): m is string => Boolean(m)),
  );
  return months.size;
}

const UNDATED_LABEL = "Recently funded";

export function groupByMonth(
  awardees: Awardee[],
): { month: string; entries: Awardee[] }[] {
  const groups: { month: string; entries: Awardee[] }[] = [];
  for (const awardee of awardees) {
    const month = awardee.monthFunded ?? UNDATED_LABEL;
    const group = groups.find((g) => g.month === month);
    if (group) {
      group.entries.push(awardee);
    } else {
      groups.push({ month, entries: [awardee] });
    }
  }
  return groups;
}

// Editable stats for "The numbers" — update as real totals come in.
// grantsAwardedToDate and monthsRunning are computed from AWARDEES directly.
// dollarsDistributed isn't tracked yet — add it back once real totals exist.
export const AWARDEE_STATS = {
  targetMonthly: "$10,000",
  targetMembers: 100,
};
