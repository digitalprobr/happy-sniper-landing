
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <a href="//www.traderr.fun/"><div className="h-9 w-9 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green flex items-center justify-center text-white font-bold text-lg animate-pulse-slow">T</div></a>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green ml-1"><a href="//www.traderr.fun/">Traderr</a></span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 dark:text-gray-200 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-700 dark:text-gray-200 hover:text-solana-purple dark:hover:text-solana-green transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button variant="gradient" icon={<ArrowRight className="h-4 w-4" />}>
              Get Started
            </Button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden pt-20 px-6 transition-all duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 text-center">
          <a 
            href="#features" 
            className="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-solana-purple dark:hover:text-solana-green transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-solana-purple dark:hover:text-solana-green transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#pricing" 
            className="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-solana-purple dark:hover:text-solana-green transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <Button variant="gradient" fullWidth className="mt-4">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
