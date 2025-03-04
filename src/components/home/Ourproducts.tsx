// 'use client'
// import { ourPro } from '@/utils/data'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { FaRegHeart } from 'react-icons/fa'
// import { IoEyeOutline } from 'react-icons/io5'

// const Ourproducts = () => {
//      const [selectedProductId, setSelectedProductId] = useState<number| null>(null);
            
//             const handleProductClick = (productId: number) => {
//                 setSelectedProductId(productId === selectedProductId ? null : productId);
//               };
            
//   return (
//     <div className='mt-20  '>
   


// {/* Best Sale product List */}

//        <div className="mt-10 mx-auto ">
//             <div className="flex flex-wrap w-full  justify-around items-center  gap-6 mt-8">
//               {ourPro.map((item) => (
//                 <Link href='/singleproduct'  key={item.id}> <div
                 
//                   className="max-w-sm shadow-lg border bg-white relative"
//                   onClick={() => handleProductClick(item.id)}
//                 >
//                   {/* Image Section */}
//                   <div className="relative w-full h-full bg-sec">
//                     <div className="w-[270px] h-[250px]">
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         width={190}
//                         height={180}
//                         className="w-full h-full mx-auto pt-4 object-contain md:w-[190px] md:h-[180px]"
//                       />
//                       <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
//                       -{item.discount}%
//                       </div>
      
//                       <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
//                         <FaRegHeart />
//                       </div>
      
//                       <div className="absolute top-12 right-2 bg-white p-2 rounded-full">
//                         <IoEyeOutline />
//                       </div>
//                     </div>
      
//                     {/* Show "Add to Cart" Button Only When Clicked */}
//                     {selectedProductId === item.id && (
//                       <button className="absolute bottom-0 w-full bg-black text-white py-2 hover:bg-gray-800">
//                         Add to Cart
//                       </button>
//                     )}
//                   </div>
      
//                   {/* Product Details */}
//                   <div className="p-4">
//                     {/* Title */}
//                     <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      
//                     {/* Prices */}
//                     <div className="flex items-center space-x-2">
//                       <span className="text-primary text-xl font-bold">${item.price}</span>
//                       <span className="line-through text-gray-500">${item.originalPrice}</span>
//                     </div>
      
//                     {/* Rating and Reviews */}
//                     <div className="flex items-center mt-3">
//                       <span className="text-sm text-gray-600 ml-2">({item.reviewsCount})</span>
//                     </div>
//                   </div>
//                 </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* button */}
//           <div className="flex mt-10 mx-auto items-center justify-center">
//           <Link href='/' className="bg-primary text-white md:py-4 md:px-8 lg:py-5 lg:px-9 py-3 px-6 rounded  ">Veiw All Product</Link>
//         </div>

//     </div>
//   )
// }

// export default Ourproducts




'use client';
import { ourPro } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const Ourproducts = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId === selectedProductId ? null : productId);
  };

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      {/* Best Sale Product List */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ourPro.map((item) => (
            <Link href="/singleproduct" key={item.id}>
              <div
                className="shadow-lg border bg-white relative rounded-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleProductClick(item.id)}
              >
                {/* Image Section */}
                <div className="relative bg-sec rounded-t-lg">
                  <div className="relative w-full h-[250px] md:h-[270px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-t-lg"
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
                  <h3 className="text-lg font-semibold mb-2 truncate">{item.name}</h3>

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

      {/* Button Section */}
      <div className="flex mt-10 mx-auto items-center justify-center">
        <Link href="/" className="bg-primary text-white md:py-4 md:px-8 lg:py-5 lg:px-9 py-3 px-6 rounded">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Ourproducts;
