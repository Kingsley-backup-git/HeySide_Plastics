
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SearchInput from "../components/ui/SearchInput";
export default function Footer() {
  return (
    <div className="bg-[#10181D] py-14 px-6">
      <div className="max-w-[1200px] flex gap-x-6 pb-6 mx-auto">
        <div className="text-white flex-[0.25] ">
          <h1 className="text-white font-bold text-base">Example Title</h1>

          <div className="mt-6 flex flex-col gap-y-4">
            <Link to="" className="text-xs font-medium">
              Example Title
            </Link>
            <Link to="" className="text-xs font-medium">
              Example Title
            </Link>
            <Link to="" className="text-xs font-medium">
              Example Title
            </Link>
            <Link to="" className="text-xs font-medium">
              Example Title
            </Link>
            <Link to="" className="text-xs font-medium">
              Example Title
            </Link>
            <Link to="" className="text-xs font-medium">
              Example Title
            </Link>
            <Link to="" className="text-xs font-medium">
              Example Title
            </Link>
          </div>
        </div>

        <div className="text-white flex-1 flex flex-col gap-y-10">
          <div>
            <h1 className="text-white font-bold text-base">Useful Links</h1>

            <div className="mt-6 flex flex-col font-normal gap-y-4">
              <Link to="" className="text-sm">
                About Us
              </Link>
              <Link to="" className="text-sm">
                Contact Us{" "}
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-white font-bold text-base">Contact Info </h1>

            <div className="mt-6 flex flex-col font-normal gap-y-3">
              <div  className="text-xs">
               Email: heysideplastics.co.uk
              </div>
             
                          
                           <div  className="text-xs">
              Phone: 01616267924
                          </div>
                          

                           <div  className="text-xs">
     Address: 6 Meek St, Royton, Oldham OL2 6HL
              </div>
                      </div>
                      


                      <div className="flex gap-x-6 items-center mt-5">
                          <FaFacebookF className="text-2xl text-darkgreen" />
                          <FaInstagramSquare className="text-2xl text-darkgreen" />
                          <FaTwitter className="text-2xl text-darkgreen" />
                      </div>
          </div>
              </div>
              
              <div className="max-w-[280px] w-full">
              <SearchInput />    
</div>


            
          </div>
          
            <div className="max-w-[1200px] border-t-[#0F4D3D] border-t-2 pt-6 flex mx-auto justify-between">
              <div className="text-white font-medium text-sm">Copyright Heyside Plastics Limited 2025</div> 
              

              <div className="flex gap-x-2 text-white text-sm">
                  <Link to="" className="">FAQs</Link>
                  
                  <div className="border-x-2 px-2"><Link className="" to="" >Privacy Policy</Link></div>

                    
                  <Link to="" className="">Terms & Conditions</Link>
              </div>
              </div>
    </div>
  );
}
