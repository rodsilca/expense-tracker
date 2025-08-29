import express from "express"
import {addIncome, getIncomes, deleteIncome}  from "../controllers/income.js";
import {addExpense, getExpenses, deleteExpense} from "../controllers/expense.js"

const router = express.Router();

router.post("/add-income", addIncome);
router.get("/get-income", getIncomes);
router.delete("/delete-income/:id", deleteIncome);

router.post("/add-expense", addExpense);
router.get("/get-expense", getExpenses);
router.delete("/delete-expense/:id", deleteExpense);

export default router;