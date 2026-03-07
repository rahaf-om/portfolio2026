import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center border-t border-brand-dark/10 dark:border-slate-800 mt-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <p className="text-brand-dark/60 dark:text-gray-400 font-medium">
        © {currentYear} Rahaf Rababah. All rights reserved. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
