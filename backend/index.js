import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import db from "./db/db.js";
import {readdirSync} from "fs"
import router from "./routes/transactions.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
db();

//rotas
app.use("/api/v1", router);

app.listen(PORT, ()=>{
    console.log("Server has started on port: "+ PORT);
})