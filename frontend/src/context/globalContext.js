import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = "http://localhost:8080/api/v1/";

const globalContext = React.createContext()

export const GlobalProvider = ({children} )=>{
    const [incomes,setIncomes] = useState([]);
    const [expenses,setExpenses] = useState([]);
    const [error,setError] = useState(null);

    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message);     
            })
    } 

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-income`);
        setIncomes(response.data);
        console.log(response.data);
    }

    // const deleteIncome = async (id) => {
    //     const res  = await axios.delete(`${BASE_URL}delete-income/${id}`);
    //     getIncomes();
    // }

    // const totalIncome = () => {
    //     let totalIncome = 0;
    //     incomes.forEach((income) =>{
    //         totalIncome = totalIncome + income.amount;
    //     })

    //     return totalIncome;
    // }

    
    
    return (
        <globalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            // deleteIncome
        }}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(globalContext)
}