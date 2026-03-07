import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Github, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: 'AI Image Enhancer',
    role: 'Lead Developer',
    description: 'Trained CNN model on 1,000+ images using PyTorch for advanced image quality enhancement. (Graduation Project 2025)',
    tech: ['PyTorch', 'Python', 'Computer Vision'],
    featured: true,
    actionType: 'github',
    actionUrl: 'https://github.com/rahaf-om',
    actionText: 'View on GitHub',
  },
  {
    title: 'WebTeb Symptom Checker',
    role: 'Product Dev & Frontend Lead',
    description: 'Developed a stakeholder-driven landing page focused on lead generation for MENA region hospitals. Created full PRD from initial meetings.',
    tech: ['React', 'Figma', 'TailwindCSS'],
    featured: true,
    actionType: 'video',
    actionUrl: '/webteb_demo.mp4',
    actionText: 'Watch Demo',
  },
  {
    title: 'Ramadan AI Chatbot MVP',
    role: 'Full-Stack Developer',
    description: 'Built an AI chatbot for Ramadan questions using a RAG pipeline. Developed full MVP in under 1 month via AI workflows.',
    tech: ['React', 'TS', 'Gemini AI', 'Express', 'SQLite'],
    featured: true,
    actionType: 'link',
    actionUrl: 'https://agentic-ai-mvpramadan-1.onrender.com/',
    actionText: 'Live Project',
  },
  {
    title: 'RESTful Auth System',
    role: 'Backend Developer',
    description: 'Created a production-ready, secure user authentication API with robust token management for signup/login flows.',
    tech: ['Django', 'REST API', 'Token Auth'],
    featured: false,
    actionType: 'github',
    actionUrl: 'https://github.com/rahaf-om',
    actionText: 'View Repository',
  },
];

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const renderIcon = (type: string) => {
    switch(type) {
      case 'video': return <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />;
      case 'github': return <Github className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />;
      default: return <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />;
    }
  };

  const handleAction = (e: React.MouseEvent, type: string, url: string) => {
    e.preventDefault();
    if (type === 'video') {
      setSelectedVideo(url);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <section id="projects" className="py-20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-main mix-blend-multiply opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="mb-16">
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-brand-dark/5 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-brand-teal/10 hover:-translate-y-2 transition-all relative overflow-hidden flex flex-col ${index === 2 && 'lg:col-span-2 lg:flex-row gap-8'}`}
            >
              {project.featured && (
                <div className="absolute top-6 right-6">
                  <span className="bg-brand-orange/10 text-brand-orange font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              )}

              <div className={`flex-1 ${index === 2 ? 'mb-0 lg:pr-12' : 'mb-8'}`}>
                <p className="text-brand-teal font-bold text-sm tracking-widest uppercase mb-3 pr-24">
                  {project.role}
                </p>
                <h3 className="text-2xl font-bold font-heading mb-4 text-brand-dark dark:text-white group-hover:text-brand-teal transition-colors pr-8">
                  {project.title}
                </h3>
                <p className="text-brand-dark/70 dark:text-gray-300 font-medium leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-brand-light dark:bg-slate-700 px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-dark dark:text-gray-200 group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${index === 2 ? 'lg:flex lg:items-end' : 'mt-auto pt-6 border-t border-brand-dark/5 dark:border-slate-700'}`}>
                <button 
                  onClick={(e) => handleAction(e, project.actionType, project.actionUrl)}
                  className="inline-flex items-center gap-2 text-brand-dark dark:text-white font-bold group-hover:text-brand-teal transition-all hover:gap-3"
                >
                  {project.actionText} {renderIcon(project.actionType)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-[110] p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="aspect-video w-full">
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                  src={selectedVideo}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
