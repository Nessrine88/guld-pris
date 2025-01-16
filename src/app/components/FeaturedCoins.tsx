import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
interface Product {
  id: string
  name: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Royal Arms',
    price: 298.92,
    image: '/coins/royal-arms.png'
  },
  {
    id: '2',
    name: 'Royal Arms',
    price: 298.92,
    image: '/coins/royal-arms.png'
  },
  {
    id: '3',
    name: 'Royal Arms',
    price: 298.92,
    image: '/coins/royal-arms.png'
  },
  {
    id: '4',
    name: 'Royal Arms',
    price: 298.92,
    image: '/coins/royal-arms.png'
  },
]

export default function FeaturedCoins() {
  const [selectedTab, setSelectedTab] = useState('Bars')
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps'
  })

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Featured Coins And Bars
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full ${
              selectedTab === 'Bars'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setSelectedTab('Bars')}
          >
            Bars
          </button>
          <button
            className={`px-6 py-2 rounded-full ${
              selectedTab === 'Coins'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setSelectedTab('Coins')}
          >
            Coins
          </button>
        </div>

        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
          >
           <FaArrowLeftLong />
          </button>

          <div className="overflow-hidden flex justify-around" ref={emblaRef}>
            <div className="flex gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_280px] min-w-0"
                >
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <div className="relative w-52 h-52 mx-auto mb-4">
                      <Image
                        src="/coin.png"
                        alt="coin"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <div className='flex items-center justify-between'>
                    <p className="text-gray-600 mb-2">1 oz gold</p>
                    <p className="text-sm text-gray-500">
                      from{' '}
                      <span className="text-black font-semibold">
                        €{product.price.toFixed(2)}
                      </span>
                    </p>
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
          >
          <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  )
}