import React from 'react';

const ProgressBar = ({ progress }) => (
  <div 
    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
    style={{ width: `${progress}%` }}
  />
);

export default ProgressBar;