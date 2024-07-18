import React from 'react'
import Button from './Button'

export default function ButtonContainer({addNumber}) {
    const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,0,'+' ,'-', '*', '/', '.', '<-', '=','C'];
  return (
    <div className='mt-3 flex flex-wrap'>
        
        {num.map((number, index) => (
          <Button key={index} number={number} addNumber={addNumber} />
        ))}
     
  
   
    </div>
  )
}
