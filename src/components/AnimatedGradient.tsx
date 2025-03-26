
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className, children }) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute -inset-[10px] animated-gradient-bg blur-3xl"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
