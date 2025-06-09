
import React from 'react';

const steps = [
  {
    number: 1,
    title: "Ask",
    description: "Chat with our AI for medical guidance and recommendations",
    color: "primary"
  },
  {
    number: 2,
    title: "Search",
    description: "Find nearby pharmacies with availability and ratings",
    color: "secondary"
  },
  {
    number: 3,
    title: "Upload",
    description: "Submit your prescription securely to selected pharmacy",
    color: "primary"
  },
  {
    number: 4,
    title: "Get Refill",
    description: "Receive notifications when your medication is ready",
    color: "secondary"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to get your medical needs fulfilled quickly and safely
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-1/2" />
              )}
              
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-${step.color}-foreground bg-${step.color} mx-auto mb-4 relative z-10`}>
                {step.number}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
