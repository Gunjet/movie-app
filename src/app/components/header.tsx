import { CiSearch } from "react-icons/ci";
import { PiMoonThin } from "react-icons/pi";

export  function Header(){
    return(
        <div className="flex items-center gap-2 w-[375px] h-[59px] p-5 justify-between">
        <div className="flex gap-2">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.83268 1.16675V17.8334M13.166 1.16675V17.8334M0.666016 9.50008H17.3327M0.666016 5.33341H4.83268M0.666016 13.6667H4.83268M13.166 13.6667H17.3327M13.166 5.33341H17.3327M2.48268 1.16675H15.516C16.5193 1.16675 17.3327 1.9801 17.3327 2.98341V16.0167C17.3327 17.0201 16.5193 17.8334 15.516 17.8334H2.48268C1.47936 17.8334 0.666016 17.0201 0.666016 16.0167V2.98341C0.666016 1.9801 1.47936 1.16675 2.48268 1.16675Z" stroke="#4338CA" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='text-[16px] font-bold italic text-[#4338CA]'>Movie Z</p>
        </div>   
        <div className="flex gap-3">
          <button className="p-2 rounded-md border-[1px] border-[#E4E4E7]">
            <CiSearch className="w-[16px] h-[16px] text-black" />
          </button>   
          <button className="p-2 rounded-md border-[1px] border-[#E4E4E7]">
            <PiMoonThin className="w-[16px] h-[16px] text-black" />
          </button> 
        </div> 
      </div>
    )
  
}