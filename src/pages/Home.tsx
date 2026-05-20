import { motion } from 'motion/react';
import Hero3D from '@/src/components/3d/Hero3D';
import FloatingIcons from '@/src/components/FloatingIcons';
import { usePortfolio } from '@/src/context/PortfolioContext';
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Globe, 
  Download, 
  CheckCircle2, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  Star,
  Users,
  Zap,
  ArrowUpRight,
  Monitor,
  Layout as LayoutIcon,
  Palette,
  FileJson,
  Smartphone,
  Cpu,
  Link as LinkIcon,
  Flame,
  Leaf,
  Bug,
  ClipboardList,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import * as Icons from 'lucide-react';
import LazyImage from '@/src/components/LazyImage';

const LucideIcon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  // @ts-ignore
  const Icon = Icons[name] || Icons.HelpCircle;
  return <Icon size={size} className={className} />;
};

export default function Home() {
  const { data: portfolioData } = usePortfolio();
  const stats = [
    { label: 'Years Exp', value: '1+', icon: <Award className="text-accent" /> },
    { label: 'Projects', value: '15+', icon: <LayoutIcon className="text-accent" /> },
    { label: 'Clients', value: '10+', icon: <Users className="text-accent" /> },
    { label: 'Uptime', value: '100%', icon: <Zap className="text-accent" /> },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[100vh] flex items-center px-4 md:px-8 py-20">
        <Hero3D />
        <FloatingIcons />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
             className="px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8"
            >
              Architecting Digital Excellence
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black mb-6 leading-[0.85] tracking-tighter text-white">
              <span className="block mb-2 overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block"
                >
                  REVANTH KUMAR
                </motion.span>
              </span>
              <span className="block text-accent overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block italic"
                >
                  YALLANURU
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-base sm:text-lg md:text-2xl text-beige/50 mb-12 max-w-2xl font-medium tracking-tight px-4 sm:px-0"
            >
              Award-Winning FullStack Engineer specialized in turning complex challenges into <span className="text-beige/80">polished, scalable human experiences.</span>
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-10 py-5 bg-accent text-primary rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(167,170,99,0.3)] transition-all hover:scale-105 active:scale-95 group"
              >
                See Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="w-full sm:w-auto px-10 py-5 glass-panel rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/20 hover:scale-105 active:scale-95 group"
              >
                Download My CV
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent/30 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-accent/20 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About & Stats Section - MERGED */}
      <section className="py-24 md:py-48 px-6 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 xl:col-span-5 text-center xl:text-left"
            >
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-6 block">Mastering the Craft</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                Crafting Code with <span className="text-secondary italic">Surgical</span> Precision.
              </h2>
              <p className="text-lg md:text-xl text-beige/50 leading-relaxed mb-10 font-medium max-w-xl mx-auto xl:mx-0">
                {portfolioData.personal.about}
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-lg mx-auto xl:mx-0">
                {stats.map((stat, i) => (
                  <div key={i} className="glass-panel p-6 rounded-[2rem] group hover:border-accent/40 transition-all">
                    <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center xl:justify-start">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-black mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-beige/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {(portfolioData.skills || []).map((group, i) => (
                <div key={i} className="glass-panel p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    {i % 2 === 0 ? <Cpu size={80} /> : <Globe size={80} />}
                  </div>
                  <h3 className="text-xl font-bold mb-8 text-accent uppercase tracking-widest">{group.category}</h3>
                  <div className="flex flex-wrap gap-4">
                    {group.items.map(item => (
                      <div key={item.name} className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all cursor-default">
                        <LucideIcon name={item.icon} size={16} className="text-accent" />
                        <span className="text-xs font-bold text-beige/70">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
      </section>

      {/* Experience Section - MERGED */}
      <section className="py-20 md:py-40 px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-24 text-center md:text-left">
            <div className="max-w-2xl">
                <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-6 block">Professional Odyssey</span>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
                  Experience & <span className="text-accent">Milestones</span>.
                </h2>
                <p className="text-beige/50 text-xl font-medium">A track record of high-impact engineering across diverse sectors.</p>
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
              {(portfolioData.experience || []).map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border-white/5 group hover:border-accent/30 transition-all relative overflow-hidden"
              >
                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center justify-between">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-primary flex items-center justify-center text-accent shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                            <Briefcase size={32} className="md:w-9 md:h-9" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black uppercase text-accent tracking-widest">
                                    {exp.type}
                                </span>
                                <span className="text-beige/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Calendar size={14} /> {exp.period}
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">{exp.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-beige/60 font-medium">
                                <span className="text-accent font-bold">{exp.company}</span>
                                <span className="hidden sm:inline opacity-30">•</span>
                                <span className="flex items-center gap-1 text-sm"><MapPin size={14} /> {exp.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-beige/50 font-medium text-base sm:text-lg leading-relaxed mb-6">
                            {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest text-beige/40">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                 </div>
                 
                 <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {exp.achievements.map((ach, idx) => (
                        <div key={idx} className="flex gap-4 items-start bg-white/5 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5">
                            <CheckCircle2 className="text-accent shrink-0" size={18} />
                            <p className="text-xs sm:text-sm text-beige/70 font-medium leading-relaxed">{ach}</p>
                        </div>
                    ))}
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - IMPROVED RESPONSIVENESS */}
      <section className="py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 gap-10">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-6 block">Proof of Concept</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight">Featured <br /><span className="text-beige">Creations</span>.</h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-3 px-8 py-4 glass-panel rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:bg-accent hover:text-primary mb-2">
              Explore All Work
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {(portfolioData.projects || []).filter(p => p.featured).slice(0, 4).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[450px] sm:h-[550px] md:h-[650px] overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#0d1213] border border-white/5"
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-10 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-6 pointer-events-none">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-beige/60 text-lg mb-8 line-clamp-2 leading-relaxed font-medium transition-colors group-hover:text-beige">
                        {project.description}
                    </p>
                    <div className="flex items-center gap-4">
                        <Link to="/projects" className="flex items-center gap-3 font-black uppercase text-xs tracking-[0.2em] group/btn">
                             View Case Study
                            <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center transform group-hover/btn:translate-x-2 transition-transform">
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials Carousel */}
      <section className="py-24 md:py-48 bg-accent/5 overflow-hidden border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-6 block">The Reputation</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
              Word on the <span className="text-secondary italic">Street</span>.
            </h2>
            <p className="text-beige/50 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Trusted by industry leaders and startups alike to deliver high-impact digital solutions.
            </p>
          </motion.div>
        </div>

        <div className="relative flex overflow-hidden group">
          <motion.div 
            animate={{ 
              x: [0, -1035] 
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 px-4"
          >
            {[...(portfolioData.testimonials || []), ...(portfolioData.testimonials || []), ...(portfolioData.testimonials || [])].map((test, i) => (
              <div 
                key={i} 
                className="w-[300px] sm:w-[450px] shrink-0 glass-panel p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] relative border-white/5 hover:border-accent/30 transition-all flex flex-col justify-between"
              >
                <div className="absolute top-10 right-10 opacity-5">
                   <Icons.Quote size={60} className="text-accent" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} size={14} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl font-medium text-beige/80 italic mb-10 leading-relaxed relative z-10">
                  "{test.quote}"
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center font-black text-accent shrink-0 uppercase tracking-tighter shadow-lg">
                    {test.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">{test.author}</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-beige/30">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient overrides for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto relative group">
          <div className="absolute inset-0 bg-accent rounded-[3rem] sm:rounded-[4rem] group-hover:scale-[1.02] transition-transform duration-500 -z-10 blur-2xl opacity-10" />
          <div className="glass-panel p-10 sm:p-20 md:p-32 rounded-[3rem] sm:rounded-[5rem] overflow-hidden relative text-center border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <span className="text-accent font-black tracking-[0.5em] uppercase text-xs mb-10 block">Ready for the Next Chapter?</span>
            <h2 className="text-4xl sm:text-5xl md:text-[8rem] font-black mb-12 tracking-tighter leading-none">
                Let's Build <br /> Something <span className="text-accent italic underline decoration-4 underline-offset-[10px] md:underline-offset-[20px]">Iconic</span>.
            </h2>
            <Link 
              to="/contact" 
              className="px-10 sm:px-16 py-6 sm:py-8 bg-accent text-primary rounded-2xl sm:rounded-[2rem] font-black text-lg sm:text-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-accent/40 inline-flex items-center gap-4 w-full sm:w-auto justify-center"
            >
              Start Connection
              <Zap fill="currentColor" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
