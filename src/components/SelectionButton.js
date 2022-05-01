import React, { useState } from 'react'
import '../css/SelectionButton.css'
const SelectionButton = ({positive, negative, actionType, setActionType}) => {
    const [selected, setSelected] = useState(false);
    const handleClick = () => {
      setSelected(!selected)
      setActionType(!actionType)
    }
  return (
    <div className={'selection-btn'}><p className={actionType == true && 'selected'} onClick={()=>setActionType(true)}>{positive}</p><p className={actionType == false && 'selected'} onClick={()=>setActionType(false)}>{negative}</p></div>
  )
}

export default SelectionButton