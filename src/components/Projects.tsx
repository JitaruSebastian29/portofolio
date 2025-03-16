
import { useEffect, useRef } from 'react';
import { Server, SmartphoneNfc, Microscope } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const cards = entry.target.querySelectorAll('.project-card');
        
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

  const projects = [
    {
      title: 'Virtualization Environment',
      description: 'Created a personal virtualization environment using Proxmox, managing multiple VMs and Docker containers.',
      icon: <Server className="h-6 w-6" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Android App for Addiction Control',
      description: 'Designed and developed an Android app in Kotlin-Jetpack Compose with MVVM architecture to help users manage addictive behaviors.',
      icon: <SmartphoneNfc className="h-6 w-6" />,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Research Projects',
      description: 'Explored topics such as ROS, Grasping & Manipulation (GR-ConvNet), Deep Reinforcement Learning, CNNs, Computer Vision, Hyperparameter Tuning, NLP, Neural Networks, Overfitting, PCA, Regression, RNN, and Supervised Learning.',
      icon: <Microscope className="h-6 w-6" />,
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Personal & Research Work</p>
        
        <div ref={sectionRef} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card opacity-0 group p-6 rounded-2xl border border-border hover:border-primary/20 bg-white shadow-soft hover:shadow-md transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${project.color} mb-5`}>
                {project.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
