import React from 'react';
import { Home, User, Settings, Briefcase, Mail, Code, X } from 'lucide-react';

const NAV_ITEMS = [
  { href: '#home', label: 'Home', icon: <Home size={16} /> },
  { href: '#about', label: 'About', icon: <User size={16} /> },
  { href: '#skills', label: 'Skills', icon: <Settings size={16} /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase size={16} /> },
  { href: '#contact', label: 'Contact', icon: <Mail size={16} /> }
];

const MobileMenuOverlay = ({ isOpen, onClose, activeSection, onNavClick }) => (
  <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
    isOpen ? 'visible opacity-100' : 'invisible opacity-0'
  }`}>
    {/* Backdrop */}
    <div 
      className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-lg"
      onClick={onClose}
    />
    
    {/* Menu Content */}
    <div className={`relative z-10 h-full flex flex-col justify-center items-center transform transition-all duration-500 ${
      isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    }`}>
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
      >
        <X size={24} />
      </button>
      
      {/* Logo in Mobile Menu */}
      <div className="mb-12 text-center">
        <div className="text-4xl font-bold text-white mb-2">
          Dev<span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Gaurav</span>
        </div>
        <div className="flex items-center justify-center text-white/60">
          <Code className="mr-2" size={16} />
          <span>Full Stack Developer</span>
        </div>
      </div>
      
      {/* Navigation Items */}
      <div className="space-y-6">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item.href}
            onClick={() => onNavClick(item.href)}
            className={`flex items-center space-x-4 text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-4 rounded-xl hover:bg-white/10 ${
              activeSection === item.href.substring(1) 
                ? 'text-blue-400 bg-white/10 scale-105' 
                : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xl font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    </div>
  </div>
);

export default MobileMenuOverlay;