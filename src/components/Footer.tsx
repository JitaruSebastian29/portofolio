
import { Github, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const contactItems = [
    { icon: <Github className="h-4 w-4" />, text: 'Github Profile', href: 'https://github.com/SebastianJitaru29' },
    { icon: <Mail className="h-4 w-4" />, text: 'sjitaru29@gmail.com', href: 'mailto:sjitaru29@gmail.com' },
  ];

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Interests', href: '#interests' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Sebastian Jitaru</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI Engineer with expertise in Machine Learning, Software Development, and Cybersecurity.
              Passionate about creating innovative solutions and exploring cutting-edge technologies.
            </p>
            
            <div className="flex space-x-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2">
              {contactItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.text}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sebastian Jitaru. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-white shadow-sm hover:shadow transition-all text-muted-foreground hover:text-primary"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
