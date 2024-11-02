import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { Project } from '../../types';

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: "University of Sydney - Cloud Migration",
      description: "Led large-scale migration of on-premises infrastructure to AWS, implementing robust cloud solutions and automated processes.",
      tech: ["AWS", "CloudEndure", "Lambda", "CloudWatch"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=450",
      achievements: [
        "Migrated 800+ servers with near-zero downtime",
        "Configured 100+ load balancers",
        "Automated EBS encryption and EC2 management"
      ]
    },
    {
      title: "Databricks Platform Solutions",
      description: "Provided technical guidance and solutions for the Databricks platform across multiple cloud providers.",
      tech: ["Databricks", "Spark", "Python", "REST APIs"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=450",
      achievements: [
        "Served 5000+ clients",
        "95% issue resolution within 24 hours",
        "40% reduction in manual intervention"
      ]
    },
    {
      title: "British Petroleum - Cloud Transformation",
      description: "Contributed to BP's cloud transformation initiative and developed a multi-cloud digital forensics application.",
      tech: ["AWS", "Azure", "CloudFormation", "CI/CD"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450",
      achievements: [
        "50% reduction in deployment time",
        "Supported 10+ deployments per month",
        "Assessed 30+ applications for migration"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}