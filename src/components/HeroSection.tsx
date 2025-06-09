
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="relative container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Your AI-Powered{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Medical Guide
          </span>{' '}
          Starts Here
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get instant medical guidance, find nearby pharmacies, and upload prescriptions seamlessly with our AI-powered platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-pulse-gold"
            onClick={() => navigate('/ask-ai')}
          >
            Ask MedAI
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg"
            onClick={() => navigate('/find-pharmacy')}
          >
            Search Pharmacy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
