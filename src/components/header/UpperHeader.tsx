// upper header

import Link from "next/link"

function UpperHeader() {
    return (
      <div className='hidden md:flex lg:flex items-center justify-center md:h-[48px] bg-[#000000] my-auto py-3 gap-10 w-full h-auto mx-auto'>
          <span className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href='/' className='underline mx-4'>ShopNow</Link></span>
          
          <select className='bg-[#000000] text-white '>
              <option value='english'>English</option>
             
          </select>
  
      </div>
    )
  }
  
  export default UpperHeader