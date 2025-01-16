import React from 'react'
import { Button } from './ui/button'

const PriceTable = () => {
  return (
    <div className='w-full bg-[#F8F8F8] p-5 '>
           <div>
          <h2 className="text-xl font-bold mb-4 ">Gold Coins</h2>
          <div className="flex gap-2 mb-4">
            <Button variant="outline" size="sm">1 oz</Button>
            <Button variant="outline" size="sm">1/2 oz</Button>
            <Button variant="outline" size="sm">1/4 oz</Button>
            <Button variant="outline" size="sm">1/10 oz</Button>
          </div>
          <table className="w-full">
          <tbody>
  {Array(7).fill(null).map((_, i) => (
    <tr
      key={i}
      className={`border-b ${
        i % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]'
      }`}
    >
      <td className="p-3">Britannia</td>
      <td className="p-3 text-center">1 oz</td>
      <td className="p-3 text-right text-gray-500">from €298.92</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
    </div>
  )
}

export default PriceTable