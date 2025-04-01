
import React from "react";
import Button from "./Button";
import AnimatedGradient from "./AnimatedGradient";
import { ArrowRight, Rocket, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full bg-hero-pattern opacity-10 dark:opacity-5"></div>
      
      <div className="absolute w-96 h-96 bg-solana-purple/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-solana-green/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-soft mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-solana-green mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Launching soon on Solana</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-6 animate-slide-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green">Snipe Memecoin</span> Gems Before Anyone Else
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "100ms" }}>
          The most advanced Solana memecoin sniper bot with lightning-fast execution, automatic slippage adjustment, and intelligent frontrun detection.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <a href="//app.traderr.fun/">
          <Button 
            variant="gradient" 
            size="lg" 
            icon={<Rocket className="h-5 w-5" />}
          >
            Launch App
          </Button>
          </a>
          <Button 
            variant="outline" 
            size="lg" 
            icon={<Zap className="h-5 w-5" />}
          >
            View Demo
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-solana-purple mb-1">100+</h3>
            <p className="text-gray-600 dark:text-gray-400">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-solana-green mb-1">$2.5M+</h3>
            <p className="text-gray-600 dark:text-gray-400">Volume Traded</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-solana-purple mb-1">15ms</h3>
            <p className="text-gray-600 dark:text-gray-400">Average Response</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-solana-green mb-1">500+</h3>
            <p className="text-gray-600 dark:text-gray-400">Successful Snipes</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
