
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className,
  index = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative p-6 rounded-2xl bg-white dark:bg-secondary/20 shadow-soft dark:shadow-none backdrop-blur-sm border border-slate-100 dark:border-white/10 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-solana-green hover:dark:border-solana-green fade-in-section text-center group",
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 rounded-xl bg-solana-purple/10 dark:bg-solana-purple/20 w-fit transition-colors duration-300 group-hover:bg-solana-green/10 dark:group-hover:bg-solana-green/20">
          <Icon className="h-6 w-6 text-solana-purple transition-colors duration-300 group-hover:text-solana-green" />
        </div>
        <h3 className="text-xl font-semibold text-black dark:text-white transition-transform duration-300 group-hover:scale-105">{title}</h3>
        <p className="text-black dark:text-white">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
