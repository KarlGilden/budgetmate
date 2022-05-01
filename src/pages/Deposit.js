import React from 'react'
import FlexContainer from '../components/FlexContainer'
import '../css/Deposit.css'
import SelectionButton from '../components/SelectionButton'
import TextInput from '../components/TextInput'
import MainButton from '../components/MainButton'
import NumberInput from '../components/NumberInput'
const Deposit = () => {
  return (
    <div className='page'>
        <FlexContainer>
            <SelectionButton text="Deposit"/>
            <SelectionButton text="Spend" /> 
        </FlexContainer>

        <FlexContainer>
          <TextInput/>
          <NumberInput/>
        </FlexContainer>


        <MainButton text="Enter"/>


    </div>
  )
}

export default Deposit