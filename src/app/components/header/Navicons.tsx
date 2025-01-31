'use client'

import Image from "next/image"
import Link from "next/link"

// import {  useRouter } from "next/navigation"
// import Cookies from "js-cookie";
import { useState } from "react"
import Sidebar from "./Profile"
// import CartModal from "./CartModal"
// import { useWixClient } from "@/hooks/useWixClient"
// import { useCartStore } from "@/hooks/useCartStore";
// import { useWixClient } from "@/hooks/useWixClient"

const Navicons = () => {
const [isProfileOpen, setIsProfileOpen] = useState(false)
// const [isCartOpen, setIsCartOpen] = useState(false)
// const [isLoading, setIsLoading] = useState(false);

// const router = useRouter()

const handleProfile = () => {
  setIsProfileOpen(!isProfileOpen)
} 
 

// const pathName = usePathname();

  // const wixClient = useWixClient();
  // const isLoggedIn = wixClient.auth.loggedIn();

// tempare
// const  isLoggedIn = false
// const handleProfile = () => {
//  if(!isLoggedIn) {
//    router.push('/login')
//  }  else {
//  setIsProfileOpen((prev) => !prev)
// }
// };

// AUTH WITH WIX_MANAGE AUTH

// const wixClient = useWixClient();
// const login = async () => {
//     const loginRequestData = wixClient.auth.generateOAuthData(
//       "http://localhost:3000"
//     );

//     console.log(loginRequestData);

//     localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
//     const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
//     window.location.href = authUrl;
//   };


// const handleLogout = async () => {
//   setIsLoading(true);
//   Cookies.remove("refreshToken");
//   const { logoutUrl } = await wixClient.auth.logout(window.location.href);
//   setIsLoading(false);
//   setIsProfileOpen(false);
//   router.push(logoutUrl);
// };

// const {  counter, getCart } = useCartStore();

//   useEffect(() => {
//     getCart(wixClient);
//   }, [wixClient, getCart]);



  return (
    <div className="flex items-center gap-4 xl:gap-6 ">


{/* cart icon */}
<Link href='/cart'> <div className="relative cursor-pointer"
//  onClick={() => setIsCartOpen((prev) => !prev)}
 >
        <Image src='/cart.png' alt='cart' width={22} height={22} 
        
        />
        {/* <div className="absolute -top-4 -right-4 w-6 h-6 bg-red rounded-full text-white text-sm flex items-center  justify-center">
          {counter}
          </div> */}
        </div>
        </Link>

{/* heart icon */}
        <Image src='/heart.png' alt='bell' width={22} height={22} className="cursor-pointer"/>

{/* profile icon */}
        <Image src='/profile.png' alt='profile'
         width={22} height={22}
          onClick={handleProfile}
          // onClick={login}
           className="cursor-pointer"/>
        {isProfileOpen && (
        <div className="absolute p-2 top-14 right-12 text-sm z-20">
       
            <div className=" cursor-pointer" 
            // onClick={handleLogout}
            >
              <Sidebar/>
              {/* <Link href='/'> Profile </Link> */}
            {/* {isLoading ? "Logging out" : "Logout"} */}
               </div>
            </div>
            )}

        
        
        {/* {isCartOpen && <CartModal/>} */}
        

        
    </div>
  )
}

export default Navicons