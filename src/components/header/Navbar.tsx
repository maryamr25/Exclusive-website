import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Navicons from './Navicons'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <div className='h-20 px-4 bg-white text-black md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      
        {/* Mobile */}
      <div className='h-full flex items-center justify-between md:hidden'>
      
      <Link href='/'>
      <div className='text-2xl tracking-wide font-bold'>Exclusive</div>
      </Link>
       <div className='flex items-center gap-4 '>
        <Navicons/>
   
      <Menu/>
      </div>
      </div>

      {/* biger screen */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>

        {/* left section */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
        <Link href='/' className='flex items-center gap-3'>
       
      <div className='text-2xl font-bold tracking-wide'>Exclusive</div>
      </Link>
      <div className='hidden xl:flex gap-4 '>
      
                    <Link href='/'>Home</Link>
                    
                    
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/signup'>Sign Up</Link>
              </div>
        </div>

        {/* right section */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8 ' >
       
           <SearchBar/> 
           <Navicons/>
           </div>
        </div>

      </div>
  )
}

export default Navbar