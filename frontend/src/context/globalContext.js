import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = "http://localhost:8080/api/v1/";

const globalContext = React.createContext()

export const GlobalProvider = ({children} )=>{
    const [incomes,setIncomes] = useState([]);
    const [expenses,setExpenses] = useState([]);
    const [error,setError] = useState(null);

    //calculate incomes
    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message);     
            })
        getIncomes();
    } 

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-income`);
        setIncomes(response.data);
        console.log(response.data);
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes();
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount;
        })

        return totalIncome;
    }


    //Calculate expense
    const addExpense = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message);     
            })
        getExpenses();
    } 

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`);
        setExpenses(response.data);
        console.log(response.data);
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getExpenses();
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) =>{
            totalExpense = totalExpense + expense.amount;
        })

        return totalExpense;
    }

    const totalBalance = () =>{
        return totalIncome() - totalExpense(); 
    }

    const transactionHistory = () =>{
        const history = [...incomes, ...expenses];
        history.sort((a,b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        return history;
    }

    console.log(totalIncome());
    
    return (
        <globalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory
        }}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(globalContext)
}