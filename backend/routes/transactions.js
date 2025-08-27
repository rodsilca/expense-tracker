import express from "express"
import {addIncome, getIncomes, deleteIncome}  from "../controllers/income.js";
import {addExpense, getExpenses, deleteExpense} from "../controllers/expense.js"

const router = express.Router();

router.post("/add-income", addIncome);
router.get("/add-income", getIncomes);
router.delete("/add-income/:id", deleteIncome);

router.post("/add-expense", addExpense);
router.get("/add-expense", getExpenses);
router.delete("/add-expense/:id", deleteExpense);

export default router;