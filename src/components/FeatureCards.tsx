
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "AI Medical Chat",
    description: "Get instant medical guidance from our advanced AI assistant",
    icon: "🤖",
    accent: "primary"
  },
  {
    title: "Nearby Search",
    description: "Find verified pharmacies near you with real-time availability",
    icon: "🌍",
    accent: "secondary"
  },
  {
    title: "Prescription Upload",
    description: "Upload prescriptions securely for quick pharmacy processing",
    icon: "📄",
    accent: "primary"
  },
  {
    title: "Verified Pharmacies",
    description: "Connect with licensed and verified pharmacy partners",
    icon: "✅",
    accent: "secondary"
  }
];

const FeatureCards = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MedAI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical support powered by cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`hover:scale-105 transition-all duration-300 border-2 ${
                feature.accent === 'primary' 
                  ? 'border-primary/20 hover:border-primary/50' 
                  : 'border-secondary/20 hover:border-secondary/50'
              }`}
            >
              <CardHeader className="text-center">
                <div className={`text-4xl mb-4 p-4 rounded-lg inline-block ${
                  feature.accent === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
