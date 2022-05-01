import React from 'react'
import '../css/FlexContainer.css'
const FlexContainer = ({ children, mobileColumn }) => {
  return (
    <div className={mobileColumn ? 'flex-container mobile-column' : 'flex-container'}>{ children }</div>
  )
}

export default FlexContainer