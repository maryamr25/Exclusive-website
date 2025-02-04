
import Slider from "../components/home/Slider";
import Sidebar from "../components/home/Sidebar";
import ProductList from "../components/home/ProductList";
import Category from "../components/home/Category";
import MonthSale from "../components/home/MonthSale";
import Ourproducts from "../components/home/Ourproducts";
import { Banner } from "../components/home/Banner";
import Features from "../components/home/Features";
import Icons from "../components/home/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
{/* 
    <div className='flex flex-col md:flex-row mx-auto justify-between gap-2 md:gap-6 lg:gap-10 xl:gap-14 2xl:gap:16 mt-10'>
    <Sidebar/>
    <Slider />
    </div> */}

<div className="flex flex-col md:flex-row mx-auto justify-between gap-6 lg:gap-10 xl:gap-14 2xl:gap-16 mt-10">
  {/* Sidebar */}
  <div className="w-full md:w-1/4 lg:w-1/5">
    <Sidebar />
  </div>

  {/* Slider */}
  <div className="w-full md:w-3/4 lg:w-4/5">
    <Slider />
  </div>
</div>

{/*Our Product List component */}
<div
//  className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62"
 >
    <ProductList/>
    </div>
    
    <div 
    // className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62"
    >
    <Category/>
    </div>

     {/*Our this month sale component */}
    <div
    //  className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62"
     >
      {/*this month best selling product Header */}
       <div className="flex mt-20 ">
         <p className="bg-primary w-[20px] h-[40px] rounded"></p>
         <p className="ml-3 text-primary mx-auto my-auto font-semibold">This Month</p>
       </div>
      
      <div className='flex justify-between mt-10'>
       <div>
             <h1 className="md:text-3xl lg:text-4xl sm:text-2xl  text-1xl font-semibold">Best Selling Products</h1>
           </div>
            {/* button */}
            <div className="">
                <Link href='/' className="bg-primary text-white md:py-2 md:px-4 lg:py-3 lg:px-7 py-1 px-2 rounded  ">Veiw All</Link>
              </div>
      </div>
    <MonthSale/>
    </div>


    <div 
    // className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62"
    >
    <Banner/>
    </div>


 {/*Our products component */}
    <div 
    // className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62"
    >
       {/*Our products Header */}
       <div className="flex mt-20">
         <p className="bg-primary w-[20px] h-[40px] rounded"></p>
         <p className="ml-3 text-primary mx-auto my-auto font-semibold">our Products</p>
       </div>
      
      <div className='flex justify-between mt-10'>
       <div>
             <h1 className="md:text-3xl lg:text-4xl text-2xl font-semibold">Explore Our Products</h1>
           </div>
      
        </div>
      
    <Ourproducts/>
    </div>

     {/*Our Feature component */}
    <div 
    // className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62"
    >
    <Features/>
    </div>
    <div
    //  className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62"
     >
    <Icons/>
    </div>
   

    </>
  );
}
