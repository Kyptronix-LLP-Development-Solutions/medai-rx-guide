
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import HowItWorks from '@/components/HowItWorks';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
