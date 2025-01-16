"use client"
import React from 'react';
import Sidebar from './Sidebar';
import PriceTable from './PriceTable';
import Navbar from './Navbar';
import FeaturedCoins from './FeaturedCoins';
import BuyGold from './BuyGold';
import PriceDynamics from './PriceDynamics';
import ShopByCategory from './ShopByCategory';
import GoldForBeginner from './GoldForBeginner';
import Footer from './Footer';

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex container mx-auto p-0">
        <Sidebar />
        <div className="flex-1 p-5">
          <h1 className="mt-20 font-inter text-[#181515] font-600 text-[42px] flex flex-wrap">
            Denmark’s No. 1 Gold Comparison Portal
          </h1>
          <div className="flex items-center bg-[#F8F8F8] p-5 space-x-5  w-full">
            <p className="text-[12px]">I want to see prices for:</p>
            <div className="flex items-center space-x-3">
              <p className="text-[12px]">Buying</p>
              <label
                htmlFor="AcceptConditions"
                className="relative inline-block h-7 w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] peer-checked:bg-[#EAC463]"
              >
                <input type="checkbox" id="AcceptConditions" className="peer sr-only" />
                <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-white transition-all peer-checked:start-5"></span>
              </label>
              <p className="text-[12px]">Buying</p>
            </div>
          </div>

          {/* Price Tables */}
          <div className="w-full  md:px-0 py-10">
          <div className="grid grid-cols-1 p-5 md:grid-cols-1 lg:grid-cols-2  gap-14">
              <PriceTable />
              <PriceTable />
              <PriceTable />
              <PriceTable />
            </div>
          </div>

    
        </div>

      </div>
      <FeaturedCoins />
      <BuyGold />
      <PriceDynamics />
      <GoldForBeginner />
      <Footer />
    </div>
  );
};

export default Hero;
