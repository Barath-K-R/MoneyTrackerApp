import express from 'express'
import { addExpense, getAllCategories } from '../controllers/expenseController.js'

const expenseRouter=express.Router()

expenseRouter.post('/',addExpense)
expenseRouter.get('/allcategories',getAllCategories)
export default expenseRouter