import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: ReactNode;
}