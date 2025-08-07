import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import Img3 from "../../assets/Img3.jpg"
export default function SectionFive() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1200px]  w-full gap-x-6 mx-auto flex items-center">
        <div className="max-w-fit cursor-pointer w-full border rounded-full border-black p-3">
          <FaArrowLeft className="text-3xl" />
        </div>

        <div className="flex-1">
          <h1 className="font-semibold text-center text-black text-4xl">
            What Our Clients Say
          </h1>
          <p className="font-normal max-w-[845px] block mx-auto mt-12 text-center text-black text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
                  </p>
                  

                  <div className="max-w-[845px] mt-10 flex items-center flex-col gap-y-3 justify-center mx-auto">
                      <img src={Img3} className="rounded-full w-[60px] h-[60px] object-cover" />

                      <h1 className="text-[#0F4D3D] text-center text-sm mt-2">Joe Bloggs</h1>

                      <p className="font-normal text-sm text-center text-black">Design Engineer</p>
                  </div>
        </div>

        <div className="max-w-fit cursor-pointer w-full border bg-darkgreen rounded-full border-darkgreen p-3">
          <FaArrowRight className="text-3xl" />
        </div>
      </div>
    </div>
  );
}
