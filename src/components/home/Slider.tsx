// 'use client'


// import { slides } from "@/utils/data"
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"

// const Slider = () => {
//     const [current, setCurrent] = useState(0)

//     // useEffect (() => {
//     //     const interval = setInterval(() => {
//     //         setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     //     },3000);

//     //     return () => clearInterval(interval)
//     // },[])

//   return (

// <div className="relative justify-end bg-black 2xl:w-[1040px] xl:w-[1020px] lg:w-[1000px] md:w-[892px] md:h-[334px] w-full ">
// <div className="relative justify-end items-end flex">
  
//   <Image src={slides[current].img} alt={slides[current].title} width={469} height={300} className="md:w-[469px] h-[300px] w-full  md:h-[300px]  my-3   rounded-lg" />
//   <div className="absolute top-20 left-10 md:space-y-8 lg:space-y-9  space-y-4 text-white  ">
//     <h2 className=" text-sm ">{slides[current].title}</h2>
//     <p className="text-2xl font-bold md:text-4xl lg:text-5xl sm:text-1xl">{slides[current].description}</p>

//     <div><Link href='/' className="text-sm  underline ">Shop Now </Link></div>
//   </div>
// </div>

// {/* threeee dots */}
//  <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
//          {slides.map((slide, index) => (
//           <div
//             className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
//               current === index ? "scale-150" : ""
//             }`}
//             key={slide.id}
//             onClick={() => setCurrent(index)}
//           >
//             {current === index && (
//               <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
//             )}
//           </div>
//         ))}
//       </div>
// </div>
//   )
// }

// export default Slider



'use client';

import { slides } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-black  overflow-hidden md:h-[334px]">
      {/* Slide Content */}
      <div className="relative flex justify-end items-end">
        <Image
          src={slides[current].img}
          alt={slides[current].title}
          width={469}
          height={300}
          className="w-full md:w-[469px] md:h-[300px] object-cover"
        />
        
        {/* Slide Text Content */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white space-y-4 md:space-y-8 lg:space-y-9">
          <h2 className="text-sm">{slides[current].title}</h2>
          <p className="text-2xl font-bold md:text-4xl lg:text-5xl sm:text-1xl">{slides[current].description}</p>
          <Link href="/" className="text-sm underline">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? 'scale-150' : ''
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
