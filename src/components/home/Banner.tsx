




import { ban } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <div className="mt-20">
      <div className="relative mx-auto w-full h-auto bg-black">
        <div className="relative flex justify-end items-center py-10">
          {/* Image Section */}
          <Image
            src="/dug.png"
            alt="dug"
            width={600}
            height={300}
            className="bg-contain w-full max-w-[300px] sm:max-w-[400px]  md:max-w-[500px] lg:max-w-[600px] h-auto"
          />

          {/* Text and Buttons */}
          <div className="absolute top-12 lg:left-12 left-4 space-y-4 lg:space-y-6 text-white">
            <h2 className="text-sm text-[#00FF66]">Categories</h2>
            <p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Enhance Your <br /> Music Experience
            </p>

            {/* Circles Section */}
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {ban.map((item) => (
                <div
                  key={item?.id}
                  className="text-black bg-white rounded-full w-[65px] h-[65px] flex items-center justify-center"
                >
                  <div className="text-center px-2">
                    <h2 className="font-semibold">{item?.title}</h2>
                    <p className="text-sm">{item?.des}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <Link
                href="/"
                className="text-sm bg-[#00FF66] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md font-medium hover:bg-green-500 transition"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
