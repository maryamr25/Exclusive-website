

import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <>
    <div className='mt-20'>
    {/*Our products Header */}
 <div className="flex ">
   <p className="bg-primary w-[20px] h-[40px] rounded"></p>
   <p className="ml-3 text-primary mx-auto my-auto font-semibold">Featured</p>
 </div>

<div className='flex justify-between mt-6'>
 <div>
       <h1 className="md:text-3xl lg:text-4xl text-2xl font-semibold">New Arrival</h1>
     </div>

    
   
</div>

 
  {/* section */}
  <div className="max-w-screen-2xl h-1/2 mx-auto mt-6 relative bg-white">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col relative bg-black h-full w-full">
          {/* img_01 */}
          <Image
            className="object-cover h-full w-full md:w-[511px] md:h-[511px]"
            src="/ps5.png"
            alt=""
            width={511}
            height={511}
          />
          <div className="absolute bottom-4 left-5  p-4 ">
              <h2 className="text-2xl font-bold text-white ">PlayStation 5</h2>
              <p className="text-gray-300 mt-1">
                Black and White version of the PS5 <br/> coming out on sale.
              </p>
              <button className="mt-2  text-white  underline py-2  rounded hover:text-blue-700">
                 Shop Now
               </button>
             </div>
        </div>
      </div>
      <div className="flex flex-1 ">
        <div className="grid grid-cols-2  gap-2">
          <div className='relative  w-full h-full'>
            {/* img_02 */}
            <Image
              className="object-cover md:w-[250px] md:h-[250px] w-full h-full"
              src="/wo.png"
              alt=""
              width={270}
              height={270}
            />
             <div className="absolute bottom-5 left-3 p-2 text-sm ">
              <h2 className=" text-1xl font-bold text-white ">Women’s Collections</h2>
              {/* <p className=" text-gray-300 mt-1">
              Featured woman collections that  give you another vibe.
              </p> */}
              <button className="mt-1 text-white  underline   rounded hover:text-blue-700">
                 Shop Now
               </button>
             </div>
          </div>
          <div className='relative w-full h-full'>
            {/* img_03 */}
            <Image
              className="object-cover md:w-[250px] md:h-[250px] w-full h-full"
              src="/wo.png"
              alt=""
              width={270}
              height={270}
            />
              <div className="absolute bottom-5 left-3 p-2 text-sm ">
              <h2 className="text-1xl font-bold text-white ">Women’s Collections</h2>
              {/* <p className="text-gray-300 mt-1">
              Featured woman collections that  give you another vibe.
              </p> */}
              <button className="mt-1 text-white  underline   rounded hover:text-blue-700">
                 Shop Now
               </button>
             </div>
          </div>
          <div className='relative w-full h-full bg-black'>
            {/* img_04 */}
            <Image
              className="object-cover md:w-[250px] md:h-[250px] w-full  h-full"
              src="/3speaker.png"
              alt=""
              width={270}
              height={270}
            />
             <div className="absolute bottom-3 left-3 p-2 text-sm ">
              <h2 className="text-1xl font-bold text-white ">Speakers</h2>
              {/* <p className="text-gray-300 mt-1">
              Amazon wireless speakers
              </p> */}
              <button className="mt-1 text-white  underline   rounded hover:text-blue-700">
                 Shop Now
               </button>
             </div>
          </div>
          <div className='relative w-full h-full bg-black'>
            {/* img_05 */}
            <Image
              className="object-cover md:w-[250px] md:h-[250px] w-full  h-full"
              src="/per.png"
              alt=""
              width={270}
              height={270}
            />
             <div className="absolute bottom-5 left-3 p-2 text-sm ">
              <h2 className="text-1xl font-bold text-white ">Perfume</h2>
              {/* <p className="text-gray-300 mt-1">
              GUCCI INTENSE OUD EDP
              </p> */}
              <button className="mt-1 text-white  underline   rounded hover:text-blue-700">
                 Shop Now
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</>

  )
}

export default Features


