import React, { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

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
    <section
      id="about"
      ref={sectionRef}
      className="py-16 bg-white section-fade"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-12 text-center">
          Bridging Two Worlds
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/3">
            {/* Hockey player in action photo */}
            <img
              src="https://i.postimg.cc/RVPVgcp9/derek-u-mass-lowell-hockey-2022-02-28-t-20-59-42-059-z-1.jpg"
              alt="Professional hockey game in action"
              className="rounded-xl shadow-lg w-full h-auto mb-6"
            />

            <div className="bg-neutral-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-4">
                Professional Focus
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="text-secondary mt-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Based in Worcester, Massachusetts</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-secondary mt-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  <span>Elite Hockey Performance</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-secondary mt-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  <span>Skills & Skating Development</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-secondary mt-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                  <span>Sports Analytics & AI Solutions</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-secondary mt-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5"></path>
                  </svg>
                  <span>Finance & Computer Science Background</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="mb-8 p-5 bg-primary/5 rounded-xl">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">
                About Me
              </h3>
              <p className="text-neutral-700">
                Massachusetts-based with 10+ years of elite and pro hockey
                experience and 5+ years in AI development. With high-level
                education in AI, computer science, and finance, I blend
                technical expertise with the mindset of a high-level athlete. As
                a private coach and skating instructor, I help players elevate
                their game through tailored skill development. I thrive on
                creativity and innovation in competitive environments, whether
                building smarter systems or outmaneuvering opponents on the ice.
              </p>
            </div>

            <p className="text-lg text-neutral-700 mb-6">
              Pushing boundaries at the intersection of professional sports and
              technology. The disciplines of elite hockey and artificial
              intelligence may seem worlds apart, but they share fundamental
              principles: precision, strategic thinking, and continuous
              adaptation.
            </p>

            <p className="text-lg text-neutral-700 mb-6">
              This unique perspective enables the development of innovative
              solutions that enhance athletic performance through cutting-edge
              technology. From computer vision systems that analyze skating and
              shooting techniques to game-playing AI agents that learn hockey
              and develop new strategies, the goal is always to bridge these two
              worlds to create meaningful impact.
            </p>

            <h3 className="text-2xl font-bold font-montserrat text-primary mt-8 mb-4">
              Areas of Focus
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 p-6 rounded-xl">
                <div className="text-4xl text-primary mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <h4 className="text-xl font-bold font-montserrat text-primary mb-2">
                  Elite Hockey
                </h4>
                <p className="text-neutral-700">
                  Professional-level performance focusing on skating and shooting mechanics,
                  game strategy, and high-performance training methodologies.
                </p>
              </div>

              <div className="bg-secondary/5 p-6 rounded-xl">
                <div className="text-4xl text-secondary mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold font-montserrat text-secondary mb-2">
                  Skill Development
                </h4>
                <p className="text-neutral-700">
                  Systematic and individualized coaching approaches that combine technical
                  expertise with data-driven feedback for players at all levels.
                </p>
              </div>

              <div className="bg-accent/5 p-6 rounded-xl">
                <div className="text-4xl text-accent mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="6" height="10" x="3" y="7" rx="1"></rect>
                    <rect width="6" height="14" x="15" y="3" rx="1"></rect>
                    <path d="M9 9h3v4"></path>
                    <path d="M9 17h3"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold font-montserrat text-accent mb-2">
                  Sports Technology
                </h4>
                <p className="text-neutral-700">
                  Custom AI solutions for performance analytics, biomechanics
                  analysis, and game strategy optimization.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold font-montserrat text-primary mt-8 mb-4">
              Technical Expertise
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Python C/C++</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Machine Learning</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Information Security</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Computer Vision</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Game AI</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Data Analysis</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Shooting/ Skating/ Skills</span>
              </div>
              <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
                <span className="font-medium">Strength Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
