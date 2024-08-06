import express from "express";
import cors from 'cors'
import userRouter from "./routes/userRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
const app=express();
app.use(cors())
//middlewares
app.use(express.json());
app.listen(5000,()=>{
    console.log('app listening to port 5000')
})


app.use('/api/user',userRouter)
app.use('/api/transaction',transactionRouter)
app.use('/api/category',categoryRouter);
