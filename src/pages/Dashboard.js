import React from 'react'
import '../css/Dashboard.css'
import Card from '../components/Card'
import FlexContainer from '../components/FlexContainer'
const Dashboard = () => {
  return (
    <div className='page'>
        <div className="dashboard-header">
            <FlexContainer>
                <Card>
                    <h3 className='user-balance-title'>Your balance</h3>
                    <p className='user-balance'>$2000</p>
                </Card>
            </FlexContainer>
            <FlexContainer>
                <Card>
                    <h3 className='user-balance-title'>Income</h3>
                    <p className='user-balance income'>$150</p>
                </Card>
                <Card>
                    <h3 className='user-balance-title'>Expenses</h3>
                    <p className='user-balance expense'>$50</p>
                </Card>
            </FlexContainer>
        </div>

        <FlexContainer>
            <FlexContainer>
                <Card>
                    <h2 className='user-balance-title'>Log an expense</h2>
                </Card>
            </FlexContainer>
            <FlexContainer>
                <div className="dashboard-history">
                    <p className='dashboard-history-title'>History</p>
                    <hr />
                </div>
             </FlexContainer>
        </FlexContainer>
    </div>
  )
}

export default Dashboard