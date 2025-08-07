
import { FiCheckCircle } from "react-icons/fi";
export default function SectionTwo() {
  return (
      <div className='w-full relative top-[-100px] flex justify-center  z-[99]'>
          <div className=" bg-[#10181D] w-full justify-between gap-x-4  max-w-[1320px] mx-auto grid grid-cols-4 px-8 py-10  bottom-[-95px]  ">
                  <div className="flex flex-col items-center max-w-[205px] w-full">
                      <FiCheckCircle className="text-darkgreen text-4xl"/>
                      <h1 className="text-white text-center font-semibold text-sm mt-3">Precision and Quality</h1>
                      <p className="text-white text-center font-normal text-sm mt-2">Any ISO Accreditations goes here and brief description.</p>
                  </div>


                   <div className="flex flex-col items-center  max-w-[205px]  w-full">
                      <FiCheckCircle className="text-darkgreen text-4xl"/>
                      <h1 className="text-white text-center font-semibold text-sm mt-3">Expertise</h1>
                      <p className="text-white text-center font-normal text-sm mt-2">Brief description of expertise in plastic injection moulding.</p>
                  </div>



            <div className="flex flex-col items-center  max-w-[205px] w-full">
                      <FiCheckCircle className="text-darkgreen text-4xl"/>
                      <h1 className="text-white text-center font-semibold text-sm mt-3">Sustainability</h1>
                      <p className="text-white text-center font-normal text-sm mt-2">Brief description of sustainability services.</p>
                  </div>

                     <div className="flex flex-col items-center  max-w-[205px] w-full">
                      <FiCheckCircle className="text-darkgreen text-4xl"/>
                      <h1 className="text-white text-center font-semibold text-sm mt-3">CSR</h1>
                      <p className="text-white text-center font-normal text-sm mt-2">Brief description goes here regarding CSR.</p>
                  </div>
              </div>
    </div>
  )
}
