import React from "react";

export default function Content(props) {
  const { music } = props;

  return (
    <div className='mt-20 bg-[#1D1D1D] col-span-12 -ml-[83px]  w-auto'>
      <div className='flex justify-between items-center mx-4'>
        <div>
          <h1 className='text-white font-bold text-2xl pt-3'>Focus</h1>
        </div>
        <div>
          <h1 className='text-[#B3B3B3] font-semibold'>Show all</h1>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {music.map((item, index) => (
          <div key={index} className='music mt-4 m-8'>
            <div className='bg-[#181818] rounded-lg p-4 w-44 h-70'>
              <img className='w-full h-40 object-cover rounded-t-lg' src={item.linkImage} alt='Card Cover' />
              <div className='pt-2'>
                <h2 className='text-lg font-semibold text-white'>{item.judulMusic}</h2>
                <p className='text-[#B3B3B3]'>{item.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
