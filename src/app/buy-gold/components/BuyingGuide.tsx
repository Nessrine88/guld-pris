import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const guideLinks = [
  {
    title: "5 Rules That Make Every Gold Investment Successful",
    href: "#"
  },
  {
    title: "Which Is Better: Coins or Bars?",
    href: "#"
  },
  {
    title: "10 Reasons Why Gold Is Safe",
    href: "#"
  },
  {
    title: "Exclusive: GoldPro Recommender",
    href: "#"
  }
]

export default function BuyingGuide() {
  return (
    <section className="md:container md:mx-auto mx-5 p-4 md:p-8 flex justify-between items-center my-28">
      <div className="grid md:grid-cols-2 gap-28 items-start ">
        <div className="relative aspect-[4/3] md:aspect-square w-full rounded-lg overflow-hidden">
          <Image
            src="/goldBars.png"
            alt="Gold bars with global markings"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium text-yellow-600 tracking-wide">
              BUYING GOLD GUIDE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              How to invest correctly?
            </h2>
            <p className="text-gray-600">
              Why should I buy gold? What should I buy and how much? 
              When is the right time, where is the best place to buy?
              Here is the "buying gold" guide with all the answers.
            </p>
          </div>

          <div className="space-y-2">
            {guideLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{link.title}</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

