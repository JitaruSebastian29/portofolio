
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-slate-50/30 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -z-10" />
      
      <div ref={heroRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center opacity-0">
        <div className="inline-block mb-6">
          <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium tracking-wider">
            Computer Engineer
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Sebastian Jitaru
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
         
          Computer Engineer with knowledge in Machine Learning, Software Development, Cybersecurity, and Systems Administration. 
          Currently based in Groningen, Netherlands.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a 
            href="#education" 
            className="px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:shadow-md hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-sm"
          >
            View Resume
          </a>
          <a 
            href="mailto:sjitaru29@gmail.com" 
            className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium transition-all hover:shadow-md hover:bg-secondary/80 hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-sm"
          >
            Contact Me
          </a>
        </div>
        
        <div className="animate-bounce">
          <a 
            href="#education" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
