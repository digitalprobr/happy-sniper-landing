
import React from "react";
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
  return (
    <div 
      className={cn(
        "relative p-6 rounded-2xl bg-white dark:bg-secondary/20 shadow-soft dark:shadow-none backdrop-blur-sm border border-slate-100 dark:border-white/10 transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        transform: "translateY(20px)"
      }}
      onLoad={(e) => {
        const element = e.currentTarget;
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 100);
      }}
    >
      <div className="flex flex-col space-y-4">
        <div className="p-3 rounded-xl bg-solana-purple/10 dark:bg-solana-purple/20 w-fit">
          <Icon className="h-6 w-6 text-solana-purple" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-yellow-300">{title}</h3>
        <p className="text-gray-600 dark:text-yellow-200">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
