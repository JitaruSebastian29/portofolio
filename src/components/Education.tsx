
import { useEffect, useRef } from 'react';
import { School, Trophy, Code } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const children = entry.target.querySelectorAll('.timeline-item');
        
        // Add animation class when entering viewport
        if (entry.isIntersecting) {
          children.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add('animate-fade-up');
              (child as HTMLElement).classList.remove('opacity-0');
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

  const educationItems = [
    {
      icon: <School />,
      title: 'MSc, Artificial Intelligence',
      institution: 'University of Groningen, Netherlands',
      period: 'Sept 2024 – Aug. 2026',
      description: 'Machine Learning/ Robotics Specialization Supervised/Unsupervised Deep Learning, Deep Reinforcement Learning, Multi-agent Reinforcement learning, Cognitive Robotics, Control Methods, Human Robot Interaction, Pattern Recognition, Computer Vision.'
    },
    {
      icon: <School />,
      title: 'BSc, Computer Engineering',
      institution: 'University of Lleida, Spain',
      period: 'September 2020 – July 2024',
      description: 'Cybersecurity/ Software development Specialization Coursework included Algorithms & Data-Structures, Object Oriented Programming, Calculus, Statistics, Computer Architecture, Computational Logic, Physics, Systems Administration, Communication Networks, Software Architectures, Mobile Applications, Advanced Networks and Communications, Distributed Computing, Application Security, Cryptography.'
    },
    {
      icon: <Code />,
      title: 'RUXAILAB: UX & UI Virtual Lab Project',
      institution: 'Bachelor Thesis at RUXAILAB organization, Spain / Brazil',
      period: 'Feb 2024 – July 2024',
      description: [
        'Fine Tunned Res-Net50 on FER dataset for video emotion analysis.',
        'Built a backend API with Flask and integrated Firebase for data management achieving and overall accuracy 80% on video emotion recognition.',
        'Built a frontend for results visualization using Vue.js integrated within the existing RUXAILAB platform.',
        'Deployed model and API on Google Cloud using docker and frontend on Firebase hosting'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic Background</p>
        
        <div ref={sectionRef} className="mt-10">
          {educationItems.map((item, index) => (
            <div key={index} className="timeline-item opacity-0">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="p-2 rounded-full bg-blue-50 text-primary">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  
                  {Array.isArray(item.description) ? (
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
