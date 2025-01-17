import Image from 'next/image'
import Link from 'next/link'

export default function GoldForBeginner() {
  return (
    <div>
     {/* Gold For Beginners Section */}
     <section className="mb-10 mx-5">
          <div className="bg-[#181515] rounded-2xl w-full ">
            <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Gold For Beginners</h2>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
                <Link 
                  href="/gold-guide"
                  className="inline-block mt-8 px-6 py-3 bg-[#EAC463] text-[#181515] rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Read More
                </Link>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/gold-bars.png"
                  alt="Gold bars"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
      </section>

    </div>
  )
}
