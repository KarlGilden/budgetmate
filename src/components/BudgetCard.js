import React from 'react'
import '../css/BudgetCard.css'
const BudgetCard = (props) => {
  return (
    <div className='budget-card'>{props.name}</div>
  )
}

export default BudgetCard