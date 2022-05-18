import React, {createContext, useEffect, useReducer, useState} from 'react';
import { Navigate } from 'react-router-dom';
import AppReducer from './AppReducer'

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState();
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState("");
    const [monthlyExpenses, setMonthlyExpenses] = useState(0)
    const [monthlyIncome, setMonthlyIncome] = useState(0)



    useEffect(()=>{
        getUser()
    }, [])

    const getUser = async () => {
        await fetch("https://budgetmate-api.herokuapp.com/auth/user",{
        credentials: 'include',
        
        })
        .then(response => response.json())
        .then(data => {
            if(data.type === undefined){
                setUser(true)
            }else{
                setUser(false)
            }
        })
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
                    getMonthlyExpenses(data)
                    getMonthlyIncome(data)
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

    const getMonthlyIncome = async (transactions) => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        console.log(transactions[0].date.split("-"))
        const relTransactions = transactions.filter(t => t.amount > 0 && t.date.split("-")[0] == year.toString() && t.date.split("-")[1] <= 9 ? t.date.split("-")[1] == ("0" + (month +1)) : t.date.split("-")[1] == ("" + (month +1)))
        console.log(relTransactions)
        var sum = 0
        for(let i=0;i<relTransactions.length; i++){
            sum += relTransactions[i].amount;
        }

        setMonthlyIncome(sum);
    }

    const getMonthlyExpenses = async (transactions) => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        console.log(transactions[0].date.split("-"))
        const relTransactions = transactions.filter(t => t.amount < 0 && t.date.split("-")[0] == year.toString() && t.date.split("-")[1] <= 9 ? t.date.split("-")[1] == ("0" + (month +1)) : t.date.split("-")[1] == ("" + (month +1)))
        console.log(relTransactions)
        var sum = 0
        for(let i=0;i<relTransactions.length; i++){
            sum += relTransactions[i].amount;
        }

        setMonthlyExpenses(sum);
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
        setLoadingAuth(true)
        await fetch("https://budgetmate-api.herokuapp.com/auth/login", {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "email":email,
                "password": password
            })
        })
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            if(data.type === undefined){
                if(data.message == 'success'){
                    window.location.reload();
                }else{
                    setError(data.message)
                }
            }

        })
        setLoadingAuth(false)

    }

    const register = async (name, email, password) => {
        setLoadingAuth(true)
        await fetch("https://budgetmate-api.herokuapp.com/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "name":name,
                "email":email,
                "password": password
            })
        })
        .then(response=>{
            if(response.status == 200){
                setIsRegistered(true)
            }
        })
        
        setLoadingAuth(false)

    }

    return(
        
    <GlobalContext.Provider value={{
            user,
            setUser,
            login,
            register,
            logout,
            loadingAuth,
            transactions,
            getTransactions,
            addTransaction,
            balance,
            error,
            monthlyExpenses,
            monthlyIncome,
            isRegistered
            
        }}>
        {children}
    </GlobalContext.Provider>
    )
}