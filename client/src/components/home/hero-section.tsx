import React, { useState, useEffect } from "react";

const titles = [
  "Professional Hockey Player",
  "Elite Skills Coach",
  "AI Consultant & Engineer",
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
              <span className="block">Derek Osik</span>
              <span
                className={`text-secondary transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
              >
                {titles[currentTitleIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-lg">
              Creating innovative solutions at the intersection of professional
              sports and artificial intelligence.
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
            {/* Image collage showing different professional contexts */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-tl-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1580679664046-d3a55c9d11e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Professional Hockey Action"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-tr-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="AI Development Work"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-bl-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Hockey Coaching"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-br-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Professional Portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
