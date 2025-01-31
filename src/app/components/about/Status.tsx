'use client'
import { icons } from '@/app/utils/data';
import Image from 'next/image';
import React, { useState } from 'react'

const Status = () => {
    const [selectedProductId, setSelectedProductId] = useState<number| null>(null);
        
        const handleProductClick = (productId: number) => {
            setSelectedProductId(productId === selectedProductId ? null : productId);
          };
  return (
    <div className="mt-24 mx-auto">
<div 
// ref={carouselRef}
 className="flex flex-wrap justify-center items-center gap-4 mx-auto">
    {icons.map((item) => (
        <div
        key={item.id}
        onClick={() => handleProductClick(item.id)}
        className={`w-[270px] h-[230px]  px-4 border my-auto border-gray-400 rounded-lg cursor-pointer transition-colors 
        ${
          selectedProductId === item.id ? 'bg-primary border-none text-white ' : 'text-black'
        }`}
      >
          <div className='flex flex-col justify-center items-center mx-auto space-y-6 my-8 '>
          <div className='bg-gray-400 p-1 rounded-full '> <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className={`bg-contain w-[56px] h-[56px] transition-all duration-500 bg-black rounded-full p-1 ${
                    selectedProductId === item.id ? '' : 'bg-black text-white'
                  }`}
                />
                </div>
               <div className='mx-auto justify-center text-center'> 
                <h2 className='text-2xl font-bold'>{item?.title}</h2>
        <p className="text-xl ">{item?.name}</p>
        </div>
        </div> 
            </div>
    ))}
    </div>
    </div>
  )
}

export default Status