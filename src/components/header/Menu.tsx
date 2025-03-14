'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
    const [open ,setOpen] = useState<boolean>(false)

    const handleLinkClick = () => {
        setOpen(false);
      };
  return (
    <div>
        <Image src='/menu.png' alt='logo' width={28} height={28} className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}/>
        {
            open && (
                <div
                onClick={handleLinkClick}
                 className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href='/'>Home</Link>
                   
                    
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/signup'>Sign Up</Link>



                </div>
            )
        }
    </div>
  )
}

export default Menu