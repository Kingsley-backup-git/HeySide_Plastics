import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
      <div className=" w-full flex items-center rounded-full py-1 px-2 border-[0.86px] border-[#FFFFFF99]">
          <input type="text" placeholder="Search" className="p-2 flex-1 outline-0 border-0 placeholder:text-[#FFFFFF26] shadow-md placeholder:text-base text-sm w-full text-white " />
          
          <div className="p-1 bg-darkgreen max-w-fit rounded-full">
              <FiSearch className="text-xl"/>
          </div>
    </div>
  )
}
