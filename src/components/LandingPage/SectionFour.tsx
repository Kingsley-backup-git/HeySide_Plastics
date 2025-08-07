import Button from "../ui/Button";
import Img2 from "../../assets/Img2.jpg"

export default function SectionFour() {
  return (
      <div className="mt-16 bg-[#10181D]  w-full py-14">
          <div className="max-w-[1200px] gap-x-12 mx-auto grid grid-cols-2 w-full whitespace-normal">
              <div>
                           <h1 className="text-white text-2xl text-balance font-medium">Precision Meets Innovation – Your Partner in Advanced Plastic Injection Moulding</h1>

              <p className="text-xs mt-4 text-white">We are looking to collaborate with businesses that value quality, sustainability, and innovation. Whether you need reliable PVC product manufacturing or a strategic partner for new developments,our advanced manufacturing facilities are ready to support your growth.</p>
                <Button
                            className="bg-darkgreen font-semibold text-base text-black rounded-3xl mt-8 py-2 px-5 cursor-pointer"
                            type="button"
                          >
                            <h1>About Us</h1>
                  </Button>
                  

                  <div className="flex divide-x-2 mt-20 divide-[#D9D9D9] gap-x-4">
                      <div className="pe-4">
                          <h1 className="font-bold text-center text-2xl text-white">90</h1>
                          <p className="font-bold text-sm text-white">Finished Projects</p>
                      </div>

 <div className="pe-4">
                          <h1 className="font-bold text-center text-2xl text-white">90</h1>
                          <p className="font-bold text-sm text-white">Finished Projects</p>
                      </div>


 <div>
                          <h1 className="font-bold text-center text-2xl text-white">90</h1>
                          <p className="font-bold text-sm text-white">Finished Projects</p>
                      </div>
                      
                  </div>
              </div>
     <img src = {Img2} className="w-full rounded-sm" alt=""/>
               
          </div>
    </div>
  )
}
