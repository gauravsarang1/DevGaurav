import { X, Code } from 'lucide-react';
import MobileNavItem from './MobileNavItem';

const MobileMenu = ({ isOpen, navItems, activeSection, onClose, handleClick }) => (
  <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
    isOpen ? 'visible opacity-100' : 'invisible opacity-0'
  }`}>
    <div 
      className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-lg"
      onClick={onClose}
    />
    <div className={`relative z-10 h-full flex flex-col justify-center items-center transform transition-all duration-500 ${
      isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    }`}>
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
      >
        <X size={24} />
      </button>

      <div className="mb-12 text-center">
        <div className="text-4xl font-bold text-white mb-2">
          Dev<span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Gaurav</span>
        </div>
        <div className="flex items-center justify-center text-white/60">
          <Code className="mr-2" size={16} />
          <span>Full Stack Developer</span>
        </div>
      </div>

      <div className="space-y-6">
        {navItems.map((item, index) => (
          <MobileNavItem
            key={item.href}
            item={item}
            index={index}
            activeSection={activeSection}
            handleClick={handleClick}
          />
        ))}
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    </div>
  </div>
);

export default MobileMenu;
