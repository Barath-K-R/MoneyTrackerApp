import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: baseURL,
});

export const getAllCategories=async()=>api.get('/expense/allcategories')
export const addExpense=async(expense)=>{
    console.log(expense)
    api.post('/expense',expense)}