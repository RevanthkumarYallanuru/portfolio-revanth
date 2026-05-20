import { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/src/context/PortfolioContext';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram, ArrowRight, Loader2, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const { data: portfolioData } = usePortfolio();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-primary min-h-screen pb-32">
       {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-150 bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto pt-32 px-6">
        <header className="mb-24 text-center md:text-left">
           <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex gap-2 items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 text-accent mb-8"
            >
                <MessageCircle size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Open For Collaboration</span>
            </motion.div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
            Let's <span className="text-secondary italic">Converse</span>.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beige/50 max-w-2xl font-medium leading-relaxed mx-auto md:mx-0 px-4 sm:px-0">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </header>

        <div className="space-y-16 md:space-y-24">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="glass-panel p-8 sm:p-12 rounded-[3.5rem] border-white/5 group hover:border-accent/10 transition-all">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-12">Contact Nodes</h3>
                <div className="space-y-10">
                  <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-6 group/item min-w-0">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-4xl bg-white/5 border border-white/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-primary transition-all shadow-xl shrink-0">
                      <Mail size={24} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <div className="text-[10px] font-black uppercase tracking-widest text-beige/30 mb-2">Electronic Mail</div>
                      <div className="text-base sm:text-lg md:text-xl font-black group-hover/item:text-accent transition-colors wrap-break-word leading-tight whitespace-normal">{portfolioData.personal.email}</div>
                    </div>
                  </a>

                  <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-4xl bg-white/5 border border-white/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-primary transition-all shadow-xl shrink-0">
                      <Phone size={24} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </div>
                     <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-widest text-beige/30 mb-2">Direct Line</div>
                      <div className="text-base sm:text-lg md:text-xl font-black group-hover/item:text-accent transition-colors truncate leading-tight">{portfolioData.personal.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-4xl bg-white/5 border border-white/5 flex items-center justify-center text-accent shadow-xl shrink-0">
                      <MapPin size={24} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </div>
                     <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-widest text-beige/30 mb-2">Current Base</div>
                      <div className="text-base sm:text-lg md:text-xl font-black truncate leading-tight">{portfolioData.personal.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
               <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-[4rem] border-white/5 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden sm:block font-black text-9xl">@</div>
                 
                 {submitted ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="text-center py-12 md:py-16"
                   >
                       <div className="w-20 h-20 md:w-24 md:h-24 bg-accent text-primary rounded-4xl flex items-center justify-center mx-auto mb-10 shadow-[0_20px_60px_rgba(167,170,99,0.5)]">
                       <Send size={44} />
                     </div>
                     <h2 className="text-4xl font-black mb-6 tracking-tight">Success!</h2>
                     <p className="text-beige/50 text-xl mb-12 max-w-md mx-auto font-medium">Transmission complete. I'll respond within 24 standard hours.</p>
                     <button 
                       onClick={() => setSubmitted(false)}
                       className="px-12 py-5 glass-panel rounded-2xl font-black tracking-[0.2em] uppercase text-xs hover:bg-accent hover:text-primary transition-all"
                     >
                       Refresh
                     </button>
                   </motion.div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-accent ml-2">Identity</label>
                         <input
                           type="text"
                           required
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                           className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-beige placeholder:text-beige/20 focus:outline-none focus:border-accent/40 transition-all font-bold text-lg"
                           placeholder="Your Name"
                         />
                       </div>
                       <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-accent ml-2">Digital Mail</label>
                         <input
                           type="email"
                           required
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                           className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-beige placeholder:text-beige/20 focus:outline-none focus:border-accent/40 transition-all font-bold text-lg"
                           placeholder="Email Address"
                         />
                       </div>
                     </div>
                     <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-accent ml-2">The Mission</label>
                       <textarea
                         required
                         value={formData.message}
                         onChange={(e) => setFormData({...formData, message: e.target.value})}
                         rows={5}
                         className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-beige placeholder:text-beige/20 focus:outline-none focus:border-accent/40 transition-all font-bold text-lg resize-none"
                         placeholder="Describe your vision..."
                       />
                     </div>
                     <button
                       type="submit"
                       disabled={isSubmitting}
                       className="w-full py-8 bg-accent text-primary rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-4 hover:shadow-[0_25px_60px_rgba(167,170,99,0.3)] transition-all disabled:opacity-50 group"
                     >
                       {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Message <ArrowRight className="group-hover:translate-x-3 transition-transform" /></>}
                     </button>
                   </form>
                 )}
               </div>
            </div>
          </div>

          {/* Social Ecosystem - Full Width */}
          <div className="glass-panel p-10 sm:p-16 rounded-[4rem] border-white/5 text-center">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-12">Digital Ecosystem</h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                  {portfolioData.social.map((s) => {
                    // Map icon name from data to the imported Lucide component.
                    const Icons = {
                      Github,
                      Linkedin,
                      Instagram,
                      Mail,
                    } as const;
                    const IconComponent = (Icons as any)[s.icon] || Mail;
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        title={s.name}
                        className="group"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center text-beige/30 hover:bg-accent hover:text-primary hover:border-accent transition-all hover:-translate-y-3 shadow-xl">
                      <IconComponent size={32} strokeWidth={1.5} />
                        </div>
                        <span className="mt-4 block text-[10px] font-black uppercase tracking-widest text-beige/20 group-hover:text-accent transition-colors">{s.name}</span>
                      </a>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
