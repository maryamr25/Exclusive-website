import React from 'react'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { MdHeadsetMic } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Icons = () => {
  return (
    <div className='mt-20 my-8'>
        <div className='flex flex-wrap mx-auto justify-center gap-12 text-4xl my-12 '>
       
       <div className='flex flex-col items-center justify-center text-center'>
        <div className='bg-gray-400 p-1 rounded-full '> <TbTruckDelivery className='bg-black text-white rounded-full p-1' /></div>
        <div className='mt-4 space-y-1'>
        <h2 className='text-sm font-semibold'>FREE AND FAST DELIVERY</h2>
        <p className='text-xs'> Free delivery for all orders over $140</p>
        </div>
        </div>
       
        <div className='flex flex-col items-center justify-center text-center'>
       <div className='bg-gray-400 p-1 rounded-full'>  <MdHeadsetMic className='bg-black text-white rounded-full p-1'/> </div>
       <div className='mt-4 space-y-1'>
        <h2 className='text-sm font-semibold'>FREE AND FAST DELIVERY</h2>
        <p className='text-xs'> Free delivery for all orders over $140</p>
        </div>
        </div>


        <div className='flex flex-col items-center justify-center text-center'>
        <div className='bg-gray-400 p-1 rounded-full'>     <IoShieldCheckmarkOutline className='bg-black text-white rounded-full p-1'/> </div>
        <div className='mt-4 space-y-1'>
        <h2 className='text-sm font-semibold'>FREE AND FAST DELIVERY</h2>
        <p className='text-xs'> Free delivery for all orders over $140</p>
        </div>
        </div>

         </div>
    </div>
  )
}

export default Icons