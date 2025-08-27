import express from "express"
import {addIncome}  from "../controllers/income.js";

const router = express.Router();

router.post("/add-income", addIncome)

export default router;