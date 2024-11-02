import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

export function ProjectCard({ project, darkMode }: ProjectCardProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="mb-4">
          {project.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center mb-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} 
              className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}