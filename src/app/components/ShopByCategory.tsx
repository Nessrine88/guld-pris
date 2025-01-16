
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { ArrowRight,Calculator, Coins, Square } from 'lucide-react'

export default function ShopByCategory() {
  return (
    <div className='container mx-auto'>
      {/* Shop By Category Section */}
      <div className="">
        <div className=" mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Shop By Category</h2>
          <p className="text-gray-500 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Image
                src="/coin.png"
                alt="Gold Coins"
                width={500}
                height={500}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="font-semibold mb-1">Gold Coins</h3>
              <p className="text-sm text-gray-500">20 items</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Image
                src="/coin.png"
                alt="Silver Coins"
                width={500}
                height={500} className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="font-semibold mb-1">Silver Coins</h3>
              <p className="text-sm text-gray-500">20 items</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Image
                src="/coin.png"
                alt="Golden Bars"
                width={500}
                height={500} className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="font-semibold mb-1">Golden Bars</h3>
              <p className="text-sm text-gray-500">20 items</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Image
                src="/coin.png"
                alt="Silver Bars"
                width={500}
                height={500}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="font-semibold mb-1">Silver Bars</h3>
              <p className="text-sm text-gray-500">20 items</p>
            </Card>
          </div>

          {/* Button Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <Button variant="outline" className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <Calculator className="w-5 h-5" />
                <span>Calculator</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <Coins className="w-5 h-5" />
                <span>Buy Gold</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <Coins className="w-5 h-5" />
                <span>Sell Gold</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <Square className="w-5 h-5" />
                <span>TOP-10</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <Coins className="w-5 h-5" />
                <span>Sell Silver</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <Square className="w-5 h-5" />
                <span>Gold Dealers</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

 


    </div>
  )
}
