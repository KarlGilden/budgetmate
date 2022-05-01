import React from 'react'
import '../css/Input.css'

const NumberInput = () => {
  return (
    <div className="number-input-wrapper">
      $
      <input
        className='number-input' 
        type="number"
        placeholder='0.00'
        step="any"
      />
    </div>

  )
}

export default NumberInput