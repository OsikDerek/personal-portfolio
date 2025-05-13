import React, { useEffect, useRef } from "react";

export default function AboutSection() {
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

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/3">
            {/* Hockey player in action photo */}
            <img 
              src="https://pixabay.com/get/g6dcf5bff4b374210fe5c83e9ee316e993dc998a7edc4df40de472ef7d70e96c72602677f3ef8345d656022fcee44d4950f631719edc574d57ed4b57c39cd7943_1280.jpg" 
              alt="John Doe playing professional hockey" 
              className="rounded-xl shadow-lg w-full h-auto mb-6"
            />
            
            <div className="bg-neutral-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-4">Quick Bio</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Based in Toronto, Canada</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5"></path>
                  </svg>
                  <span>BS in Computer Science, MIT</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  <span>10+ years as professional hockey player</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                  <span>5+ years in AI development</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  <span>Certified hockey skills coach</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-lg text-neutral-700 mb-6">
              I've always believed in pushing boundaries. As a professional hockey player, I learned the value of discipline, teamwork, and constant improvement. These same principles guide my work in AI development and coaching.
            </p>
            
            <p className="text-lg text-neutral-700 mb-6">
              My unique background gives me a perspective few others have – combining athletic performance optimization with cutting-edge technology. Whether I'm developing AI solutions for sports analytics or coaching young players on the ice, I bring passion and expertise to everything I do.
            </p>
            
            <h3 className="text-2xl font-bold font-montserrat text-primary mt-8 mb-4">My Professional Journey</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 p-6 rounded-xl">
                <div className="text-4xl text-primary mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <h4 className="text-xl font-bold font-montserrat text-primary mb-2">Hockey Career</h4>
                <p className="text-neutral-700">
                  Played professionally for 10+ years in top leagues, represented national team, and developed specialized skating techniques.
                </p>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl">
                <div className="text-4xl text-secondary mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold font-montserrat text-secondary mb-2">Coaching</h4>
                <p className="text-neutral-700">
                  Certified skating and skills coach helping players of all levels improve their technical abilities and game awareness.
                </p>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl">
                <div className="text-4xl text-accent mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="6" height="10" x="3" y="7" rx="1"></rect>
                    <rect width="6" height="14" x="15" y="3" rx="1"></rect>
                    <path d="M9 9h3v4"></path>
                    <path d="M9 17h3"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold font-montserrat text-accent mb-2">AI Development</h4>
                <p className="text-neutral-700">
                  Specialized in machine learning solutions for sports analytics, computer vision, and performance optimization.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-montserrat text-primary mt-8 mb-4">Skills & Expertise</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Python</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">TensorFlow</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">PyTorch</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Computer Vision</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">NLP</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Data Analysis</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Speed Skating</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Skills Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
