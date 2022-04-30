import React from 'react'
import '../css/Dashboard.css'
import Card from '../components/Card'
const Dashboard = () => {
  return (
    <div className='page'>
        <div className="dashboard-container">
            <Card>
                <h3 className='user-balance-title'>Your balance</h3>
                <p className='user-balance'>$2000</p>
            </Card>
        </div>
        <div className="dashboard-container">
            <Card>
                <h3 className='user-balance-title'>Income</h3>
                <p className='user-balance income'>$2000</p>
            </Card>
            <Card>
                <h3 className='user-balance-title'>Expenses</h3>
                <p className='user-balance expense'>$2000</p>
             </Card>
        </div>
    </div>
  )
}

export default Dashboard