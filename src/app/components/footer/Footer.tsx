import Image from 'next/image'
import React from 'react'


function Footer() {
  return (
    <footer className="bg-black text-white body-font">
  <div className="container w-full py-8 px-5  mx-auto flex flex-wrap
  
   ">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center ">
       
      <span className="ml-3 text-2xl font-bold">Exclusive</span>
      </a>
      <p className="ml-3 mt-2 text-md ">
      Subscribe
      </p>
      <p className="ml-3 mt-2 text-md ">
      Get 10% off your first order
      </p>
      {/* <p className=''>
        <input type='email' placeholder='Enter your email'/><MdDoubleArrow />
      </p> */}
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-md mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800 text-sm">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-md mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800 text-sm">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-md mb-3">
          Quick Link
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800 text-sm">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800 text-sm">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-md mb-3">
         Download App
        </h2>
        <nav className="list-none mb-10">
        
          <Image src='/Frame 720.png' alt='logo' width={30} height={20} className='mx-auto'/>
        </nav>
      </div>
    </div>
  </div>
  <div >
    <div className="container mx-auto py-4 px-5 flex flex-wrap ">
      <p className=" text-md text-center  mx-auto text-gray-700">
        © Copyright Rimel 2022. All right reserved
        
      </p>
      
    </div>
  </div>
</footer>

  )
}

export default Footer