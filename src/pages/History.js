import React from 'react'
import HistoryList from '../components/HistoryList'

const History = () => {
  return (
    <div className='page'>
        <HistoryList partial={false}/>
    </div>
  )
}

export default History