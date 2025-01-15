import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Calculator, Trophy, Crown } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
    {/* Top Bar */}
    <div className="border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <span>Gold</span>
            <span className="text-gray-400">$1,999</span>
            <span className="text-gray-400">$15</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>Silver</span>
            <span className="text-gray-400">$1,999</span>
            <span className="text-gray-400">$15</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>Platinum</span>
            <span className="text-gray-400">$1,999</span>
            <span className="text-gray-400">$15</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Trophy className="h-4 w-4" />
            Top 10
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Crown className="h-4 w-4" />
            Premium List
          </Button>
          <Button variant="default" size="sm">
            Button
          </Button>
        </div>
      </div>
    </div>

    {/* Main Navigation */}
    <div className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img src="/lovable-uploads/67ae16e5-13c4-4fb7-b765-85e99cda4a58.png" alt="Guldpris" className="h-8" />
          <nav className="flex space-x-6">
            <a href="#" className="text-sm font-medium">Kaufen</a>
            <a href="#" className="text-sm font-medium">Verkaufen</a>
            <a href="#" className="text-sm font-medium">Handler</a>
            <a href="#" className="text-sm font-medium">Kurse</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search" 
              className="w-[300px] pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm">
            0
          </div>
        </div>
      </div>
    </div>

    {/* Hero Section */}
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Denmark's No. 1 Gold<br />Comparison Portal</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="default" size="lg">Sell Gold</Button>
        <Button variant="outline" size="lg">Buy Gold</Button>
      </div>
    </div>

    {/* Categories */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-8">
        {[
          { title: "Gold Coins", icon: "coins" },
          { title: "Goldbarren", icon: "bars" },
          { title: "Silbermunzen", icon: "coins" },
          { title: "Silberbarren", icon: "bars" },
        ].map((category) => (
          <div key={category.title} className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <h3 className="text-sm font-medium">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>

    {/* Price Tables */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Gold Coins Table */}
        <div>
          <h2 className="text-xl font-bold mb-4">Gold Coins</h2>
          <div className="flex gap-2 mb-4">
            <Button variant="outline" size="sm">1 oz</Button>
            <Button variant="outline" size="sm">1/2 oz</Button>
            <Button variant="outline" size="sm">1/4 oz</Button>
            <Button variant="outline" size="sm">1/10 oz</Button>
          </div>
          <table className="w-full">
            <tbody>
              {Array(7).fill(null).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3">Britannia</td>
                  <td className="py-3 text-center">1 oz</td>
                  <td className="py-3 text-right text-gray-500">from €298.92</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Silver Coins Table */}
        <div>
          <h2 className="text-xl font-bold mb-4">Silver Coins</h2>
          <div className="flex gap-2 mb-4">
            <Button variant="outline" size="sm">1 oz</Button>
            <Button variant="outline" size="sm">2 oz</Button>
            <Button variant="outline" size="sm">5 oz</Button>
            <Button variant="outline" size="sm">10 oz</Button>
            <Button variant="outline" size="sm">1 kg</Button>
          </div>
          <table className="w-full">
            <tbody>
              {Array(7).fill(null).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3">Britannia</td>
                  <td className="py-3 text-center">1 oz</td>
                  <td className="py-3 text-right text-gray-500">from €298.92</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero