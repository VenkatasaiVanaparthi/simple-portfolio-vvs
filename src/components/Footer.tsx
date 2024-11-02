import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            MS in Computer Science and Engineering - University at Buffalo (2023-2024)
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            AWS Certified Solutions Architect – Associate | Databricks Lakehouse Fundamentals
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Venkata Sai Vanaparthi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}