import React from 'react'
import '../css/CTAButton.css'
import LoadingSpinner from './LoadingSpinner'
const CTAButton = ({text, func, color, disabled, margin, fullWidth}) => {
  return (
    <button disabled={disabled} className={`CTAButton ${color} ${margin?"margin":"no-margin"} ${fullWidth?"full-width":"small-width"}`} onClick={func}>{text} {disabled? <LoadingSpinner/>: <></>}</button>
  )
}

export default CTAButton