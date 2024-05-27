import mongoose from 'mongoose'

const expenseSchema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        required: true,
    },
},{
    timestamps: true,
})

const expenseModel=mongoose.model('expense',expenseSchema)
export default expenseModel