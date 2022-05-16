import React, { useState } from 'react'
import '../css/HistoryItem.css'
const HistoryItem = ({name, amount, date}) => {
  return (
    <div className={amount<0 ? 'history-item history-expense' : 'history-item history-deposit'}>
      <div className="history-label-left">
        <p className='history-label amount-label'>{amount < 0 ? "-$" + (amount*-1) : "$" + amount }</p>
        <p className='history-label'>{name}</p>
      </div>
      <div className="history-label-right">
        <p className='history-label'>{date.split("T")[0]}</p>
      </div>
    </div>
  )
}

export default HistoryItem