
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-bold">MedAI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => navigate('/')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => navigate('/ask-ai')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Ask AI
          </button>
          <button 
            onClick={() => navigate('/find-pharmacy')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Find Pharmacy
          </button>
          <button 
            onClick={() => navigate('/upload-rx')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Upload Rx
          </button>
          <button className="text-sm font-medium hover:text-primary transition-colors">
            Login
          </button>
        </nav>

        <Button 
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          onClick={() => navigate('/pharmacy-join')}
        >
          Join as Pharmacy
        </Button>
      </div>
    </header>
  );
};

export default Header;
