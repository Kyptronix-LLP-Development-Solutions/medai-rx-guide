
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="gradient-gold-magenta rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need medicine fast? Start with MedAI.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who trust MedAI for their medical guidance and pharmacy needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              onClick={() => navigate('/ask-ai')}
            >
              Start AI Chat
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold"
              onClick={() => navigate('/find-pharmacy')}
            >
              Find Pharmacy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
