import React, { useState } from 'react'
import '../css/HistoryItem.css'
const HistoryItem = ({name, amount}) => {
  return (
    <div className={amount<0 ? 'history-item history-expense' : 'history-item history-deposit'}>
        <p className='history-label'>{amount < 0 ? "-$" + (amount*-1) : "$" + amount }</p>
        <p className='history-label'>{name}</p>
        </div>
  )
}

export default HistoryItem