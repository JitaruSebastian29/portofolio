
import { useEffect, useRef } from 'react';
import { Laptop, Mountain, Dumbbell } from 'lucide-react';

const Interests = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const cards = entry.target.querySelectorAll('.interest-card');
        
        // Add animation class when entering viewport
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-up');
              card.classList.remove('opacity-0');
            }, index * 150);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const interests = [
    {
      title: 'Hackathons',
      description: [
        'Became official member of HackEPS organizations and was in charge of helping the organization of 100+ participants Hackathons at University of Lleida',
        'Participated as a contestant and won several Hackathons such as HackUPC (BCN) or HackUDC (GAL) where my team participated in the ESA (European Space Agency) challenge building a mobile application using Flutter, InfluxDB and FastAPI for visualization of satellite data.'
      ],
      icon: <Laptop className="h-6 w-6" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Hiking & Nature',
      description: [
        'Hiked and summited several of the highest peaks of the Pyrnees such as: Aneto (3.404m), Carlit (2921), Puigmal (2910), Puigpedros (2912), and Pedraforca (2506) (Superior and Inferior).',
        'Climbing, where I enjoy sending indoor (Bouldering) and outdoor (Rock-Climbing) routes.'
      ],
      icon: <Mountain className="h-6 w-6" />,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Sports',
      description: [
        'Trained in combat sports such as Muay Thai, Jiu Jitsu, and MMA for 5 years.'
      ],
      icon: <Dumbbell className="h-6 w-6" />,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Interests</h2>
        <p className="section-subtitle">Beyond Professional Life</p>
        
        <div ref={sectionRef} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="interest-card opacity-0 p-6 rounded-2xl border border-border hover:border-primary/20 bg-white shadow-soft hover:shadow-md transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${interest.color} mb-5`}>
                {interest.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-3">
                {interest.title}
              </h3>
              
              <ul className="space-y-2">
                {interest.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
