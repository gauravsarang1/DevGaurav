import React from 'react';
import { Code, Sparkles } from 'lucide-react';

const Logo = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="group flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
  >
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <Code className="text-white" size={18} />
      </div>
      <Sparkles className="absolute -top-1 -right-1 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
    </div>
    <div className="text-2xl font-bold">
      Dev<span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Gaurav</span>
    </div>
  </button>
);

export default Logo;