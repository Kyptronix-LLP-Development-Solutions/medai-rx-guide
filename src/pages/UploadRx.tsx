
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

const UploadRx = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    console.log('Files dropped:', e.dataTransfer.files);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Step 1: Upload Prescription</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                  dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-xl font-semibold mb-2">Drop your prescription here</h3>
                <p className="text-muted-foreground mb-4">
                  or click to browse files (PDF, JPG, PNG)
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Choose File
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Step 2: Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input placeholder="Enter patient name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input placeholder="Enter phone number" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Special Notes</label>
                <textarea 
                  className="w-full p-3 rounded-md border border-border bg-background resize-none"
                  rows={3}
                  placeholder="Any special instructions or allergies..."
                />
              </div>
            </CardContent>
          </Card>
        );
      
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Step 3: Select Pharmacy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['HealthPlus Pharmacy', 'MediCare Central', 'QuickMeds Pharmacy'].map((pharmacy, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <input type="radio" name="pharmacy" value={pharmacy} />
                    <div>
                      <p className="font-medium">{pharmacy}</p>
                      <p className="text-sm text-muted-foreground">⭐ 4.{8-index} • Open Now</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      
      default:
        return (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Prescription Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                Your prescription has been sent to the pharmacy. You'll receive updates via SMS/email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  View Dashboard
                </Button>
                <Button variant="outline">
                  Upload Another
                </Button>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Prescription</h1>
          <p className="text-muted-foreground">
            Submit your prescription securely to verified pharmacies
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= step 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 ${
                  currentStep > step ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep < 4 ? (
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              {currentStep === 3 ? 'Submit' : 'Next'}
            </Button>
          ) : (
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setCurrentStep(1)}
            >
              Start Over
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadRx;
