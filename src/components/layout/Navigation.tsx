import React from 'react';
import { Coffee, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  return (
    <nav className={`fixed w-full z-10 ${darkMode ? 'bg-gray-900/50 backdrop-blur' : 'bg-white/50 backdrop-blur'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Coffee className="w-8 h-8" />
            <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
            <a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}