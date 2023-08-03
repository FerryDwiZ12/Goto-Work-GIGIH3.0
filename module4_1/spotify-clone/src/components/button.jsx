import React from "react";

export default function Button(props) {
  const { btnNama } = props;

  return (
    <div className='flex w-[200px]'>
      {btnNama.map((item, index) => (
        <div key={index}>
          <button className='text-[#B3B3B3]'>
            <h1 className='text-[#B3B3B3] font-sm text-sm'>{item.nama}</h1>
          </button>
        </div>
      ))}
    </div>
  );
}
