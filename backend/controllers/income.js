import income from "../models/incomeModel.js";
// const incomeSchema = require("../models/incomeModel.js");


const addIncome= async (req, res) =>{
    const {title,amount,category, description, date} = req.body;

    const incomes =  income({
        title,
        amount,
        category,
        description,
        date
    });

    console.log(incomes);
}

 export {addIncome}
