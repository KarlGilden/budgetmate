import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/BalanceContext'
import HistoryItem from './HistoryItem';
import '../css/HistoryList.css'
const HistoryList = () => {
    const {transactions} = useContext(GlobalContext);
    
  return (
    <div className='history-list'>
        <div className='dashboard-history-title'>History</div>
        <ul>
            {transactions.slice(0, 5).map(value=>{
                return(
                <HistoryItem key={value.id} name={value.name} amount={value.amount} date={value.date}/>
                )
            })}
        </ul>
    </div>
  )
}

export default HistoryList