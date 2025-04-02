'use client'

import { useState } from "react";
import { PiMoonThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { SearchDropdown } from "./searchDropdown";

export default function Header() {
  const [isSearchDropdownVisible, setSearchDropdownVisible] = useState(false);

  const toggleSearchDropdown = () => {
    setSearchDropdownVisible(!isSearchDropdownVisible);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 h-[59px] p-5 md:p-8 lg:mb-5 lg:px-12 xl:mb-10 xl:px-16 justify-between bg-white z-10 relative">
        <Link href="/">
          <div className="flex gap-2">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.83268 1.16675V17.8334M13.166 1.16675V17.8334M0.666016 9.50008H17.3327M0.666016 5.33341H4.83268M0.666016 13.6667H4.83268M13.166 13.6667H17.3327M13.166 5.33341H17.3327M2.48268 1.16675H15.516C16.5193 1.16675 17.3327 1.9801 17.3327 2.98341V16.0167C17.3327 17.0201 16.5193 17.8334 15.516 17.8334H2.48268C1.47936 17.8334 0.666016 17.0201 0.666016 16.0167V2.98341C0.666016 1.9801 1.47936 1.16675 2.48268 1.16675Z"
                stroke="#4338CA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[16px] font-bold italic text-[#4338CA]">Movie Z</p>
          </div>
        </Link>
        <div className="flex gap-3">
          <button
            className="p-2 rounded-lg border-[1px] border-[#E4E4E7] cursor-pointer hover:bg-[#F4F4F5]"
            onClick={toggleSearchDropdown} 
          >
            <CiSearch className="w-[16px] h-[16px] text-black" />
          </button>
          <button className="p-2 rounded-lg border-[1px] border-[#E4E4E7] cursor-pointer hover:bg-[#F4F4F5]">
            <PiMoonThin className="w-[16px] h-[16px] text-black" />
          </button>
        </div>
      </div>

      {isSearchDropdownVisible && <SearchDropdown closeDropdown={toggleSearchDropdown} />}
    </>
  );
}





        
      {/* <footer className="w-full h-[280px] bg-[#4338CA] flex justify-center items-center absolute bottom-0 left-0">
        <div className="w-[1280px] h-[200px] flex justify-between">
          <div className="w-[247px] h-[200px] text-white flex flex-col gap-3">
            <div className="flex gap-2">
             <img src='/film.png' className='w-[20px] h-[20px]'/>
             <p className='text-[16px] italic'>Movie Z</p>
            </div>
            <p className='text-[14px]'>© 2024 Movie Z. All Rights Reserved.</p>
          </div>
          <div className="w-[913px] h-[200px] flex justify-between">
            <div className='w-[274px] h-[52px]'></div>
            <div className='w-[174px] h-[200px] text-white flex flex-col gap-3 text-[14px]'>
              <p>Contact Information</p>
              <div className="flex gap-3 items-center">
                <img src='/email.png' className='w-[16px] h-[16px]'/>
                <p>Email: support@movieZ.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src='/phone.png' className='w-[16px] h-[16px]'/>
                <p>Phone: <br/> +976 (11) 123-4567</p>
              </div>
            </div>
            <div className='w-[274px] h-[52px] text-white flex flex-col gap-3 text-[14px]'>
              <p>Follow us</p>
              <p>Facebook Instagram Twitter Youtube</p>
            </div>
          </div>
        </div>
      </footer> */}
