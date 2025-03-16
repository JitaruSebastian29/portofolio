
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Interests from '@/components/Interests';
import Footer from '@/components/Footer';

const Index = () => {
  // Custom cursor effect
  useEffect(() => {
    const updatePageTitle = () => {
      document.title = 'Sebastian Jitaru | Portfolio';
    };
    
    updatePageTitle();
    
    return () => {
      document.title = 'Portfolio';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
