import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('CV download initiated! (Simulation)');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-main rounded-full opacity-5 blur-[120px] pointer-events-none"></div>

      <div className="mb-16 text-center">
        <h2 className="section-title !mb-4">Let's Connect</h2>
        <p className="text-brand-dark/70 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 border border-brand-dark/5 dark:border-slate-700 shadow-2xl relative"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-main rounded-t-[2.5rem]"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold font-heading text-brand-dark dark:text-white mb-8">
              Rahaf Rababah
            </h3>

            <div className="space-y-6">
              <a href="mailto:Rahafrababaa2002@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-brand-light/40 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-12 h-12 bg-gradient-main rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-teal/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark/50 dark:text-gray-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-semibold text-brand-dark dark:text-gray-200 group-hover:text-brand-teal transition-colors">Rahafrababaa2002@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-brand-light/40 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-12 h-12 bg-gradient-main rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-teal/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark/50 dark:text-gray-400 uppercase tracking-widest mb-1">Mobile</p>
                  <p className="font-semibold text-brand-dark dark:text-gray-200 group-hover:text-brand-teal transition-colors" title="+962 77 859 3141 | +962 77 600 2782">+962 77 859 3141</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-brand-light/40 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-12 h-12 bg-gradient-main rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-teal/20 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark/50 dark:text-gray-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="font-semibold text-brand-dark dark:text-gray-200 group-hover:text-brand-teal transition-colors">Amman, Jordan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8 p-8 md:border-l border-brand-dark/10 dark:border-slate-700">
            <div className="flex gap-4">
              <a href="https://github.com/rahaf-om" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-brand-light dark:bg-slate-700 rounded-full flex items-center justify-center text-brand-dark dark:text-white hover:bg-brand-dark hover:text-white dark:hover:bg-white dark:hover:text-brand-dark transition-all hover:-translate-y-1 shadow-md">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/rahaf-rababah-91155436b" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-brand-light dark:bg-slate-700 rounded-full flex items-center justify-center text-brand-dark dark:text-white hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 shadow-md">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="w-full h-px bg-brand-dark/10 dark:bg-slate-700 my-4"></div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
