


'use client'
import { useState } from "react";
import Image from "next/image";
import { FaTruck, FaUndoAlt } from "react-icons/fa";
import MonthSale from "@/components/home/MonthSale";
import Link from "next/link";


const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen py-10 mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Side: Product Images */}
          <div className="space-y-4">
            <Image
              src="/game.png"
              alt="Havic HV G-92 Gamepad"
              width={500}
              height={600}
              className="rounded-md object-cover bg-sec p-8"
            />
            <div className="grid grid-cols-4 gap-2">
              <Image
                src="/game1.png"
                alt="Thumbnail 1"
                width={100}
                height={100}
                className="rounded-md object-cover  bg-sec p-1"
              />
              <Image
                src="/game2.png"
                alt="Thumbnail 2"
                width={100}
                height={100}
                className="rounded-md object-cover  bg-sec p-1"
              />
              <Image
                src="/game3.png"
                alt="Thumbnail 3"
                width={100}
                height={100}
                className="rounded-md object-cover  bg-sec p-1"
              />
              <Image
                src="/game4.png"
                alt="Thumbnail 4"
                width={100}
                height={100}
                className="rounded-md object-cover  bg-sec p-1"
              />
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="flex flex-col justify-between">
            {/* Title and Price */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Havic HV G-92 Gamepad
              </h1>
              <p className="text-3xl text-primary mt-2">$192.00</p>
              <p className="text-gray-500 mt-4">
                PlayStation 5 Controller skin high-quality vinyl with air
                channel adhesive for easy bubble-free install & mass-free
                removal. Pressure sensitive.
              </p>

              {/* Color Selector */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700">Colours:</h4>
                <div className="flex gap-3 mt-2">
                  <div className="w-6 h-6 bg-white border border-gray-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700">Size:</h4>
                <div className="flex gap-4 mt-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-1 border rounded-lg hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector and button */}
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700">Quantity:</h4>

                <div className="flex md:gap-8 gap-4 ">
                <div className="flex items-center mt-2">
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div>
                   
                    {/* button buy now */}

                    <Link href='/cart'>
                    <button className="w-full mt-2 py-1 px-8 bg-primary text-white text-lg   hover:bg-red-700">
                Buy Now
              </button>
              </Link>
              </div> 

              </div>
              

              </div>
             

            </div>

            {/* Buy Now and Additional Info */}
            <div className="mt-8">
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-4 border border-gray-400 px-4 py-6">
                  <FaTruck className="text-3xl" />
                  <div className="flex flex-col">
                  <p className="text-sm text-gray-600">Free Delivery</p>
                  <p className="text-sm text-gray-600">Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 border border-gray-400 px-4 py-6">
                  <FaUndoAlt className="text-3xl" />
                  <div className="flex flex-col">
                  <p className="text-sm text-gray-600">Free 30-Day Returns</p>
                  <p className="text-sm text-gray-600">Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


       {/* Related items */}
       <div className="my-20">
        
        {/*this month best selling product Header */}
        <div className=''>
           <div className="flex ">
           <p className="bg-primary w-[20px] h-[40px] rounded"></p>
           <p className="ml-3 mx-auto my-auto text-primary ">Related Item</p>
         </div>
         
        </div>
          <MonthSale/>
          </div>

    </div>
  );
};

export default ProductPage;
