import React from 'react'
import '../css/CTAButton.css'
const CTAButton = ({text, func, color}) => {
  return (
    <button className={`CTAButton ${color}`} onClick={func}>{text}</button>
  )
}

export default CTAButton