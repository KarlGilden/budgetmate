import React from 'react'
import '../css/Input.css'

const NumberInput = ({amount}) => {
  return (
    <div className="number-input-wrapper">
      $
      <input
        className='number-input' 
        type="number"
        placeholder='0.00'
        step="any"
        onChange={(e)=>{
          amount(parseInt(e.target.value))
        }}
      />
    </div>

  )
}

export default NumberInput