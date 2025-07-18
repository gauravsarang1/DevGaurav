import React from 'react';

function SkillCard({ category, colors }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center ${colors.bg} rounded-lg`}>
        <div className={`${colors.text}`}>{category.icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{category.title}</h3>
      <ul className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex justify-between items-center">
            <span>{skill.name}</span>
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${colors.fill}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
