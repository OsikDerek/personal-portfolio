// Social media links
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
  github: "https://github.com/johndoe",
  instagram: "https://instagram.com/johndoe"
};

// Projects data
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'ai' | 'hockey' | 'web';
  tags: string[];
  githubLink: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hockey Vision AI",
    description: "Computer vision system that tracks player movements and provides real-time performance analytics during games and practice.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["Python", "TensorFlow", "OpenCV"],
    githubLink: "https://github.com/johndoe/hockey-vision-ai"
  },
  {
    id: 2,
    title: "Skating Coach App",
    description: "Mobile application for hockey coaches to analyze skating technique, track progress, and create personalized drills for players.",
    image: "https://images.unsplash.com/photo-1528659882437-b89a74bc157f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "hockey",
    tags: ["React Native", "Firebase", "ML Kit"],
    githubLink: "https://github.com/johndoe/skating-coach"
  },
  {
    id: 3,
    title: "Team Manager Dashboard",
    description: "Web application for hockey team managers to handle scheduling, player stats, and team communications in one platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "web",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/johndoe/team-manager"
  },
  {
    id: 4,
    title: "Game Strategy AI",
    description: "AI system that analyzes game footage to identify patterns, predict opponent strategies, and recommend tactical adjustments.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["Python", "PyTorch", "SQL"],
    githubLink: "https://github.com/johndoe/game-strategy-ai"
  },
  {
    id: 5,
    title: "Training Program Builder",
    description: "Online platform for creating personalized hockey training programs with video demonstrations and progress tracking.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "web",
    tags: ["React", "Express", "PostgreSQL"],
    githubLink: "https://github.com/johndoe/training-program-builder"
  },
  {
    id: 6,
    title: "Commentary Insights",
    description: "NLP system that analyzes broadcast commentary to extract valuable insights about player performance and game trends.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["BERT", "FastAPI", "Redis"],
    githubLink: "https://github.com/johndoe/commentary-insights"
  }
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
    title: "Elite Hockey",
    icon: "hockey-puck"
  },
  {
    id: "coach",
    title: "Skills Development",
    icon: "chalkboard-teacher"
  },
  {
    id: "ai-engineer",
    title: "AI & Sports Tech",
    icon: "robot"
  }
];

// Hockey Player skills
export interface Skill {
  name: string;
  percentage: number;
}

export const HOCKEY_SKILLS: Skill[] = [
  { name: "Skating", percentage: 95 },
  { name: "Passing", percentage: 90 },
  { name: "Shooting", percentage: 85 },
  { name: "Strategy", percentage: 95 },
  { name: "Defense", percentage: 90 },
  { name: "Leadership", percentage: 95 }
];

// AI Technical skills
export const AI_SKILLS: Skill[] = [
  { name: "Python", percentage: 95 },
  { name: "TensorFlow", percentage: 90 },
  { name: "PyTorch", percentage: 85 },
  { name: "OpenCV", percentage: 90 },
  { name: "NLTK", percentage: 80 },
  { name: "scikit-learn", percentage: 85 }
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
  { value: "other", label: "Other" }
];
