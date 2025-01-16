import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Calculator, Trophy, Crown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='hidden md:block'>
      <div className="border-b bg-[#181515] text-white py-4 ">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap md:flex-nowrap space-x-5 mb-4 md:mb-0">
            <div className="border-r pr-3 font-bold">
              <p>Guld</p>
              <p>Solv</p>
            </div>
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="border-r pr-2">
                <p className="font-bold">$1,999 <span className="text-gray-500">/oz</span></p>
                <p className="font-bold">$32 <span className="text-gray-500">/oz</span></p>
              </div>
            ))}
          </div>
          <div className="text-center mb-4 md:mb-0">
            <Link href="#" className="font-bold text-[25px] bg-[#181515] text-white">Guldpris</Link>
          </div>
          <div className="flex space-x-4">
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
            <Button variant="default" size="sm">Button</Button>
          </div>
        </div>
      </div>
      <div className="border-b bg-[#181515] text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap md:flex-nowrap space-x-6 mb-4 md:mb-0">
            {['Kaufen', 'Verkaufen', 'Handler', 'Kurse'].map((navItem) => (
              <a key={navItem} href="#" className="text-sm font-medium">{navItem}</a>
            ))}
          </nav>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-auto">
              <Input
                type="search"
                placeholder="Search"
                className="w-full md:w-[300px] pl-10 bg-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            <button className="bg-[#EAC463] rounded-lg px-5 py-2">
              Subscribe for special offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
