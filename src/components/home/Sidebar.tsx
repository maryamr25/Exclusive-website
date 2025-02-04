// import { sideCat } from '@/utils/data'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className="justify-start 2xl:w-[280px] xl:w-[250px] lg:w-[230px] md:w-[217px]  sm:w-[250px] w-full h-auto p-4 bg-gray-100">
//         <ul className="space-y-2" >
//           {sideCat.map((cat) => (
//             <li
//             key={cat.id}
//              className="cursor-pointer hover:underline text-gray-700"
//             >
//               {cat.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//   )
// }

// export default Sidebar





import { sideCat } from '@/utils/data';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full sm:w-[250px] md:w-[217px] lg:w-[230px] xl:w-[250px] 2xl:w-[280px] h-auto p-4 bg-gray-100 rounded-lg">
      <ul className="space-y-2">
        {sideCat.map((cat) => (
          <li
            key={cat.id}
            className="cursor-pointer hover:underline text-gray-700 transition-all hover:text-primary"
          >
            {cat.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

