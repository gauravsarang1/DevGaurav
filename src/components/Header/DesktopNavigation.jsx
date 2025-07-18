import React from 'react';
import { Home, User, Settings, Briefcase, Mail } from 'lucide-react';

// Import components (in real project, these would be separate files)
const NavItem = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
      isActive
        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
    }`}
  >
    <span className="text-sm">{item.icon}</span>
    <span>{item.label}</span>
    
    {isActive && (
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
    )}
  </button>
);

const CTAButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="ml-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
  >
    <span>Let's Talk</span>
  </button>
);

const NAV_ITEMS = [
  { href: '#home', label: 'Home', icon: <Home size={16} /> },
  { href: '#about', label: 'About', icon: <User size={16} /> },
  { href: '#skills', label: 'Skills', icon: <Settings size={16} /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase size={16} /> },
  { href: '#contact', label: 'Contact', icon: <Mail size={16} /> }
];

const DesktopNavigation = ({ activeSection, onNavClick }) => (
  <div className="hidden lg:flex items-center space-x-2">
    {NAV_ITEMS.map((item) => (
      <NavItem
        key={item.href}
        item={item}
        isActive={activeSection === item.href.substring(1)}
        onClick={() => onNavClick(item.href)}
      />
    ))}
    <CTAButton onClick={() => onNavClick('#contact')} />
  </div>
);

export default DesktopNavigation;