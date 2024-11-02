import React from 'react';
import { Code2, Cloud, Database, Terminal } from 'lucide-react';
import { SkillCard } from '../ui/SkillCard';
import { SkillCategory } from '../../types';

interface SkillsProps {
  darkMode: boolean;
}

export function Skills({ darkMode }: SkillsProps) {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ['Python', 'Java', 'Scala', 'JavaScript', 'Shell Scripting'],
      icon: <Code2 className="w-6 h-6 mx-auto mb-2" />
    },
    {
      title: "Cloud & DevOps",
      skills: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes'],
      icon: <Cloud className="w-6 h-6 mx-auto mb-2" />
    },
    {
      title: "Databases",
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
      icon: <Database className="w-6 h-6 mx-auto mb-2" />
    },
    {
      title: "Tools & Frameworks",
      skills: ['Databricks', 'React', 'Spring Boot', 'REST APIs', 'CI/CD'],
      icon: <Terminal className="w-6 h-6 mx-auto mb-2" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}