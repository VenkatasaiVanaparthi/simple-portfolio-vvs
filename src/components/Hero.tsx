import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Venkata Sai Vanaparthi</h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Platform Technical Solutions Engineer</p>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            AWS Certified Solutions Architect with expertise in cloud architecture, data engineering, and platform solutions.
            Specialized in AWS, Azure, and Google Cloud platforms with a strong background in Python, Scala, and cloud infrastructure.
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/vvanaparthi" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:vvanapar@buffalo.edu"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}