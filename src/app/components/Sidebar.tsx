import React from 'react';
import { LiaCoinsSolid } from "react-icons/lia";
import { AiOutlineGold } from "react-icons/ai";
import RealTimeChart from './RealTimeChart';

const Sidebar = () => {
  return (
    <div className='my-20 mr-10 hidden md:block'>
      <div className='py-10'>
      <div className=' flex items-center space-x-2'>
<div className='bg-[#F8EBCB] rounded-full p-2 my-5' >
<LiaCoinsSolid />
</div>
          
            <span>Goldmunzen</span>
        </div>
        <div className='flex items-center space-x-2 '>
        <div className='bg-[#F8EBCB] rounded-full p-2 ' >
        <AiOutlineGold />
        </div>
        <span>Goldmunzen</span>
        </div>
        <div className=' flex items-center space-x-2 '>
<div className='bg-[#F8EBCB] rounded-full p-2 my-5' >
<LiaCoinsSolid />
</div>
          
            <span>Goldmunzen</span>
        </div>
        <div className='flex items-center space-x-2 '>
        <div className='bg-[#F8EBCB] rounded-full p-2 ' >
        <AiOutlineGold />
        </div>
        <span>Goldmunzen</span>
        </div>
      </div>
      <div className='pb-10'>
      <RealTimeChart />
      </div>
      <RealTimeChart />

    
    </div>
  )
}

export default Sidebar