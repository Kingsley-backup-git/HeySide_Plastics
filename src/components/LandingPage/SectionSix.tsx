import Img4 from "../../assets/Img4.png"
import Img5 from "../../assets/Img5.png"
import Img6 from "../../assets/Img6.png"
import Img7 from "../../assets/Img7.png"
import Img8 from "../../assets/Img8.png"
import Button from "../ui/Button"
export default function SectionSix() {
  return (
      <div className='w-full py-16 bg-[#0F4D3D]'>
          <div className='max-w-[1000px] w-full mx-auto block'>
              <h1 className='text-white text-center font-semibold text-4xl'>
                  Our Distributers
              </h1>
              

              <div className="flex items-center gap-x-6 justify-between mt-14">
                  <img src={Img4} className="w-full max-w-[200px]" />

                  <img src={Img5} className="w-full max-w-[200px]" />
                  
                  <img src={Img6} className="w-full max-w-[200px]" />
                  
                  <img src={Img7} className="w-full max-w-[200px]" />
                  
                    <img src={Img8} className="w-full max-w-[200px]" />
              </div>


              <p className="text-white mt-10 text-sm font-semibold text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                 <Button
                                          className="bg-darkgreen font-semibold text-base text-black block mx-auto rounded-3xl mt-10 py-2 px-5 cursor-pointer"
                                          type="button"
                                        >
                                         Become A Distributer
                                </Button>
          </div>
          
    </div>
  )
}
