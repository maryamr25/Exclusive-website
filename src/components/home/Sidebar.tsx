import { sideCat } from '@/utils/data'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="  lg:w-[230px] md:w-[217px] sm:w-[250px] w-full h-auto p-4 bg-gray-100">
        <ul className="space-y-2" >
          {sideCat.map((cat) => (
            <li
            key={cat.id}
             className="cursor-pointer hover:underline text-gray-700"
            >
              {cat.title}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Sidebar