
import React from "react";
import Button from "./Button";
import AnimatedGradient from "./AnimatedGradient";
import { ArrowUpRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <AnimatedGradient className="absolute inset-0" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-xl border border-white/20 dark:border-white/5 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient-purple">Dominate</span> the Solana Memecoin Market?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of traders who are already using Traderr to capture early opportunities and maximize their returns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="gradient" 
              size="lg" 
              icon={<ArrowUpRight className="h-5 w-5" />}
            >
              Launch Traderr
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
  );
};

export default CTASection;
