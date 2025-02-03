import MonthSale from '@/components/home/MonthSale'
import Link from 'next/link'
import React from 'react'

const WishListPage = () => {
  return (
    <div className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62">
        

         {/* Just for you */}
         <div className="mt-20">
        
        {/*this month best selling product Header */}
        <div className='flex justify-between'>
           <div className="flex ">
           {/* <p className="bg-primary w-[20px] h-[40px] rounded"></p> */}
           <p className="ml-3 mx-auto my-auto ">Wishlist(4)</p>
         </div>
         <div className="">
                  <Link href='/' className=" md:py-2 md:px-4 lg:py-3 lg:px-7 py-1 px-2 border border-gray-700">Move All To Bag</Link>
                </div>
                </div>
          <MonthSale/>
          </div> 


        {/* Just for you */}
        <div className="my-20">
        
      {/*this month best selling product Header */}
      <div className='flex justify-between'>
         <div className="flex ">
         <p className="bg-primary w-[20px] h-[40px] rounded"></p>
         <p className="ml-3 mx-auto my-auto ">Just For You</p>
       </div>
       <div className="">
                <Link href='/' className=" md:py-2 md:px-4 lg:py-3 lg:px-7 py-1 px-2 border border-gray-700">Veiw All</Link>
              </div>
              </div>
        <MonthSale/>
        </div>
    </div>
  )
}

export default WishListPage