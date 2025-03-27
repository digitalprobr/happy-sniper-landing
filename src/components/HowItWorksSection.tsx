
import React from "react";
import Button from "./Button";
import AnimatedGradient from "./AnimatedGradient";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-secondary/50 dark:bg-gray-900/50 relative">
      <AnimatedGradient className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-solana-green/10 dark:bg-solana-green/20 text-solana-green font-medium text-sm mb-4 fade-in-section">
            <Play className="mr-2 h-4 w-4" /> Simple Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in-section">
            How <span className="text-gradient-green">Traderr</span> Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto fade-in-section">
            Getting started with Traderr is easy. Follow these simple steps to start sniping the best memecoin opportunities on Solana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-soft relative fade-in-section">
            <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-solana-purple flex items-center justify-center text-white font-bold text-xl">1</div>
            <h3 className="text-xl font-bold mb-4 pt-2">Connect Your Wallet</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Securely connect your Solana wallet to provide Traderr with the permissions needed to execute trades on your behalf.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Supports Phantom, Solflare & more</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Non-custodial architecture</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-soft relative fade-in-section">
            <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-solana-purple flex items-center justify-center text-white font-bold text-xl">2</div>
            <h3 className="text-xl font-bold mb-4 pt-2">Configure Your Strategy</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Set your trading parameters including token filters, maximum slippage, gas settings, and automatic profit-taking.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Customizable parameters</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Pre-built strategies available</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-soft relative fade-in-section">
            <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-solana-purple flex items-center justify-center text-white font-bold text-xl">3</div>
            <h3 className="text-xl font-bold mb-4 pt-2">Launch & Monitor</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Activate Traderr and watch as it monitors the Solana blockchain for opportunities and executes trades according to your strategy.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Real-time performance dashboard</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Mobile notifications</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16 fade-in-section">
          <Button 
            variant="gradient" 
            size="lg" 
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Start Sniping Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
