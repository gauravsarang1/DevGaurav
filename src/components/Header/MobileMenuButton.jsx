import React from 'react';
import { Menu } from 'lucide-react';

const MobileMenuButton = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    <Menu size={18} />
  </button>
);

export default MobileMenuButton;