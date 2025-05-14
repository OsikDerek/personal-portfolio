import React, { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/about/about-section";
import ProjectsSection from "@/components/projects/projects-section";
import CareersSection from "@/components/careers/careers-section";
import CoachingSection from "@/components/coaching/coaching-section";
import ContactSection from "@/components/contact/contact-section";

export default function Home() {
  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section-fade');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
