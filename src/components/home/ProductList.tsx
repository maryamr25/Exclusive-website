
'use client';
import { products } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const ProductList: React.FC = () => {
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
      {/* Flash Sales Header */}
      <div className="flex">
        <p className="bg-primary w-[20px] h-[40px] rounded"></p>
        <p className="ml-3 text-primary mx-auto my-auto font-semibold">Todays</p>
      </div>

      {/* Header Section */}
      <div className="flex justify-between mt-8">
        <div className="flex md:mr-4 mr-1 ">
          <div>
            <h1 className="md:text-3xl lg:text-4xl text-2xl font-semibold">Flash Sales</h1>
          </div>

          {/* <div className="flex flex-col md:ml-14 ml-4">
            <p className="text-xs">Day`&emsp;`,`&emsp;`,`&emsp;`,Hour`&emsp;`,`&emsp;`,`&emsp;,`Min`&emsp;`,`&emsp;`,`&emsp;`,Sec</p>
            <h2 className="md:text-2xl lg:text-3xl text-xl font-semibold">03`&nbsp;`,:`&nbsp;`,23`&nbsp;`,:`&nbsp;`,19`&nbsp;`,:`&nbsp;`,56</h2>
          </div> */}

          <div className='flex flex-wrap gap-3 md:ml-14 ml-3'>
            <div>
              <p>Day</p>
              <h2>03</h2>
            </div>
            <div>
              <p>Hour</p>
              <h2>: 03</h2>
            </div>
            <div>
              <p>Min</p>
              <h2>: 03</h2>
            </div>
            <div>
              <p>Sec</p>
              <h2>: 03</h2>
            </div>
          </div>
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

      {/* Products List */}

       <div className="mt-14  ">
            <div ref={carouselRef} className="flex overflow-hidden gap-6 mt-8">
              {products.map((item) => (
                <Link href='/singleproduct'><div
                  key={item.id}
                  className="max-w-sm shadow-lg border bg-white relative"
                  onClick={() => handleProductClick(item.id)}
                >
                  {/* Image Section */}
                  <div className="relative w-full bg-sec">
                    <div className="w-[270px] h-[250px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={190}
                        height={180}
                        className="w-full mx-auto pt-4 object-contain md:w-[190px] md:h-[180px]"
                      />
                      <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        -{item.discount}%
                      </div>
      
                      <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
                        <FaRegHeart />
                      </div>
      
                      <div className="absolute top-12 right-2 bg-white p-2 rounded-full">
                        <IoEyeOutline />
                      </div>
                    </div>
      
                    {/* Show "Add to Cart" Button Only When Clicked */}
                    {selectedProductId === item.id && (
                      <button className="absolute bottom-0 w-full bg-black text-white py-2 hover:bg-gray-800">
                        Add to Cart
                      </button>
                    )}
                  </div>
      
                  {/* Product Details */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      
                    {/* Prices */}
                    <div className="flex items-center space-x-2">
                      <span className="text-primary text-xl font-bold">${item.price}</span>
                      <span className="line-through text-gray-500">${item.originalPrice}</span>
                    </div>
      
                    {/* Rating and Reviews */}
                    <div className="flex items-center mt-3">
                      <span className="text-sm text-gray-600 ml-2">({item.reviewsCount})</span>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>

          {/* button */}
          <div className="flex mt-10 mx-auto items-center justify-center">
          <Link href='/' className="bg-primary text-white md:py-4 md:px-8 lg:py-5 lg:px-9 py-3 px-6 rounded  ">Veiw All Product</Link>
        </div>
    </div>
  );
};

export default ProductList;
