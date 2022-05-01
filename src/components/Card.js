import React from 'react'
import '../css/Card.css'
const Card = ({ children, func }) => {
  return (
    <div onClick={func} className='card'>{children}</div>
  )
}

export default Card