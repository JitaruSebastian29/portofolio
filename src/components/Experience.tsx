
import { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
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

  const experienceItems = [
    {
      position: 'AI Engineer',
      company: 'Prioticket',
      location: 'Amsterdam, Netherlands',
      period: 'January 2025 – Present',
      responsibilities: [
        'Researched State-of-the-art methodologies and applied them to streamlining company procedure.',
        'Built AI agent using LangChain, FastAPI, and OpenAI API with function calling capabilities for real-time data retrieval using our existing API for chat purposes.',
        'Developed an automated solution to complete RFP documents by extracting unstructured data from various formats (PDF, PPTX, Word). Building a knowledge base and implementing a question–answer matching system utilizing Levenshtein distance and TF-IDF embeddings.',
        'Built AI based web-scrapper for client data gathering using BeatifullSoup, OpenAI API and Selenium.'
      ]
    },
    {
      position: 'Junior Software Engineer',
      company: 'Prioticket',
      location: 'Amsterdam, Netherlands',
      period: 'July 2024 – December 2024',
      responsibilities: [
        'Developed frontend and backend features using Angular, Express.js, and Nest.js.',
        'Managed deployment pipelines using Google Cloud (Kubernetes, Docker, GitLab)',
        'Developed full-stack features following SCRUM methodology and integrated external APIs.'
      ]
    },
    {
      position: 'Junior Cybersecurity Analyst',
      company: 'Semic',
      location: 'Lleida, Spain',
      period: 'June 2023 – June 2024',
      responsibilities: [
        'Planned, deployed and managed cybersecurity solutions (Crowdstrike, Kaspersky, and Bitdefender) for various clients.',
        'Analyzed alerts and network traffic using tools such as OSSIM or Wireshark and conducted security audits and vulnerability assessments using BurpSuite and OWASP.',
        'Managed Fortinet firewalls, executed phishing campaigns by cloning client websites, deployed honeypots, and managed servers'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Professional Background</p>
        
        <div ref={sectionRef} className="mt-10">
          {experienceItems.map((item, index) => (
            <div key={index} className="timeline-item opacity-0">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="p-2 rounded-full bg-blue-50 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.position}</h3>
                      <p className="text-muted-foreground">{item.company} • {item.location}</p>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-0 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  
                  <ul className="mt-3 space-y-2">
                    {item.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
