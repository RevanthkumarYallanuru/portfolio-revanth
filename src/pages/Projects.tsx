import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '@/src/context/PortfolioContext';
import { ExternalLink, Github, Layers, ArrowRight, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from '@/src/components/LazyImage';

export default function Projects() {
  const { data: portfolioData } = usePortfolio();

  return (
    <div className="bg-primary min-h-screen pb-32">
      {/* Immersive Header */}
      <section className="relative pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute -bottom-20 -left-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/5 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex gap-2 items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 text-accent mb-10"
            >
                <Layers size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Portfolio Case Studies</span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none"
            >
                The Proof is in the <span className="text-secondary italic">Product</span>.
            </motion.h1>
            <p className="text-lg sm:text-xl md:text-2xl text-beige/50 max-w-3xl mx-auto leading-relaxed font-medium px-4">
                A selection of high-performance web applications, strategic architecture, and digital innovations crafted to scale.
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Projects Grid - IMPROVED RESPONSIVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                 <div className="glass-panel overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border-white/5 flex flex-col h-full hover:border-accent/30 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                   <div className="relative aspect-[16/10] overflow-hidden">
                        <LazyImage 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
                        />
                         <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex gap-2">
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-accent border border-accent/20">
                                {project.category}
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 sm:gap-6">
                            {project.liveDemo && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-accent text-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl">
                                    <ExternalLink size={20} className="md:w-6 md:h-6" />
                                </a>
                            )}
                            <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white text-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl">
                                <Github size={20} className="md:w-6 md:h-6" />
                            </a>
                        </div>
                   </div>

                   <div className="p-8 sm:p-10 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            {project.tech.map(t => (
                                <span key={t} className="text-[10px] font-black tracking-[0.2em] uppercase text-beige/30">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tight group-hover:text-accent transition-colors leading-none">
                            {project.title}
                        </h3>
                        <p className="text-beige/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 line-clamp-3 font-medium">
                            {project.description}
                        </p>
                        
                        <div className="mt-auto pt-6 sm:pt-8 border-t border-white/5 flex justify-between items-center">
                             <div className="flex items-center gap-2 text-accent font-black tracking-[0.2em] uppercase text-[10px]">
                                <MousePointer2 size={14} />
                                Explore Case
                             </div>
                             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                                <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
                             </div>
                        </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Global CTA */}
      <section className="mt-20 px-6">
         <div className="max-w-7xl mx-auto glass-panel p-10 sm:p-20 md:p-32 rounded-[3rem] md:rounded-[5rem] text-center border-white/5 relative overflow-hidden bg-accent/5">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                Start your next <br /> project with <span className="text-accent underline decoration-4 underline-offset-[10px] md:underline-offset-8">Precision</span>.
            </h2>
            <Link to="/contact" className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-accent text-primary rounded-2xl font-black text-lg sm:text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20 inline-block">
                Start a Conversation
            </Link>
         </div>
      </section>
    </div>
  );
}
