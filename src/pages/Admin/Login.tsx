import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuth } from '@/src/context/AuthContext';
import { Lock, Mail, ChevronRight, Loader2, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const success = await login(email, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid credentials. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-panel p-10 md:p-12 rounded-[3rem] border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Lock size={120} />
        </div>
        
        <div className="mb-12 text-center">
            <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black">
                YR
            </div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">Admin Portal</h1>
            <p className="text-beige/40 text-sm font-medium uppercase tracking-[0.2em]">Authorized Access Only</p>
        </div>

        {error && (
            <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-medium"
            >
                <AlertCircle size={18} />
                {error}
            </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest uppercase text-beige/40 ml-4">Email Address</label>
            <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-beige/20" size={20} />
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-beige placeholder:text-beige/20 focus:outline-none focus:border-accent/40 transition-all font-medium"
                    placeholder="revanth@gmail.com"
                />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest uppercase text-beige/40 ml-4">Password</label>
             <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-beige/20" size={20} />
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-beige placeholder:text-beige/20 focus:outline-none focus:border-accent/40 transition-all font-medium"
                    placeholder="••••••••"
                />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-accent text-primary rounded-2xl font-black text-lg flex items-center justify-center gap-4 hover:shadow-[0_0_30px_rgba(167,170,99,0.3)] transition-all disabled:opacity-50 group mt-8"
          >
            {loading ? <Loader2 size={24} className="animate-spin" /> : (
                <>
                    Enter Dashboard
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
            <p className="text-beige/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                Secure Environment v1.0.0
            </p>
        </div>
      </motion.div>
    </div>
  );
}
