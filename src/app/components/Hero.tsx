"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PriceTable from './PriceTable';
import Navbar from './Navbar';
import FeaturedCoins from './FeaturedCoins';
import BuyGold from './BuyGold';
import PriceDynamics from './PriceDynamics';
import ShopByCategory from './ShopByCategory';
import GoldForBeginner from './GoldForBeginner';
import Footer from './Footer';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex items-center space-x-3">
      <p className={`text-[12px] ${!isChecked ? 'font-bold' : ''}`}>Buying</p>
      <label
        htmlFor="AcceptConditions"
        className="relative inline-block h-6 w-12 cursor-pointer rounded-full has-[:checked]:bg-[#EAC463] bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] "
        
      >
        <input
          type="checkbox"
          id="AcceptConditions"
          className="peer sr-only"
          checked={isChecked}
          onChange={handleChange}
        />
        <span
          className="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:start-6"
        ></span>
      </label>
      <p className={`text-[12px] ${isChecked ? 'font-bold ' : ''}`}>Selling</p>
    </div>
  );
};

const Hero = () => {
  const countriesSet1 = ["Britannia", "France", "Germany"];
  const valuesSet1 = ["1 oz", "2 oz"];
  const pricesSet1 = ["€298.92", "€300"];

  const countriesSet2 = ["USA", "Canada", "Mexico"];
  const valuesSet2 = ["1 oz", "5 oz"];
  const pricesSet2 = ["$298.92", "$500"];

  return (
    <div className="min-h-screen">
      <div className="flex md:container md:m-auto mx-5">
        <Sidebar />
        <div className="flex-1">
          <h1 className="md:mt-20 mt-10 mb-3 font-inter text-[#181515] font-600 md:text-[42px] md:leading-normal text-xl flex flex-wrap">
            Denmark’s No. 1 Gold Comparison Portal
          </h1>
          <div className="flex items-center bg-[#F8F8F8] p-2 space-x-5 w-full">
            <p className="text-[12px]">I want to see prices for:</p>
            <ToggleButton />
          </div>
          <div className="w-full md:px-0 py-10">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14">
              <PriceTable title="Gold Coins" countries={countriesSet1} values={valuesSet1} prices={pricesSet1} />
              <PriceTable title="Silver Coins" countries={countriesSet2} values={valuesSet2} prices={pricesSet2} />
              <PriceTable title="Bars" countries={countriesSet1} values={valuesSet1} prices={pricesSet1} />
              <PriceTable title="Popular Coins and Bars" countries={countriesSet2} values={valuesSet2} prices={pricesSet2} />
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
