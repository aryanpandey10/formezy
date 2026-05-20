const LEADERSHIP_DIR = "Leadership";

function leadershipSrc(filename: string): string {
  return `/images/${encodeURIComponent(LEADERSHIP_DIR)}/${encodeURIComponent(filename)}`;
}

export const leadershipImages = {
  hero: leadershipSrc("LeadershipHero.png"),
  philosophy: leadershipSrc("Our Leadership Philosophy.png"),
  cta: leadershipSrc("Understand Business.png"),
} as const;

export const philosophyBullets = [
  "Lead with clarity — align technology decisions with real business outcomes.",
  "Build systems teams can adopt, trust, and scale without constant rework.",
  "Invest in long-term platform thinking, not short-term software patches.",
];

export const executiveTeam = [
  { name: "Mark Valenzia", role: "CEO" },
  { name: "Maya Anderson", role: "COO" },
  { name: "Kevin Smith", role: "CTO" },
  { name: "Tiffany White", role: "CFO" },
] as const;

export const leadershipTeam = [
  {
    name: "David White",
    role: "Director of Marketing",
    bio: "Shapes how Formezy connects with enterprises — translating platform value into clear narratives that resonate with decision-makers.",
  },
  {
    name: "Sarah Parker",
    role: "Head of Product",
    bio: "Guides product direction so every capability serves real operational needs — from workflow design to adoption across teams.",
  },
  {
    name: "John Doe",
    role: "VP of Engineering",
    bio: "Leads engineering excellence behind the platform — ensuring reliability, performance, and extensibility at enterprise scale.",
  },
  {
    name: "Emily Brown",
    role: "Director of Customer Success",
    bio: "Partners with customers through implementation and growth — helping teams realize measurable outcomes from day one.",
  },
] as const;
