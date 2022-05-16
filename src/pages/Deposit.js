import React, { useContext, useState, useRef } from 'react'
import FlexContainer from '../components/FlexContainer'
import '../css/Deposit.css'
import SelectionButton from '../components/SelectionButton'
import TextInput from '../components/TextInput'
import MainButton from '../components/MainButton'
import NumberInput from '../components/NumberInput'
import { GlobalContext } from '../context/BalanceContext'
import { useNavigate } from 'react-router-dom'
const Deposit = () => {
  const navigate = useNavigate()
  const { addTransaction } = useContext(GlobalContext)
  const [name, setName] = useState();
  const [date, setDate] = useState("2022-03-04");
  const [actionType, setActionType] = useState(true);
  const [amount, setAmount] = useState(0);

  const handleSubmit = async () => {
    var a = amount
    if(actionType == false){
      var a = -amount
    }
    await addTransaction(name, a, date)
    navigate('/dashboard')
    
  }
  return (

    <div className='page'>
        <FlexContainer>
            <SelectionButton positive="Deposit" negative="Expense" actionType={actionType} setActionType={setActionType}/>
        </FlexContainer>

        <FlexContainer>
          <TextInput name={setName}/>
          <NumberInput  amount={setAmount}/>

        </FlexContainer>


        <MainButton func={handleSubmit} text="Enter"/>


    </div>
  )
}

export default Deposit