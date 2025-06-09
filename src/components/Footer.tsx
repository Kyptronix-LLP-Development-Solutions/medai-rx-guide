
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold">MedAI</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted AI-powered medical guide and pharmacy connection platform.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">AI Medical Chat</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pharmacy Search</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Prescription Upload</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pharmacy Network</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Support</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Community</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Newsletter</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 MedAI. All rights reserved. Built with care for your health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
