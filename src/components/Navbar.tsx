import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { usePortfolio } from '@/src/context/PortfolioContext';
import SocialIcons from '@/src/components/SocialIcons';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAdminPage = location.pathname.startsWith('/admin');

  if (isAdminPage) return null;

  return (
    <nav
      id="main-nav"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 -mt-3',
        isScrolled ? 'py-3' : 'py-6 md:py-8'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-full',
        isScrolled ? 'bg-primary/70 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'
      )}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary font-black text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-accent/20">
            YRK
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Revanth
            <span className="text-accent">.</span>
           
          </span>
        </Link>

        {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'px-4 py-2 text-sm font-bold transition-all rounded-full hover:bg-white/5',
                location.pathname === link.href ? 'text-accent bg-accent/5' : 'text-beige/60 hover:text-beige'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-6 bg-white/10 mx-2" />
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-accent text-primary rounded-full text-sm font-black hover:shadow-[0_0_30px_rgba(167,170,99,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-beige hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-primary/80 backdrop-blur-md z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-primary border-l border-white/10 z-50 md:hidden p-10 flex flex-col gap-8 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-10">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary font-black text-2xl">YR</div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-beige/50 hover:text-accent">
                    <X size={32} />
                </button>
            </div>
            
            <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                            'text-3xl font-black tracking-tighter transition-all py-2',
                            location.pathname === link.href ? 'text-accent pl-4 border-l-4 border-accent' : 'text-beige/40 hover:text-beige'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="mt-auto space-y-6">
                 <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-5 bg-accent text-primary rounded-2xl font-black text-center text-xl block shadow-xl shadow-accent/20"
                >
                    Let's Connect
                </Link>
                  <SocialIcons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
