import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/BalanceContext'
import HistoryItem from './HistoryItem';
import '../css/HistoryList.css'
const HistoryList = () => {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions)
  return (
    <div className='history-list'>
        <ul>
            {transactions.map(value=>{
                return(
                <HistoryItem key={value.id} name={value.name} amount={value.amount}/>
                )
            })}
        </ul>
    </div>
  )
}

export default HistoryList