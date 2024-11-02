import React from 'react';
import { SkillCategory } from '../../types';

interface SkillCardProps {
  category: SkillCategory;
  darkMode: boolean;
}

export function SkillCard({ category, darkMode }: SkillCardProps) {
  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
      {category.icon}
      <h3 className="text-xl font-semibold text-center mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {category.skills.map((skill) => (
          <span key={skill} 
            className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}