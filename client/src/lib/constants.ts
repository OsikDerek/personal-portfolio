// Social media links
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/derek-osik-8a8ab687/",
  twitter: "https://twitter.com/derekvosik",
  github: "https://github.com/OsikDerek",
  instagram: "https://instagram.com/derekosik",
};

// Projects data
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "ai" | "hockey" | "web";
  tags: string[];
  githubLink: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hockey Vision AI",
    description:
      "Computer vision system that tracks player movements and provides real-time performance analytics during games and practice.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["Python", "TensorFlow", "OpenCV"],
    githubLink: "https://github.com/derekosik/hockey-vision-ai",
  },
  {
    id: 2,
    title: "Hockey Training Platform",
    description:
      "Comprehensive platform that combines skating technique analysis with personalized training programs, video demonstrations, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1528659882437-b89a74bc157f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "hockey",
    tags: ["React Native", "Firebase", "ML Kit", "Express", "PostgreSQL"],
    githubLink: "https://github.com/derekosik/hockey-training-platform",
  },
  {
    id: 3,
    title: "Knight Isolation Game",
    description:
      "Implementation of a chess-inspired game where players move knights on a board trying to isolate their opponent. Features AI opponents with different difficulty levels.",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["C", "Game Theory", "Minimax", "Alpha-Beta Pruning"],
    githubLink: "https://github.com/derekosik/knight-isolation",
  },
  {
    id: 4,
    title: "Hockey Strategy AI",
    description:
      "AI system that analyzes game footage to identify patterns, predict opponent strategies, and recommend tactical adjustments.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["Python", "PyTorch", "SQL"],
    githubLink: "https://github.com/derekosik/game-strategy-ai",
  },
  {
    id: 5,
    title: "Dehydration Detection",
    description:
      "Wearable technology research project for monitoring and detecting dehydration in athletes, elder adults, and military personnel using machine learning algorithms.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["Machine Learning", "Wearable Tech", "Market Research", "Healthcare"],
    githubLink: "https://github.com/derekosik/dehydration-detection",
  },
];

// Career tabs content
export interface CareerContent {
  id: string;
  title: string;
  icon: string;
}

export const CAREER_TABS: CareerContent[] = [
  {
    id: "hockey-player",
    title: "Professional Hockey",
    icon: "hockey-puck",
  },
  {
    id: "coach",
    title: "Skills Development",
    icon: "chalkboard-teacher",
  },
  {
    id: "ai-engineer",
    title: "AI & Sports Tech",
    icon: "robot",
  },
];

// Hockey Player skills
export interface Skill {
  name: string;
  percentage: number;
}

export const HOCKEY_SKILLS: Skill[] = [
  { name: "Skating", percentage: 95 },
  { name: "Passing", percentage: 90 },
  { name: "Shooting", percentage: 85},
  { name: "Strategy", percentage: 85 },
  { name: "Defense", percentage: 81 },
  { name: "Physicality", percentage: 70 },
];

// AI Technical skills
export const AI_SKILLS: Skill[] = [
  { name: "Python", percentage: 85 },
  { name: "VS Code", percentage: 90 },
  { name: "C/C++", percentage: 70 },
  { name: "Search Algorithms", percentage: 79 },
  { name: "Data Analysis", percentage: 88 },
  { name: "Model Training", percentage: 90 },
];

// Contact form subject options
export interface SubjectOption {
  value: string;
  label: string;
}

export const SUBJECT_OPTIONS: SubjectOption[] = [
  { value: "consulting", label: "AI Consulting" },
  { value: "coaching", label: "Hockey Coaching" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "collaboration", label: "Project Collaboration" },
  { value: "other", label: "Other" },
];
