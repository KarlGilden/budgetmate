import React, { useState } from 'react'
import '../css/SelectionButton.css'
const SelectionButton = (props) => {
    const [selected, setSelected] = useState(false);
  return (
    <div onClick={()=>setSelected(!selected)} className={selected ? 'selection-btn selected' : 'selection-btn'}><p>{props.text}</p></div>
  )
}

export default SelectionButton