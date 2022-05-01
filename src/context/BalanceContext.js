import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
const initialState = {
    transactions: [
        {id: 1, name: "cookies", amount: -5, date: "23/04/22"},
        {id: 2, name: "BK pay", amount: 150, date: "23/04/22"},
        {id: 3, name: "new phone", amount: -500, date: "26/04/22"},
        {id: 4, name: "BK pay", amount: 300, date: "01/05/22"},
        {id: 5, name: "BK pay", amount: 500, date: "10/05/22"},
        {id: 6, name: "Gift for Gail", amount: -200, date: "24/05/22"}
    ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    return(
        
    <GlobalContext.Provider value={{
            transactions:state.transactions,
            addTransaction
        }}>
        {children}
    </GlobalContext.Provider>
    )
}