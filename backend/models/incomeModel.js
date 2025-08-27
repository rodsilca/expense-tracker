import db from "../db/db.js";
import mongoose from "mongoose";


const incomeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount:{
        type: Number,
        required:true,
        maxLength: 20,
        trim:true
    },
    type:{
        type: String,
        required:"income",
    },
    date:{
        type: Number,
        required:true,
        trim:true
    },
    category:{
        type: String,
        required:true,
        trim:true
    },
    description:{
        type: String,
        required:true,
        maxLength: 20,
        trim:true
    },
}, {timestamps: true});

// module.exports = db.model("income", incomeSchema);
const income=  mongoose.model('income', incomeSchema);

export default income