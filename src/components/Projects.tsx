import React from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  achievements: string[];
}

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
            <div key={project.title} 
              className={`rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 ${
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
          ))}
        </div>
      </div>
    </section>
  );
}