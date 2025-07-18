const MobileNavItem = ({ item, index, activeSection, handleClick }) => {
  const isActive = activeSection === item.href.substring(1);

  return (
    <button
      onClick={() => handleClick(item.href)}
      className={`flex items-center space-x-4 text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-4 rounded-xl hover:bg-white/10 ${
        isActive ? 'text-blue-400 bg-white/10 scale-105' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-xl font-medium">{item.label}</span>
    </button>
  );
};

export default MobileNavItem;
