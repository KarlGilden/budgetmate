import React, {createContext, useEffect, useReducer, useState} from 'react';
import { Navigate } from 'react-router-dom';
import AppReducer from './AppReducer'

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState();
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(()=>{
        getUser()
    }, [])

    const getUser = async () => {
        setLoadingAuth(true)
        await fetch("https://budgetmate-api.herokuapp.com/auth/user",{
        credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            if(data.type){
                setUser(false)
            }else{
                setUser(true)
            }
        })
        setLoadingAuth(false)
    }

    const getTransactions = async () => {
        if(!loadingAuth){
            await fetch("https://budgetmate-api.herokuapp.com/transaction/all",{
                credentials: 'include'
                })
                .then(response => response.json())
                .then(data => {
                    setTransactions(data.sort(function(a,b){return new Date(b.date) - new Date(a.date);}))
                    getBalance(data)
                }).catch(e=>{
                    console.log("not authed")
                })
        }
    }

    const getBalance = async (transactions) => {
        var sum = 0
        for(let i=0;i<transactions.length; i++){
            sum += transactions[i].amount;
        }

        setBalance(sum);
    }

    const addTransaction = async (name, amount, date) => {
        if(!loadingAuth){

            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            await fetch("https://budgetmate-api.herokuapp.com/transaction/add",{
                method: "POST",
                credentials: 'include',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "name": name,
                    "amount": parseInt(amount),
                    "date": new Date(dateTime).toISOString(),
                })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                }).catch(e=>{
                    console.log("not authed")
                })
        }

    }

    const logout = async () => {
        await fetch("https://budgetmate-api.herokuapp.com/auth/logout",{
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response=>response.json())
        .then(data => {
            console.log(data)
        })
    }

    const login = async (email, password) => {
        await fetch("https://budgetmate-api.herokuapp.com/auth/login", {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            if(data.type === undefined){
                window.location.reload();
            }

        })
    }

    return(
        
    <GlobalContext.Provider value={{
            user,
            setUser,
            login,
            logout,
            loadingAuth,
            transactions,
            getTransactions,
            addTransaction,
            balance
        }}>
        {children}
    </GlobalContext.Provider>
    )
}