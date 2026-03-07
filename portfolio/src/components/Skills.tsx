import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="w-5 h-5" />,
    skills: ['Python', 'Java', 'C#', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    icon: <Smartphone className="w-5 h-5" />,
    skills: ['React', 'Django', 'ASP.NET', 'Express.js', 'Node.js', 'TailwindCSS'],
  },
  {
    title: 'Databases & ML',
    icon: <Database className="w-5 h-5" />,
    skills: ['PostgreSQL', 'SQLite', 'PyTorch', 'CNNs', 'RAG Pipelines'],
  },
  {
    title: 'Tools & Workflows',
    icon: <Wrench className="w-5 h-5" />,
    skills: ['Git', 'Figma', 'Cursor', 'Copilot', 'Agile/SDLC'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-main mix-blend-multiply opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mb-16">
        <h2 className="section-title">Technical Arsenal</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-brand-dark/5 dark:border-slate-700 pb-4">
              <div className="bg-gradient-main text-white p-2 rounded-xl shadow-md">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-white dark:bg-slate-800 border hover:border-transparent border-brand-dark/10 dark:border-slate-700 px-5 py-2.5 rounded-full font-mono text-sm font-bold text-brand-dark dark:text-gray-200 shadow-sm hover:shadow-lg hover:shadow-brand-teal/20 hover:bg-gradient-main hover:text-white transition-all cursor-default transform hover:-translate-y-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
