"use client";

import { Coins, DiamondIcon as GoldIcon } from "lucide-react";
import RealTimeChart from "./RealTimeChart"; // Import the RealTimeChart component

const goldData = [
  { date: "01.09", value: 2000 },
  { date: "02.09", value: 3000 },
  { date: "03.09", value: 1500 },
  { date: "04.09", value: 4000 },
  { date: "05.09", value: 2500 },
];

const silverData = [
  { date: "01.09", value: 3000 },
  { date: "02.09", value: 4000 },
  { date: "03.09", value: 6000 },
  { date: "04.09", value: 2500 },
  { date: "05.09", value: 3000 },
];

export default function Sidebar() {
  return (
    <div className="my-28 mr-10 hidden md:block space-y-8">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="bg-[#F8EBCB] rounded-full p-2">
            <Coins className="h-5 w-5 text-[#B4975A]" />
          </div>
          <span className="text-sm font-medium">Goldmünzen</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-[#F8EBCB] rounded-full p-2">
            <Coins className="h-5 w-5 text-[#B4975A]" />
          </div>
          <span className="text-sm font-medium">Goldmünzen</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-[#F8EBCB] rounded-full p-2">
            <Coins className="h-5 w-5 text-[#B4975A]" />
          </div>
          <span className="text-sm font-medium">Goldmünzen</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-[#F8EBCB] rounded-full p-2">
            <GoldIcon className="h-5 w-5 text-[#B4975A]" />
          </div>
          <span className="text-sm font-medium">Goldbarren</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between mb-4">
            <select className="bg-gray-50 border border-gray-100 text-sm rounded-lg px-2 py-1 w-[70px] focus:outline-none">
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>

            <select className="bg-gray-50 border border-gray-100 text-sm rounded-lg px-2 py-1 w-[70px] focus:outline-none">
              <option value="kg">kg</option>
              <option value="oz">oz</option>
            </select>

            <select className="bg-gray-50 border border-gray-100 text-sm rounded-lg px-2 py-1 w-[70px] focus:outline-none">
              <option value="7D">7D</option>
              <option value="30D">30D</option>
            </select>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 justify-between">
              <div>
                <h3 className="text-lg font-semibold">Gold</h3>
              </div>
              <div>
                <span className="text-sm font-semibold mr-1">€22.92</span>
                <span className="text-sm bg-[#FFBDBD] text-[#19161D] px-2 py-0.5 rounded-full">
                  -0.12%
                </span>
              </div>
            </div>
            <div className="p-0 m-0">
            <RealTimeChart
              data={goldData}
              gradientId="goldGradient"
              strokeColor="#EAC463"
            />
            </div>

          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between mb-4">
            <select className="bg-gray-50 border border-gray-100 text-sm rounded-lg px-2 py-1 w-[70px] focus:outline-none">
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>

            <select className="bg-gray-50 border border-gray-100 text-sm rounded-lg px-2 py-1 w-[70px] focus:outline-none">
              <option value="kg">kg</option>
              <option value="oz">oz</option>
            </select>

            <select className="bg-gray-50 border border-gray-100 text-sm rounded-lg px-2 py-1 w-[70px] focus:outline-none">
              <option value="7D">7D</option>
              <option value="30D">30D</option>
            </select>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 justify-between">
              <div>
                <h3 className="text-lg font-semibold">Silver</h3>
              </div>
              <div>
                <span className="text-sm font-semibold mr-1">€22.92</span>
                <span className="text-sm bg-[#FFBDBD] text-[#19161D] px-2 py-0.5 rounded-full">
                  -0.12%
                </span>
              </div>
            </div>

            <RealTimeChart
              data={silverData}
              gradientId="silverGradient"
              strokeColor="#EAC463"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
