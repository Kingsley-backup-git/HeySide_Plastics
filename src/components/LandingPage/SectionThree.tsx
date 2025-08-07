import Img1 from "../../assets/background.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Button from "../ui/Button";
export default function SectionThree() {
  return (
    <div className="w-full mt-[-40px] px-6 ">
      <div className="flex items-center justify-between  max-w-[1200px]  mx-auto w-full">
        <h1 className="font-bold text-black text-4xl border-b-[2px] border-black pb-[0.5px]">
          Our services
        </h1>

        <div className="flex gap-x-4 items-center">
          <div className="max-w-fit cursor-pointer w-full border rounded-full border-black p-3">
            <FaArrowLeft className="text-3xl" />
          </div>
          <div className="max-w-fit cursor-pointer w-full border bg-darkgreen rounded-full border-darkgreen p-3">
            <FaArrowRight className="text-3xl" />
          </div>
        </div>
      </div>

          <div className=" relative w-full pe-2 overflow-hidden max-w-[1200px] block mx-auto">
              

          <div className="overflow-x-auto scrollbar-hidden mt-14 items-center flex gap-x-6 flex-nowrap max-w-[1200px]  mx-auto">
             
        <div className="min-w-[260px] max-w-[260px] h-full rounded-xl border border-[#0F4D3D]">
          <img
            src={Img1}
            className="w-full h-[200px]  object-cover rounded-t-xl"
          />
          <div className="px-3 pb-8">
            <h1 className="text-xl font-medium mt-6">
              Traffic Management & Construction
            </h1>

            <p className="text-sm  mt-5 font-normal">
              Producing traffic cones, barriers, signs, speed bumps and chamber
              systems.
            </p>

            <Button
              className="bg-darkgreen font-semibold text-base text-black rounded-3xl mt-8 py-2 px-5 cursor-pointer"
              type="button"
            >
              <h1>Learn More</h1>
            </Button>
          </div>
        </div>

        <div className="min-w-[260px] max-w-[260px] rounded-xl border border-[#0F4D3D]">
          <img
            src={Img1}
            className="w-full h-[200px]  object-cover rounded-t-xl"
          />
          <div className="px-3 pb-8">
            <h1 className="text-xl font-medium mt-6">
              Traffic Management & Construction
            </h1>

            <p className="text-sm  mt-5 font-normal">
              Producing traffic cones, barriers, signs, speed bumps and chamber
              systems.
            </p>

            <Button
              className="bg-darkgreen font-medium text-base text-black rounded-3xl mt-8 py-2 px-5 cursor-pointer"
              type="button"
            >
              <h1>Learn More</h1>
            </Button>
          </div>
        </div>

        <div className="min-w-[260px] max-w-[260px] rounded-xl border border-[#0F4D3D]">
          <img
            src={Img1}
            className="w-full h-[200px]  object-cover rounded-t-xl"
          />
          <div className="px-3 pb-8">
            <h1 className="text-xl font-medium mt-6">
              Traffic Management & Construction
            </h1>

            <p className="text-sm  mt-5 font-normal">
              Producing traffic cones, barriers, signs, speed bumps and chamber
              systems.
            </p>

            <Button
              className="bg-darkgreen font-semibold text-base text-black rounded-3xl mt-8 py-2 px-5 cursor-pointer"
              type="button"
            >
              <h1>Learn More</h1>
            </Button>
          </div>
        </div>

        <div className="min-w-[260px] max-w-[260px] rounded-xl border border-[#0F4D3D]">
          <img
            src={Img1}
            className="w-full h-[200px]  object-cover rounded-t-xl"
          />
          <div className="px-3 pb-8">
            <h1 className="text-xl font-medium mt-6">
              Traffic Management & Construction
            </h1>

            <p className="text-sm  mt-5 font-normal">
              Producing traffic cones, barriers, signs, speed bumps and chamber
              systems.
            </p>

            <Button
              className="bg-darkgreen font-semibold text-base text-black rounded-3xl mt-8 py-2 px-5 cursor-pointer"
              type="button"
            >
              <h1>Learn More</h1>
            </Button>
          </div>
              </div>
              


                <div className='min-w-[260px] max-w-[260px] rounded-xl border border-[#0F4D3D]'>
                  <img src={Img1} className="w-full h-[200px]  object-cover rounded-t-xl" />
                  <div className="px-3 pb-8">
                      <h1 className="text-xl font-medium mt-6">Traffic Management & Construction</h1>   

                      <p className="text-sm  mt-5 font-normal">Producing traffic cones, barriers, signs, speed bumps and chamber systems.</p>

                                    <Button className ="bg-darkgreen font-semibold text-base text-black rounded-3xl mt-8 py-2 px-5 cursor-pointer" type="button"><h1>Learn More</h1></Button>
</div>
                  </div>
                 
              </div>
      </div>
    </div>
  );
}
