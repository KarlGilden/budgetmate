import React from 'react'
import '../css/Dashboard.css'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import FlexContainer from '../components/FlexContainer'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate();
    const navToDepositSpend = () => {
        navigate('/deposit')
    }


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

        <FlexContainer mobileColumn={true}>
            <FlexContainer>
                <MainButton text="Deposit / Spend" func={navToDepositSpend}/>
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