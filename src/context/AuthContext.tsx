import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('yrk_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUser({ email: 'revanth@gmail.com', role: 'admin' });
    }
  }, []);

  const login = async (email: string, pass: string) => {
    // Admin credentials from request
    if (email === 'revanth@gmail.com' && pass === 'admin@revathBoss') {
      setIsAuthenticated(true);
      setUser({ email, role: 'admin' });
      localStorage.setItem('yrk_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('yrk_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
