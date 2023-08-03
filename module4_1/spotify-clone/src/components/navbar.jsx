import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className='bg-[#101010] p-4 h-[77px] text-white fixed mt-2.5 right-0 w-[1235px] rounded-tl-xl '>
      <div className='content flex justify-between items-center'>
        <div className='kiri'>
          <button>
            <HiOutlineChevronLeft className='h-7 w-7 text-[#B3B3B3] mr-4' />
          </button>
          <button>
            <HiOutlineChevronRight className='h-7 w-7 text-[#B3B3B3]' />
          </button>
        </div>
        <div className='kanan'>
          <button className='  rounded-2xl mr-4'>
            <h1 className='text-[#B3B3B3] m-3  font-medium text-base'>Sign up</h1>
          </button>
          <button className=' bg-slate-200 rounded-full'>
            <h1 className='text-black mt-3 mb-3 mr-8 ml-8  font-medium text-base'>Log in</h1>
          </button>
        </div>
      </div>
    </nav>
  );
}
