import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'June 2025 - Feb 2026',
    title: 'AI & Product Owner Intern',
    company: 'Mawdoo',
    points: [
      'Managed agile MVPs from concept to deployment within 1-month cycles',
      'Conducted stakeholder research to ensure product-market fit',
      'Spearheaded AI integration features to drive user engagement',
    ],
  },
  {
    period: '2025 - 2026',
    title: 'Startup Dev & Business Validation',
    company: 'Coach You Program - MoDEE',
    points: [
      'Validated business models for emerging startup concepts',
      'Earned Microsoft Azure DP-900 certification for data fundamentals',
    ],
  },
  {
    period: '2024',
    title: 'QA Training',
    company: 'Princess Sumaya University (PSUT)',
    points: [
      'Completed comprehensive Quality Assurance certification program',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="mb-16">
        <h2 className="section-title">Experience Timeline</h2>
      </div>

      <div className="relative border-l-2 border-brand-teal/20 ml-6 pl-8 md:pl-12 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline node */}
            <div className="absolute -left-[43px] md:-left-[59px] top-1">
              <div className="relative">
                <div className="w-5 h-5 bg-brand-teal rounded-full animate-pulse opacity-50 absolute inset-0"></div>
                <div className="w-5 h-5 bg-white border-[4px] border-brand-teal rounded-full relative z-10"></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-brand-dark/5 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 transition-all group">
              <span className="text-brand-orange font-bold font-mono text-sm tracking-wider uppercase mb-2 block">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold font-heading text-brand-dark dark:text-white group-hover:text-brand-teal transition-colors mb-2">
                {exp.title}
              </h3>
              <p className="text-brand-dark/70 dark:text-gray-300 font-semibold mb-6 text-lg">
                {exp.company}
              </p>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-brand-dark/80 dark:text-gray-400 font-medium">
                    <span className="text-brand-teal mt-1.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
