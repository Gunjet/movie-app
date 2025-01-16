export default function Footer(){
    return(
        <footer className="w-full h-[308px] bg-[#4338CA] bottom-0 left-0 flex justify-center items-center">
        <div className='w-[335px] h-[228px] flex flex-col justify-between'>
          <div className="w-[247px] h-[52px] text-white flex flex-col gap-3 ">
            <div className="flex gap-2">
             <img src='/film.png' className='w-[20px] h-[20px]'/>
             <p className='text-[16px] font-bold italic'>Movie Z</p>
            </div>
            <p className='text-[14px]'>© 2024 Movie Z. All Rights Reserved.</p>
          </div>
          <div className='flex justify-between w-[335px] h-[148px]'>
            <div className='h-[136px] w-[174px] text-[14px] text-white flex flex-col justify-between'>
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
            <div className='h-[148px] w-[113px] flex flex-col justify-between text-white text-[14px]'>
              <p>Follow us</p>
              <p className='font-semibold'>Facebook</p>
              <p className='font-semibold'>Instagram</p>
              <p className='font-semibold'>Twitter</p>
              <p className='font-semibold'>Youtube</p>
            </div>
          </div>
        </div>
      </footer>
    )
}