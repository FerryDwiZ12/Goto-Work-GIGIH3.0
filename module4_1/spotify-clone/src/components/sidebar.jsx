import React from "react";
import { HiPlus, HiOutlineSearch, HiHome } from "react-icons/hi";
import { BsCollectionFill } from "react-icons/bs";
import "../asset/css/sidebar.css";
import Button from "./button";

const namaButton = [{ nama: "legal" }, { nama: "PrivacyCenter" }, { nama: "PrivacyPolicy" }, { nama: "Cookies" }, { nama: "ABout Ads" }, { nama: "Accessibility" }, { nama: "Cookies" }];

export default function Sidebar() {
  return (
    <div>
      <div className='w-[300px] bg-[#040404] h-full fixed left-0 top-0 z-50 p-2.5'>
        <div>
          <div className=' bg-[#121212] rounded-md'>
            <div className='p-5'>
              <button className='flex items-center'>
                <HiHome className='h-7 w-7 text-[#B3B3B3]' />
                <h1 className='text-[#B3B3B3] ml-3 font-medium text-base'>Home</h1>
              </button>
              <button className='flex items-center mt-4'>
                <HiOutlineSearch className='h-7 w-7 text-[#B3B3B3]' />
                <h1 className='text-[#B3B3B3] ml-3 font-medium text-base'>Search</h1>
              </button>
            </div>
          </div>
        </div>
        <div className='pt-2.5'>
          <div className=' bg-[#121212] rounded-md'>
            <div className='p-2'>
              <div className='p-3'>
                <button className='flex items-center w-full'>
                  <BsCollectionFill className='h-7 w-7 text-[#B3B3B3] transform rotate-90 ' />
                  <div className='flex justify-between w-full'>
                    <h1 className='text-[#B3B3B3] ml-3 font-medium text-base'>Your Library</h1>
                    <HiPlus className='h-6 w-6 text-[#B3B3B3] transform rotate-90 ' />
                  </div>
                </button>
              </div>
              <div className='scrool'>
                <div className='pt-5 w-full'>
                  <div className=' bg-[#242424] rounded-md w-full'>
                    <div className='p-4 text-white font-semibold'>
                      <p>Create your first playlist</p>
                    </div>
                    <div className='pl-4 pb-4 text-white font-medium text-sm'>
                      <p>It's easy, we'll help you</p>
                    </div>
                    <div className='pl-4 w-full pb-5'>
                      <button className=' bg-slate-200 rounded-2xl'>
                        <h1 className='text-black p-1 ml-2 mr-2  font-medium text-base'>Create Playlist</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='pt-5 w-full'>
                  <div className=' bg-[#242424] rounded-md w-full'>
                    <div className='p-4 text-white font-semibold'>
                      <p>Let's find some podcasts to follow</p>
                    </div>
                    <div className='pl-4 pb-4 text-white font-medium text-sm'>
                      <p>we'll keep you updated on new episodes</p>
                    </div>
                    <div className='pl-4 w-full pb-5'>
                      <button className=' bg-slate-200 rounded-2xl'>
                        <h1 className='text-black p-1 ml-2 mr-2  font-medium text-base'>Browse podcasts</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-2 w-[300px]'>
            <Button  btnNama={namaButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
