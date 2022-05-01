import React from 'react'
import '../css/MainButton.css'
const MainButton = (props) => {
  return (
    <button className='main-btn' onClick={props.func}>{props.text}</button>
  )
}

export default MainButton