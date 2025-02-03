


'use client';

import { review } from '@/utils/data';
import Image from 'next/image';
import React, { useState } from 'react';

const Reviews = () => {
  const reviewsPerSlide = 3;
  const [current, setCurrent] = useState<number>(0);
  const totalSlides = Math.ceil(review.length / reviewsPerSlide);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="mt-24">
      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-8">
        {review
          .slice(current * reviewsPerSlide, current * reviewsPerSlide + reviewsPerSlide)
          .map((item) => (
            <div
              key={item.id}
              className="max-w-sm border bg-white relative shadow-lg p-4"
            >
              {/* Image Section */}
              <div className="w-full h-64 bg-sec">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={190}
                  height={180}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p>{item.des}</p>
                <div className="flex space-x-2 mt-2">
                  <Image src={item?.ic1} alt="" width={40} height={40} />
                  <Image src={item?.ic2} alt="" width={40} height={40} />
                  <Image src={item?.ic3} alt="" width={40} height={40} />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-4 mt-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer ${
              current === index ? 'scale-150 bg-gray-600' : ''
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
