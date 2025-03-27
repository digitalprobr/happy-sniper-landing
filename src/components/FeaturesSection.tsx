
import React from "react";
import FeatureCard from "./FeatureCard";
import { Zap, Shield, ChartBar, Rocket, Bot, Clock, Gauge } from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard 
            title="Lightning Fast Execution" 
            description="Execute trades in milliseconds with our optimized transaction infrastructure, ensuring you're always first in line."
            icon={Gauge}
            index={0}
            className="fade-in-section"
          />
          <FeatureCard 
            title="Intelligent MEV Protection" 
            description="Advanced algorithms detect and avoid front-running attempts, protecting your transactions from sandwich attacks."
            icon={Shield}
            index={1}
            className="fade-in-section"
          />
          <FeatureCard 
            title="Auto Slippage Adjustment" 
            description="Dynamic slippage calculation based on liquidity and volatility ensures optimal trade execution every time."
            icon={ChartBar}
            index={2}
            className="fade-in-section"
          />
          <FeatureCard 
            title="Multi-DEX Support" 
            description="Scan and execute trades across multiple Solana DEXes simultaneously to capture the best opportunities."
            icon={Rocket}
            index={3}
            className="fade-in-section"
          />
          <FeatureCard 
            title="24/7 Automated Monitoring" 
            description="Set it and forget it with automated monitoring that watches for new token launches and snipes opportunities."
            icon={Bot}
            index={4}
            className="fade-in-section"
          />
          <FeatureCard 
            title="Custom Timing Strategies" 
            description="Configure precise timing strategies based on liquidity events, token launches, or specific blockchain signals."
            icon={Clock}
            index={5}
            className="fade-in-section"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
