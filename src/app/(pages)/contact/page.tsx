// import React from 'react'

// function page() {
//   return (
//     <section className="text-gray-600 body-font relative">
//     <div className="container px-5 py-24 mx-auto">

      
//       <div className="flex flex-col text-center w-full mb-12">
//         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
//           Contact Us
//         </h1>
//         {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//           Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
//           gentrify.
//         </p> */}
//       </div>
//       <div className="lg:w-1/2 md:w-2/3 mx-auto">
//         <div className="flex flex-wrap -m-2">
//           <div className="p-2 w-1/3">
//             <div className="relative">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//           </div>
//           <div className="p-2 w-1/3">
//             <div className="relative">
//               <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//           </div>

//           <div className="p-2 w-1/3">
//             <div className="relative">
//               <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                 Phone No
//               </label>
//               <input
//                 type="number"
//                 id="number"
//                 name="number"
//                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//           </div>
//           <div className="p-2 w-full">
//             <div className="relative">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                 defaultValue={""}
//               />
//             </div>
//           </div>
//           <div className="p-2 w-full ">
//             <button className="flex mx-auto justify-items-end   text-white bg-[#DB4444] border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Send Massage
//             </button>
//           </div>
    
//         </div>
//       </div>
//     </div>
//   </section>
  
//   )
// }

// export default page


'use client';

import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 lg:px-20 py-12">
      {/* Left: Contact Information */}
      <div className="lg:w-1/3 bg-white shadow-md p-6 rounded-md">
        <div className="space-y-8">
          {/* Call To Us Section */}
          <div className="flex gap-4 items-start">
            <div className="text-white bg-primary rounded-full p-1 text-3xl">
              <AiOutlinePhone />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Call To Us</h3>
              <p className="text-gray-600 mt-1">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-800 font-medium mt-1">Phone: +88061112222</p>
            </div>
          </div>

          {/* Write To Us Section */}
          <div className="flex gap-4 items-start">
            <div className="text-white bg-primary rounded-full p-1 text-3xl">
              <AiOutlineMail />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Write To Us</h3>
              <p className="text-gray-600 mt-1">
                Fill out our form, and we will contact you within 24 hours.
              </p>
              <p className="text-gray-800 font-medium mt-1">
                Emails: <span className="block">customer@exclusive.com</span>
                <span>support@exclusive.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="lg:w-2/3 bg-white shadow-md p-6 rounded-md">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            {/* Phone */}
            <input
              type="tel"
              placeholder="Your Phone *"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Message Textarea */}
          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Submit Button */}
          <div className='flex justify-end items-end'>
            <button
            type="submit"
            className="bg-primary text-white  px-6 py-2 hover:bg-red-700 transition-colors"
          >
            Send Message
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
