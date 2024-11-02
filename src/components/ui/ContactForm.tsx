import React from 'react';

interface ContactFormProps {
  darkMode: boolean;
}

export function ContactForm({ darkMode }: ContactFormProps) {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          className={`w-full px-4 py-2 rounded-lg border ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
          } focus:ring-2 focus:ring-blue-500 outline-none`}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          className={`w-full px-4 py-2 rounded-lg border ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
          } focus:ring-2 focus:ring-blue-500 outline-none`}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          className={`w-full px-4 py-2 rounded-lg border ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
          } focus:ring-2 focus:ring-blue-500 outline-none`}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}