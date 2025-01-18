import Image from 'next/image'
import Link from 'next/link'
import BuyingGuide from './components/BuyingGuide'
import InvestmentRules from './components/InvestmentRules'
import CoinsVsBars from './components/CoinsVsBars'

interface CategoryProps {
  title: string
  items: number
  imageSrc: string
}

const categories: CategoryProps[] = [
  {
    title: "Gold Coins",
    items: 20,
    imageSrc: "/coin.png"
  },
  {
    title: "Golden Bars",
    items: 20,
    imageSrc: "/coin.png"
  },
  {
    title: "Krugerrand",
    items: 20,
    imageSrc: "/coin.png"
  },
  {
    title: "Top 10 Gold",
    items: 20,
    imageSrc: "/coin.png"
  },
  {
    title: "100g Gold Bar",
    items: 20,
    imageSrc: "/coin.png"
  },
  {
    title: "Gold Tablet Bars",
    items: 20,
    imageSrc: "/coin.png"
  },
  {
    title: "Silver Coins",
    items: 20,
    imageSrc: "/coin.png"
  },
  {
    title: "Silver Bars",
    items: 20,
    imageSrc: "/coin.png"
  }
]

export default function GoldComparison() {
  return (
    <section className="py-12 md:px-0 md:container md:mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        Denmark's No. 1 Gold Comparison Portal
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link 
            key={index}
            href="#"
            className="bg-[#F8F8F8] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col items-center"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={category.imageSrc || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96px, 96px"
              />
            </div>
            <div className='border border-b-1 border-gray-200 w-full my-5'></div>
            <h2 className="font-medium text-center">{category.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{category.items} Items</p>
          </Link>
        ))}
      </div>
      <BuyingGuide />
      <InvestmentRules />
      <CoinsVsBars />
    </section>
  )
}