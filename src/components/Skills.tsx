
import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const skillGroups = entry.target.querySelectorAll('.skill-group');
        
        // Add animation class when entering viewport
        if (entry.isIntersecting) {
          skillGroups.forEach((group, index) => {
            setTimeout(() => {
              group.classList.add('animate-fade-up');
              group.classList.remove('opacity-0');
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

  const skillCategories = [
    {
      title: 'Professional Experience',
      skills: [
        'PyTorch', 'Pandas', 'Numpy', 'Scikit-learn', 'Typescript', 'Express.js', 'Nest.js', 
        'Google Cloud', 'BigQuery', 'Kubernetes', 'CloudSQL', 'Docker', 'Gitlab CI/CD', 
        'FastAPI', 'Angular', 'Model View Controller', 'Word/sentence embeddings', 
        'LangChain', 'LangFlow', 'OpenAI API', 'MySQL', 'SQL'
      ]
    },
    {
      title: 'Additional Experience',
      skills: [
        'Tensorflow', 'LATEX', 'Java', 'C++', 'Vue.js', 'Kotlin', 'Jetpack-Compose', 
        'Model-View-Viewmodel (MVVM) Architectures', 'Spring backend Framework', 'Kafka', 
        'Network Protocols (BGP, RIP ,OSPF, Multicast Routing (IGMP, PIM Sparse, Dense and stub areas), OSI Architecture TCP, UDP, DNS, Tunnels)', 
        'Wireshark', 'GNS3'
      ]
    },
    {
      title: 'Certifications & Training',
      skills: [
        'Cambridge Proficiency Exam (C2)',
        'International Driving Licence',
        'Crowdstrike Falcon Administrator',
        'Kaspersky EDR certificate'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technical Expertise</p>
        
        <div ref={sectionRef} className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-group opacity-0">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full border border-border">
                <h3 className="text-lg font-semibold mb-5 pb-3 border-b">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="inline-flex px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-800 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
