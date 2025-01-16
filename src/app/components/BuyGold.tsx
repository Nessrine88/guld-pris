import React, { useState } from 'react';
import Image from 'next/image';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import ShopByCategory from './ShopByCategory';

const BuyGold = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active index

  const toggleActive = (index:any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const sections = [
    { title: 'Extensive Advise & Tips', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { title: 'Another Section', description: 'Description for another section.' },
    { title: 'Third Section', description: 'Description for the third section.' },
  ];

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Buy Gold With Guldpris</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
              in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-16">
            <Image
              src="/gold.png"
              alt="Gold coins scattered on a surface"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="w-full m-auto">
                <div
                  className={`flex items-center group ${activeIndex === index ? 'hover:text-[#EAC463]' : ''}`}
                  onClick={() => toggleActive(index)} 
                >
                  <div className={`border-b-2 w-52 space-x-3 mr-3 ${activeIndex === index ? 'border-' : 'border-black'}`}></div>
                  <div className={`bg-primary/10 rounded-full p-3 mt-1 text-center flex justify-center w-fit ${activeIndex === index ? 'bg-[#EAC463]' : ''}`}>
                    <LuBriefcaseBusiness className={`group-hover:text-white ${activeIndex === index ? 'text-white' : ''}`} />
                  </div>
                  <div className={`border-b-2 w-52 space-x-3 ml-3 ${activeIndex === index ? 'border-[#EAC463]' : 'border-black'}`}></div>
                </div>
                <div className="text-center mt-3">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ShopByCategory />
    </div>
  );
};

export default BuyGold;
