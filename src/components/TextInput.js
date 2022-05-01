import React from 'react'
import '../css/Input.css'
const TextInput = ({name}) => {
  return (
    <div className="text-input-wrapper">
      <input 
        className='text-input' 
        type="text"
        placeholder="Name"
        onChange={(e)=>{
          name(e.target.value)
        }}
      />
    </div>

  )
}

export default TextInput