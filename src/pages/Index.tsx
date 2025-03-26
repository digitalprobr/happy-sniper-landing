
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import AnimatedGradient from "@/components/AnimatedGradient";
import { Zap, Shield, ArrowUpRight, Rocket, Bot, Clock, Gauge, ChartBar, ArrowRight, Play, Download, CheckCircle } from "lucide-react";

const Index = () => {
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

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".fade-in-section").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-20 px-6 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-solana-purple/10 dark:bg-solana-purple/20 text-solana-purple font-medium text-sm mb-4 fade-in-section">
                <Zap className="mr-2 h-4 w-4" /> Advanced Features
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in-section">
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
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-6 bg-secondary/50 dark:bg-gray-900/50 relative">
          <AnimatedGradient className="absolute inset-0 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-solana-green/10 dark:bg-solana-green/20 text-solana-green font-medium text-sm mb-4 fade-in-section">
                <Play className="mr-2 h-4 w-4" /> Simple Process
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in-section">
                How <span className="text-gradient-green">SolSniper</span> Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto fade-in-section">
                Getting started with SolSniper is easy. Follow these simple steps to start sniping the best memecoin opportunities on Solana.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-soft relative fade-in-section">
                <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-solana-purple flex items-center justify-center text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Connect Your Wallet</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Securely connect your Solana wallet to provide SolSniper with the permissions needed to execute trades on your behalf.
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
                  Activate SolSniper and watch as it monitors the Solana blockchain for opportunities and executes trades according to your strategy.
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
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-solana-purple/10 dark:bg-solana-purple/20 text-solana-purple font-medium text-sm mb-4 fade-in-section">
                <Download className="mr-2 h-4 w-4" /> Simple Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in-section">
                Choose Your <span className="text-gradient-purple">SolSniper</span> Plan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto fade-in-section">
                Flexible pricing options to fit your trading style and volume, with no hidden fees or commissions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-md transition-all duration-300 fade-in-section">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Basic sniping capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Single DEX support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Up to 10 concurrent monitors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Email support</span>
                  </li>
                </ul>
                <Button variant="outline" fullWidth>
                  Get Started
                </Button>
              </div>
              
              <div className="bg-gradient-to-b from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 rounded-2xl p-8 border border-solana-purple/20 shadow-soft hover:shadow-md transition-all duration-300 relative fade-in-section">
                <div className="absolute top-0 right-0 bg-solana-purple text-white text-xs font-bold px-3 py-1 uppercase rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$149</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Advanced sniping algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Multi-DEX support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Up to 50 concurrent monitors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Priority email & Discord support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">MEV protection features</span>
                  </li>
                </ul>
                <Button variant="gradient" fullWidth>
                  Get Started
                </Button>
              </div>
              
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-md transition-all duration-300 fade-in-section">
                <h3 className="text-xl font-bold mb-2">Ultimate</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Enterprise-grade sniping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">All DEXes supported</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Unlimited concurrent monitors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Custom strategy development</span>
                  </li>
                </ul>
                <Button variant="accent" fullWidth>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <AnimatedGradient className="absolute inset-0" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-xl border border-white/20 dark:border-white/5 text-center fade-in-section">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-gradient-purple">Dominate</span> the Solana Memecoin Market?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of traders who are already using SolSniper to capture early opportunities and maximize their returns.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  icon={<ArrowUpRight className="h-5 w-5" />}
                >
                  Launch SolSniper
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-10 px-6 bg-secondary/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
            <div className="flex items-center space-x-1 mb-6 md:mb-0">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green flex items-center justify-center text-white font-bold text-lg">S</div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green ml-1">SolSniper</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} SolSniper. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
