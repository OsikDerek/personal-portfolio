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
  price: number;
  duration: number;
  maxParticipants: number | null;
  active: boolean;
}

export const PROGRAMS: CoachingProgram[] = [
  {
    id: 1,
    name: "Elite Skating Development",
    description:
      "Intensive one-on-one skating training focusing on edge work, power, and technical refinement for competitive hockey players.",
    type: "one_on_one",
    price: 10000,
    duration: 60,
    maxParticipants: null,
    active: true,
  },
  {
    id: 4,
    name: "Video Analysis & Strategy Session",
    description:
      "Online video review of your game footage with detailed feedback and personalized improvement strategies.",
    type: "online",
    price: 5000,
    duration: 45,
    maxParticipants: null,
    active: true,
  },
  {
    id: 2,
    name: "Small Group Skills Session",
    description:
      "Develop puck handling, shooting, and game situation skills in a 3-5 player group environment with personalized attention.",
    type: "group",
    price: 7500,
    duration: 60,
    maxParticipants: null,
    active: true,
  },
  {
    id: 5,
    name: "Hockey IQ Workshop",
    description:
      "Learn to see the game at a higher level with drills and exercises designed to improve decision-making and game awareness.",
    type: "workshop",
    price: 10000,
    duration: 90,
    maxParticipants: null,
    active: true,
  },
];
