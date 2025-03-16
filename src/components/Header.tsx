
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail, Menu, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Interests', href: '#interests' },
  ];

  const contactItems = [
    { icon: <Github className="h-4 w-4" />, text: 'Github Profile', href: 'https://github.com/SebastianJitaru29', external: false },
    { icon: <Mail className="h-4 w-4" />, text: 'sjitaru29@gmail.com', href: 'mailto:sjitaru29@gmail.com', external: false },
    { icon: <Linkedin className="h-4 w-4" />, text: 'SebastianJitaru29', href: 'https://www.linkedin.com/in/sebastian-jitaru/', external: false },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
      isScrolled ? "bg-white/80 shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="#home" className="text-xl font-semibold tracking-tight">
              Sebastian Jitaru
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact items (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.icon}
                <span className="ml-1.5">{item.text}</span>
                {item.external && <ExternalLink className="ml-1 h-3 w-3" />}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 rounded-full bg-secondary text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6 mb-10">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center space-y-4">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.icon}
                <span className="ml-1.5">{item.text}</span>
                {item.external && <ExternalLink className="ml-1 h-3 w-3" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
