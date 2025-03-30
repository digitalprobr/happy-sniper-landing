
import React from "react";
import Button from "./Button";
import { CheckCircle, Download } from "lucide-react";

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-solana-green/10 dark:bg-solana-purple/20 text-solana-green dark:text-solana-purple font-medium text-sm mb-4 fade-in-section">
            <Download className="mr-2 h-4 w-4" /> Simple Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in-section">
            Choose Your <span className="text-gradient-green dark:text-gradient-purple">Traderr</span> Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto fade-in-section">
            Flexible pricing options to fit your trading style and volume, with no hidden fees or commissions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-md transition-all duration-300 fade-in-section">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="mb-6">
              <span className="oldprice"><s>1.0 SOL</s></span><br />
              <span className="text-4xl font-bold">0.5 SOL</span>
              <span className="text-gray-500 dark:text-gray-400">/day</span>
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
                <span className="text-gray-600 dark:text-gray-300">Ticket support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">Sell fee: 7%</span>
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
              <span className="oldprice"><s>3.0 SOL</s></span><br />
              <span className="text-4xl font-bold">1.5 SOL</span>
              <span className="text-gray-500 dark:text-gray-400">/week</span>
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
                <span className="text-gray-600 dark:text-gray-300">Priority ticket & Discord support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">MEV protection features</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">Sell fee: 5%</span>
              </li>
            </ul>
            <Button variant="gradient" fullWidth>
              Get Started
            </Button>
          </div>
          
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-md transition-all duration-300 fade-in-section">
            <h3 className="text-xl font-bold mb-2">Ultimate</h3>
            <div className="mb-6">
              <span className="oldprice"><s>6.0 SOL</s></span><br />
              <span className="text-4xl font-bold">3.0 SOL</span>
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
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-solana-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">Sell fee: 3%</span>
              </li>
            </ul>
            <Button variant="accent" fullWidth>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
