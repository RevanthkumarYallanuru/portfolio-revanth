import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { usePortfolio } from '@/src/context/PortfolioContext';

export default function SocialIcons({ size = 18, className = '' }: { size?: number, className?: string }) {
  const { data } = usePortfolio();
  const Icons: Record<string, any> = { Github, Linkedin, Instagram, Mail };

  return (
    <div className={`flex justify-center gap-8 ${className}`}>
      {(data.social || []).map((s) => {
        const Icon = Icons[s.icon] || Mail;
        return (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-beige/30 hover:text-accent transition-colors">
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
