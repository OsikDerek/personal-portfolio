import React, { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full bg-white shadow-md z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-montserrat text-primary">JD</span>
            <span className="hidden sm:inline-block text-lg font-semibold font-montserrat text-neutral-700">John Doe</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-neutral-700 hover:text-primary font-medium transition duration-200">Home</a>
            <a href="#about" className="text-neutral-700 hover:text-primary font-medium transition duration-200">About</a>
            <a href="#projects" className="text-neutral-700 hover:text-primary font-medium transition duration-200">Projects</a>
            <a href="#careers" className="text-neutral-700 hover:text-primary font-medium transition duration-200">Careers</a>
            <a href="#contact" className="text-neutral-700 hover:text-primary font-medium transition duration-200">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-neutral-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="text-neutral-700 hover:text-primary font-medium transition duration-200 py-2">Home</a>
            <a href="#about" className="text-neutral-700 hover:text-primary font-medium transition duration-200 py-2">About</a>
            <a href="#projects" className="text-neutral-700 hover:text-primary font-medium transition duration-200 py-2">Projects</a>
            <a href="#careers" className="text-neutral-700 hover:text-primary font-medium transition duration-200 py-2">Careers</a>
            <a href="#contact" className="text-neutral-700 hover:text-primary font-medium transition duration-200 py-2">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
