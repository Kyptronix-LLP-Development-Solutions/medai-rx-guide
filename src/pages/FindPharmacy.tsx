
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

const pharmacies = [
  {
    id: 1,
    name: "HealthPlus Pharmacy",
    rating: 4.8,
    address: "123 Main St, Downtown",
    openNow: true,
    distance: "0.5 km"
  },
  {
    id: 2,
    name: "MediCare Central",
    rating: 4.6,
    address: "456 Health Ave, Medical District",
    openNow: true,
    distance: "1.2 km"
  },
  {
    id: 3,
    name: "QuickMeds Pharmacy",
    rating: 4.5,
    address: "789 Wellness Blvd, City Center",
    openNow: false,
    distance: "2.1 km"
  }
];

const FindPharmacy = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [openNowFilter, setOpenNowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Enter your location"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="openNow"
                    checked={openNowFilter}
                    onChange={(e) => setOpenNowFilter(e.target.checked)}
                    className="rounded border-border"
                  />
                  <label htmlFor="openNow" className="text-sm">Open Now</label>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
                  <select className="w-full p-2 rounded-md border border-border bg-background">
                    <option>Any Rating</option>
                    <option>4+ Stars</option>
                    <option>4.5+ Stars</option>
                  </select>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Find Pharmacy</h1>
              <p className="text-muted-foreground">
                Discover verified pharmacies near you with real-time availability
              </p>
            </div>

            <div className="space-y-4">
              {pharmacies.map((pharmacy) => (
                <Card key={pharmacy.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{pharmacy.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center">
                            ⭐ {pharmacy.rating}
                          </span>
                          <span>{pharmacy.distance}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            pharmacy.openNow 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {pharmacy.openNow ? 'Open Now' : 'Closed'}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{pharmacy.address}</p>
                      </div>
                      
                      <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Upload Rx
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPharmacy;
