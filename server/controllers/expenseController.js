import expenseModel from "../models/expenseModel.js";

export const addExpense=async(req,res)=>{
    console.log("adding new expense")
   try {
      const {description,category,date,amount}=req.body;

      const expense=new expenseModel({
        description,
        category,
        date,
        amount
      })
     const newExpense=await expense.save()
     res.status(200).json({message:"expense saved successfully",expense:newExpense})
   } catch (error) {
    console.log(error)
   }
}

export const getAllCategories=async(req,res)=>{
    try {
      const categories=await expenseModel.distinct('category');
      console.log(categories)
      res.status(200).json(categories)
    } catch (error) {
      console.log(error)
    }
}

export const getTimeLineExpenses=async(req,res)=>{
     
  try {
    const { startdate, enddate } = req.query; 
    
    
    const expenses = await expenseModel.find({
      date: { $gte: new Date(startdate), $lte: new Date(enddate) }
    });

    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error fetching timeline expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}