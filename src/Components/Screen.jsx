import React from 'react'

export default function ({display}) {
  return (
    <input type="text" id="display" className='border-2 border-white bg-[#aab2ff] w-[315px] h-[60px] rounded font-bold pl-2' value={display} readOnly></input>
  )
}
