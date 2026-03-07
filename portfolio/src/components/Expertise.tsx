import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Target, Zap } from 'lucide-react';

const expertises = [
  {
    title: 'AI Engineering',
    icon: <BrainCircuit className="w-10 h-10 text-brand-teal" />,
    details: 'PyTorch, CNNs, Medical AI Research, Prompt Engineering',
  },
  {
    title: 'Full-Stack',
    icon: <Code2 className="w-10 h-10 text-brand-dark" />,
    details: 'React, Django, Node.js, Express, PostgreSQL',
  },
  {
    title: 'Product Owner',
    icon: <Target className="w-10 h-10 tracking-widest text-brand-orange" />,
    details: 'PRD Writing, Stakeholder Mgmt, SDLC, Agile',
  },
  {
    title: 'AI-Powered Dev',
    icon: <Zap className="w-10 h-10 text-brand-teal" />,
    details: 'Cursor, Copilot, Antigravity, Rapid MVP iteration',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20">
      <div className="mb-16">
        <h2 className="section-title">Core Expertise</h2>
        <p className="text-brand-dark/70 dark:text-gray-400 text-lg max-w-2xl mt-4">
          A hybrid skill set merging technical depth with product vision and rapid development workflows.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertises.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-brand-dark/5 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-main transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="mb-6 bg-brand-light/30 dark:bg-slate-700/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-4 group-hover:gradient-text block">
              {item.title}
            </h3>
            
            <p className="text-brand-dark/70 dark:text-gray-300 leading-relaxed font-medium">
              {item.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
