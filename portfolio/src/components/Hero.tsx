import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-semibold text-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            Hackathon 2024 participant & startup selected idea &  etrepreneurship
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold font-heading text-brand-dark dark:text-white leading-tight tracking-tight">
              Rahaf Rababah<span className="text-brand-teal">.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-teal">
              Product-Oriented Software Engineer
            </h2>
          </div>

          <div className="flex items-center gap-2 text-brand-dark/70 dark:text-gray-400 font-medium font-mono text-sm">
            <MapPin className="w-4 h-4 text-brand-orange" /> Amman, Jordan
          </div>

          <p className="text-lg text-brand-dark/80 dark:text-gray-300 max-w-xl leading-relaxed">
            Computer Science graduate bridging academic research with real-world AI applications. Experienced in leading projects from concept to deployment.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-gradient-main text-white font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-teal/30 flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border-2 border-brand-dark dark:border-gray-300 text-brand-dark dark:text-gray-300 font-semibold transition-colors hover:bg-brand-dark dark:hover:bg-gray-300 hover:text-white dark:hover:text-brand-dark flex items-center gap-2 group"
            >
              Contact Me
            </a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
