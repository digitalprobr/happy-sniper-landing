
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 bg-secondary/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
          <div className="flex items-center space-x-1 mb-6 md:mb-0">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green flex items-center justify-center text-white font-bold text-lg">T</div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green ml-1">Traderr</span>
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
            © {new Date().getFullYear()} Traderr. All rights reserved.
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
  );
};

export default Footer;
