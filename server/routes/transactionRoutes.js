import express from 'express';
import { addTransaction ,getTimeLineExpenses} from '../controllers/transactionController.js';
const transactionRouter=express.Router();

transactionRouter.post('/add',addTransaction);
transactionRouter.get('/timelinexpenses',getTimeLineExpenses);

export default transactionRouter;