import React, { useState, useEffect } from 'react';
import { Home, User, Settings, Briefcase, Mail } from 'lucide-react';

// Import all the individual components (in real project, these would be separate imports)
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from './MobileMenuButton';
import MobileMenuOverlay from './MobileMenuOverlay ';
import ProgressBar from './ProgressBar';

// Navigation configuration
const NAV_ITEMS = [
  { href: '#home', label: 'Home', icon: <Home size={16} /> },
  { href: '#about', label: 'About', icon: <User size={16} /> },
  { href: '#skills', label: 'Skills', icon: <Settings size={16} /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase size={16} /> },
  { href: '#contact', label: 'Contact', icon: <Mail size={16} /> }
];

// Custom hook for scroll management
const useScrollManagement = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isManualNavigation, setIsManualNavigation] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      // Handle header background change
      setScrolled(window.scrollY > 50);

      // Only update active section if not manually navigating
      if (!isManualNavigation) {
        let currentSection = 'home';
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const offsetTop = window.scrollY + rect.top;
            
            if (scrollPosition >= offsetTop - 100) {
              currentSection = section;
              break;
            }
          }
        }
        
        // Special case for when at the very top
        if (window.scrollY < 100) {
          currentSection = 'home';
        }
        
        setActiveSection(currentSection);
      }

      // Clear manual navigation flag after scroll ends
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsManualNavigation(false);
      }, 100);
    };

    handleScroll(); // Call immediately to set initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isManualNavigation]);

  return { scrolled, activeSection, setActiveSection, setIsManualNavigation };
};

// Custom hook for navigation
const useNavigation = (setActiveSection, setIsManualNavigation) => {
  const handleNavClick = (href) => {
    const targetId = href.substring(1); // Remove the #
    
    // Immediately set manual navigation flag and update active section
    setIsManualNavigation(true);
    setActiveSection(targetId);
    
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get the header height to offset the scroll position
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    } else if (targetId === 'home') {
      // Special handling for home - scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return { handleNavClick };
};

// Utility function for scroll progress
const getScrollProgress = () => {
  const scrollTop = window.pageYOffset;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  return documentHeight > 0 ? Math.min(100, (scrollTop / documentHeight) * 100) : 0;
};

// Main Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Custom hooks
  const { scrolled, activeSection, setActiveSection, setIsManualNavigation } = useScrollManagement();
  const { handleNavClick } = useNavigation(setActiveSection, setIsManualNavigation);

  // Enhanced navigation handler that also closes mobile menu
  const handleNavClickWithMenuClose = (href) => {
    setIsMenuOpen(false);
    handleNavClick(href);
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay 
        isOpen={isMenuOpen}
        onClose={closeMobileMenu}
        activeSection={activeSection}
        onNavClick={handleNavClickWithMenuClose}
        navItems={NAV_ITEMS}
      />

      {/* Main Header */}
      <header 
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <nav 
          className="container mx-auto px-6 py-4 flex justify-between items-center"
          role="navigation"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Logo onClick={() => handleNavClick('#home')} />
          
          {/* Desktop Navigation */}
          <DesktopNavigation 
            activeSection={activeSection}
            onNavClick={handleNavClick}
            navItems={NAV_ITEMS}
          />
          
          {/* Mobile Menu Button */}
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            isOpen={isMenuOpen}
          />
        </nav>
        
        {/* Scroll Progress Bar */}
        <ProgressBar progress={getScrollProgress()} />
      </header>
    </>
  );
};

export default Header;