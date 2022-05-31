import React from 'react'
import BudgetCard from '../components/BudgetCard'
import '../css/Budget.css'
import {BsPlusLg} from 'react-icons/bs'
const Budget = () => {
  return (
    <div className='page'>
      <div className="budgets-header">
        <h1>My Budgets</h1>
        <div className="add-budget-container">
          <p className='add-budget-text'>New Budget</p>
          <BsPlusLg className='add-budget-icon'/>
        </div>
      </div>
      <div className="budgets-grid">
        <BudgetCard name="Winter Budget"/>
        <BudgetCard name="Winter Budget"/>
        <BudgetCard name="Winter Budget"/>
        <BudgetCard name="Winter Budget"/>
      </div>
    </div>
  )
}

export default Budget