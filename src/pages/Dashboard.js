import React, {useContext, useEffect, useState} from 'react'
import '../css/Dashboard.css'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import FlexContainer from '../components/FlexContainer'
import HistoryList from '../components/HistoryList'

import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
const Dashboard = () => {
    const {transactions} = useContext(GlobalContext);

    const [incomeStep, setIncomeStep] = useState('Month');
    const [expensesStep, setExpensesStep] = useState('Month');
    const [balance, setBalance] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        getUser()
    })

    const getUser = async () =>{
        await fetch("https://localhost:5001/auth/user",{
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.type){
                navigate("/")

            }
        }).catch(e=>{
            navigate("/")
        })
    }


    const navToDepositSpend = () => {
        navigate('/deposit')
    }

    const changeIncomeStep = () => {
        if(incomeStep == 'Month'){
            setIncomeStep('Year')
        }else{
            setIncomeStep('Month')
        }
    }

    const changeExpensesStep = () => {
        if(expensesStep == 'Month'){
            setExpensesStep('Year')
        }else{
            setExpensesStep('Month')
        }
    }

    const getBalance = async () => {
        var sum = 0
        for(let i=0;i<transactions.length; i++){
            console.log(sum)
            sum += transactions[i].amount;
        }

        setBalance(sum);
    }

    useEffect(()=>{
        getBalance()
    }, [])

  return (
    <div className='page'>
        <div className="dashboard-header">
            <FlexContainer>
                <Card>
                    <h3 className='user-balance-title'>Your balance</h3>
                    <p className='user-balance'>${balance}</p>
                </Card>
            </FlexContainer>
            <FlexContainer>
                <Card func={changeIncomeStep}>
                    <h3 className='user-balance-title'>Income /{incomeStep}</h3>
                    <p className='user-balance income'>$150</p>
                </Card>
                <Card func={changeExpensesStep}>
                    <h3 className='user-balance-title'>Expenses /{expensesStep}</h3>
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
                    <HistoryList />

                </div>
             </FlexContainer>
        </FlexContainer>
    </div>
  )
}

export default Dashboard