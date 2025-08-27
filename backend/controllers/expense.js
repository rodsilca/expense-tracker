import expense from "../models/expenseModel.js";
// const expenseSchema = require("../models/expenseModel.js");


const addExpense= async (req, res) =>{
    const {title,type,amount,category, description, date} = req.body;

    const expenses =  expense({
        title,
        type,
        amount,
        category,
        description,
        date
    });

    try {
        //
        if(!title || !category || !description || !date){
            return res.status(400).json({message: "All fields are required."});
        }

        if( amount <=0 || isNaN(amount)){
            return res.status(400).json({message: "The amount must be posivitive"});
        }
        
        console.log(expenses);

        await expenses.save();
        res.status(200).json({message: "expense added"});

    } catch (error) {
       res.status(500).json({message: "server error"});
    }
}

const getExpenses = async (req,res) =>{
    try {
        const expenses = await  expense.find().sort({createdAt: -1});
        console.log(expenses);

        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "server error"});
    }
}

const deleteExpense = async (req,res) =>{
    const id = req.params.id;

    expense.findByIdAndDelete(id)
        .then((expenseOne)=>{
            res.status(200).json({message: "expense deleted"});
        })
        .catch((error) =>{
            res.status(500).json({message: "server error"});
        })
}

//build update
// const updateExpense = async (req,res) =>{
//     const {id,title,type,amount,category, description, date} = req.body;

//     const expenses =  expense({
//         title,
//         type,
//         amount,
//         category,
//         description,
//         date
//     });
   

//     try {
//         if(!title || !category || !description || !date){
//             return res.status(400).json({message: "All fields are required."});
//         }

//         if( amount <=0 || isNaN(amount)){
//             return res.status(400).json({message: "The amount must be posivitive"});
//         }

//         expense.findById(id).then((expenseOne) =>{
//             res.status(404).json({message: "User not found"})
//         })

//         res.status(200).json(expenses);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "server error"});
//     }
// }

 export {addExpense, getExpenses, deleteExpense}
