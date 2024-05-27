import express from "express";
import cors from 'cors'
import connectDB from "./config/DbConfig.js";
import expenseRouter from "./routes/expenseRouter.js";

const app=express();
app.use(cors())
connectDB()
//middlewares
app.use(express.json());
app.listen(5000,()=>{
    console.log('app listening to port 5000')
})

app.use('/api/expense',expenseRouter)