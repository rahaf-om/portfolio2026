import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  points: string[];
  image?: string;
  images?: string[];
};

const experiences: ExperienceItem[] = [
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
    title: 'Hackathon 2024 Startup Project',
    company: 'Professional Full Stack Engineer & Designer',
    points: [
      'Engineered and designed an innovative startup product from concept to prototype during Hackathon 2024.',
      'Architected full-stack solutions while spearheading UX/UI design for maximum user engagement.',
      'Demonstrated end-to-end product delivery under aggressive time constraints, showcasing dual expertise in engineering and design.'
    ],
    images: ['/images/startup.png', '/images/startup2.png'],
  },
  {
    period: '2024',
    title: 'QA Training',
    company: 'Princess Sumaya University (PSUT)',
    points: [
      'Completed comprehensive Quality Assurance certification program',
    ],
    image: '/images/certificates/QA.png',
  },
];

const certificates = [
  {
    title: "Computer Science Bachelor's Degree",
    description: "Successfully completed a Bachelor's degree in Computer Science, building a strong foundation in software engineering, algorithms, and system architecture.",
    image: "/images/certificates/1.jpg",
  },
  {
    title: "Participation Certificate",
    description: "Certificate of participation demonstrating active engagement in tech-focused workshops and community events.",
    image: "/images/certificates/11.jpg",
  },
  {
    title: "Professional Full Stack Developer & AI Engineer",
    description: "Advanced certification recognizing comprehensive skills as a professional full stack developer and AI Engineer.",
    image: "/images/certificates/image.png",
  },
  {
    title: "QA Training Certification",
    description: "Official certificate for the comprehensive Quality Assurance program completed at Princess Sumaya University for Technology (PSUT).",
    image: "/images/certificates/QA.png",
  },
  {
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    description: "Certification covering core data concepts, relational and non-relational data workloads, and analytics workloads on Azure.",
    image: "",
    comingSoon: true,
  }
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <>
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

              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-brand-dark/5 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 transition-all group lg:flex lg:gap-8 items-center">
                <div className="flex-1">
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
                {exp.image && !exp.images && (
                  <div
                    className="mt-6 lg:mt-0 lg:w-1/3 flex-shrink-0 cursor-pointer"
                    onClick={() => setSelectedImage(exp.image!)}
                  >
                    <img
                      src={exp.image}
                      alt={`${exp.title} Certificate`}
                      className="rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md object-cover w-full h-auto max-h-48 hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}
                {exp.images && (
                  <div className="mt-6 lg:mt-0 lg:w-1/3 md:w-1/2 flex-shrink-0 grid grid-cols-2 gap-3 relative group/images">
                    {exp.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md relative ${idx === 0 ? 'transform rotate-[-2deg]' : 'transform rotate-[2deg] translate-y-2'} hover:shadow-xl hover:z-10 transition-all duration-300 hover:rotate-0 hover:scale-[1.05]`}
                        onClick={() => setSelectedImage(img)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:flex items-end justify-center pb-2">
                          <svg className="w-6 h-6 text-white drop-shadow-md mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <img
                          src={img}
                          alt={`${exp.title} Image ${idx + 1}`}
                          className="object-cover w-full h-32 sm:h-40 md:h-48 bg-slate-100 dark:bg-slate-800"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="certificates" className="py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl mb-20 px-4 sm:px-8 mt-8 border border-slate-100 dark:border-slate-800">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark dark:text-white mb-4">
            Certifications & Degrees
          </h2>
          <div className="w-20 h-1.5 bg-brand-teal mx-auto rounded-full"></div>
          <p className="text-brand-dark/70 dark:text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
            A showcase of my educational background, professional training, and technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group ${cert.comingSoon ? 'cursor-default' : 'hover:shadow-xl hover:shadow-brand-teal/10 cursor-pointer'}`}
              onClick={() => !cert.comingSoon && cert.image && setSelectedImage(cert.image)}
            >
              <div className={`h-48 md:h-64 overflow-hidden relative border-b border-slate-100 dark:border-slate-700 ${cert.comingSoon ? 'bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-6' : ''}`}>
                {cert.comingSoon ? (
                  <div className="flex flex-col items-center justify-center text-center opacity-70">
                    <svg className="w-16 h-16 text-brand-dark/40 dark:text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-brand-orange font-bold font-mono tracking-wider uppercase text-sm border border-brand-orange/30 px-4 py-1.5 rounded-full bg-brand-orange/10 z-10">
                      Coming Soon
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
                      <span className="text-white font-medium text-sm flex items-center gap-2">
                        <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Click to View Full Screen
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-8 relative">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-700 text-indigo-500 rounded-xl flex items-center justify-center absolute -top-6 right-8 border-4 border-white dark:border-slate-800 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-white mb-3 pr-10">
                  {cert.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-gray-400 font-medium leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={closeImageViewer}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageViewer}
                className="absolute -top-12 right-0 sm:-right-12 sm:top-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors backdrop-blur-md"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Full screen certificate"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Experience;
