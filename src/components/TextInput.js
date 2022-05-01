import React from 'react'
import '../css/Input.css'
const TextInput = () => {
  return (
    <div className="text-input-wrapper">
      <input 
        className='text-input' 
        type="text"
        placeholder="Name"
      />
    </div>

  )
}

export default TextInput