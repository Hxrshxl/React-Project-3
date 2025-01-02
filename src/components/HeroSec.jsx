import React from 'react'
import illustration from '../assets/illustration.svg'
import { Button } from "flowbite-react";

const HeroSec = () => {
 return (
   <div className='px-20 py-16 flex h-screen'>
          <div>
            <h1 className='px-[55px] text-[55px] font-bold text-zinc-600 mb-[-10px]'>Lessons and Insights</h1>
            <h2 className='text-[#4CAF4F] font-bold text-[50px] px-[55px]'>from 8 years</h2>
            <h4 className='px-[55px] py-5'>Where to grow your business as a photographer: site or social media?</h4>
              <div className="px-[55px] py-10  ">
                  <Button className="bg-[#4CAF4F] text-white hover:bg-[#43A047]">Register</Button>
              </div>
          </div>
      <img src={illustration} alt="" className='w-[300px] h-auto ml-40 mb-[70px] '/>
   </div>
 )
}

export default HeroSec