import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

interface SearchDropdownProps {
    closeDropdown: () => void; 
  }
  
  export function SearchDropdown({ closeDropdown }: SearchDropdownProps) {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 transform bg-opacity-90 z-20 "
        style={{ transform: "translateY(0)" }}
      >
        <div className="flex items-center gap-2 w-full h-[59px] p-5 md:p-8 lg:mb-5 lg:px-12 xl:mb-10 xl:px-16  justify-between bg-white shadow-md border-b-[1px]">
          <button
            onClick={closeDropdown} 
            className="p-2 rounded-lg cursor-pointer hover:bg-[#F4F4F5]"
          >
            <IoCloseOutline className="w-[16px] h-[16px] text-black" />
          </button>

          <div className="flex items-center gap-2 w-[70%] h-[40px] p-2 rounded-lg">
            <CiSearch className="text-[#71717A] w-[16px] h-[16px]" />
            <input
              placeholder="Search"
              className="text-[0.9rem] text-[#71717A] border-none outline-none"
            />
          </div>

          <button className="p-2 rounded-lg border-[1px] border-[#E4E4E7] cursor-pointer hover:bg-[#F4F4F5]">
            <IoIosArrowDown className="w-[16px] h-[16px] text-black" />
          </button>
        </div>
      </div>
    </>
  );
}

