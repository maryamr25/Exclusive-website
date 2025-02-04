'use client'
import { category } from '@/utils/data';
import Image from 'next/image';
import React, { useRef, useState } from 'react'

const Category = () => {
  const [selectedProductId, setSelectedProductId] = useState<number| null>(null);
      
      const handleProductClick = (productId: number) => {
          setSelectedProductId(productId === selectedProductId ? null : productId);
        };

     const carouselRef = useRef<HTMLDivElement | null>(null);
    
      const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft -= 300;
        }
      };
    
      const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 300;
        }
      };

  return (
    <div className="mt-20">

         {/* Categories Header */}
      <div className="flex">
        <p className="bg-primary w-[20px] h-[40px] rounded"></p>
        <p className="ml-3 text-primary mx-auto my-auto font-semibold">Categories</p>
      </div>

<div className='flex justify-between mt-10'>
      <div>
            <h1 className="md:text-3xl lg:text-4xl text-2xl font-semibold">Browse By Category</h1>
          </div>

           {/* Navigation Buttons */}
        <div className="flex gap-3">
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="bg-sec px-4 rounded-full text-2xl font-medium">
            ←
          </button>
          {/* Right Arrow */}
          <button onClick={scrollRight} className="bg-sec px-4 rounded-full text-2xl font-medium">
            →
          </button>
        </div>
        
</div>

{/* categories */}
<div className="mt-14 mx-auto  ">
<div ref={carouselRef} className="flex overflow-hidden mx-auto gap-8 mt-8">
    {category.map((item) => (
        <div
        key={item.id}
        onClick={() => handleProductClick(item.id)}
        className={` max-w-sm  px-4 border border-gray-600 rounded-lg cursor-pointer transition-colors 
        ${
          selectedProductId === item.id ? 'bg-primary border-none text-white ' : 'bg-white text-black'
        }`}
      >
          <div className='flex flex-col justify-center items-center w-[170px] h-[145px]  lg:w-[200px] lg:h-[170px] mx-auto my-8'>
       <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className={`bg-contain w-[56px] h-[56px] transition-all duration-500 ${
                    selectedProductId === item.id ? 'grayscale-4' : 'grayscale'
                  }`}
                />
        <p className="text-xl ">{item?.name}</p>
        </div> 
            </div>
    ))}
    </div>
    </div>

      </div>
  )
}

export default Category