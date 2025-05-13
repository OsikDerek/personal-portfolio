import React, { useState, useEffect } from "react";

const titles = [
  'Professional Hockey Player',
  'Elite Skills Coach',
  'AI Consultant & Engineer'
];

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Effect for cycling through titles
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-primary mb-4">
              <span className="block">John Doe</span>
              <span 
                className={`text-secondary transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                {titles[currentTitleIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-lg">
              Bridging the worlds of professional hockey and artificial intelligence. 
              Passionate about performance, innovation, and helping others excel.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow border border-primary hover:bg-neutral-100 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* Professional headshot */}
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
              alt="John Doe - Professional Headshot" 
              className="rounded-xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
