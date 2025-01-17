import React from 'react';
import { Button } from './ui/button';

const PriceTable = ({ title, countries, values, prices }:any) => {
  return (
    <div className='w-full bg-[#F8F8F8] p-5'>
      <div>
        <h2 className="md:text-xl text-sm font-bold mb-4">{title}</h2>
        <div className="flex gap-[2px] mb-4 justify-between">
          <Button variant="outline" size="sm">1 oz</Button>
          <Button variant="outline" size="sm">1/2 oz</Button>
          <Button variant="outline" size="sm">1/4 oz</Button>
          <Button variant="outline" size="sm">1/10 oz</Button>
        </div>
        <table className="w-full">
          <tbody>
            {countries.map((country:string, index:number) => (
              <tr
                key={index}
                className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]'}`}
              >
                <td className="p-3 text-sm md:text-lg">{country}</td>
                <td className="p-3 text-center">{values[index % values.length]}</td>
                <td className="p-3 text-right text-gray-500">from {prices[index % prices.length]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
