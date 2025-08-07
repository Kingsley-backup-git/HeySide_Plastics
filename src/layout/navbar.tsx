import { Link } from "react-router"
import Logo from "../assets/Hsl_logo.png"
import { FaAngleDown } from "react-icons/fa6";
import Button from "../components/ui/Button";
export default function Navbar() {
  return (
      <div className='flex items-center justify-between w-full max-w-[1300px]  mx-auto'>
          <img src={Logo} width={67} height={22} className="" />
          
          <div className="flex items-center gap-x-8">
              <Link to="" className="flex text-white items-center gap-x-2 font-bold text-sm"><h1>Capabilities</h1> <FaAngleDown /></Link>
              <Link to="" className="font-bold text-white  text-sm">About Us</Link>
              <Link to="" className="font-bold text-white  text-sm">News</Link>
              <Link to="" className="font-bold text-white  text-sm">Contact</Link>
              
              <Button className ="bg-darkgreen font-semibold text-base text-black rounded-3xl py-3 px-5 cursor-pointer" type="button"><h1>Get In Touch</h1></Button>
          </div>
    </div>
  )
}
