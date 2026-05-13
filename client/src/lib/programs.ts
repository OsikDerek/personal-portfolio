export type CoachingProgramType =
  | "one_on_one"
  | "group"
  | "camp"
  | "workshop"
  | "online";

export interface CoachingProgram {
  id: number;
  name: string;
  description: string;
  type: CoachingProgramType;
  /** Display string for price. Ranges and case-by-case framing are first-class. */
  priceLabel: string;
  /** Optional small caption shown under the price (e.g. "case-by-case"). */
  priceNote?: string;
  /** Display string for duration (e.g. "50-60 minutes"). */
  durationLabel: string;
  maxParticipants: number | null;
  active: boolean;
}

// Pricing source of truth: knowledge/business/state.md (Coach Osik), refined 2026-05-13.
// Tailored Coaching leads with case-by-case framing. Other programs show flat rates or ranges.
export const PROGRAMS: CoachingProgram[] = [
  {
    id: 0,
    name: "1-on-1 Tailored Coaching",
    description:
      "Custom private session built around your level, ice slot, and goals. Skating, skills, or game situations. Rate set case-by-case after we talk.",
    type: "one_on_one",
    priceLabel: "$60-100 per session",
    priceNote: "case-by-case",
    durationLabel: "50-60 minutes",
    maxParticipants: 1,
    active: true,
  },
  {
    id: 1,
    name: "Elite Skating Development",
    description:
      "Intensive one-on-one skating focused on edges, power, and technical refinement for competitive players.",
    type: "one_on_one",
    priceLabel: "$80 per hour",
    durationLabel: "60 minutes",
    maxParticipants: 1,
    active: true,
  },
  {
    id: 2,
    name: "Small-Group Skills Session",
    description:
      "Puck handling, shooting, and game-situation skills in a small-group setting with personalized attention.",
    type: "group",
    priceLabel: "$50-75 per session",
    durationLabel: "60 minutes",
    maxParticipants: 5,
    active: true,
  },
  {
    id: 3,
    name: "Hockey IQ Workshop",
    description:
      "Drills and scenarios that train decision-making, scanning, and game awareness. Built for players who want to see the game faster.",
    type: "workshop",
    priceLabel: "$80 per session",
    durationLabel: "90 minutes",
    maxParticipants: null,
    active: true,
  },
  {
    id: 4,
    name: "Video Analysis & Strategy Session",
    description:
      "Online review of your game footage with detailed feedback and a personalized improvement plan.",
    type: "online",
    priceLabel: "$40 per session",
    durationLabel: "45 minutes",
    maxParticipants: 1,
    active: true,
  },
  {
    id: 5,
    name: "Multi-Student Group Rate",
    description:
      "Book a full ice slot with 3-4 students. Lower per-student rate, same coaching attention.",
    type: "group",
    priceLabel: "$150-170 total per slot",
    priceNote: "3-4 students",
    durationLabel: "60 minutes",
    maxParticipants: 4,
    active: true,
  },
];
