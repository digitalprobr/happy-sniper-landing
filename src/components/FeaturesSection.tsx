
import React from "react";
import { Zap } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-solana-purple/10 dark:bg-solana-purple/20 text-solana-purple font-medium text-sm mb-4 fade-in-section">
            <Zap className="mr-2 h-4 w-4" /> Advanced Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white fade-in-section">
            Everything You Need to <span className="text-gradient-purple">Outperform</span> the Market
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto fade-in-section">
            Our advanced technology gives you the edge with lightning-fast execution, intelligent analysis, and powerful automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
