import React from 'react'

export default function Button({number,addNumber}) {
  return (
    <button onClick={() =>{

      addNumber(number);
    }} 
    className='size-10 border-2 rounded shadow border-white flex justify-center items-center font-bold  w-1/4 m-1 hover:bg-[#aab2ff]'>
        {number}
    </button>
  )
}
