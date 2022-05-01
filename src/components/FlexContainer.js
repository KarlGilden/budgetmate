import React from 'react'
import '../css/FlexContainer.css'
const FlexContainer = ({ children }) => {
  return (
    <div className='flex-container'>{ children }</div>
  )
}

export default FlexContainer