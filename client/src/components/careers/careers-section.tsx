import React, { useState, useEffect, useRef } from "react";
import { CAREER_TABS, HOCKEY_SKILLS, AI_SKILLS } from "@/lib/constants";
import { ProgressSkill } from "@/components/ui/progress-skill";

export default function CareersSection() {
  const [activeTab, setActiveTab] = useState<string>("hockey-player");
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

  const renderTabIcon = (icon: string) => {
    switch (icon) {
      case 'hockey-puck':
        return (
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        );
      case 'chalkboard-teacher':
        return (
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
        );
      case 'robot':
        return (
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="6" height="10" x="3" y="7" rx="1"></rect>
            <rect width="6" height="14" x="15" y="3" rx="1"></rect>
            <path d="M9 9h3v4"></path>
            <path d="M9 17h3"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="careers" ref={sectionRef} className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-12 text-center">Professional Disciplines</h2>
        
        <div className="mb-10">
          <div className="flex flex-wrap justify-center border-b">
            {CAREER_TABS.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`career-tab-btn px-6 py-3 font-medium flex items-center ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-neutral-500 hover:text-primary'
                }`}
              >
                {renderTabIcon(tab.icon)}
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Hockey Player Tab */}
        <div className={`tab-content ${activeTab === 'hockey-player' ? 'block fade-in' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="John Doe playing professional hockey" 
                className="rounded-xl shadow-lg w-full h-auto mb-6 object-cover"
              />
              
              <div className="bg-neutral-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold font-montserrat text-primary mb-4">Career Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    <span>National Championship Winner (2016, 2018)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1v8l4-4 4 4V1"></path>
                      <path d="M12 1v8l-4-4-4 4V1"></path>
                      <path d="M12 23v-8l4 4 4-4v8"></path>
                      <path d="M12 23v-8l-4 4-4-4v8"></path>
                    </svg>
                    <span>League All-Star Selection (5 seasons)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
                      <path d="M15 7a3 3 0 1 0-6 0v0h0a2 2 0 0 0 0 4h6a2 2 0 0 0 0-4v0h0Z"></path>
                    </svg>
                    <span>Most Valuable Player (2017)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Team Captain (2018-2020)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="text-secondary mt-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <span>International Tournament Experience</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">Professional Hockey Journey</h3>
              <p className="text-lg text-neutral-700 mb-6">
                My hockey career has been defined by both personal achievement and team success. Starting from the junior leagues, I quickly established myself as a player who combines technical skill with strategic thinking.
              </p>
              
              <p className="text-lg text-neutral-700 mb-6">
                Throughout my professional career, I've had the privilege of competing at the highest levels, representing my team and country in important tournaments. My playing style focuses on speed, agility, and game intelligence.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-secondary pl-4">
                  <div className="text-neutral-500 mb-1">2015 - 2020</div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-1">Toronto Maple Legends</h4>
                  <p className="text-neutral-700">Center forward position with leadership role, specializing in playmaking and penalty killing.</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <div className="text-neutral-500 mb-1">2012 - 2015</div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-1">Montreal Ice Hawks</h4>
                  <p className="text-neutral-700">Developed two-way playing style and earned reputation for speed and technical skating ability.</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <div className="text-neutral-500 mb-1">2010 - 2012</div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-1">Vancouver Wolves (Junior League)</h4>
                  <p className="text-neutral-700">Began professional career after being selected in first round draft pick, rookie of the year finalist.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold font-montserrat text-primary mb-4">Playing Style & Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  {HOCKEY_SKILLS.map((skill, index) => (
                    <ProgressSkill 
                      key={index} 
                      name={skill.name} 
                      percentage={skill.percentage} 
                      color="bg-secondary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hockey Coach Tab */}
        <div className={`tab-content ${activeTab === 'coach' ? 'block fade-in' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="John Doe coaching hockey players" 
                className="rounded-xl shadow-lg w-full h-auto mb-6 object-cover"
              />
              
              <div className="bg-neutral-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold font-montserrat text-primary mb-4">Coaching Philosophy</h3>
                <p className="text-neutral-700 mb-4">
                  My coaching approach combines technical excellence with psychological development. I believe in training the whole player – not just physical skills, but mental resilience and game awareness.
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <svg className="text-secondary mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Personalized skill development programs</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="text-secondary mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Video analysis and feedback sessions</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="text-secondary mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Mental performance and game awareness</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="text-secondary mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Biomechanical optimization for skating</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="text-secondary mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Data-driven training methodology</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">Hockey Coaching Specialties</h3>
              <p className="text-lg text-neutral-700 mb-6">
                As a certified hockey coach, I specialize in skating technique and skills development. My transition from player to coach was driven by a passion for helping others reach their full potential on the ice.
              </p>
              
              <p className="text-lg text-neutral-700 mb-6">
                I've developed a unique coaching system that integrates traditional hockey training with modern technology and data analysis – creating personalized development plans for each player based on their specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-neutral-100 p-6 rounded-xl">
                  <div className="text-3xl text-secondary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m4.8 15-.4-1.1A2 2 0 0 1 4 11.4V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6.4a2 2 0 0 1-.4 2.5L19 15"></path>
                      <path d="M12 3v5"></path>
                      <path d="M8 8h8"></path>
                      <path d="M19 15v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3"></path>
                      <path d="M4.8 15h14.4"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-2">Skating Technique</h4>
                  <p className="text-neutral-700">
                    Advanced edge work, power skating, acceleration mechanics, and agility training tailored to each player's physiology.
                  </p>
                </div>
                
                <div className="bg-neutral-100 p-6 rounded-xl">
                  <div className="text-3xl text-secondary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-2">Puck Skills</h4>
                  <p className="text-neutral-700">
                    Stick handling, passing accuracy, shooting techniques, and puck protection methods for game situations.
                  </p>
                </div>
                
                <div className="bg-neutral-100 p-6 rounded-xl">
                  <div className="text-3xl text-secondary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8h8v8H8z"></path>
                      <path d="M12 2v4"></path>
                      <path d="M2 12h4"></path>
                      <path d="M12 18v4"></path>
                      <path d="M18 12h4"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-2">Game Strategy</h4>
                  <p className="text-neutral-700">
                    Positional awareness, reading plays, decision-making skills, and adapting to different game scenarios.
                  </p>
                </div>
                
                <div className="bg-neutral-100 p-6 rounded-xl">
                  <div className="text-3xl text-secondary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 9.82C22 8.33 20.52 7 18.65 7c-1.86 0-3.35 1.33-3.35 2.82 0 1.3.92 2.39 2.19 2.7-.46.91-1.25 1.7-2.38 2.31-.4.22-.18.87.32.77 2.12-.42 3.9-1.82 4.53-3.63A3.22 3.22 0 0 0 22 9.82Z"></path>
                      <path d="M18 18.5c-.6 1.1-1.7 1.97-3.44 2.28-.68.12-.77.77-.31.98C15.64 22.42 17.74 22 19 19c-1-.32-1-1.5 0-1-2.22-3.16-10.17-1.03-10.17-6.23 0-3.28 3.72-3.97 5.78-2.84.67.37 1.28-.17.78-.77-1.6-1.93-6.96-1.11-7.7 2.4-.42 1.97.18 3.58 1.34 4.79 2.31 2.4 5.32 2.54 5.32 5.15 0 1.23-.95 1.97-2.2 2.23-.58.12-.45.82.07.87 2.48.2 5.02-1.26 5.02-3.4 0-1.22-.59-1.96-1.24-2.5"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-2">Mental Training</h4>
                  <p className="text-neutral-700">
                    Focus enhancement, pressure management, confidence building, and developing a growth mindset for long-term success.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold font-montserrat text-primary mb-4">Coaching Experience</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="text-neutral-500 mb-1">2018 - Present</div>
                    <h4 className="text-xl font-bold font-montserrat text-primary mb-1">Elite Skills Development Coach</h4>
                    <p className="text-neutral-700">Private coaching for professional and elite youth players, focusing on advanced technique and personalized improvement plans.</p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="text-neutral-500 mb-1">2016 - 2020</div>
                    <h4 className="text-xl font-bold font-montserrat text-primary mb-1">Toronto Youth Hockey Association</h4>
                    <p className="text-neutral-700">Head skills coach for U16 and U18 elite development programs, creating comprehensive training curricula for team and individual skills.</p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="text-neutral-500 mb-1">2015 - 2018</div>
                    <h4 className="text-xl font-bold font-montserrat text-primary mb-1">High Performance Hockey Academy</h4>
                    <p className="text-neutral-700">Skating specialist for summer intensive training camps, working with players from junior to professional levels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Consultant & Engineer Tab */}
        <div className={`tab-content ${activeTab === 'ai-engineer' ? 'block fade-in' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="John Doe working on AI development" 
                className="rounded-xl shadow-lg w-full h-auto mb-6 object-cover"
              />
              
              <div className="bg-neutral-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold font-montserrat text-accent mb-4">AI Specializations</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg flex items-center">
                    <svg className="text-accent mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 9.82C22 8.33 20.52 7 18.65 7c-1.86 0-3.35 1.33-3.35 2.82 0 1.3.92 2.39 2.19 2.7-.46.91-1.25 1.7-2.38 2.31-.4.22-.18.87.32.77 2.12-.42 3.9-1.82 4.53-3.63A3.22 3.22 0 0 0 22 9.82Z"></path>
                      <path d="M18 18.5c-.6 1.1-1.7 1.97-3.44 2.28-.68.12-.77.77-.31.98C15.64 22.42 17.74 22 19 19c-1-.32-1-1.5 0-1-2.22-3.16-10.17-1.03-10.17-6.23 0-3.28 3.72-3.97 5.78-2.84.67.37 1.28-.17.78-.77-1.6-1.93-6.96-1.11-7.7 2.4-.42 1.97.18 3.58 1.34 4.79 2.31 2.4 5.32 2.54 5.32 5.15 0 1.23-.95 1.97-2.2 2.23-.58.12-.45.82.07.87 2.48.2 5.02-1.26 5.02-3.4 0-1.22-.59-1.96-1.24-2.5"></path>
                    </svg>
                    <span className="font-medium">Machine Learning</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center">
                    <svg className="text-accent mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span className="font-medium">Computer Vision</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center">
                    <svg className="text-accent mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                      <path d="m13 13 6 6"></path>
                    </svg>
                    <span className="font-medium">Predictive Analytics</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center">
                    <svg className="text-accent mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M7 7h10"></path>
                      <path d="M10 7v10"></path>
                      <path d="M7 12h5"></path>
                      <path d="M7 17h10"></path>
                    </svg>
                    <span className="font-medium">Deep Learning</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center">
                    <svg className="text-accent mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span className="font-medium">NLP</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center">
                    <svg className="text-accent mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                    <span className="font-medium">Big Data</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold font-montserrat text-accent mb-4">AI Consulting & Development</h3>
              <p className="text-lg text-neutral-700 mb-6">
                My career in AI engineering bridges my technical expertise with my deep understanding of sports performance. I specialize in developing AI solutions that enhance athletic performance, game analysis, and coaching methodologies.
              </p>
              
              <p className="text-lg text-neutral-700 mb-6">
                As an AI consultant, I help organizations implement cutting-edge technologies to solve complex problems in sports analytics, player development, and strategic decision-making.
              </p>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold font-montserrat text-accent mb-4">Technical Skills</h4>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {AI_SKILLS.map((skill, index) => (
                    <ProgressSkill 
                      key={index} 
                      name={skill.name} 
                      percentage={skill.percentage} 
                      color="bg-accent"
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-bold font-montserrat text-accent mb-4">Professional Experience</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-neutral-500 mb-1">2019 - Present</div>
                    <h4 className="text-xl font-bold font-montserrat text-accent mb-1">Independent AI Consultant</h4>
                    <p className="text-neutral-700">Providing specialized AI solutions for sports organizations, focusing on performance analytics and scouting automation.</p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-neutral-500 mb-1">2017 - 2020</div>
                    <h4 className="text-xl font-bold font-montserrat text-accent mb-1">SportsAI Technologies</h4>
                    <p className="text-neutral-700">Lead AI Engineer developing computer vision systems for tracking player movements, analyzing game patterns, and generating strategic recommendations.</p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-neutral-500 mb-1">2015 - 2017</div>
                    <h4 className="text-xl font-bold font-montserrat text-accent mb-1">Performance Analytics Lab</h4>
                    <p className="text-neutral-700">Research Engineer working on novel applications of machine learning for sports biomechanics and movement optimization.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-accent/5 p-5 rounded-xl">
                <h4 className="text-xl font-bold font-montserrat text-accent mb-3">Featured AI Project: Performance Optimization System</h4>
                <p className="text-neutral-700">
                  Developed an end-to-end AI platform that integrates wearable sensor data with video analysis to provide real-time feedback on athletic movements, injury prevention recommendations, and personalized training suggestions.
                </p>
                <div className="mt-3">
                  <a href="#projects" className="text-accent hover:text-accent/80 font-medium flex items-center">
                    View project details 
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
