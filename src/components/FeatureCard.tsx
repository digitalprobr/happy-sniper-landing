
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
        "relative p-6 rounded-2xl bg-white dark:bg-secondary/20 shadow-soft dark:shadow-none backdrop-blur-sm border border-slate-100 dark:border-white/10 transition-all duration-300 hover:shadow-md hover:-translate-y-1 fade-in-section",
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col space-y-4">
        <div className="p-3 rounded-xl bg-solana-purple/10 dark:bg-solana-purple/20 w-fit">
          <Icon className="h-6 w-6 text-solana-purple" />
        </div>
        <h3 className="text-xl font-semibold text-white dark:text-white">{title}</h3>
        <p className="text-white dark:text-white">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
