import Image from 'next/image'

export default function CoinsVsBars() {
  return (
    <section className="bg-[#181515] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Which is better:
              <br />
              buying coins or bars?
            </h1>
            
            <div className="space-y-4 text-gray-300">
              <p>
                This depends on personal preferences. Many people prefer coins because 
                they appreciate the variety of motifs. In addition, over time, some coins 
                develop into collector's coins that can increase in value. Well-known 
                investment coins such as the Krugerrand, Maple Leaf or the Vienna 
                Philharmonic are recommended for beginners. These are also called bullion 
                coins.
              </p>
              
              <p>
                Gold bars, on the other hand, are particularly suitable for those who want to 
                invest directly in gold. Since there is no need for complex embossing during 
                production, the premium is often cheaper than with coins.
              </p>
              
              <p>
                Gold coins such as gold bars are offered in many denominations, from 1 gram 
                to 1 kg. The ounce (= 31.1 grams) is particularly popular for coins. Small 
                denominations have the advantage that they are easier to exchange. However, 
                they are comparatively more expensive than large denominations. This is 
                especially true for sizes 1/20th of an ounce and below.
              </p>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-md mx-auto">
            <Image
              src="/bars&coins.png"
              alt="Gold Krugerrand coin and Heraeus gold bar comparison"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

