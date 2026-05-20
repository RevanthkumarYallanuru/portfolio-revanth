import { motion } from 'motion/react';
import { portfolioData } from '@/src/constants';
import { Check, Sparkles, Rocket, Zap, Search, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function Services() {
  const icons = [<Rocket />, <Zap />, <Search />, <ShieldCheck />];

  return (
    <div className="bg-primary min-h-screen pb-32 px-6">
      <div className="max-w-7xl mx-auto pt-32">
      <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent mb-8"
          >
            <Sparkles size={16} />
            <span className="text-xs font-black uppercase tracking-widest">My Expertise</span>
          </motion.div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none">
            High <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-beige">Performance</span> Solutions.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beige/60 max-w-2xl mx-auto leading-relaxed px-4">
            I don't just build websites; I engineer digital engines designed to propel your brand into the future.
          </p>
      </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-32">
          {portfolioData.services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-white/5 flex flex-col",
                service.highlighted ? "bg-secondary/10" : "bg-white/[0.02]"
              )}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10 group-hover:bg-accent/20 transition-all duration-700" />
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-primary flex items-center justify-center text-accent mb-8 sm:mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                {icons[i % icons.length]}
              </div>

              <div className="mb-8 sm:mb-10">
                <span className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest block mb-4">
                  {service.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tighter leading-tight">
                  {service.title}
                </h2>
                <p className="text-beige/60 text-base sm:text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-beige/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 sm:mt-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-accent font-black tracking-widest uppercase text-xs sm:text-sm group-hover:gap-4 transition-all"
                >
                  Start a project <Zap size={16} fill="currentColor" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <section className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-accent p-8 sm:p-12 md:p-24 text-primary text-center mx-4 sm:mx-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none mix-blend-overlay">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse-slow" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Ready to Build <br /> Something Epic?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-primary/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium">
            Let's collaborate to turn your unique vision into a world-class digital reality.
          </p>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-primary text-beige rounded-2xl font-black text-lg sm:text-xl hover:scale-105 transition-transform inline-block shadow-2xl"
          >
            Let's Talk
          </Link>
        </section>
      </div>
    </div>
  );
}
