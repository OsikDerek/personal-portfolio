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
  category: "ai" | "hockey" | "web" | "ai-finance" | "c-programming" | "hockey-ai" | "algorithms" | "research" | "ai-research" | "systems";
  tags: string[];
  githubLink: string;
}

export const PROJECTS: Project[] = [
  {
    id: 12,
    title: "Multithreaded File Server",
    description:
      "Designed and implemented a multi-threaded server that serves static files based on the GetFile protocol (HTTP-like). Created a multi-threaded client as load generator for testing scalability. Implemented in C with socket programming and POSIX threads.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "systems",
    tags: ["C", "Multithreading", "Socket Programming", "Systems Programming", "Performance Optimization", "Georgia Tech", "C Programming"],
    githubLink: "https://github.com/derekosik/multithreaded-server",
  },
  {
    id: 1,
    title: "Discipline & Mental Health Research",
    description:
      "Cognitive science research exploring how structured discipline shapes self-representation and emotional resilience in children and adolescents. Examines mechanisms that link early discipline with long-term mental health outcomes.",
    image:
      "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "research",
    tags: ["Cognitive Science", "Mental Health", "Neural Networks", "Child Development", "Georgia Tech"],
    githubLink: "https://github.com/derekosik/discipline-mental-health-research",
  },
  {
    id: 2,
    title: "Stock Market Neural Network",
    description:
      "Implemented a neural network agent that predicts the direction of Tesla stock price movements using artificial neural networks and technical indicators.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai-finance",
    tags: ["Neural Networks", "Machine Learning", "Stock Market", "Financial Analysis", "Python"],
    githubLink: "https://github.com/derekosik/stock-nn-prediction",
  },
  {
    id: 3,
    title: "Portfolio Optimization with Riskfolio",
    description:
      "Financial analysis project using Python's Riskfolio library to optimize investment portfolios through various risk measurement models and customizable constraints.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai-finance",
    tags: ["Finance", "Data Analysis", "Portfolio Optimization", "Python"],
    githubLink: "https://github.com/derekosik/portfolio-optimization",
  },
  {
    id: 11,
    title: "Facemask Recognition System",
    description:
      "Computer vision system that detects whether individuals are wearing face masks properly. Created during COVID-19 to help enforce mask policies in public spaces.",
    image:
      "https://images.unsplash.com/photo-1585828292920-638a2a78cb38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["Machine Learning", "Computer Vision", "COVID-19", "Public Health", "Python"],
    githubLink: "https://github.com/derekosik/facemask-recognition",
  },
  {
    id: 4,
    title: "Dehydration Detection",
    description:
      "Wearable technology research project for monitoring and detecting dehydration in athletes, elder adults, and military personnel using machine learning algorithms.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai-research",
    tags: ["Machine Learning", "Wearable Tech", "Market Research", "Healthcare", "Research"],
    githubLink: "https://github.com/derekosik/dehydration-detection",
  },
  {
    id: 5,
    title: "Knight Isolation Game",
    description:
      "Implementation of a chess-inspired game where players move knights on a board trying to isolate their opponent. Features AI opponents with different difficulty levels.",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "ai",
    tags: ["C", "Game Theory", "Minimax", "Alpha-Beta Pruning", "C Programming"],
    githubLink: "https://github.com/derekosik/knight-isolation",
  },
  {
    id: 6,
    title: "Card Game War (C)",
    description:
      "Implementation of the classic card game 'War' in C. Players draw cards from their deck, compare ranks and suits, with the winner taking both cards. Includes memory management and randomized gameplay.",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "c-programming",
    tags: ["C", "Game Development", "Data Structures", "Algorithms"],
    githubLink: "https://github.com/derekosik/card-game-war",
  },
  {
    id: 10,
    title: "Maze Search Algorithms",
    description:
      "Implementation of various search algorithms (BFS, DFS, A*, Dijkstra's) to solve maze navigation problems with different heuristics and performance comparisons.",
    image:
      "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "algorithms",
    tags: ["Python", "Search Algorithms", "Pathfinding", "Heuristics"],
    githubLink: "https://github.com/derekosik/maze-search-algorithms",
  },
  {
    id: 7,
    title: "Hockey Vision AI (In Progress)",
    description:
      "Computer vision system that tracks player movements and provides real-time performance analytics during games and practice.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "hockey-ai",
    tags: ["Python", "TensorFlow", "OpenCV"],
    githubLink: "https://github.com/derekosik/hockey-vision-ai",
  },
  {
    id: 8,
    title: "Hockey Training Platform (In Progress)",
    description:
      "Comprehensive platform that combines skating technique analysis with personalized training programs, video demonstrations, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1528659882437-b89a74bc157f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "hockey",
    tags: ["React Native", "Firebase", "ML Kit", "Express", "PostgreSQL"],
    githubLink: "https://github.com/derekosik/hockey-training-platform",
  },
  {
    id: 9,
    title: "Hockey Strategy AI (In Progress)",
    description:
      "AI system that analyzes game footage to identify patterns, predict opponent strategies, and recommend tactical adjustments.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    category: "hockey-ai",
    tags: ["Python", "PyTorch", "SQL"],
    githubLink: "https://github.com/derekosik/game-strategy-ai",
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
  { name: "Athleticism", percentage: 98 },
  { name: "Skating", percentage: 95 },
  { name: "Passing", percentage: 90 },
  { name: "Shooting", percentage: 85},
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
