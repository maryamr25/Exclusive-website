// import { ban } from '@/app/utils/data'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export const Banner = () => {
//   return (
//     <div className="mt-20">
//         <div className='relative mx-auto md:w-[1170px] md:h-[500px] w-full h-full bg-black'>
//         <div className='relative flex  justify-end items-end px-4 '>
//             <Image src='/dug.png' alt='dug' 
//             width={600}
//             height={300}
//             className='bg-contain sm:w-[300px] sm:h-[200px]'
//             />

// <div className="absolute top-20 lg:left-12 md:left-10 left-3 md:space-y-8 lg:space-y-9  space-y-4 text-white  ">
//     <h2 className=" text-sm text-[#00FF66] ">categories</h2>
//     <p className="text-2xl font-bold md:text-4xl lg:text-5xl sm:text-1xl">Enhance Your <br/> Music Experience</p>
  
//   {/* circules  */}
  
//   <div className='flex flex-warp lg:gap-6 md:gap-4 gap-2'>
//     {ban.map((item) => (

//     <div key={item?.id} className='text-black bg-white rounded-full w-[65px] h-[65px] '>
//        <div className='text-center py-3 px-2'> 
//         <h2 className='font-semibold'>{item?.title}</h2>
//         <p className='text-sm'>{item?.des}</p>
//         </div>

   
//     </div>
//     ))}
//      </div>

//   {/* button */}
//     <div>
//         <Link href='/' className="text-sm bg-[#00FF66] px-2 py-1 md:px-5 md:py-3 lg:px-6 lg:py-4">Buy Now </Link>
//         </div>
//   </div>

//         </div>
//         </div>

//     </div>
//   )
// }





import { ban } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <div className="mt-20">
      <div className="relative mx-auto max-w-[1170px] w-full h-auto bg-black">
        <div className="relative flex justify-center lg:justify-end items-center px-4 lg:px-8 py-10">
          {/* Image Section */}
          <Image
            src="/dug.png"
            alt="dug"
            width={600}
            height={300}
            className="bg-contain w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] h-auto"
          />

          {/* Text and Buttons */}
          <div className="absolute top-12 lg:left-12 left-4 space-y-4 lg:space-y-6 text-white">
            <h2 className="text-sm text-[#00FF66]">Categories</h2>
            <p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Enhance Your <br /> Music Experience
            </p>

            {/* Circles Section */}
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {ban.map((item) => (
                <div
                  key={item?.id}
                  className="text-black bg-white rounded-full w-[65px] h-[65px] flex items-center justify-center"
                >
                  <div className="text-center px-2">
                    <h2 className="font-semibold">{item?.title}</h2>
                    <p className="text-sm">{item?.des}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <Link
                href="/"
                className="text-sm bg-[#00FF66] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md font-medium hover:bg-green-500 transition"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
