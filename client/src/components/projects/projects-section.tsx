import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/constants";

type ProjectCategory = 'all' | 'ai' | 'hockey' | 'web' | 'ai-finance' | 'c-programming' | 'hockey-ai' | 'algorithms' | 'research' | 'ai-research' | 'systems' | 'python';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => {
        if (activeCategory === 'ai') {
          return project.category === 'ai' || project.category === 'hockey-ai' || project.category === 'ai-research' || project.category === 'ai-finance';
        } else if (activeCategory === 'research') {
          return project.category === 'research' || project.category === 'ai-research';
        } else if (activeCategory === 'c-programming') {
          return project.category === 'c-programming' || project.tags.includes('C Programming');
        } else if (activeCategory === 'python') {
          return project.tags.includes('Python');
        } else {
          return project.category === activeCategory;
        }
      });

  return (
    <section id="projects" ref={sectionRef} className="py-16 bg-neutral-100 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-12 text-center">Featured Projects</h2>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveCategory('ai')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'ai' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              AI Development
            </button>
            <button 
              onClick={() => setActiveCategory('ai-finance')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'ai-finance' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              AI & Finance
            </button>
            <button 
              onClick={() => setActiveCategory('hockey')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'hockey' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              Hockey Analytics
            </button>
            <button 
              onClick={() => setActiveCategory('hockey-ai')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'hockey-ai' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              Hockey & AI
            </button>
            <button 
              onClick={() => setActiveCategory('c-programming')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'c-programming' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              C Programming
            </button>
            <button 
              onClick={() => setActiveCategory('algorithms')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'algorithms' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              Algorithms
            </button>
            <button 
              onClick={() => setActiveCategory('research')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'research' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              Research
            </button>
            <button 
              onClick={() => setActiveCategory('ai-research')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'ai-research' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              AI Research
            </button>
            <button 
              onClick={() => setActiveCategory('systems')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'systems' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              Systems
            </button>
            <button 
              onClick={() => setActiveCategory('python')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'python' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              Python
            </button>
            <button 
              onClick={() => setActiveCategory('web')}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === 'web' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              Web Apps
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold font-montserrat text-primary">{project.title}</h3>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      project.category === 'ai' 
                        ? 'bg-accent/10 text-accent'
                        : project.category === 'ai-finance'
                          ? 'bg-accent/10 text-accent'
                        : project.category === 'hockey'
                          ? 'bg-secondary/10 text-secondary'
                        : project.category === 'hockey-ai'
                          ? 'bg-secondary/10 text-secondary'
                        : project.category === 'c-programming'
                          ? 'bg-purple-100 text-purple-600'
                        : project.category === 'algorithms'
                          ? 'bg-yellow-100 text-amber-600'
                        : project.category === 'research'
                          ? 'bg-green-100 text-green-600'
                        : project.category === 'ai-research'
                          ? 'bg-teal-100 text-teal-600'
                        : project.category === 'systems'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-neutral-700/10 text-neutral-700'
                    }`}>
                      {project.category === 'ai' && 'AI'}
                      {project.category === 'ai-finance' && 'AI/FINANCE'}
                      {project.category === 'hockey' && 'HOCKEY'}
                      {project.category === 'hockey-ai' && 'HOCKEY/AI'}
                      {project.category === 'c-programming' && 'C PROGRAMMING'}
                      {project.category === 'algorithms' && 'ALGORITHMS'}
                      {project.category === 'web' && 'WEB'}
                      {project.category === 'research' && 'RESEARCH'}
                      {project.category === 'ai-research' && 'AI/RESEARCH'}
                      {project.category === 'systems' && 'SYSTEMS'}
                    </span>
                  </div>
                  
                  {/* Additional category badges */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {/* C Programming tag */}
                    {(project.tags.includes('C Programming') && project.category !== 'c-programming') && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-600">
                        C PROGRAMMING
                      </span>
                    )}
                    
                    {/* Python tag */}
                    {project.tags.includes('Python') && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600">
                        PYTHON
                      </span>
                    )}
                    
                    {/* Research tag for AI Research */}
                    {(project.category === 'ai-research' && !project.tags.includes('Research')) && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                        RESEARCH
                      </span>
                    )}
                    
                    {/* AI tag for projects that use AI but aren't in the AI category */}
                    {(project.tags.includes('Machine Learning') && project.category !== 'ai' && project.category !== 'ai-research' && project.category !== 'ai-finance' && project.category !== 'hockey-ai') && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                        AI
                      </span>
                    )}
                    
                    {/* Systems tag */}
                    {(project.tags.includes('Systems Programming') && project.category !== 'systems') && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                        SYSTEMS
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.hasRepo && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 flex-shrink-0"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="w-6 h-6" 
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/OsikDerek" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-neutral-800 text-white font-semibold rounded-lg shadow hover:bg-neutral-700 transition duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-5 h-5 mr-2" 
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            Explore More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
