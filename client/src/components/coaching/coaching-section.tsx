import React, { useEffect, useRef, useState } from "react";
import { PROGRAMS, type CoachingProgram } from "@/lib/programs";

export default function CoachingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProgram, setSelectedProgram] = useState<CoachingProgram | null>(null);

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

  const programs = PROGRAMS;

  const handleProgramClick = (program: CoachingProgram) => {
    setSelectedProgram(program);
  };

  const getProgramTypeLabel = (type: string) => {
    switch (type) {
      case 'one_on_one': return 'One-on-One';
      case 'group': return 'Group Session';
      case 'camp': return 'Camp';
      case 'workshop': return 'Workshop';
      case 'online': return 'Online Training';
      default: return type;
    }
  };

  return (
    <section id="coaching" ref={sectionRef} className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-6 text-center">Coaching Services</h2>
        <p className="text-lg text-neutral-700 mb-12 text-center max-w-3xl mx-auto">
          Professional training programs designed to elevate your skills, whether you're just starting out 
          or looking to reach elite performance levels.
        </p>
        
        {programs.length === 0 ? (
          <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold font-montserrat text-primary mb-2">Coming Soon</h3>
            <p className="text-neutral-700">
              New coaching programs are being prepared. Please check back soon or contact for custom training options.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleProgramClick(program)}
              >
                <div className={`h-2 ${
                  program.type === 'one_on_one' ? 'bg-secondary' : 
                  program.type === 'group' ? 'bg-primary' : 
                  program.type === 'camp' ? 'bg-accent' : 
                  'bg-neutral-400'
                }`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-montserrat text-primary">{program.name}</h3>
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                      {getProgramTypeLabel(program.type)}
                    </span>
                  </div>
                  <p className="text-neutral-700 mb-6">{program.description}</p>
                  <div className="flex justify-between pt-4 border-t border-neutral-100">
                    <div className="text-neutral-500">
                      <span className="block text-sm">Duration</span>
                      <span className="font-medium">{program.durationLabel}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-neutral-500">Price</span>
                      <span className="text-lg font-bold text-primary">{program.priceLabel}</span>
                      {program.priceNote && (
                        <span className="block text-xs text-neutral-500 mt-1">{program.priceNote}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
            Request Custom Training
          </a>
        </div>
      </div>
    </section>
  );
}