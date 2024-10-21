'use client';

import { useState, useEffect } from 'react';
import AboutSection from './_components/AboutSection';
// import ProjectsSection from './_components/ProjectsSection';
// import SkillsSection from './_components/SkillsSection';
import ExperienceSection from './_components/experience-section';
// import ContactSection from './_components/ContactSection';
import Loading from '../_components/loading';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <AboutSection />
      <ExperienceSection />
      {/* <SkillsSection />
      <ProjectsSection />
      <ContactSection /> */}
    </div>
  );
}
